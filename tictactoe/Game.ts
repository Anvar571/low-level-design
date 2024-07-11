import { Board } from "./Board";
import { Player } from "./Player";

export class Game {
    private board: Board;
    private player1: Player;
    private player2: Player;
    private currentPlayer: Player;

    constructor(player1: Player, player2: Player) {
        this.board = new Board();
        this.player1 = player1;
        this.player2 = player2;
        this.currentPlayer = player1;
    }

    public play() {
        this.board.viewBoard();

        while(!this.board.isFull() && !this.board.checkWinner()) {
            try {
                console.log(`Current player: ${this.currentPlayer.name}`);

                let row = this.getValidateInput('Enter row -> ');
                let col = this.getValidateInput('Enter column -> ');

                this.board.play(row, col, this.currentPlayer);
                this.board.viewBoard();
                this.switchPlayer();
                
                if (this.board.checkWinner()) {
                    this.switchPlayer();
                    console.log(`wins player: ${this.currentPlayer.name}`);
                }
            } catch (error: any) {
                console.log(error.message);
            }
        }
    }

    private getValidateInput(inputMessage: string): number {
        const arg = prompt(inputMessage); // deno land
        
        if(arg) {
            const res = parseInt(arg);

            if(isNaN(res)) throw new Error('Please Enter correct number! ');
            
            return res;
        }
        throw new Error('Please enter number input -> ')
    }
    
    private switchPlayer(): void {
        this.currentPlayer = (this.currentPlayer === this.player1 ? this.player2 : this.player1);
    }
}