export interface Dough {
    flour: number;
    water: number;
    salt: number;
    yeast: number;
    levain: number;
}

export enum DoughRecipe {
    e_standard = 'Standard',
    e_special = 'Spezial',
    e_sour = 'Sauerteig'
}
