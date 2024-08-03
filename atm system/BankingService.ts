import { Account } from "./Account";
import { Card } from "./Card";
import { Transaction } from "./Transaction";

// the BankServise class manage bank accounts and process transactions
export class BankingService {
    private accounts: Map<string, Account>;
    private accountCards: Map<Card, Account>;
    private cards: Map<string, Card>;

    constructor() {
        this.accounts = new Map();
        this.accountCards = new Map();
        this.cards = new Map();
    }

    public registerAccount(account: Account): boolean {
        const find = this.accounts.has(account.get_account_number);
        if (find) return false;
        this.accounts.set(account.get_account_number, account);
        return true;
    }

    public registerCard(card: Card): boolean {
        const find = this.findCard(card);
        if (find) return false;
        this.cards.set(card.get_card_number, card);
        return true;
    }

    private findCard(card: Card): Card | undefined {
        return this.cards.get(card.get_card_number);
    }

    public assignCardToAccount(account: Account, card: Card): boolean {
        const checkCard = this.findCard(card);
        if (!checkCard) return false;
        const find = this.accountCards.get(card);        
        if (find) return false;
        this.accountCards.set(card, account);
        return true;
    }

    public processTransaction(transaction: Transaction) {
        transaction.execute();
    }
}