import Gobelet from './Gobelet';

export default class Player {
    private _name: string;
    private _score: number;
    private _gameScore: number;

    constructor(name: string) {
        this._name = name;
        this._score = 0;
        this._gameScore = 0;
    }

    get score() {
        return this._score;
    }

    get gameScore() {
        return this._gameScore;
    }

    get name () {
        return this._name;
    }

    /**
     * Augmente de un le score du joueur (nb de tours gagnés)
     */
    public updateGameScore() {
        this._gameScore += 1;
        this._score = 0;
    }

    /**
     * Permet de lancer les dés présents dans le gobelet
     * @param gobelet Le gobelet de la partie
     */
    public rollGobelet(gobelet: Gobelet) {
        gobelet.rollGobelet();
        console.log(gobelet.values)
        this._score += gobelet.value;
    }
}