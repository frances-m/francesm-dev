const nav = {};

nav.buttonEl = document.querySelector('.side-nav--mobile');
nav.mobileNavEl = document.querySelector('.header__mobile-nav');
nav.socialNavEl = document.querySelector('.side-nav--desktop');
nav.socialLinkEls = document.querySelectorAll('.side-nav--desktop a');
nav.navLinksEls = document.querySelectorAll('.header__mobile-nav-links a');

nav.isMobileView;

nav.lowerTabIndex = (el) => {
    el.setAttribute("tabindex", "-1");
}

nav.resetTabIndex = (el) => {
    el.setAttribute("tabindex", "0");
}

nav.toggleNav = () => {
    nav.mobileNavEl.classList.toggle('open');
    nav.socialNavEl.classList.toggle('show');
    nav.buttonEl.classList.toggle('slide');

    if (nav.mobileNavEl.classList.contains('open')) {
        nav.navLinksEls.forEach((linkEl) => nav.resetTabIndex(linkEl));
        nav.socialLinkEls.forEach((linkEl) => nav.resetTabIndex(linkEl));
    } else {
        nav.navLinksEls.forEach((linkEl) => nav.lowerTabIndex(linkEl));
        nav.socialLinkEls.forEach((linkEl) => nav.lowerTabIndex(linkEl));
    }
}

nav.setSocialTabIndex = () => {
    if (window.innerWidth >= 1020 && (nav.isMobileView || nav.isMobileView == undefined)) {
        nav.isMobileView = false;
        nav.socialLinkEls.forEach((linkEl) => nav.resetTabIndex(linkEl));
    } else if (window.innerWidth < 1020 && !nav.isMobileView) {
        nav.isMobileView = true;
        nav.socialLinkEls.forEach((linkEl) => nav.lowerTabIndex(linkEl));
    }
}

nav.init = () => {
    nav.buttonEl.addEventListener('click', nav.toggleNav);

    nav.navLinksEls.forEach((linkEl) => {
        nav.lowerTabIndex(linkEl);
        linkEl.addEventListener('click', nav.toggleNav);
    });

    nav.setSocialTabIndex();
    window.onresize = nav.setSocialTabIndex;
}


export default nav;