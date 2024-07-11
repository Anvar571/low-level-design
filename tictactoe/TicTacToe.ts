import { Game } from "./Game";
import { Player } from "./Player";

export class TicTacToe {
    public static run() {
        const player1 = new Player({name: "Lorem 1", symbol: 'O'});

        const player2 = new Player({name: "ipsum 1", symbol: 'X'});

        const game1 = new Game(player1, player2);

        game1.play();
    }
}

TicTacToe.run();