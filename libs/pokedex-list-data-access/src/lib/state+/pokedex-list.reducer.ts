import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { PokedexPage } from '../models';
import { Pokemon } from '../models/pokemon.model';
import * as PokedexListActions from './pokedex-list.actions';

// Reminder: selectId is not implemented because Pokemon has id property. https://ngrx.io/guide/entity/adapter

export const POKEDEX_PAGE_STORE_KEY = 'pokedexListPage';
// Keep track of already fetched results to avoid duplicates
const existingResultsSet = new Set<string>();

export const adapter: EntityAdapter<Pokemon> = createEntityAdapter<Pokemon>({
    sortComparer: sortById,
});
export interface PokedexListState extends EntityState<Pokemon> {
    pokedexPage?: PokedexPage;
}

export const initialPokedexListState: PokedexListState =
    adapter.getInitialState({
        ids: [],
        entities: {},
    });

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
    }),
    on(PokedexListActions.setMultiplePokemon, (state, { pokemons }) => {
        return adapter.upsertMany(pokemons, state);
    })
);

/**
 * A function to sort an array of Pokemon objects by their id property in ascending order.
 *
 * @param a - The first Pokemon object to compare.
 * @param b - The second Pokemon object to compare.
 *
 * @returns A negative number if `a.id` is less than `b.id`, a positive number if `a.id` is greater than `b.id`,
 *          or 0 if `a.id` and `b.id` are equal.
 */
export function sortById(a: Pokemon, b: Pokemon): number {
    return a.id - b.id;
}
