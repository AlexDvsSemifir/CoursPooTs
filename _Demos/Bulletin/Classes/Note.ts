export default class Note {
    private _matiere: string;
    private _valeur: number;

    constructor(matiere: string, valeur: number) {
        this._matiere = matiere;
        this._valeur = valeur;
    }

    get matiere(): string {
        return this._matiere;
    }

    get valeur(): number {
        return this._valeur;
    }

    /**
     * Permet d'afficher en console les informations concernant la note. 
     */
    public afficherNote() {
        console.log(`${this._matiere} : ${this._valeur} / 20`);
    }

}