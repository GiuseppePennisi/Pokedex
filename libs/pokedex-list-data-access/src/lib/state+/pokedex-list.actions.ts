import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { PokedexPage, PokemonSpecies } from '../models';

const actionKey = 'Pokedex List';

export const PokedexListPageActions = createActionGroup({
    source: actionKey,
    events: {
        'get Pokedex Page': props<{ limit?: number; offset?: number }>(),
        'set Pokedex Page': props<{ pokedexPage: PokedexPage }>(),
        'get Pokemon Species': props<{ id: number }>(),
        'set Pokemon Species': props<{ pokemonSpecies: PokemonSpecies }>(),
        'set Multiple Pokemon Species': props<{
            pokemonSpecies: PokemonSpecies[];
        }>(),
        'set Pokedex Error': emptyProps(),
    },
});

export const {
    getPokedexPage,
    setPokedexPage,
    getPokemonSpecies,
    setPokemonSpecies,
    setMultiplePokemonSpecies,
    setPokedexError,
} = PokedexListPageActions;
