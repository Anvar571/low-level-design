import { Account } from "./Account";
import { BankingService } from "./BankingService";
import { Card } from "./Card";
import { CashDispenser } from "./CashDispenser";
import { DepositTransaction, WithdrawalTransaction } from "./Transaction";
import { randomUUID} from 'crypto';

// user authentication, balance inquiry, cash withdrawal, and cash deposit
export class ATM {
    private currentUser: Account | null = null;

    constructor(private bankService: BankingService, private cashDispenser: CashDispenser) {}

    public authenticateUser(card: Card, account: Account) {
        const registeredCard = this.bankService.registerCard(card);
        if (!registeredCard) throw new Error('This card is avaliable'); 
        const res = this.bankService.assignCardToAccount(account, card);
        if (!res) throw new Error('This card is avaliable');
        this.currentUser = account;
    }

    public checkBalance() {
        if (this.currentUser) return this.currentUser.get_balance;
        throw new Error('No user authenticated.');
    }

    public withdrawCash(amount: number) {
        const transactionId = this.genereateId();
        
        const withTr = new WithdrawalTransaction({transactionId, account: this.currentUser!, amount});
        this.bankService.processTransaction(withTr);
        this.cashDispenser.dispense(amount);
    }

    public dipositeCash(amount: number) {
        const transactionId = this.genereateId();

        const dipCash = new DepositTransaction({transactionId, account: this.currentUser!, amount});
        this.bankService.processTransaction(dipCash);
        this.cashDispenser.dispense(amount);
    }

    private genereateId(): string {
        return randomUUID();
    }
}