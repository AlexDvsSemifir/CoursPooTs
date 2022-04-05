import Note from "./Note";

export default class Bulletin {
  private _notes: Note[] = [];

  /**
   * Permet d'ajouter une unique note au carnet de notes
   * @param note : Note à ajouter
   */
  public ajouterNote(note: Note) {
    if (note.valeur > 20) {
      throw new Error("Note trop élevée");
    } else if (note.valeur < 0) {
      throw new Error("Euh ... Sérieux ?");
    } else {
      this._notes.push(note);
    }
  }

  /**
   * Permet de calculer la moyenne générale.
   * @returns la moyenne des notes du bulletin
   */
  public calculerMoyenne(): string {
    let somme: number = 0;
    this._notes.forEach((note) => {
      somme += note.valeur;
    });

    return (somme / this._notes.length).toFixed(2);
  }

  /**
   * Affiche toutes les notes du bulletin.
   * Fait appel à la méhode afficherNote() de chaque note.
   */
  public afficherNotes(): void {
    this._notes.forEach((note) => {
      note.afficherNote();
    });
  }
}
