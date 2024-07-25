
export class Card {
    private card_number: number;
    private PIN: number;

    constructor(card_number: number, PIN: number) {
        this.card_number = card_number;
        this.PIN = PIN;
    }

    public get get_card_number() {
        return this.card_number;
    }

    public get get_pin() {
        return this.PIN;
    }
}
