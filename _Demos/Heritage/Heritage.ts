abstract class Collaborateur {
    // Définiton des attributs communs à tous les descendants 
  protected _nom: string;
  protected _prenom: string;

  // Constructeur qui sera commun à tous les héritiers de Collaborateur
  constructor(nom: string, prenom: string) {
    this._nom = nom;
    this._prenom = prenom;
  }

  // Méthode abstraite qui sera à implémenter par les héritiers
  abstract travailler(): string;
}

class Salarie extends Collaborateur {
    // Attributs propres à Salarié :
  private _salaire: number;

  constructor(nom: string, prenom: string, salaire: number) {
      // Récupération du constructeur de Collaborateur (le parent)
    super(nom, prenom);
    this._salaire = salaire;
  }

  augmentation(percent: number): void {
    if (percent > 0 && percent <= 100) {
      const oldSalaire = this._salaire;
      this._salaire += (this._salaire * percent) / 100;
      console.log(
        `Le salaire de ${this._prenom} ${this._nom} a été augmenté de ${percent} : \nIl est passé de ${oldSalaire} à ${this._salaire}`
      );
    } else {
      throw new Error(
        "Le pourcentage indiqué est incorrect. Veuillez saisir un nombre compris entre 1 et 100"
      );
    }
  }

  // Définition de la méthode travaillée
  travailler(): string {
    return `${this._prenom} ${this._nom} travaille comme un dingue pour gratter une augmentation !`;
  }

}

class Stagiaire extends Collaborateur {
    private _finContrat: Date;

    constructor(nom: string, prenom: string, finContrat: Date) {
        super(nom, prenom);
        this._finContrat = finContrat;
    }

    get fin (): string {
        return this._finContrat.toLocaleDateString();
    }

    prolonger(jours: number): void {
        this._finContrat.setDate(this._finContrat.getDate() + jours);
        console.log(`La date de fin a été prolongée jusqu'au ${this._finContrat.toLocaleDateString()}`);
    }

    // Définition de la méthode travailler, qui est différente de celle indiquée dans Salarié
    travailler() {
        return `${this._prenom} ${this._nom} fait des photocopies et apporte le café !`;
    }
}

const employee: Salarie = new Salarie("Dupont", "Jean", 1000);
console.log(employee)
employee.augmentation(10);
console.log(employee)

const stagiaire: Stagiaire = new Stagiaire("Dujardin", "Jean", new Date('2022/12/31'));
console.log(stagiaire);
stagiaire.prolonger(10);
console.log(stagiaire);