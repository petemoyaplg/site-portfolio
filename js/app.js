const choixLangue = document.getElementById( "langue" );
const detailleLangage = document.querySelector( ".detaille__langage span" );
const listLangage = [ "HTML 5", "CSS 3", "Javascript", "Java" ];
//
const URLmockapi = "https://6070744785c3f000174702ca.mockapi.io/gaspard/v1/";

window.addEventListener( "load", function () {
  fecth( choixLangue.value );
} );

choixLangue.addEventListener( "change", function () {
  fecth( choixLangue.value );
} );

function fecth ( langue ) {
  fetch( `${ URLmockapi }${ langue }` )
    .then( function ( response ) {
      return response.json();
    } )
    .then( function ( data ) {
      setInfo( data[ 0 ].infos );
      setSkills( data[ 0 ].skils );
      setProjet( data[ 0 ].projets );
      setContact( data[ 0 ].contacts );
    } );
}

function setInfo ( { nom, prenom, description, competance, aPropos } ) {
  const h1 = document.querySelector( ".title__name" );
  let span = document.querySelector( ".dev" );

  h1.textContent = `${ prenom } ${ nom }`;
  h1.appendChild( document.createElement( "br" ) );
  h1.appendChild( span );
  span.textContent = `${ description }`;

  const paraCompetance = document.querySelector( ".detaille__langage" );
  paraCompetance.textContent = `${ competance } `;
  paraCompetance.appendChild( detailleLangage );

  document.querySelector( ".div__description--para" ).textContent = aPropos;
}

function setSkills ( skills ) {
  document.querySelector( ".para__experiance" ).textContent =
    skills[ 0 ].commentaire;

  const frontSkillsArray = skills[ 1 ].frontend;
  const front1 = document.querySelector( ".front1" );
  const front2 = document.querySelector( ".front2" );

  removeAllChild( front1 );
  removeAllChild( front2 );

  for ( let i = 0; i < 3; i++ ) {
    setSkillsOnUl( front1, frontSkillsArray[ i ] );
    setSkillsOnUl( front2, frontSkillsArray[ 3 + i ] );
  }

  const backSkillsArray = skills[ 2 ].backend;
  const back1 = document.querySelector( ".back1" );
  const back2 = document.querySelector( ".back2" );

  removeAllChild( back1 );
  removeAllChild( back2 );

  for ( let i = 0; i < 2; i++ ) {
    setSkillsOnUl( back1, backSkillsArray[ i ] );
    setSkillsOnUl( back2, backSkillsArray[ 2 + i ] );
  }
  //
  const addSkillsArray = skills[ 3 ].competencesSup;
  const addSkils1 = document.querySelector( ".addSkils1" );
  const addSkils2 = document.querySelector( ".addSkils2" );

  removeAllChild( addSkils1 );
  removeAllChild( addSkils2 );

  for ( let i = 0; i < 2; i++ ) {
    setSkillsOnUl( addSkils1, addSkillsArray[ i ] );
  }

  setSkillsOnUl( addSkils2, addSkillsArray[ 2 ] );
}

function setProjet ( projets ) {
  const projetLinkArray = document.querySelectorAll( ".link__projet" );
  const projetImgArray = document.querySelectorAll( ".card-img-top" );
  const projetTitleArray = document.querySelectorAll( ".card-title" );

  for ( let i = 0, c = projetLinkArray.length; i < c; i++ ) {
    const projetLink = projetLinkArray[ i ];
    const projetImg = projetImgArray[ i ];
    const projetTitle = projetTitleArray[ i ];

    projetLink.setAttribute( "href", projets[ i ].href );
    projetLink.setAttribute( "target", "blank" );

    projetImg.setAttribute( "src", projets[ i ].src );
    projetImg.setAttribute( "alt", projets[ i ].alt );

    removeAllChild( projetLink );
    projetLink.appendChild( projetImg );

    projetTitle.textContent = projets[ i ].titre;
  }
}

function setContact ( contacts ) {
  const liArray = document.querySelectorAll( '.contact--item' );
  liArray.forEach( li => { removeAllChild( li ); } );
  for ( let i = 0, c = liArray.length; i < c; i++ ) {
    setConatctOnLi( liArray[ i ], contacts[ i ] );
  }
}

function removeAllChild ( element ) {
  while ( element.firstChild ) {
    element.removeChild( element.firstChild );
  }
}

function setSkillsOnUl ( ul, skill ) {
  const li = document.createElement( "li" );
  const img = document.createElement( "img" );

  img.setAttribute( "src", `${ skill.src }` );
  img.setAttribute( "alt", `${ skill.alt }` );
  img.setAttribute( "width", "70" );
  img.setAttribute( "height", "70" );
  li.appendChild( img );
  li.appendChild( document.createElement( "br" ) );
  li.appendChild( document.createTextNode( `${ skill.text }` ) );

  ul.appendChild( li );
}

function setConatctOnLi ( li, contact ) {
  const link = document.createElement( 'a' );
  const img = document.createElement( 'img' );

  img.setAttribute( "src", `${ contact.src }` );
  img.setAttribute( "alt", `${ contact.alt }` );
  img.setAttribute( "width", "50" );
  img.setAttribute( "height", "50" );

  link.setAttribute( 'href', contact.href );
  link.setAttribute( "target", "blank" );
  link.appendChild( img );

  li.appendChild( link );
}

/**
 * sdcdvsdvsvdzdv
 * !sdvdvdvedfv
 * ?dvedvefvefvev
 * @sdvsdvsfvefbefb
 * *edfvefbefbebrb
 * dfvedfbefb rbrb
 * edfbvefbefb
 */

//let compteurMot = 0;

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

    detailleLangage.textContent = "";
    // setTimeout( () => { console.log( compteurMot ) }, 30000 );
  }
  if ( compteurMot == listLangage.length ) {
    compteurMot = 0;
  }
  // profession.innerHTML += `${MyProfessions[index1][index2]}`
  detailleLangage.appendChild(
    document.createTextNode( `${ listLangage[ compteurMot ][ compteurLettre ] }` )
  );
  compteurLettre++;
}, 200 );
