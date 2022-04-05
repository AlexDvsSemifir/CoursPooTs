import Remunere from '../Interfaces/Remunere';

// Une classe CDI qui héritera de l'interface 'Rémunéré"
// Puisque Remunere hérite déjà de Collaborateur, nous n'avons pas besoin de le repréciser !
export default class CDI implements Remunere {
    _prenom: string;
    _nom: string;
    _salaire: number;
   // La classe dispose de son propre constructeur
    constructor(prenom: string, nom: string, salaire: number) {
      this._prenom = prenom;
      this._nom = nom;
      this._salaire = salaire;
    }
  
    // Ici, la seule règle est d'implémenter une fonction travailler().
    // On est libre de mettre ce que l'on souhaite dedans !
    travailler(): string {
      return `${this._prenom} ${this._nom} travaille comme un pro pour espérer avoir une augmentation !`;
    }
      // On reprend bêtement les fonctions qu'on a rédigé dans la démo précédente
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
  