//import { tns } from "../node_modules/tiny-slider/src/tiny-slider.js";
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
        liveUrl: "https://francesm-budget-app.netlify.app/",
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

carousel.isMobileView = false;

carousel.createCarousel = () => {
    carousel.populateCarousel();

    const carouselOptions = tns({
        container: '.projects__carousel',
        items: 1,
        center: true,
        loop: true,
        speed: 400,
        mouseDrag: true,
        gutter: 20,
        controls: true,
        prevButton: carousel.leftButtonEl,
        nextButton: carousel.rightButtonEl,
        nav: true,
        navPosition: 'bottom',
        //navAsThumbnails: true,
        autoWidth: true,
        responsive: {
            
        }
    })
}

carousel.populateCarousel = () => {
    carousel.carouselEl.innerHTML = '';
    
    carousel.projects.forEach((project) => {
        //const projectPreview = carousel.isMobileView ? project.mobilePreview : project.desktopPreview;
        const projectPreview = project.mobilePreview;
        const projectListEl = document.createElement("li");
        projectListEl.classList.add("projects__project");

        projectListEl.innerHTML = `
            <div class="projects__img-container">
                <img src=${projectPreview} alt=${project.alt} />
            </div> <!-- END project__img-container -->
            <div class="projects__text-bg projects__${project.id}">
                <div class="projects__text-container">
                    <button class="projects__open-text" value=${project.id}>
                        <span></span>
                    </button>
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
    console.log(window.innerWidth);
    if (carousel.isMobileView && window.innerWidth > 700) {
        carousel.isMobileView = false;
        carousel.populateCarousel();
    } else if (!carousel.isMobileView && window.innerWidth < 700) {
        carousel.isMobileView = true;
        carousel.populateCarousel();
    }
    console.log(carousel.isMobileView);
}

carousel.openProjectDetails = ({currentTarget}) => {
    const target = currentTarget.value;
    const targetEl = document.querySelectorAll(`.projects__${target}`);
    targetEl.forEach((target) => {
        target.classList.add('active');
    });
    console.log(document.querySelector(`.projects__${target}`));
}

carousel.createProjectButtons = () => {
    document.querySelectorAll('.projects__open-text').forEach((button) => {
        button.addEventListener('click', (e) => carousel.openProjectDetails(e));
    })
}

carousel.init = () => {
    // carousel.setView();
    // window.addEventListener('resize', carousel.setView());
    carousel.createCarousel();
    carousel.createProjectButtons();
}

export default carousel;