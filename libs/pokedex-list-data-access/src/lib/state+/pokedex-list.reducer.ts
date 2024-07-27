import { createReducer, on } from '@ngrx/store';
import { PokedexPage } from '../models';
import * as PokedexListActions from './pokedex-list.actions';

export const POKEDEX_PAGE_STORE_KEY = 'pokedexListPage';
// Keep track of already fetched results to avoid duplicates
const existingResultsSet = new Set<string>();

export interface PokedexListState {
    pokedexPage?: PokedexPage;
}

export const initialPokedexListState: PokedexListState = {};

export const pokedexListPageReducer = createReducer(
    initialPokedexListState,
    on(PokedexListActions.setPokedexPage, (state, { pokedexPage }) => {
        // Add new results to the existing results set to avoid duplicates
        state.pokedexPage?.results.forEach((result) =>
            existingResultsSet.add(result.name)
        );

        // Filter out the new results from the new page and add them to the existing results set
        const filteredNewResults = pokedexPage.results.filter(
            (newResult) => !existingResultsSet.has(newResult.name)
        );

        return {
            ...state,
            pokedexPage: {
                ...pokedexPage,
                results: [
                    ...(state.pokedexPage?.results ?? []),
                    ...filteredNewResults,
                ],
            },
        };
    })
);
