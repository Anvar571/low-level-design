import { Account } from "./Account";
import { ConcurrentHashMap } from "./ConcurrentHashMap";
import { Transaction } from "./Transaction";

// the BankServise class manage bank accounts and process transactions
export class BankingService {
    private transactions: Transaction[];
    private accounts: ConcurrentHashMap<string, Promise<void>>;

    constructor() {
        this.accounts = new ConcurrentHashMap();
        this.transactions = [];
    }

    
}