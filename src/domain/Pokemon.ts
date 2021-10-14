export interface SpritesInfo {
    back_default: string;   
    front_default: string;
}

export interface Pokemon {
    id: Number;
    name: string;
    sprites: SpritesInfo
}