import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
    POKEDEX_LOADER_STORE_KEY,
    PokedexLoaderState,
} from './pokedex-loader.reducer';

export const selectLoaderState = createFeatureSelector<PokedexLoaderState>(
    POKEDEX_LOADER_STORE_KEY
);

export const selectIsLoading = createSelector(
    selectLoaderState,
    (state: PokedexLoaderState) => state.isLoading
);
