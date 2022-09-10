const carousel = {};

carousel.projects = [
    {
        id: "moneta",
        desktopPreview: "./assets/images/projects/moneta.png",
        mobilePreview: "./assets/images/projects/moneta-mobile.png",
        alt: "screenshot of a budgeting app",
        title: "Budgeting App",
        skillsUsed: "React, Firebase, CSS",
        description: "Created at <a href='https://junocollege.com/' target='_blank' rel='noopener noreferrer'>Juno College</a> - a budgeting app with persistent data that allows users to create an account and save their personal budget.",
        liveUrl: "https://moneta-francesm.netlify.app/",
        repoUrl: "https://github.com/frances-m/budget-app"
    },
    {
        id: "calc",
        desktopPreview: "./assets/images/projects/calculator-app.png",
        mobilePreview: "./assets/images/projects/calculator-app-mobile.png",
        alt: "screenshot of a calculator app",
        title: "Calculator App",
        skillsUsed: "jQuery, JavaScript, SCSS",
        description: "A fully functional calculator app with keyboard functionality and multiple themes. This design comes from <a href='https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29' target='_blank' rel='noopener noreferrer'>Frontend Mentor</a>.",
        liveUrl: "https://francesm-calculator-app.netlify.app/",
        repoUrl: "https://github.com/frances-m/calculator-app"
    },
    {
        id: "simpsons",
        desktopPreview: "./assets/images/projects/simpsons-trivia.png",
        mobilePreview: "./assets/images/projects/simpsons-trivia-mobile.png",
        alt: "screenshot of a simpsons trivia app",
        title: "Simpsons Trivia",
        skillsUsed: "REST API, JavaScript",
        description: "A paired programming project, made at <a href='https://junocollege.com/' target='_blank' rel='noopener noreferrer'>Juno College</a>. A fun trivia game made using data from a Simpsons Quote API! Users are presented with a quote and asked to select the character that the quote belongs to.",
        liveUrl: "https://simpsons-quote-trivia.netlify.app/",
        repoUrl: "https://github.com/paired-project/simpsons-quote-trivia"
    },
    {
        id: "creative",
        desktopPreview: "./assets/images/projects/creative-design.png",
        mobilePreview: "./assets/images/projects/creative-design-mobile.png",
        alt: "screenshot of a design agency website",
        title: "Creative Design",
        skillsUsed: "JavaScript, SCSS, HTML",
        description: "A responsive multi-page site following design documents provided by <a href='https://junocollege.com/' target='_blank' rel='noopener noreferrer'>Juno College</a>. Some of the functionality highlights include the blog page comments form and the mobile nav.",
        liveUrl: "https://francesm-creative-design.netlify.app/",
        repoUrl: "https://github.com/frances-m/creative-design-site"
    }
];

carousel.rightButtonEl = document.querySelector(".projects__carousel-btn--right");
carousel.leftButtonEl = document.querySelector(".projects__carousel-btn--left");
carousel.carouselEl = document.querySelector(".projects__carousel");
carousel.textContainerEls;

carousel.isMobileView = false;
carousel.detailsDefaultPos = 285;
carousel.detailsEndPos = 70;

carousel.createCarousel = () => {
    carousel.populateCarousel();

    const carouselOptions = tns({
        container: '.projects__carousel',
        items: 1,
        center: true,
        loop: true,
        speed: 400,
        gutter: 20,
        controls: true,
        prevButton: carousel.leftButtonEl,
        nextButton: carousel.rightButtonEl,
        nav: true,
        navPosition: 'bottom',
        swipeAngle: 30,
        preventScrollOnTouch: "force",
        autoWidth: true,
        arrowKeys: true
    });

    carousel.setView();
}

carousel.populateCarousel = () => {
    carousel.carouselEl.innerHTML = '';
    
    carousel.projects.forEach((project) => {
        const projectListEl = document.createElement("li");
        projectListEl.classList.add("projects__project");

        projectListEl.innerHTML = `
            <div class="projects__img-container">
                <img src=${project.desktopPreview} alt=${project.alt} class="projects__preview--desktop projects__preview ${carousel.isMobileView ? "hide" : ""}" />
                <img src=${project.mobilePreview} alt=${project.alt} class="projects__preview--mobile projects__preview ${!carousel.isMobileView ? "hide" : ""}" />
            </div> <!-- END project__img-container -->
            <div class="projects__text-bg projects__${project.id}">
                <button class="projects__details-btn">
                    <span class="projects__details-btn--open">open</span>
                    <span class="projects__details-btn--close">close</span>
                </button>
                <div class="projects__text-container" style="top: ${carousel.detailsDefaultPos}px">
                    <div class="projects__project-header" value=${project.id}>
                        <span></span>
                    </div>
                    <h5>${project.title}</h5>
                    <p class="projects__tech">
                        [${project.skillsUsed}]
                    </p>
                    <p class="projects__description">
                        ${project.description}
                    </p>
                    <div class="projects__btn-container">
                        <a href=${project.liveUrl} class="button" target="_blank" rel="noopener noreferrer">View Live</a>
                        <a href=${project.repoUrl} class="button" target="_blank" rel="noopener noreferrer">View Repo</a>
                    </div> <!-- END projects__btn-container -->
                </div> <!-- END projects__text-container -->
            </div> <!-- END projects__text-bg -->
        `;

        carousel.carouselEl.append(projectListEl);
    });
}

