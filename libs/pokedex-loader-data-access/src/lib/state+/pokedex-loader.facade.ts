import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { PokedexLoaderActions } from './pokedex-loader.actions';
import { selectIsLoading } from './pokedex-loader.selectors';

/**
 * A facade for managing the state of the pokedex loader.
 * This class is responsible for dispatching actions to update the loading state.
 */
@Injectable({
    providedIn: 'root',
})
export class PokedexLoaderFacade {
    private store = inject(Store);

    public isLoading$ = this.store.select(selectIsLoading);

    /**
     * Sets the loading state of the pokedex.
     *
     * @param isLoading - A boolean indicating whether the pokedex is currently loading.
     *                    When `true`, the pokedex loader should be displayed.
     *                    When `false`, the pokedex loader should be hidden.
     *
     * @returns {void} - This function does not return a value.
     */
    public setPokedexLoaderState(isLoading: boolean): void {
        this.store.dispatch(
            PokedexLoaderActions.setPokedexLoaderState({ isLoading })
        );
    }
}
