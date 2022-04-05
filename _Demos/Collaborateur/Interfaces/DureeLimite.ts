// Interface pour différencier les contrats à durée limitée

import Collaborateur from "./Collaborateur";

// Elle hérite de 'Collaborateur' également
export default interface DureeLimite extends Collaborateur {
    _finContrat: Date;
    /**
     * Permet d'augmenter la durée de contrat d'un collaborateur
     * @param jours : Nombre de jours supplémentaires
     */
    prolonger(jours: number): void;
  }