carousel.setView = () => {
    if (carousel.isMobileView && window.innerWidth >= 700) {
        carousel.isMobileView = false;
        carousel.displayPreview();
    } else if (!carousel.isMobileView && window.innerWidth < 700) {
        carousel.isMobileView = true;
        carousel.displayPreview();
    }

    if (carousel.isMobileView) {
        document.querySelectorAll('.projects__details-btn').forEach((btn) => {
            btn.parentNode.classList.remove('hide');
            btn.classList.remove('slide');
        });
    } else {
        document.querySelectorAll('.projects__text-bg').forEach((bgEl) => {
            bgEl.classList.add('hide');
            bgEl.style.cssText = "";
        });
    }
}

carousel.displayPreview = () => {
    const currentView = carousel.isMobileView ? "mobile" : "desktop";

    document.querySelectorAll('.projects__preview').forEach((preview) => {
        preview.classList.contains(`projects__preview--${currentView}`) ?
        preview.classList.remove('hide') : 
        preview.classList.add('hide');
    });
}

carousel.openProjectDetails = (elmnt) => {
    let pos1 = 0, pos2 = 0;
    let elmntTop = 0;
    const bgEl = elmnt.parentNode;
    // carousel.detailsEndPos = carousel.isMobileView ? 70 : 130;

    const midBgStyles = `
        background: rgba( 255, 255, 255, 0.1 );
        backdrop-filter: blur( 1px );
        -webkit-backdrop-filter: blur( 1px );
    `

    const endBgStyles = `
        background: rgba( 255, 255, 255, 0.2 );
        backdrop-filter: blur( 2px );
        -webkit-backdrop-filter: blur( 2px );
    `

    const closeDragElement = (header) => {
        elmntTop = parseInt(elmnt.style.top);

        if (elmntTop > 160) {
            elmnt.style.top = `${carousel.detailsDefaultPos}px`;
            bgEl.style.cssText = "";
        } else {
            elmnt.style.top = `${carousel.detailsEndPos}px`;
            bgEl.style.cssText = endBgStyles;
        }

        window.onscroll = null;
        document.onmouseup = null;
        document.ontouchend = null;
        document.onmousemove = null;
        document.ontouchmove = null;

        header.style.cursor = "grab";
    }

    const elementDrag = (e) => {
        e.preventDefault();
        elmntTop = parseInt(elmnt.style.top);

        try {
            pos1 = pos2 - (e.clientY || e.touches[0].clientY);
            pos2 = e.clientY || e.touches[0].clientY;
    
            if (elmntTop < carousel.detailsEndPos) {
                elmnt.style.top = `${carousel.detailsEndPos}px`;
            } else if (elmntTop > carousel.detailsDefaultPos) {
                elmnt.style.top = `${carousel.detailsDefaultPos}px`;
            } else {
                elmnt.style.top = `${elmntTop - pos1}px`;
            }
    
            if (elmntTop > 160) {
                bgEl.style.cssText = "";
            } else if (elmntTop <= 160) {
                bgEl.style.cssText = endBgStyles;
            }
            
        } catch(err){
            // occasionally, the attempt to reassign pos1 will throw an error, "e.touches[0].clientY is undefined" - this seems to only happen when the `top` property is less than 0, but not consistently
            // this doesn't seem to be an issue as it still sets pos1 to e.clientY like it usually would (if it's not doing it on that run, it does it the next time the user moves their mouse and the event listener continues to function properly)
        }
    }

    const dragMouseDown = (e) => {
        e.preventDefault();
        const header = e.currentTarget;
        e.currentTarget.style.cursor = "grabbing";
        
        let vertScroll = window.pageYOffset || document.documentElement.scrollTop;
        let horzScroll = window.pageXOffset || document.documentElement.scrollLeft;

        window.onscroll = () => {
            window.scrollTo(vertScroll, horzScroll);
        }

        pos2 = e.clientY || e.touches[0].clientY;

        document.onmouseup = () => closeDragElement(header);
        document.ontouchend = () => closeDragElement(header);
        document.onmousemove = elementDrag;
        document.ontouchmove = elementDrag, {passive: false};
    }


    elmnt.children[0].addEventListener("mousedown", dragMouseDown);
    elmnt.children[0].addEventListener("touchstart", dragMouseDown);

}

carousel.createProjectButtons = () => {
    carousel.textContainerEls = document.querySelectorAll(".projects__text-container");
    carousel.textContainerEls.forEach((textContainer) => {
        carousel.openProjectDetails(textContainer);
    });

    document.querySelectorAll('.projects__details-btn').forEach((btn) => {
        btn.onclick = () => {
            btn.parentNode.classList.toggle('hide');
            setTimeout(() => {
                btn.classList.toggle('slide');
            }, 1200);
        }
    });
}

carousel.init = () => {
    window.addEventListener('resize', carousel.setView);
    carousel.createCarousel();
    carousel.createProjectButtons();
}

export default carousel;