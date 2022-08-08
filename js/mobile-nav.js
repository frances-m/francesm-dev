const nav = {};

nav.buttonEl = document.querySelector('.side-nav--mobile');
nav.mobileNavEl = document.querySelector('.header__mobile-nav');
nav.socialLinksEl = document.querySelector('.side-nav--desktop');
nav.navLinksEl = document.querySelectorAll('.header__mobile-nav-links a');

nav.toggleNav = () => {
    nav.mobileNavEl.classList.toggle('open');
    nav.socialLinksEl.classList.toggle('show');
    nav.buttonEl.classList.toggle('slide');
}

nav.init = () => {
    nav.buttonEl.addEventListener('click', nav.toggleNav);

    nav.navLinksEl.forEach((linkEl) => {
        linkEl.addEventListener('click', nav.toggleNav);
    })
}


export default nav;