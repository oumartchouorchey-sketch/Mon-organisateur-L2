// ================================
// DONNEES
// ================================

let emplois = JSON.parse(localStorage.getItem("emplois")) || [];


// ================================
// AJOUTER UN COURS
// ================================

function ajouterEmploi() {

    let matiere = document.getElementById("matiere").value;
    let jour = document.getElementById("jour").value;
    let heure = document.getElementById("heure").value;
    let salle = document.getElementById("salle").value;
    let type = document.getElementById("type").value;


    // Vérification

    if (
        matiere === "" ||
        jour === "" ||
        heure === "" ||
        salle === "" ||
        type === ""
    ) {

        alert("Remplis tous les champs !");

        return;
    }


    // Création du cours

    let emploi = {

        matiere: matiere,
        jour: jour,
        heure: heure,
        salle: salle,
        type: type

    };


    // Ajouter dans la liste

    emplois.push(emploi);


    // Sauvegarder

    localStorage.setItem(
        "emplois",
        JSON.stringify(emplois)
    );


    // Afficher

    afficherEmplois();


    // Vider les champs

    document.getElementById("matiere").value = "";

    document.getElementById("jour").value = "";

    document.getElementById("heure").value = "";

    document.getElementById("salle").value = "";

    document.getElementById("type").value = "";

}


// ================================
// AFFICHER LES COURS
// ================================

function afficherEmplois() {


    // Vider toutes les cases

    let cellules = document.querySelectorAll(
        "td[data-jour]"
    );


    cellules.forEach(function(cellule) {

        cellule.innerHTML = "";

        cellule.className = "";

    });


    // Afficher chaque cours

    emplois.forEach(function(emploi, index) {


        let cellule = document.querySelector(
            `[data-jour="${emploi.jour}"][data-heure="${emploi.heure}"]`
        );


        if (cellule) {

            cellule.innerHTML = `

                <strong>
                    ${emploi.matiere}
                </strong>

                <br>

                ${emploi.type}

                <br>

                Salle ${emploi.salle}

                <br>

                <button
                    onclick="supprimerCours(${index})">
                    🗑️ Supprimer
                </button>

            `;


            cellule.classList.add(
                emploi.type.toLowerCase()
            );

        }

    });

}


// ================================
// SUPPRIMER UN COURS
// ================================

function supprimerCours(index) {

    emplois.splice(index, 1);


    localStorage.setItem(
        "emplois",
        JSON.stringify(emplois)
    );


    afficherEmplois();

}


// ================================
// AFFICHER AU DEMARRAGE
// ================================

afficherEmplois();