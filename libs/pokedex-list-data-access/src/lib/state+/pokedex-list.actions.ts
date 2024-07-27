import { createActionGroup, props } from '@ngrx/store';
import { PokedexPage } from '../models';

const actionKey = 'Pokedex List';

export const PokedexListPageActions = createActionGroup({
    source: actionKey,
    events: {
        'get Pokedex Page': props<{ limit?: number; offset?: number }>(),
        'set Pokedex Page': props<{ pokedexPage: PokedexPage }>(),
    },
});

export const { getPokedexPage, setPokedexPage } = PokedexListPageActions;
