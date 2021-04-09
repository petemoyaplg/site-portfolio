const choixLangue = document.getElementById( 'langue' );
const detailleLangage = document.querySelector( '.detaille__langage span' );
const listLangage = [ 'HTML5', 'CSS3', 'Javascript', 'Java' ];
//



window.addEventListener( 'load', function () {
    fetch( `https://my-json-server.typicode.com/petemoyaplg/site-portfolio/${ choixLangue.value }` ).then( function ( response ) {
        return response.json();
    } ).then( function ( data ) {
        setInfo( data.infos );
        setSkills( data.skils );
    } );
} );

choixLangue.addEventListener( 'change', function () {
    console.log( choixLangue.value );
} );

function setInfo ( { nom, prenom, description, competance, aPropos } ) {

    const h1 = document.querySelector( '.title__name' );
    let span = document.querySelector( '.dev' );

    h1.textContent = `${ prenom } ${ nom }`;
    h1.appendChild( document.createElement( 'br' ) );
    h1.appendChild( span );
    span.textContent = `${ description }`;

    const paraCompetance = document.querySelector( '.detaille__langage' );
    paraCompetance.textContent = `${ competance } `;
    paraCompetance.appendChild( detailleLangage );

    document.querySelector( '.div__description--para' ).textContent = aPropos;

}
function setSkills ( skills ) {
    document.querySelector( '.para__experiance' ).textContent = skills[ 0 ].commentaire;
    const frontSkillsArray = skills[ 0 ].frontend;
    const front1 = document.querySelector( '.front1' );
    const front2 = document.querySelector( '.front2' );
    for ( let i = 0; i < 3; i++ ) {
        let li = document.createElement( 'li' );
        let img = document.createElement( 'img' );
        img.setAttribute( 'src', `${frontSkillsArray[i]}` );
        img.setAttribute( 'alt', '' );
        img.setAttribute( 'width', '70' );
        img.setAttribute( 'height', '70' );
        li.appendChild( img );
        li.appendChild( document.createElement( 'br' ) );
        li.appendChild( document.createTextNode( '' ) );
        front1.appendChild( li );
    }
}

// let compteurMot = 0;
// let compteurLettre = 0;
// let texte = '';
// let para = detailleLangage.textContent;

// setInterval( () => {

//     detailleLangage.textContent += ` ${ listLangage[ compteurMot ][ compteurLettre ] }`;;

//     if ( compteurLettre <= listLangage[ compteurMot ].length ) {
//         compteurLettre++;
//     }
//     if ( compteurLettre === listLangage[ compteurMot ].length ) {
//         detailleLangage.textContent = '';
//         if ( compteurMot === listLangage.length - 1 ) {
//             compteurMot = 0;
//             compteurLettre = 0;
//             // detailleLangage.textContent = '';
//         }
//         else {
//             compteurMot++;
//             compteurLettre = 0;
//             // detailleLangage.textContent += ', ';
//         }
//     }
// }, 1000 );

let compteurMot = 0;
let compteurLettre = 0;

window.setInterval( () => {
    if ( compteurLettre == listLangage[ compteurMot ].length ) {
        compteurLettre = 0;
        compteurMot++;

        detailleLangage.textContent = '';
        // setTimeout( () => { console.log( compteurMot ) }, 30000 );
    }
    if ( compteurMot == listLangage.length ) {
        compteurMot = 0;

    }
    // profession.innerHTML += `${MyProfessions[index1][index2]}`
    detailleLangage.appendChild( document.createTextNode( `${ listLangage[ compteurMot ][ compteurLettre ] }` ) )
    compteurLettre++;
}, 200 );