import Mammifere from "../Abstract/Mammifere";
import Terrestre from "../Interfaces/Terrestre";

export default class Chat extends Mammifere implements Terrestre {
    
    display(): void {
        console.log(`Je suis un chat, je m'appelle ${this._nom}, je pèse ${this._poids} kg et je suis né le ${this.dateNaissance}`);
    }

    respirerHorsDeLeau(): void {
        console.log("Je respirer hors de l'eau");
    }

    marcher(): void {
        console.log("Je marche");
    }

    miauler(): void {
        console.log('Miaou')
    }
}