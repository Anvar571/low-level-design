import { Account } from "./Account";
import { ConcurrentHashMap } from "./ConcurrentHashMap";
import { Transaction } from "./Transaction";

// the BankServise class manage bank accounts and process transactions
export class BankingService {
    private transactions: Set<Transaction>;
    private accounts: Map<number, Account>;

    constructor() {
        this.accounts = new Map();
        this.transactions = new Set();
    }

    registerAccount(account: Account) {
        const find = this.accounts.has(account.get_account_number);
        if (!find) {
            return this.accounts.set(account.get_account_number, account);
        }
        return find;
    }

    withDrawaltransaction(transaction: Transaction) {
        this.transactions.add(transaction);
    }

    depositTransaction(transaction: Transaction, account: Account) {
        this.transactions.add(transaction);
    }
}