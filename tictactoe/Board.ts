import { Player } from "./Player";

export class Board {
    private board: string[][];
    private movesCount: number;
    private name: string | undefined; // unique

    constructor(boardName?: string) {
        this.board = new Array(3).fill(null).map(() => new Array(3).fill('-'));
        this.movesCount = 0;
        this.initializeBoard();
        this.name = boardName;
    }

    public get getName() {
        return this.name;
    }

    private initializeBoard() {
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                this.board[row][col] = '-';
            }
        }
    }

    /**   column = 1
     * -------------
     * | -  | O  | -  |
     * -------------
     * | -  |  - | -  | row = 2
     * -------------
     * | -  | -  | -  |
     * -------------
     */
    public play(row: number, column: number, player: Player): void {
        const [newRow, newCol] = this.changeColumnAndRow(row, column);
        const find = this.board[newRow][newCol];
        
        if ((find !== '-') || (column < 0 && column > 3 && row < 0 && row > 3)) {
            throw new Error('Invalid column or row');
        }
        this.board[newRow][newCol] = player.symbol;
        this.movesCount++;
    }

    private changeColumnAndRow(row: number, column: number): number[] {
        return [row-1, column-1];
    }

    public viewBoard() {
        let columns = '';
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                columns += `| ${this.board[row][col]} |`;
            }
            console.log(columns);
            columns = '';
        }
    }

    checkWinner() {
        for (let row = 0; row < 3; row++) {
            if (this.board[row][0] != '-' && this.board[row][0] === this.board[row][1] && this.board[row][1] === this.board[row][2]) {
                return true
            }
        }

        for (let column = 0; column < 3; column++) {
            if (this.board[0][column] != '-' && this.board[0][column] === this.board[1][column] && this.board[1][column] === this.board[2][column]) {
                return true
            }
        }

        if(this.board[0][0] != '-' && this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2]) return true;

        return this.board[0][2] != '-' && this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[2][0];
    }

    isFull(): boolean {
        const res = this.board.some((val) => val.includes('-'))!;

        if (res) return false;
        return true;
    }
}