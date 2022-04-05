import Animal from '../Interfaces/Animal';

export default abstract class Mammifere implements Animal {
    _nom: string;
    _poids: number;
    _dateNaissance: Date;

    constructor(nom: string, poids: number, dateNaissance: string) {
        this._nom = nom;
        this._poids = poids;
        this._dateNaissance = new Date (dateNaissance);
    }

    public get age() {
        const today = new Date();
        const age = today.getFullYear() - this._dateNaissance.getFullYear();
        return age;
    }

    public get dateNaissance(): string {
        return this._dateNaissance.toLocaleDateString();
    }

    display(): void {
        console.log(`Je suis un mammifère, je m'appelle ${this._nom}, j'ai ${this._poids} kg et j'ai naît le ${this.dateNaissance}`);
    }
}