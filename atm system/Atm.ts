import { Account } from "./Account";
import { BankingService } from "./BankingService";
import { Card } from "./Card";
import { CashDispenser } from "./CashDispenser";
import { WithdrawalTransaction } from "./Transaction";

// user authentication, balance inquiry, cash withdrawal, and cash deposit
export class ATM {
    private currentUser: Account;

    constructor(private bankService: BankingService, private cashDispenser: CashDispenser) {}

    public authenticateUser(card: Card, account: Account) {
        const registeredCard = this.bankService.registerCard(card);
        if (!registeredCard) throw new Error('This card is avaliable'); 
        const res = this.bankService.assignCardToAccount(account, card);
        if (!res) throw new Error('This card is avaliable');
        this.currentUser = account;
    }

    public checkBalance(account: Account) {
        return account.get_balance;
    }

    public withdrawCash(amount: number, account: Account) {
        this.cashDispenser.dispense(amount);
        const withTr = new WithdrawalTransaction({transactionId: 1, account, amount});

        withTr.execute();
    }

    public dipositeCash() {

    }
}