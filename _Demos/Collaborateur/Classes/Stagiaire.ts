import DureeLimite from '../Interfaces/DureeLimite'

// Le stagiaire n'hérite que de la durée limité, vu qu'il n'est pas payé
export default class Stagiaire implements DureeLimite {
    _nom: string;
    _prenom: string;
    _finContrat: Date;
  
    constructor(nom: string, prenom: string, finContrat: Date) {
      this._nom = nom;
      this._prenom = prenom;
      this._finContrat = finContrat;
    }
  
    get finContrat(): string {
      return this._finContrat.toLocaleDateString();
    }
  
    travailler(): string {
      return `${this._prenom} ${this._nom} fait le café et les photocopies !`;
    }
  
    prolonger(jours: number): void {
      // Petite méthode de la classe Date qui permet de modifier la date en question. On y ajoute le nomnre de jours au passage.
      this._finContrat.setDate(this._finContrat.getDate() + jours);
      console.log(`La date de fin a été prolongée jusqu'au ${this.finContrat}`);
    }
  }
  