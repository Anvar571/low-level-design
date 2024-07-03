import {Ingredient} from "./Ingredient";

export enum CoffeeType {
    COFFEE = 'coffee',
    SUCH = 'such',
    ESPRESSO = 'espresso',
    CAPPUCCINO = 'cappuccino',
    LATTE = 'latte',
}

export enum CoffeeRecipe {
    MILK = 'milk',
    WATER = 'water',
    COFFEE = 'coffee',
}

export type CoffeDetail = {
    type: CoffeeType;
    price: number;
    recipe: Map<Ingredient, number>
}

export class Coffee {
    private type: CoffeeType;
    private price: number;
    private recipe: Map<Ingredient, number>;

    constructor(coffee: CoffeDetail) {
        this.type = coffee.type;
        this.price = coffee.price;
        this.recipe = coffee.recipe;
    }

    public get getType() {
        return this.type;
    }

    public get getPrice() {
        return this.price;
    }

    public get getRecipe() {
        return this.recipe;
    }
}