const enteteTitre = {
    fr: {
        entete: [
            "Accueil",
            "Compétances",
            "Projets",
            "Contact"
        ],
        titre:
        {
            h2_accueil: "À propos de moi",
            h2_competance: "Mes compétences",
            h3_front_end: "Compétence front-end",
            h3_back_end: "Compétence back-end",
            h3_addSkills: "Compétence additionnel",
            h2_projet: "Mes projets réalisés",
            h2_contact: "Contact"
        }

    },
    en: {
        entete: [
            "Home",
            "Skills",
            "Projects",
            "Contact"
        ],
        titre:
        {
            h2_accueil: "About me",
            h2_competance: "My skills",
            h3_front_end: "Front-end competence",
            h3_back_end: "Back-end competence",
            h3_addSkills: "Additional jurisdiction",
            h2_projet: "My completed projects",
            h2_contact: "Contact"
        }

    }
}

const choixLangue1 = document.getElementById( 'langue' );
window.addEventListener( 'load', function () {
    const langue = choixLangue1.value;
    setEnteteEtTitre( langue );
} );

choixLangue1.addEventListener( 'change', function () {
    const langue = choixLangue1.value;
    setEnteteEtTitre( langue );
} );


function setEnteteEtTitre ( langue ) {
    setEntete( langue );
    setTitre( langue );
}
function setEntete ( langueChoisie ) {
    const enteteArray = document.querySelectorAll( '.entete' );
    let i = 0;
    enteteArray.forEach( a => {
        a.textContent = '';
        a.appendChild( document.createTextNode( enteteTitre[ langueChoisie ].entete[ i ] ) );
        i++;
    } );
}

function setTitre ( langueChoisie ) {
    const titreArray = enteteTitre[ langueChoisie ].titre;
    document.querySelector( '.div__description h2' ).textContent = `${ titreArray.h2_accueil }`;
    document.querySelector( '#competances .container .row h2' ).textContent = `${ titreArray.h2_competance }`;
    document.querySelector( '.frontend h3' ).textContent = `${ titreArray.h3_front_end }`;
    document.querySelector( '.backend h3' ).textContent = `${ titreArray.h3_back_end }`;
    document.querySelector( '.competencesSup h3' ).textContent = `${ titreArray.h3_addSkills }`;
    document.querySelector( '#projets .container h2' ).textContent = `${ titreArray.h2_projet }`;
    document.querySelector( '#contact .container .row .col h2' ).textContent = `${ titreArray.h2_contact }`;
}