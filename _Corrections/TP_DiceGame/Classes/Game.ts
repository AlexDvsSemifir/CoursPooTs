import Dice from './Dice';
import Gobelet from './Gobelet';
import Player from './Player';

export default class Game {
    private _numberOfTurns!: number;
    private _players: Player[] = [];
    private _gobelet!: Gobelet;

    /**
     * Permet d'ajouter les joueurs à la partie
     * @param players les instances de joueur
     */
    private addPlayers(...players: Player[]) {
        players.forEach(player => {
            this._players.push(player);
        });
    }

    /**
     * Permet de définir le nombre de tours
     */
    private setTurns() {
        this._numberOfTurns = this._players.length + 1;
    }

    /**
     * Créer autant de dés que de joueurs.
     */
    private createDices() {
        this._gobelet = new Gobelet();
        for (let index = 0; index < this._players.length; index++) {
            this._gobelet.addDice(new Dice());
        }
    }

    /**
     * Permet de démarrer la partie.
     * Ajoute les joueurs, le gobelet, le nombre de dés et déterminbe le nombre de tours.
     * @param players les joueurs de la partie
     */
    public initializeGame(...players: Player[]) {
        this.addPlayers(...players);
        this.setTurns();
        this.createDices();
    }

    /**
     * Permet de démarrer un tour
     */
    private startTurn() {
        this._players.forEach(player => {
            player.rollGobelet(this._gobelet);
        });
    }

    /**
     * Permet de relancer les dés entre 2 joueurs dans le cas ou deux joueurs ont le même score
     * @param player1 La joueur 1
     * @param player2 Le joueur 2
     * @returns 
     */
    private reroll(player1: Player, player2: Player) {
        console.log(`Relance entre ${player1.name} et ${player2.name}`);
        player1.rollGobelet(this._gobelet);
        console.log(`${player1.name} a relancé et a fait ${player1.score}`);
        player2.rollGobelet(this._gobelet);
        console.log(`${player2.name} a relancé et a fait ${player2.score}`);
        return player1.score > player2.score ? player1 : player2;
    }

    /**
     * Détermine le vainqueur de la manche
     * @returns Le joueur ayant le plus de points
     */
    private getTurnWinner(): Player {
        let winner: Player = this._players[0];
        this._players.forEach(player => {
            if (player.score > winner.score) {
                winner = player;
            } else if (player.score === winner.score && player.name !== winner.name) {
                winner = this._players[0];
                winner = this.reroll(player, winner);
                this.getTurnWinner();
            }
        })
        return winner
    }


    /**
     * Affiche le vainqueur
    * @param winner Le joueur gagnant
     */
    private showTurnWinner(winner: Player) {
        console.log(`${winner.name} a gagné le tour \r\n`);
    }

    /**
     * Met à jour le score du joueur gagnant du tour
     */
    private updateTurnWinnerScore() {
        let winner : Player = this.getTurnWinner();
        this.showTurnWinner(winner);
        winner.updateGameScore();
    }

    /**
     * Affiche le score de chaque joueur
     */
    private showAllGameScore() {
        this._players.forEach(player => {
            console.log(`${player.name} a gagné ${player.gameScore} manches`);
        })
    }

    /**
     * Permet de déterminer le joueur ayant gagné le plus de dmanches à la fin de la partie.
     */
    private getHighestGameScore() {
        let winner: Player = this._players[0];
        this._players.forEach(player => {
            if (player.gameScore > winner.gameScore) {
                winner = player;
            }
        })
        console.log(`\r\n${winner.name} a gagné la partie ! GG à lui !!!!`);
    }

    /**
     * Permet de démarrer la partie
     * Appel les différentes méthodes privées nécessaires.
     */
    public playGame() {
        for (let i = 0 ; i < this._numberOfTurns; i++) {
        this.startTurn();
        this.getTurnWinner();
        this.updateTurnWinnerScore();
        }
        this.showAllGameScore();
        this.getHighestGameScore();
    }
}