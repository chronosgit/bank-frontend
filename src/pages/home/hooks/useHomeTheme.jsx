import { useState } from "react";

const useHomeTheme = () => {
    const colors = {
        lightModeColor: "black",
        lightModeBgColor: "hsl(182, 84%, 88%)", // light-blue
        darkModeColor: "white",
        darkModeBgColor: "black",
    };

    const [theme, setTheme] = useState({
        type: "dark",
        color: colors.darkModeColor,
        bgColor: colors.darkModeBgColor
    });

    const toggleTheme = () => {
        if(theme.type === "dark") {
            setTheme({
                type: "light",
                color: colors.lightModeColor,
                bgColor: colors.lightModeBgColor
            })
        } else if(theme.type === "light") {
            setTheme({
                type: "dark",
                color: colors.darkModeColor,
                bgColor: colors.darkModeBgColor
            })
        } else {
            console.log(`Invalid theme type '${theme.type}' has been detected in home theme context`);
        }
    };

    return [theme, toggleTheme];
};

export default useHomeTheme;