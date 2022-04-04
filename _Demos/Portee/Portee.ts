class Employee {
    // On définit les portées de nos attributs avec Private, de sorte à ce qu'ils ne soient accessibles que dans mle bloc d'execution de la classe.
    private nom: string;
    private prenom: string;
    private salaire: number;

    constructor(nom: string, prenom: string, salaire: number) {
        this.nom = nom;
        this.prenom = prenom;
        this.salaire = salaire;
    }

    /**
     * Augmente le salaire d'un employé de X%
     * @param pourcentage : Pourcentage d'augmentation
     */
     augmentation(pourcentage: number): void {
        if (pourcentage > 0) {
            console.log(`Le salaire de ${this.nom} ${this.prenom} va être augmenté de ${pourcentage}%. Salaire actuel : ${this.salaire}`);
            this.salaire += this.salaire * pourcentage / 100;
            console.log(`Le salaire est maintenant de ${this.salaire}`);
        } else {
            throw new Error('Le pourcentage doit être positif');
        }
    }
}

const employee: Employee = new Employee('Dupont', 'Jean', 1000);