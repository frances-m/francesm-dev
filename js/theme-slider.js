const themes = {};

themes.sliderEl = document.querySelector('#theme-slider');
themes.bodyEl = document.querySelector('body');
themes.theme = ""

themes.setTheme = () => {

    switch (themes.sliderEl.value) {
        case '0': 
            themes.theme = "light";
            break;
        case '2':
            themes.theme = "dark";
            break;
        default:
            themes.theme="main";
    }

    themes.bodyEl.className = "";
    themes.bodyEl.classList.add(`theme--${themes.theme}`);

    if (window.localStorage) {
        window.localStorage.theme = themes.theme;
    }
}

themes.getUserTheme = () => {
    if (window.localStorage.theme) {
        themes.theme = window.localStorage.theme;

        switch (themes.theme) {
            case "light": 
                themes.sliderEl.value = '0';
                break;
            case "dark":
                themes.sliderEl.value = '2';
                break;
            default:
                themes.sliderEl.value = '1';
        }
    }

    themes.setTheme();
}


themes.init = () => {
    themes.sliderEl.addEventListener('change', themes.setTheme);
    themes.getUserTheme();
}

export default themes;