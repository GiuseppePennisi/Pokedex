export interface PokemonSpecies {
    base_happiness: number;
    capture_rate: number;
    color: PropertyInfoLink;
    egg_groups: PropertyInfoLink[];
    evolution_chain: EvolutionChain;
    evolves_from_species: PropertyInfoLink;
    flavor_text_entries: FlavorTextEntry[];
    form_descriptions: FormDescription[];
    forms_switchable: boolean;
    gender_rate: number;
    genera: Genus[];
    generation: PropertyInfoLink;
    growth_rate: PropertyInfoLink;
    habitat: PropertyInfoLink;
    has_gender_differences: boolean;
    hatch_counter: number;
    id: number;
    is_baby: boolean;
    is_legendary: boolean;
    is_mythical: boolean;
    name: string;
    names: Name[];
    order: number;
    pal_park_encounters: PalParkEncounter[];
    pokedex_numbers: PokedexNumber[];
    shape: PropertyInfoLink;
    varieties: Variety[];
}

export interface EvolutionChain {
    url: string;
}

export interface FlavorTextEntry {
    flavor_text: string;
    language: PropertyInfoLink;
    version: PropertyInfoLink;
}

export interface FormDescription {
    description: string;
    language: PropertyInfoLink;
}

export interface Genus {
    genus: string;
    language: PropertyInfoLink;
}

export interface Name {
    language: PropertyInfoLink;
    name: string;
}

export interface PalParkEncounter {
    area: PropertyInfoLink;
    base_score: number;
    rate: number;
}

export interface PokedexNumber {
    entry_number: number;
    pokedex: PropertyInfoLink;
}

export interface PropertyInfoLink {
    name: string;
    url: string;
}

export interface Variety {
    is_default: boolean;
    pokemon: PropertyInfoLink;
}
