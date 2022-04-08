export default class Dice {
    private _value: number;
    private _sides: number;

    constructor(sides?: number) {
        this._sides = sides || 6;
        this._value = 0;
    }

    public get value(): number {
        return this._value;
    }
    
    /**
     * Permet de lancer le dé.
     * @returns La valeur du dé
     */
    public roll(): number {
        this._value = Math.floor(Math.random() * this._sides) + 1;
        return this._value;
    }

}