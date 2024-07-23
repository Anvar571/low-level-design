export abstract class Transaction {
    buy: (value: number) => any;
    sell: (value: number) => any;
}

export class WithdrawalTransaction implements Transaction {
    buy() {
        
    }
    sell() {}
}

export class DepositTransaction implements Transaction {
    buy() {}
    sell() {}
}
