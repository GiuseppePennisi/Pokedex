import { inject } from '@angular/core';
import { Actions, createEffect, FunctionalEffect, ofType } from '@ngrx/effects';
import { PokedexLoaderFacade } from '@pokedex/pokedex-loader-data-access';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';

import { PokeApiRestService } from '../services';
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
                    //TODO handle error here with appropriate error handling action
                    catchError((error) =>
                        of({
                            type: '[PokedexList] Error fetching pokedex page',
                            error,
                        })
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
    setLoaderWithGetPokedexPage$,
    setLoaderWithSetPokedexPage$,
};
