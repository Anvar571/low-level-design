import { Account } from "./Account";

export abstract class Transaction {
    protected transactionId: string;
    protected account: Account;
    protected amount: number;

    constructor(data: {transactionId: string, account: Account, amount: number}) {
        this.transactionId = data.transactionId;
        this.account = data.account;
        this.amount = data.amount;
    }

    public abstract execute(): any;
}

export class WithdrawalTransaction extends Transaction {
    constructor(data: {transactionId: string, account: Account, amount: number}) {
        super(data);
    }

    public execute(): any {
        this.account.cridet(this.amount);
    }
}

// pull qo'yish
export class DepositTransaction extends Transaction {
    constructor(data: {transactionId: string, account: Account, amount: number}) {
        super(data);
    }
    
    public execute(): any  {
        this.account.debit(this.amount);
    }
}
