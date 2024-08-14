import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as PokedexListActions from './pokedex-list.actions';
import { selectPokemonListCardViewModelById } from './pokedex-list.selectors';

@Injectable({
    providedIn: 'root',
})
export class PokemonListFacade {
    private store = inject(Store);

    public selectPokemonListCardViewModelById$ = (id: number) =>
        this.store.select(selectPokemonListCardViewModelById(id));

    /**
     * This function dispatches an action to fetch a page of Pokédex data from the store.
     *
     * @param limit - The maximum number of Pokémon to retrieve per page. If not provided, the default limit is used.
     * @param offset - The number of Pokémon to skip before starting to retrieve the page. If not provided, the default offset is used.
     *
     * @returns {void} - This function does not return any value.
     */
    public getPokedexPage(limit?: number, offset?: number): void {
        this.store.dispatch(
            PokedexListActions.getPokedexPage({ limit, offset })
        );
    }
}
