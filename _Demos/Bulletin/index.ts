// import de tous les modules 

import Bulletin from "./Classes/Bulletin";
import Eleve from "./Classes/Eleve";
import Note from "./Classes/Note";


// Création de l'élève

const eleve1: Eleve = new Eleve('Mercury', 'Freddy', new Bulletin());
const eleve2: Eleve = new Eleve('Barsssouff', 'Daniel', new Bulletin());

eleve1.ajouterNotes(new Note("Math", 15), new Note("Musique", 20), new Note("Anglais", 18), new Note("Français", 10), new Note("Arts Platique", 7))
eleve2.ajouterNotes(new Note("Math", 10), new Note("Musique", 1), new Note("Anglais", 6), new Note("Français", 8), new Note("Arts Platique", 20))

eleve1.afficherNotes();
eleve1.afficherMoyenne();

eleve2.afficherNotes();
eleve2.afficherMoyenne();