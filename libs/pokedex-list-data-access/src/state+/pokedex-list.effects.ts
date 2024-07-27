import { inject } from '@angular/core';
import { Actions, createEffect, FunctionalEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
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

export const pokedexListEffects: Record<string, FunctionalEffect> = {
    getPokedexPage$,
};
