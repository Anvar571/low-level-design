
export class Account {
    private account_number: number;
    private balance: number;

    constructor(account_number: number, balance: number) {
        this.account_number = account_number;
        this.balance = balance;
    }

    public get get_account_number() {
        return this.account_number;
    }

    public get get_balance() {
        return this.balance;
    }

    cridet(sum: number) {

    }

    debit(sum: number) {
        this.balance += sum;
    }
}