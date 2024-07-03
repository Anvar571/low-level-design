import { Coffee, CoffeeRecipe, CoffeeType } from "./Coffee";
import { Ingredient } from "./Ingredient";
import { Payment } from "./Payment";

export class CoffeeMachine {
    private coffees: Coffee[] = [];
    private ingredients: Map<CoffeeRecipe, Ingredient> = new Map();

    private static instance: CoffeeMachine;

    private constructor() {
        this.initializeIngredients();
        this.initializeCoffeeMenu();
    }

    public static getInstance() {
        if(this.instance){
            return this.instance;
        }
        return new CoffeeMachine();
    }

    public menu(): void {
        for(let coffee of this.coffees) {
            console.log(`Coffee name: ${coffee.getType}, price: ${coffee.getPrice}`);
        }
    }

    public selectCoffee(coffeeName: CoffeeType): Coffee | null {
        for (const coffee of this.coffees) {
            if (coffee.getType.toLowerCase() === coffeeName.toLowerCase()) {
                return coffee;
            }
        }
        return null;
    }

    private initializeCoffeeMenu(): void {
        const espressoRecipe = this.setRecipe([
            {
                key: this.ingredients.get(CoffeeRecipe.COFFEE)!,
                quantity: 1,
            },
            {
                key: this.ingredients.get(CoffeeRecipe.WATER)!,
                quantity: 1,
            }
        ]);
        this.coffees.push(new Coffee({
            type: CoffeeType.ESPRESSO, 
            price: 4000,
            recipe: espressoRecipe
        }));

        const cappuccinoRecipe = this.setRecipe([
            {
                key: this.ingredients.get(CoffeeRecipe.MILK)!,
                quantity: 2,
            },
            {
                key: this.ingredients.get(CoffeeRecipe.COFFEE)!,
                quantity: 1,
            },
        ]);
        this.coffees.push(new Coffee({
            type: CoffeeType.CAPPUCCINO, 
            price: 10000,
            recipe: cappuccinoRecipe
        }));

        const latteRecipe = this.setRecipe([
            {
                key: this.ingredients.get(CoffeeRecipe.MILK)!,
                quantity: 2,
            },
            {
                key: this.ingredients.get(CoffeeRecipe.COFFEE)!,
                quantity: 1,
            },
        ]);
        this.coffees.push(new Coffee({
            type: CoffeeType.LATTE, 
            price: 5000,
            recipe: latteRecipe
        }));
    }

    private setRecipe(recipe: {key: Ingredient, quantity: number}[]) {
        const recipeMap: Map<Ingredient, number> = new Map<Ingredient, number>();
        for (let rp of recipe) {
            recipeMap.set(rp.key, rp.quantity);
        }
        return recipeMap;
    }

    private initializeIngredients(): void {
        this.ingredients.set(CoffeeRecipe.COFFEE, new Ingredient({
            name: CoffeeRecipe.COFFEE,
            quantity: 10,
        }));
        this.ingredients.set(CoffeeRecipe.WATER, new Ingredient({
            name: CoffeeRecipe.WATER,
            quantity: 10,
        }));
        this.ingredients.set(CoffeeRecipe.MILK, new Ingredient({
            name: CoffeeRecipe.MILK,
            quantity: 10,
        }));
    }

    public dispenseCoffee(coffee: Coffee, payment: Payment): void {
        if (payment.amount >= coffee.getPrice) {
            if (this.hasEnoughIngredients(coffee)) {
                this.updateIngredients(coffee);
                console.log(`Dispensing ${coffee.getType}...`);
                const change = payment.amount - coffee.getPrice;
                if (change > 0) {
                    console.log(`Please collect your change: $${change}`);
                }
            } else {
                console.log(`Insufficient ingredients to make ${coffee.getType}`);
            }
        } else {
            console.log(`Insufficient payment for ${coffee.getType}`);
        }
        console.log(this.ingredients, 'ingre');
        
    }

    private hasEnoughIngredients(coffee: Coffee): boolean {
        for (const [ingredient, requiredQuantity] of coffee.getRecipe) {
            if (ingredient.quantity < requiredQuantity) {
                return false;
            }
        }
        return true;
    }

    private updateIngredients(coffee: Coffee): void {
        for (const [ingredient, requiredQuantity] of coffee.getRecipe) {
            ingredient.updateQuantity(-requiredQuantity);
            if (ingredient.quantity < 3) {
                console.log(`Low inventory alert: ${ingredient.name}`);
            }
        }
    }
}