// objet classique sous forme clef/valeur
const chat = {
    nom: "Ronron",
    race : "Europeen",
    age: 4,
    poids: 5
}

/**
 * Permet de présenter le chat et de présenter ses surnoms
 * @param surnoms : liste des surnoms du chat
 */
function presenterChat(...surnoms: string[]): void {
    // Le REST param envoie un tableau. Nous pouvons le parcourir avec une boucle, ou avec map
    // On utilise 'join' pour afficher une liste sur une seule ligne
    const surnom = surnoms.map(surnom => `${surnom}`).join(", ");
    console.log(`${chat.nom} est un chat de type ${chat.race} agé de ${chat.age} ans et qui pèse ${chat.poids} kg. \r
Sa maitresse lui a donné les surnoms suivants : \r\n${surnom}`)
}

presenterChat("minou", "chat", "meow")