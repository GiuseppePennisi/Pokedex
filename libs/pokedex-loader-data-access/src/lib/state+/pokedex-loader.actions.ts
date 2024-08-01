import { createActionGroup, props } from '@ngrx/store';

const actionKey = 'Pokedex Loader';

export const PokedexLoaderActions = createActionGroup({
    source: actionKey,
    events: {
        'set PokedexLoader state': props<{ isLoading: boolean }>(),
    },
});
