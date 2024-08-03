
export class Card {
    private card_number: string;
    private PIN: number;

    constructor(card_number: string, PIN: number) {
        this.card_number = card_number;
        this.PIN = PIN;
        this.checkCardNumber();
    }

    private checkCardNumber(): boolean {
        const compareCardNumber = Number(this.card_number);
        if (!compareCardNumber) false
        return true;
        
    }

    public get get_card_number() {
        return this.card_number;
    }

    public get get_pin() {
        return this.PIN;
    }
}
