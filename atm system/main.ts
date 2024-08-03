import { Account } from "./Account";
import { ATM } from "./Atm";
import { BankingService } from "./BankingService";
import { Card } from "./Card";
import { CashDispenser } from "./CashDispenser";

export class Demo {
    public static run() {
        const account1 = new Account("adqvwe2v23r", 0);
        const account2 = new Account("adqvwse2v23r", 0);

        console.log(account1.get_balance, 'before balance');
        
        const card1 = new Card("6434567543", 1234);
        const card2 = new Card('64345675443', 3456);

        const bank = new BankingService();
        const cashDispenser = new CashDispenser(10000000);
        const atm = new ATM(bank, cashDispenser);
        
        atm.authenticateUser(card1, account1);
        atm.authenticateUser(card2, account2);

        atm.withdrawCash(100000, account1);

        atm.checkBalance(account1);

        console.log(account1.get_balance, 'after balance');
        
    };
}

Demo.run();
