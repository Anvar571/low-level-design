import { STATIC_SYMBOL } from "./Player";

export class Board {
    private board: string[][];
    private movesCount: number;

    constructor() {
        this.board = new Array(3).fill(null).map(() => new Array(3).fill('-'));
        this.movesCount = 0;
        this.initializeBoard();
    }

    private initializeBoard() {
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                this.board[row][col] = '-';
            }
        }
    }

    public play() {
        
    }

    checkWinner() {}

    isFull() {}
}