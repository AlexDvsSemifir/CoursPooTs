// Classe chat
class Chat {

    // Les attributs de la classe :
    nom!:string;
    race!:string;
    age!:number;
    poids!:number;

    /**
     * Affiche dans la console les informations concernant le chat.
     */
    afficherChat()
    {
        console.log("Voici mon SuperChat :");
        console.log("\tMon nom est  "+this.nom);
        console.log("\tMa race est  "+this.race);
        console.log("\tMon age est  "+this.age);
        console.log("\tMon poid est de "+this.poids);
    }
}

// Instancie notre variable, elle désormais de type Chat 
let chat = new Chat();

/** on instancie nos attributs de classe */
chat.age =  10;
chat.nom ="michel";
chat.poids = 5.5
chat.race = "race"

/**on utilise la méthode afficherChat créée dans notre classe afin d'afficher nos attributs*/
chat.afficherChat();
