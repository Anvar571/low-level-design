import { CoffeeMachine } from "./CofeeMachine";
import { CoffeeType } from "./Coffee";
import { Payment } from "./Payment";

export class CoffeeVendingMachine {
    public static run() {
        const coffeeMachine = CoffeeMachine.getInstance();

        coffeeMachine.menu();

        const espresso = coffeeMachine.selectCoffee(CoffeeType.ESPRESSO);
        if(!espresso) throw new Error("This coffee is not found");
        coffeeMachine.dispenseCoffee(espresso, new Payment({amount: 20000}));
    }
}

CoffeeVendingMachine.run();