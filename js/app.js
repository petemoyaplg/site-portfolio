const choixLangue = document.getElementById( 'langue' );
const paraCompetance = document.querySelector( '.detaille__langage' );
const detailleLangage = document.querySelector( '.detaille__langage span' );
const listLangage = [ 'HTML5', 'CSS3', 'Javascript', 'Java' ];


window.addEventListener( 'load', function () {
    fetch( `https://my-json-server.typicode.com/petemoyaplg/site-portfolio/${ choixLangue.value }` ).then( function ( response ) {
        return response.json();
    } ).then( function ( data ) {
        setInfo( data.infos );
        setSkills( data.skills );
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
    console.log( competance );
    paraCompetance.textContent = `${ competance } `;

    document.querySelector( '.div__description--para' ).textContent = aPropos;

}
function setSkills () {

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