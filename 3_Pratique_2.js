"use strict"

// Pratique 2

// La fonction suivante fonctionne correctement.
// Replacer l'instruction "while" de la fonction par une instruction "for".

function compteNombreTour(nombreToursMax) {
    let nombreDeTours = 0;

    while (nombreDeTours <= nombreToursMax) {
        console.log("C'est le tour " + nombreDeTours);

        nombreDeTours += 1;
    }

    if (nombreDeTours <= 1) {
      console.log(nombreDeTours + " tour fait");
    } else {
      console.log(nombreDeTours + " tours faits");
    }
}

// NE PAS MODIFIER APRES CETTE LIGNE

compteNombreTour(1);
compteNombreTour(19);
compteNombreTour(9);
