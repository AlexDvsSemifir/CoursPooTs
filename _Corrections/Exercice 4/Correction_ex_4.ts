abstract class Chat {
    protected _nom:string;
    protected _age:number;
    protected _poids:number;


    // Constructeur : 

    constructor(nom:string, age:number, poids:number)
    {
        this._nom = nom;
        this._age = age;
        this._poids = poids;
    }

    // On vient créer nos getters qui permettent de récupérer notre propriétés de classe 

    public get nom(){
        return this._nom
    };
    public get age(){
        return this._age
    };
    public get poids(){
        return this._poids
    };

    // On vient créer nos setters qui permettent l'affectation de valeurs sur nos propriétés de classe
    public set nom(nom:string){
        this._nom = nom
    };
    public set age(age:number){
        this._age = age
    };
    public set poids(poids:number){
        this._poids = poids
    };

    /**
     * Methode qui retourne les informations du chat, mise en forme
     */
    public abstract afficherChat(): void

    public miauler(): void {
        console.log('Meow');
    }
}

class Europeen extends Chat {
    private _surnoms: string[] = [];
    private _origine: string;

    constructor(nom:string, age:number, poids:number, origine?:string, ...surnoms:string[]) {
        super(nom, age, poids);
        // J'indique que l'attribut origine sera soit Européen, soit égal à l'argument passé en paramètre du constructeur
        this._origine = origine || "Europe";
        this._surnoms = surnoms;
    }

    /**
     * Ajoute des surnoms à la liste des surnoms du chat.
     * @param surnoms string[] : Surnoms à donenr au chat
     */
    ajouterSurnoms (...surnoms: string[]) {
        surnoms.forEach(surnom => {
            this._surnoms.push(surnom);
        });
    }

    public afficherChat()
    {
        console.log("Voici mon SuperChat :");
        console.log("Il s'appelle " + this.nom + ",");
        console.log("il a " + this._age + " an(s),");
        console.log("et il pèse " + this._poids + "kg.");
        console.log("et ses surnoms sont : " + this._surnoms.join(', '));
        console.log("Il est originaire de " + this._origine + ",");
    }
}

// On définit une autre classe qui hérite également de Chat.
// Une classe peut donc avoir plusieurs héritiers
class Sphynx extends Chat {
    private _surnoms: string[] = [];
    private _poils: boolean = false;

    constructor(nom:string, age:number, poids:number, origine?:string, ...surnoms:string[]) {
        super(nom, age, poids);
        this._surnoms = surnoms;
    }

    ajouterSurnoms (...surnoms: string[]) {
        surnoms.forEach(surnom => {
            this._surnoms.push(surnom);
        });
    }

    // La méthode a été surchargée ici et ne renvoit pas la même chose que dans Européen
    public afficherChat()
    {
        console.log("Voici mon SuperChat :");
        console.log("Il s'appelle " + this.nom + ",");
        console.log("il a " + this._age + " an(s),");
        console.log("et il pèse " + this._poids + "kg.");
        console.log("et ses surnoms sont : " + this._surnoms.join(', '));
        console.log('Je suis actuellement une couille')
    }
}

const minou: Europeen = new Europeen('Minou', 3, 4, 'France', 'Minou', 'Minouette');
const couille: Sphynx = new Sphynx('Ma Couille', 1, 2, 'France', 'Couille', 'Couille-lèche');

const listeDesChats: Chat[] = [minou, couille]

listeDesChats.map(chat => chat.afficherChat());