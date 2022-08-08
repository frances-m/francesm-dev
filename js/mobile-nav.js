const nav = {};

nav.buttonEl = document.querySelector('.side-nav--mobile');
nav.mobileNavEl = document.querySelector('.header__mobile-nav');
nav.socialLinksEl = document.querySelector('.side-nav--desktop');

nav.openNav = () => {
    nav.buttonEl.addEventListener('click', () => {
        nav.mobileNavEl.classList.toggle('open');
        nav.socialLinksEl.classList.toggle('show');
        nav.buttonEl.classList.toggle('slide');
    });
}


nav.init = () => {
    nav.openNav();
}


export default nav;