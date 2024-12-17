import axios from "axios";

const base = "https://pokeapi.co/api/v2/" as const;

export async function getAllPokemons(
    { limit = 10, offset = 0 }: GetAllPokemonPayload,
): Promise<GetAllPokemonResponse | undefined> {
    try {
        const { data } = await axios.get(
            `${base}pokemon?limit=${limit}&offset=${offset}`,
        );
        return data as GetAllPokemonResponse;
    } catch (err) {
        console.log(err);
    }
}

export async function getPokenByName(name: string) {
    try {
        const { data } = await axios.get(
            `${base}pokemon/${name}`,
        );
        return data as GetPokenByNameResponse;
    } catch (err) {
        console.log(err);
    }
}

type GetAllPokemonPayload = {
    offset?: number;
    limit?: number;
};

type GetAllPokemonResponse = {
    count: number;
    next: string | null;
    previous: string | null;
    results: { name: string; url: string }[];
};

type GetPokenByNameResponse = {
    abilities: Array<{
        ability: {
            name: string;
            url: string;
        };
        is_hidden: boolean;
        slot: number;
    }>;
    base_experience: number;
    cries: {
        latest: string;
        legacy: string;
    };
    forms: Array<{
        name: string;
        url: string;
    }>;
    game_indices: Array<{
        game_index: number;
        version: {
            name: string;
            url: string;
        };
    }>;
    height: number;
    held_items: Array<{
        item: {
            name: string;
            url: string;
        };
        version_details: Array<{
            rarity: number;
            version: {
                name: string;
                url: string;
            };
        }>;
    }>;
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Array<{
        move: {
            name: string;
            url: string;
        };
        version_group_details: Array<{
            level_learned_at: number;
            move_learn_method: {
                name: string;
                url: string;
            };
            version_group: {
                name: string;
                url: string;
            };
        }>;
    }>;
    name: string;
    order: number;
    past_abilities: Array<any>;
    past_types: Array<any>;
    species: {
        name: string;
        url: string;
    };
    sprites: {
        back_default: string;
        back_female: any;
        back_shiny: string;
        back_shiny_female: any;
        front_default: string;
        front_female: any;
        front_shiny: string;
        front_shiny_female: any;
        other: {
            dream_world: {
                front_default: string;
                front_female: any;
            };
            home: {
                front_default: string;
                front_female: any;
                front_shiny: string;
                front_shiny_female: any;
            };
            "official-artwork": {
                front_default: string;
                front_shiny: string;
            };
            showdown: {
                back_default: string;
                back_female: any;
                back_shiny: string;
                back_shiny_female: any;
                front_default: string;
                front_female: any;
                front_shiny: string;
                front_shiny_female: any;
            };
        };
        versions: {
            "generation-i": {
                "red-blue": {
                    back_default: string;
                    back_gray: string;
                    back_transparent: string;
                    front_default: string;
                    front_gray: string;
                    front_transparent: string;
                };
                yellow: {
                    back_default: string;
                    back_gray: string;
                    back_transparent: string;
                    front_default: string;
                    front_gray: string;
                    front_transparent: string;
                };
            };
            "generation-ii": {
                crystal: {
                    back_default: string;
                    back_shiny: string;
                    back_shiny_transparent: string;
                    back_transparent: string;
                    front_default: string;
                    front_shiny: string;
                    front_shiny_transparent: string;
                    front_transparent: string;
                };
                gold: {
                    back_default: string;
                    back_shiny: string;
                    front_default: string;
                    front_shiny: string;
                    front_transparent: string;
                };
                silver: {
                    back_default: string;
                    back_shiny: string;
                    front_default: string;
                    front_shiny: string;
                    front_transparent: string;
                };
            };
            "generation-iii": {
                emerald: {
                    front_default: string;
                    front_shiny: string;
                };
                "firered-leafgreen": {
                    back_default: string;
                    back_shiny: string;
                    front_default: string;
                    front_shiny: string;
                };
                "ruby-sapphire": {
                    back_default: string;
                    back_shiny: string;
                    front_default: string;
                    front_shiny: string;
                };
            };
            "generation-iv": {
                "diamond-pearl": {
                    back_default: string;
                    back_female: any;
                    back_shiny: string;
                    back_shiny_female: any;
                    front_default: string;
                    front_female: any;
                    front_shiny: string;
                    front_shiny_female: any;
                };
                "heartgold-soulsilver": {
                    back_default: string;
                    back_female: any;
                    back_shiny: string;
                    back_shiny_female: any;
                    front_default: string;
                    front_female: any;
                    front_shiny: string;
                    front_shiny_female: any;
                };
                platinum: {
                    back_default: string;
                    back_female: any;
                    back_shiny: string;
                    back_shiny_female: any;
                    front_default: string;
                    front_female: any;
                    front_shiny: string;
                    front_shiny_female: any;
                };
            };
            "generation-v": {
                "black-white": {
                    animated: {
                        back_default: string;
                        back_female: any;
                        back_shiny: string;
                        back_shiny_female: any;
                        front_default: string;
                        front_female: any;
                        front_shiny: string;
                        front_shiny_female: any;
                    };
                    back_default: string;
                    back_female: any;
                    back_shiny: string;
                    back_shiny_female: any;
                    front_default: string;
                    front_female: any;
                    front_shiny: string;
                    front_shiny_female: any;
                };
            };
            "generation-vi": {
                "omegaruby-alphasapphire": {
                    front_default: string;
                    front_female: any;
                    front_shiny: string;
                    front_shiny_female: any;
                };
                "x-y": {
                    front_default: string;
                    front_female: any;
                    front_shiny: string;
                    front_shiny_female: any;
                };
            };
            "generation-vii": {
                icons: {
                    front_default: string;
                    front_female: any;
                };
                "ultra-sun-ultra-moon": {
                    front_default: string;
                    front_female: any;
                    front_shiny: string;
                    front_shiny_female: any;
                };
            };
            "generation-viii": {
                icons: {
                    front_default: string;
                    front_female: any;
                };
            };
        };
    };
    stats: Array<{
        base_stat: number;
        effort: number;
        stat: {
            name: string;
            url: string;
        };
    }>;
    types: Array<{
        slot: number;
        type: {
            name: string;
            url: string;
        };
    }>;
    weight: number;
};
