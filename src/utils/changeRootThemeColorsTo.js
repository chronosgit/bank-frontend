const changeRootThemeColorsTo = (color) => {

    let newMainColor = "";
    let newBgColor = "";

    switch(color) {
        case "light":
            newMainColor = "var(--clr-black)";
            newBgColor = "var(--clr-white)";
            break;
        case "dark":
            newMainColor = "var(--clr-white)";
            newBgColor = "var(--clr-black)";
            break;
        default:
            console.log("Changing root theme variables resulted in error");
            break;
    }

    document.documentElement.style.setProperty('--clr-main', newMainColor);
    document.documentElement.style.setProperty('--clr-bg', newBgColor);
}

export default changeRootThemeColorsTo;