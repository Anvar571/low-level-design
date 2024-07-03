import { Coffee, CoffeeType } from "./Coffee";
import { Ingredient } from "./Ingredient";

export class CoffeeMachine {
    private coffees: Coffee[];

    private static instance: CoffeeMachine;

    private constructor() {}

    public static getInstance() {
        if(this.instance){
            return this.instance;
        }
        return new CoffeeMachine();
    }

    public menu() {
        for(let coffee of this.coffees) {
            console.log(`Coffee name: ${coffee.getType}, price: ${coffee.getPrice}`);
        }
    }

    private initialCoffee() {
        const coffee1 = new Coffee({
            price: 1000,
            type: CoffeeType.CAPPUCCINO,
            recipe: new Ingredient({
                name: "lorem",
                quantity: 10,
            })
        })
    }
}