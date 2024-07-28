import { inject } from '@angular/core';
import { Actions, createEffect, FunctionalEffect, ofType } from '@ngrx/effects';
import { PokedexLoaderFacade } from '@pokedex/pokedex-loader-data-access';
import { exhaustMap, forkJoin, map, tap } from 'rxjs';
import { PokeApiRestService } from './../services/pokeapi-rest-service';

import { catchOperatorError } from '@pokedex/pokedex-utils';
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

export const getPokemonSpeciesAfterSetPokedexPage$ = createEffect(
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
                        pokeApiRestService.getPokemonSpecies(id)
                    )
                ).pipe(
                    map((pokemonSpecies) =>
                        PokemonListActions.setMultiplePokemonSpecies({
                            pokemonSpecies,
                        })
                    )
                )
            )
        );
    },
    { functional: true }
);

export const getPokemonSpecies$ = createEffect(
    (
        actions$ = inject(Actions),
        pokeApiRestService = inject(PokeApiRestService)
    ) => {
        return actions$.pipe(
            ofType(PokemonListActions.getPokemonSpecies),
            exhaustMap(({ id }) =>
                pokeApiRestService.getPokemonSpecies(id).pipe(
                    map((pokemonSpecies) =>
                        PokemonListActions.setPokemonSpecies({
                            pokemonSpecies,
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
    getPokemonSpecies$,
    setLoaderWithGetPokedexPage$,
    setLoaderWithSetPokedexPage$,
    getPokemonSpeciesAfterSetPokedexPage$,
};
