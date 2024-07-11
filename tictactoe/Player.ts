export enum STATIC_SYMBOL {
    X_SYMBOL = 'X',
    O_SYMBOL = 'O',
}

export interface PlayerModule {
    name: string;
    symbol: 'X' | 'O';
};

export class Player {
    constructor(private player: PlayerModule) {}

    public get name() {
        return this.player.name;
    }

    public get symbol() {
        return this.player.symbol;
    }
}