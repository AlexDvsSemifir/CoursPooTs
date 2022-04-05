

// Une interface pour différencier ceux qui sont rémunéeés

import Collaborateur from "./Collaborateur";

// Elle hérite de 'Collaborateur'
export default interface Remunere extends Collaborateur {
    _salaire: number;
    /**
     * Permet d'augmenter le salaire d'un collaborateur
     * @param pouventage : Pourcentage d'augmentation
     */
    augmentation(pouventage: number): void;
  }