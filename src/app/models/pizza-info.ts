import { DoughRecipe } from "./pizza-dough";

export interface PizzaInfo {
    pizzaNumber: number;
    pizzaSize: number;
    pizzaWater: number;
    pizzaDough: DoughRecipe;
}
