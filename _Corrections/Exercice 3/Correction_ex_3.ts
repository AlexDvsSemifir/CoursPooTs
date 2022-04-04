// Classe chat
class Chat {

    // Les attributs de la classe :
    private _nom:string;
    private _race:string;
    private _age:number;
    private _poids:number;

    constructor(nom: string, race: string, age: number, poids: number){
        this._nom = nom;
        this._race = race;
        this._age = age;
        this._poids = poids
    }

    get nom (): string {
        return this._nom;
    }
    get age (): number {
        return this._age;
    }
    get race (): string {
        return this._race;
    }
    get poids (): number {
        return this._poids;
    }
    set nom (nom: string) {
        this._nom = nom;
    }
    set age (age: number) {
        this._age = age;
    }
    set race (race: string) {
        this._race = race;
    }
    set poids (poids: number) {
        this._poids = poids
    }
    
    /**
     * Affiche dans la console les informations concernant le chat.
     */
    afficherChat()
    {
        console.log("Voici mon SuperChat :");
        console.log("\tMon nom est  "+this._nom);
        console.log("\tMa race est  "+this._race);
        console.log("\tMon age est  "+this._age);
        console.log("\tMon poid est de "+this._poids);
    }
}

// Instancie notre variable, elle désormais de type Chat 
let chat = new Chat('Minou', 'Chat de mer', 3, 5);

/** on instancie nos attributs de classe */
chat.age =  10;
chat.nom ="michel";
chat.poids = 5.5
chat.race = "race"

/**on utilise la méthode afficherChat créée dans notre classe afin d'afficher nos attributs*/
chat.afficherChat();
