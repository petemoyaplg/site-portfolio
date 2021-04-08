const navSlide = () => {
    const burger = document.querySelector( '.burger' );
    const nav = document.querySelector( '.navbar--nav' );
    const navLinks = document.querySelectorAll( '.navbar--nav li' );

    burger.addEventListener( 'click', () => {
        nav.classList.toggle( 'nav-active' );
        //link animation
        navLinks.forEach( ( link, index ) => {
            if ( link.style.animation ) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${ index / 7 }s`;
            }
        } );
        //burger animation
        burger.classList.toggle( 'toggle' );
    } );
}

navSlide();