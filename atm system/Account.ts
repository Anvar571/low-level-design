export class Account {
    private account_number: number;
    private balance: number;
    private credit: number;
    private deposite: number;

    constructor(account_number: number, balance: number) {
        this.credit = 0;
        this.deposite = 0;
        this.checkCridetAndDeposit();
    }

    public get get_account_number() {
        return this.account_number;
    }

    public get get_balance() {
        return this.balance;
    }

    cridet() {}

    debit() {}

    private checkCridetAndDeposit() {
        if (this.credit < 0 || this.deposite < 0) throw new Error("Don't should be zero the credit and deposit");
    }
}