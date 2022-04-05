import Bulletin from "./Bulletin";
import Note from "./Note";

export default class Eleve {
    private _nom: string;
    private _prenom: string;
    private _bulletin: Bulletin;

    constructor(nom: string, prenom: string, bulletin: Bulletin) {
        this._nom = nom;
        this._prenom = prenom;
        this._bulletin = bulletin;
    }

    /**
     * Permet d'ajouter une ou plusieurs notes au bulletin de l'élève
     * @param notes Note(s) à ajouter
     */
    public ajouterNotes(...notes: Note[]) {
        notes.forEach((note) => {
            this._bulletin.ajouterNote(note);
        })
    }

    /**
     * Affiche la moyenne de l'élève
     * Appel la méthode calculerMoyenne() du bulletin et affiche le résultat dans une phrase dans la console.
     */
    public afficherMoyenne(): void {
        console.log(`La moyenne de ${this._prenom} ${this._nom} est de ${this._bulletin.calculerMoyenne()}`);
    }

    /**
     * Affiche les notes de lélève
     * Appel la méthode afficherNotes() du bulletin de l'élève
     */
    public afficherNotes(): void {
        console.log(`Notes de ${this._prenom} ${this._nom} : \r\n`);
        this._bulletin.afficherNotes();
    }
}