const carousel = {};

carousel.projects = [
    {
        imgSrc: "./assets/images/projects/moneta.png",
        alt: "screenshot of a budgeting app",
        title: "Budgeting App",
        skillsUsed: "React, Firebase",
        description: "",
        liveUrl: "https://francesm-budget-app.netlify.app/",
        repoUrl: "https://github.com/frances-m/budget-app"
    },
    {
        imgSrc: "./assets/images/projects/calculator-app.png",
        alt: "screenshot of a calculator app",
        title: "Calculator App",
        skillsUsed: "HTML, SCSS, JavaScript, jQuery",
        description: "A fully functional calculator app with keyboard functionality. This design comes from <a href='https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29'>Frontend Mentor</a> and features several themes. Once the user selects a theme, the app stores the users preferred theme and automatically displays it on subsequent visits",
        liveUrl: "https://francesm-calculator-app.netlify.app/",
        repoUrl: "https://github.com/frances-m/calculator-app"
    },
    {
        imgSrc: "./assets/images/projects/simpsons-trivia.png",
        alt: "screenshot of a simpsons trivia app",
        title: "Simpsons Quote Trivia",
        skillsUsed: "HTML, CSS, JavaScript, REST API",
        description: "A paired programming project, made at <a href='https://junocollege.com/'>Juno College</a>. This is a fun trivia game made using data from a Simpsons Quote API. Users are presented with a quote and asked to select the character that the quote belongs to. The users score is tracked and a final score is presented at the end.",
        liveUrl: "https://simpsons-quote-trivia.netlify.app/",
        repoUrl: "https://github.com/paired-project/simpsons-quote-trivia"
    },
    {
        imgSrc: "./assets/images/projects/creative-design.png",
        alt: "screenshot of a design agency website",
        title: "Creative Design",
        skillsUsed: "HTML, SCSS, JavaScript",
        description: "A responsive multi-page site following design documents provided by <a href='https://junocollege.com/'>Juno College</a>. Some of the functionality highlights include the main page carousel, the blog page comments form, and the mobile nav.",
        liveUrl: "https://francesm-creative-design.netlify.app/",
        repoUrl: "https://github.com/frances-m/creative-design-site"
    }
];

carousel.init = () => {

}

export default carousel;