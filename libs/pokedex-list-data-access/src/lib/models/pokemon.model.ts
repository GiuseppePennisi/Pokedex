import { PokemonDetailedInfo } from './pokemon-detailed-info.model';
import { PokemonSpecies } from './pokemon-species.model';

export type Pokemon = PokemonDetailedInfo & PokemonSpecies;
