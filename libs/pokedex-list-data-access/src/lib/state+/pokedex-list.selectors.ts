import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Pokemon } from '../models/pokemon.model';
import { PokedexListCardViewModel } from '../viewModels/pokedex-list-card.viewmodel';
import {
    POKEDEX_PAGE_STORE_KEY,
    PokedexListState,
} from './pokedex-list.reducer';

export const selectPokedexListState = createFeatureSelector<PokedexListState>(
    POKEDEX_PAGE_STORE_KEY
);

export const selectPokemonListCardViewModelById = (id: number) =>
    createSelector(selectPokedexListState, (state: PokedexListState) => {
        const pokemon: Pokemon | undefined = state.entities[id];
        return new PokedexListCardViewModel(
            pokemon?.name ?? '',
            pokemon?.id ?? -1,
            pokemon?.sprites.other?.home.front_default ?? ''
        );
    });
