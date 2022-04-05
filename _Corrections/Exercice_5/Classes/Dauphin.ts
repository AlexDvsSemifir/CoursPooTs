import Mammifere from "../Abstract/Mammifere";
import Aquatique from "../Interfaces/Aquatique";

export default class Dauphin extends Mammifere implements Aquatique {
    
    resipirerSousLeau(): void {
        this.retenirRespiration();
    }

    nager(): void {
        console.log("Je nage");
    }

    private retenirRespiration(): void {
        console.log("Je retiens ma respiration car je ne sais pas respirer sous l'eau, connard <3");
    }

    cliquetter(): void {
        console.log("Je cliquette");
    }

    display(): void {
        console.log(`Je suis un dauphin, je m'appelle ${this._nom}, je pèse ${this._poids} kg et je suis né le ${this.dateNaissance}`);
    }
}