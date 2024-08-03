
export class Account {
    private account_number: string;
    private balance: number;

    constructor(account_number: string, balance: number) {
        this.account_number = account_number;
        this.balance = balance;
    }

    public get get_account_number() {
        return this.account_number;
    }

    public get get_balance() {
        return this.balance;
    }

    public cridet(sum: number) {
        this.balance += sum;
    }

    public debit(sum: number) {
        this.balance -= sum;
    }
}