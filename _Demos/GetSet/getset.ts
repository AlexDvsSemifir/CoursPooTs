class Employee {
    // On définit les portées de nos attributs avec Private, de sorte à ce qu'ils ne soient accessibles que dans mle bloc d'execution de la classe.
    private _nom: string;
    private _prenom: string;
    private _salaire: number;

    constructor(nom: string, prenom: string, salaire: number) {
        // Le _ permet de différencier l'accesseur de l'attribut correspondant.
        this._nom = nom;
        this._prenom = prenom;
        this._salaire = salaire;
    }

    // Get permet d'accéder à l'attribut demandé
    get nom(): string {
        return this._nom
    }

    get prenom(): string {
        return this._prenom
    }

    get salaire(): number {
        return this._salaire
    }

    // Set permet de redéfinir l'attribut souhaité/
    set nom(nom: string) {
        this._nom = nom
    }

    // On peut ajouter de la logique dans un setter
    set prenom(prenom: string) {
        if (prenom.length > 1) {
            this._prenom = prenom
        }
    }

    set salaire(salaire: number) {
        this._salaire = salaire
    }

    /**
     * Augmente le salaire d'un employé de X%
     * @param pourcentage : Pourcentage d'augmentation
     */
     augmentation(pourcentage: number): void {
        if (pourcentage > 0) {
            console.log(`Le salaire de ${this.nom} ${this._prenom} va être augmenté de ${pourcentage}%. Salaire actuel : ${this._salaire}`);
            this._salaire += this._salaire * pourcentage / 100;
            console.log(`Le salaire est maintenant de ${this._salaire}`);
        } else {
            throw new Error('Le pourcentage doit être positif');
        }
    }
}

const employee: Employee = new Employee('Dupont', 'Jean', 1000);

console.log(employee.nom)
console.log(employee.prenom)
console.log(employee.salaire)

employee.nom = 'Polnareff'
employee.prenom = 'Jean-Pierre'

console.log(employee.nom)
console.log(employee.prenom)