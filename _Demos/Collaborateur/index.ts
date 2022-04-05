import CDI from './Classes/Cdi';
import CDD from './Classes/Cdd';
import Stagiaire from './Classes/Stagiaire';

import Collaborateur from './Interfaces/Collaborateur';

//-----------------------------//
// Création de trois instances //

const employee: CDI = new CDI("Halliday", "Johnny", 1000);
const larbin: Stagiaire = new Stagiaire("Larbin", "Jean", new Date("2022/12/31"));
const temporaire: CDD = new CDD("Dupont", "Jean", 1000, new Date("2022/12/31"));

// Manipulation et tests des objets :

employee.augmentation(10);
larbin.prolonger(30);
temporaire.augmentation(10);
temporaire.prolonger(30);


//----------------------------------------------------------------------//
// Création d'une liste de collaborateurs, de type ... collaborateurs ! //

// On créé une constante de type tableau de collaborateurs
// Pourtant, aucun de nos objets n'est directement typé comme ça

const collaborateurs : Collaborateur[] = [employee, larbin, temporaire];

// On utilise un forEach afin de réaliser une action.
// On utilise au passe une fonction anonyme pour spécifier le traitement
// Bien que la fonction 'travailler' ne soit pas implémentée dans 'Collaborateur', on peut l'appeler
  // Son implémentation est pourant différente d'un objet à l'autre
  // Son traitement dépendra pourtant bien du type de chaque objet !

collaborateurs.forEach(collaborateur => console.log(collaborateur.travailler() ) );
// Sans le réaliser, vous venez de comprendre un des aspects du Polymorphisme ! <3