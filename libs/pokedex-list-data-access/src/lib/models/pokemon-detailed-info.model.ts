import { PropertyInfoLink } from './pokemon-property-info-link';

export interface PokemonDetailedInfo {
    abilities: Ability[];
    base_experience: number;
    cries: Cries;
    forms: PropertyInfoLink[];
    game_indices: PropertyInfoLink[];
    height: number;
    held_items: PropertyInfoLink[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Move[];
    name: string;
    order: number;
    past_abilities: PropertyInfoLink[];
    past_types: PropertyInfoLink[];
    species: PropertyInfoLink;
    sprites: Sprites;
    stats: Stat[];
    types: Type[];
    weight: number;
}

export interface Ability {
    ability: PropertyInfoLink;
    is_hidden: boolean;
    slot: number;
}

export interface Cries {
    latest: string;
    legacy: null;
}

export interface Move {
    move: PropertyInfoLink;
    version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
    level_learned_at: number;
    move_learn_method: PropertyInfoLink;
    version_group: PropertyInfoLink;
}

export interface GenerationV {
    'black-white': Sprites;
}

export interface GenerationIv {
    'diamond-pearl': Sprites;
    'heartgold-soulsilver': Sprites;
    platinum: Sprites;
}

export interface Versions {
    'generation-i': GenerationI;
    'generation-ii': GenerationIi;
    'generation-iii': GenerationIii;
    'generation-iv': GenerationIv;
    'generation-v': GenerationV;
    'generation-vi': { [key: string]: Home };
    'generation-vii': GenerationVii;
    'generation-viii': GenerationViii;
}

export interface Other {
    dream_world: DreamWorld;
    home: Home;
    'official-artwork': OfficialArtwork;
    showdown: Sprites;
}

export interface Sprites {
    back_default: null;
    back_female: null;
    back_shiny: null;
    back_shiny_female: null;
    front_default: null | string;
    front_female: null;
    front_shiny: null | string;
    front_shiny_female: null;
    other?: Other;
    versions?: Versions;
    animated?: Sprites;
}

export interface GenerationI {
    'red-blue': RedBlue;
    yellow: RedBlue;
}

export interface RedBlue {
    back_default: null;
    back_gray: null;
    back_transparent: null;
    front_default: null;
    front_gray: null;
    front_transparent: null;
}

export interface GenerationIi {
    crystal: Crystal;
    gold: Gold;
    silver: Gold;
}

export interface Crystal {
    back_default: null;
    back_shiny: null;
    back_shiny_transparent: null;
    back_transparent: null;
    front_default: null;
    front_shiny: null;
    front_shiny_transparent: null;
    front_transparent: null;
}

export interface Gold {
    back_default: null;
    back_shiny: null;
    front_default: null;
    front_shiny: null;
    front_transparent?: null;
}

export interface GenerationIii {
    emerald: OfficialArtwork;
    'firered-leafgreen': Gold;
    'ruby-sapphire': Gold;
}

export interface OfficialArtwork {
    front_default: null | string;
    front_shiny: null | string;
}

export interface Home {
    front_default: null | string;
    front_female: null;
    front_shiny: null | string;
    front_shiny_female: null;
}

export interface GenerationVii {
    icons: DreamWorld;
    'ultra-sun-ultra-moon': Home;
}

export interface DreamWorld {
    front_default: null;
    front_female: null;
}

export interface GenerationViii {
    icons: DreamWorld;
}

export interface Stat {
    base_stat: number;
    effort: number;
    stat: PropertyInfoLink;
}

export interface Type {
    slot: number;
    type: PropertyInfoLink;
}
