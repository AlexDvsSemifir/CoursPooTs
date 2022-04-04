class Formateur {
    nom!: string;
    prenom!: string;

    /**
     * Dit bonjour
     * @param coucou string : Ce que tu veux dire
     * @returns string : Le message de bienvenue
     */
    afficherNomComplet(coucou: string): string {
        return this.nom + " " + this.prenom + " " + coucou;
    }
}
 
let formateur1: Formateur = new Formateur()

// Je redéfinis les propriétés de mon instance : 
formateur1.nom = 'Halliday'
formateur1.prenom = 'Johnny'

console.log(formateur1.afficherNomComplet('coucou'));
 

