import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { PokedexPage } from '../models';
import { Pokemon } from '../models/pokemon.model';

const actionKey = 'Pokedex List';

export const PokedexListPageActions = createActionGroup({
    source: actionKey,
    events: {
        'get Pokedex Page': props<{ limit?: number; offset?: number }>(),
        'set Pokedex Page': props<{ pokedexPage: PokedexPage }>(),
        'get Pokemon': props<{ id: number }>(),
        'set Pokemon': props<{ pokemon: Pokemon }>(),
        'set Multiple Pokemon': props<{
            pokemons: Pokemon[];
        }>(),
        'set Pokedex Error': emptyProps(),
    },
});

export const {
    getPokedexPage,
    setPokedexPage,
    getPokemon,
    setPokemon,
    setMultiplePokemon,
    setPokedexError,
} = PokedexListPageActions;
