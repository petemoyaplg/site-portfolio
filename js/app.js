const choixLangue = document.getElementById( 'langue' );


window.addEventListener( 'load', function () {
    fetch( `http://localhost:3000/${ choixLangue.value }` ).then( function ( response ) {
        return response.json();
    } ).then( function ( data ) {
        setInfo( data.infos );
        setSkills(data.skills);
    } );
} );

choixLangue.addEventListener( 'change', function () {
    console.log( choixLangue.value );
} );

function setInfo ( { nom, prenom, description, aPropos } ) {
    const h1 = document.querySelector( '.title__name' );
    const span = document.querySelector( '.dev' );

    h1.textContent = `${ prenom } ${ nom }`;
    h1.appendChild( document.createElement( 'br' ) );
    h1.appendChild( span );
    span.textContent = `${ description }`;

    document.querySelector( '.div__description--para' ).textContent = aPropos;
}