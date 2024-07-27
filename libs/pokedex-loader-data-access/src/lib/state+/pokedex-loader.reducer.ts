import { createReducer, on } from '@ngrx/store';
import { PokedexLoaderActions } from './pokedex-loader.actions';

export const POKEDEX_LOADER_STORE_KEY = 'pokedexLoader';

export interface PokedexLoaderState {
    isLoading: boolean;
}

export const initialState: PokedexLoaderState = {
    isLoading: true,
};

export const pokedexLoaderReducer = createReducer(
    initialState,
    on(
        PokedexLoaderActions.setPokedexLoaderState,
        (state, { isLoading }): PokedexLoaderState => ({
            ...state,
            isLoading,
        })
    )
);
