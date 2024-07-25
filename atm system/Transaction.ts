export abstract class Transaction {
    payment: (x?: number) => number;
}

// bank hisobidan pull olish
export class WithdrawalTransaction implements Transaction {
    payment: (x?: number | undefined) => number;
}

// pull qo'yish
export class DepositTransaction implements Transaction {
    payment: (x?: number | undefined) => number;
}
