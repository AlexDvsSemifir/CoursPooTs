// Interface 'Collaborateur' qui permettra de définir le tronc commun à tous mes employés
export default interface Collaborateur {
    _prenom: string;
    _nom: string;
    /**
     * Console log une phrase concernant l'activité du collaborateur
     */
    travailler(): string;
  }