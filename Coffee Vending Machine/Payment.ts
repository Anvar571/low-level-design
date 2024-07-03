export interface PaymentModule {
    amount: number
}

export class Payment {
    constructor(private payment: PaymentModule) {}

    public get amount() {
        return this.payment.amount;
    }
}