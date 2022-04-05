
// Interface 'Collaborateur' qui permettra de définir le tronc commun à tous mes employés
interface Collaborateur {
  _prenom: string;
  _nom: string;
  /**
   * Console log une phrase concernant l'activité du collaborateur
   */
  travailler(): string;
}

// Une interface pour différencier ceux qui sont rémunéeés
// Elle hérite de 'Collaborateur'
interface Remunere extends Collaborateur {
  _salaire: number;
  /**
   * Permet d'augmenter le salaire d'un collaborateur
   * @param pouventage : Pourcentage d'augmentation
   */
  augmentation(pouventage: number): void;
}

// Interface pour différencier les contrats à durée limitée
// Elle hérite de 'Collaborateur' également
interface DureeLimite extends Collaborateur {
  _finContrat: Date;
  /**
   * Permet d'augmenter la durée de contrat d'un collaborateur
   * @param jours : Nombre de jours supplémentaires
   */
  prolonger(jours: number): void;
}

// Une classe CDI qui héritera de l'interface 'Rémunéré"
// Puisque Remunere hérite déjà de Collaborateur, nous n'avons pas besoin de le repréciser !
class CDI implements Remunere {
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

// Le stagiaire n'hérite que de la durée limité, vu qu'il n'est pas payé
class Stagiaire implements DureeLimite {
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

// Cette fois, le CDD est à la fois limité dans le temps, mais aussi payé
// On peut donc lui ajouter les deux interfaces !
class CDD implements Remunere, DureeLimite {
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

//-----------------------------//
// Création de trois instances //

const employee: CDI = new CDI("Halliday", "Johnny", 1000);
const larbin: Stagiaire = new Stagiaire("Larbin", "Jean", new Date("2022/12/31"));
const temporaire: CDD = new CDD("Dupont", "Jean", 1000, new Date("2022/12/31"));

// Manipulation et tests des objets :

// employee.augmentation(10);
// larbin.prolonger(30);
// temporaire.augmentation(10);
// temporaire.prolonger(30);


//----------------------------------------------------------------------//
// Création d'une liste de collaborateurs, de type ... collaborateurs ! //

// On créé une constante de type tableau de collaborateurs
// Pourtant, aucun de nos objets n'est directement typé comme ça

const collaborateurs : Collaborateur[] = [employee, larbin, temporaire];

// On utilise un forEach afin de réaliser une action.
// On utilise au passe une fonction anonyme pour spécifier le traitement
// Bien que la fonction 'travailler' ne soit pas implémentée dans 'Collaborateur', on peut l'appeler
  // Son implémentation est pourant différente d'un objet à l'autre
  // Son traitement dépendra pourtant bien du type de chaque objet !

collaborateurs.forEach(collaborateur => console.log(collaborateur.travailler() ) );
// Sans le réaliser, vous venez de comprendre un des aspects du Polymorphisme ! <3