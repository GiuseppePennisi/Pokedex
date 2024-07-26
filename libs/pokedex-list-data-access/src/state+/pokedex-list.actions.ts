import { createActionGroup, props } from '@ngrx/store';
import { PokedexPage } from './../models/pokedex-page.model';

const actionKey = 'Pokedex List';

/* export const getPokedexPage = createAction(
    `[${actionKey}] Get Pokedex page`,
    props<{ limit?: number; offset?: number }>()
);

export const setPokedexPage = createAction(
    `[${actionKey}] Set Pokedex page`,
    props<{ pokedexPage: PokedexPage }>()
); */

export const PokedexListPageActions = createActionGroup({
    source: actionKey,
    events: {
        getPokedexPage: props<{ limit?: number; offset?: number }>(),
        setPokedexPage: props<{ pokedexPage: PokedexPage }>(),
    },
});

export const { getPokedexPage, setPokedexPage } = PokedexListPageActions;
