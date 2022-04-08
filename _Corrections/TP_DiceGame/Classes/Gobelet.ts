import Dice from './Dice';

export default class Gobelet {
    private _value: number = 0;
    private _dices: Dice[] = [];

    public get values() {
        return this._dices.map(dice => dice.value);
    }

    public get value() {
        return this._value;
    }

    /**
     * Lancer tous les dés présents dans le gobelet
     */
    public rollGobelet(): void {
        this._value = 0;
        this._dices.forEach(dice => {
            this._value += dice.roll();
        })
    }

    /**
     * 
     * @param dice Ajouter un unique dé au goibelet
     */
    public addDice(dice: Dice): void {
        this._dices.push(dice);
    }
}