import { Account } from "./Account";

export abstract class Transaction {
    protected transactionId: number;
    protected account: Account;
    protected amount: number;

    constructor(data: {transactionId: number, account: Account, amount: number}) {
        this.transactionId = data.transactionId;
        this.account = data.account;
        this.amount = data.amount;
    }

    public abstract execute: () => any;
}

export class WithdrawalTransaction extends Transaction {
    constructor(data: {transactionId: number, account: Account, amount: number}) {
        super(data);
    }

    execute()  {
        console.log("ads");
    }
   
}

// pull qo'yish
export class DepositTransaction extends Transaction {
    constructor(data: {transactionId: number, account: Account, amount: number}) {
        super(data);
    }
    execute()  {
        
    }
}
