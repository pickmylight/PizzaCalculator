export interface Dough {
    flour: number;
    water: number;
    salt: number;
    yeast: number;
    levain: number;
}

export enum DoughRecipe {
    e_standard = 0,
    e_sour = 1
}
