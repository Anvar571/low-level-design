
export class CashDispenser {
    private dispenserAmount: number = 0;
    constructor(amount: number) {
        this.dispenserAmount = amount;
    }

    public get amount() {
        return this.dispenserAmount;
    }

    public dispense(amount: number): void {
        if (amount > this.dispenserAmount) {
            throw new Error("there is not enough money in the ATM");
        }
        this.dispenserAmount -= amount;
    }
}
