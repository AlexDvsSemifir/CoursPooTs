import Remunere from '../Interfaces/Remunere';
import DureeLimite from '../Interfaces/DureeLimite';

// Cette fois, le CDD est à la fois limité dans le temps, mais aussi payé
// On peut donc lui ajouter les deux interfaces !
export default class CDD implements Remunere, DureeLimite {
    _nom: string;
    _prenom: string;
    _salaire: number;
    _finContrat: Date;
  
    constructor(nom: string, prenom: string, salaire: number, finContrat: Date) {
      this._nom = nom;
      this._prenom = prenom;
      this._salaire = salaire;
      this._finContrat = finContrat;
      }
  
    get finContrat(): string {
      return this._finContrat.toLocaleDateString();
    }
  
    travailler(): string {
      return `${this._prenom} ${this._nom} travaille comme un dingue pour aller gratter le CDI !`;
    }
  
    prolonger(jours: number): void {
      this._finContrat.setDate(this._finContrat.getDate() + jours);
      console.log(`La date de fin a été prolongée jusqu'au ${this.finContrat}`);
    }
  
    augmentation(pourcentage: number): void {
      if (pourcentage > 0 && pourcentage <= 100) {
        const oldSalaire = this._salaire;
        this._salaire += (this._salaire * pourcentage) / 100;
        console.log(
          `Le salaire de ${this._prenom} ${this._nom} a été augmenté de ${pourcentage} : \nIl est passé de ${oldSalaire} à ${this._salaire}`
        );
      } else {
        throw new Error(
          "Le pourcentage indiqué est incorrect. Veuillez saisir un nombre compris entre 1 et 100"
        );
      }
    }
  }
  