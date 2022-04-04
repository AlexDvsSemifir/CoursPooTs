// Définition de la classe Employee

class Employee {
    nom!: string;
    prenom!: string;
    salaire!: number;

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

const employee: Employee = new Employee();
employee.nom = 'Halliday';
employee.prenom = 'Johnny';
employee.salaire = 1000;

employee.augmentation(-50);