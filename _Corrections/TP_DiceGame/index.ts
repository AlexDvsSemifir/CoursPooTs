import Player from "./Classes/Player";
import Game from "./Classes/Game";

const player1 = new Player("Player 1");
const player2 = new Player("Player 2");
const player3 = new Player("Player 3");
const game = new Game();
game.initializeGame(player1, player2, player3);
game.playGame();