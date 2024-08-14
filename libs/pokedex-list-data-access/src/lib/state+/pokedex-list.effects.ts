import { inject } from '@angular/core';
import { Actions, createEffect, FunctionalEffect, ofType } from '@ngrx/effects';
import { PokedexLoaderFacade } from '@pokedex/pokedex-loader-data-access';
import { exhaustMap, forkJoin, map, switchMap, tap } from 'rxjs';
import { PokeApiRestService } from './../services/pokeapi-rest-service';

import { catchOperatorError } from '@pokedex/pokedex-utils';
import { PokemonSpecies } from '../models';
import { PokemonDetailedInfo } from '../models/pokemon-detailed-info.model';
import { Pokemon } from '../models/pokemon.model';
import * as PokemonListActions from './pokedex-list.actions';

export const getPokedexPage$ = createEffect(
    (
        actions$ = inject(Actions),
        pokeApiRestService = inject(PokeApiRestService)
    ) => {
        return actions$.pipe(
            ofType(PokemonListActions.getPokedexPage),
            exhaustMap(({ limit, offset }) =>
                pokeApiRestService.getPokedexPage(limit, offset).pipe(
                    map((pokedexPage) =>
                        PokemonListActions.setPokedexPage({
                            pokedexPage,
                        })
                    ),
                    catchOperatorError((error) =>
                        PokemonListActions.setPokedexError()
                    )
                )
            )
        );
    },
    { functional: true }
);

export const getPokemonAfterSetPokedexPage$ = createEffect(
    (
        actions$ = inject(Actions),
        pokeApiRestService = inject(PokeApiRestService)
    ) => {
        return actions$.pipe(
            ofType(PokemonListActions.setPokedexPage),
            map((payload) =>
                payload.pokedexPage.results
                    .map((result) => {
                        const parts = result.url.split('/').filter(Boolean);
                        return Number(parts[parts.length - 1]);
                    })
                    .filter((id) => !isNaN(id))
            ),
            exhaustMap((pokemonIds) =>
                forkJoin(
                    pokemonIds.map((id) =>
                        fetchAndCombinePokemonData(id, pokeApiRestService)
                    )
                ).pipe(
                    map((pokemons) =>
                        PokemonListActions.setMultiplePokemon({
                            pokemons,
                        })
                    ),
                    catchOperatorError((error) =>
                        PokemonListActions.setPokedexError()
                    )
                )
            )
        );
    },
    { functional: true }
);

export const getPokemon$ = createEffect(
    (
        actions$ = inject(Actions),
        pokeApiRestService = inject(PokeApiRestService)
    ) => {
        return actions$.pipe(
            ofType(PokemonListActions.getPokemon),
            exhaustMap(({ id }) =>
                fetchAndCombinePokemonData(id, pokeApiRestService).pipe(
                    map((pokemon) =>
                        PokemonListActions.setPokemon({
                            pokemon,
                        })
                    ),
                    catchOperatorError((error) =>
                        PokemonListActions.setPokedexError()
                    )
                )
            )
        );
    },
    { functional: true }
);

export const setLoaderWithGetPokedexPage$ = createEffect(
    (
        actions$ = inject(Actions),
        pokedexLoaderFacade = inject(PokedexLoaderFacade)
    ) => {
        return actions$.pipe(
            ofType(PokemonListActions.getPokedexPage),
            tap(() => pokedexLoaderFacade.setPokedexLoaderState(true))
        );
    },
    { functional: true, dispatch: false }
);

export const setLoaderWithSetPokedexPage$ = createEffect(
    (
        actions$ = inject(Actions),
        pokedexLoaderFacade = inject(PokedexLoaderFacade)
    ) => {
        return actions$.pipe(
            ofType(PokemonListActions.setPokedexPage),
            tap(() => pokedexLoaderFacade.setPokedexLoaderState(false))
        );
    },
    { functional: true, dispatch: false }
);

export const pokedexListEffects: Record<string, FunctionalEffect> = {
    getPokedexPage$,
    getPokemon$,
    setLoaderWithGetPokedexPage$,
    setLoaderWithSetPokedexPage$,
    getPokemonAfterSetPokedexPage$,
};

// Funzione per combinare PokemonDetailedInfo e PokemonSpecies
function fetchAndCombinePokemonData(
    id: number,
    pokeApiRestService: PokeApiRestService
) {
    return pokeApiRestService.getPokemonSpecies(id).pipe(
        switchMap((pokemonSpecies: PokemonSpecies) =>
            pokeApiRestService.getPokemonDetailedInfo(id).pipe(
                map<PokemonDetailedInfo, Pokemon>(
                    (pokemonDetailedInfo: PokemonDetailedInfo) => ({
                        ...pokemonDetailedInfo,
                        ...pokemonSpecies,
                    })
                )
            )
        )
    );
}
