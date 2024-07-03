export interface IngredientModel {
    name: string;
    quantity: number;
}

export class Ingredient {
    constructor(private ingredient: IngredientModel) {}

    public get name() {
        return this.ingredient.name;
    }

    public get quantity() {
        return this.ingredient.quantity;
    }

    public updateQuantity(quantity: number) {
        this.ingredient.quantity += quantity;
    }
}