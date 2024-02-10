import { useState } from "react";
import changeRootThemeColorsTo from "../utils/changeRootThemeColorsTo";

const useTheme = () => {
    const [value, setValue] = useState("dark");

    const toggleTheme = () => {
        switch(value) {
            case "light":
                setValue("dark");
                changeRootThemeColorsTo("dark");
                break;
            case "dark":
                setValue("light");
                changeRootThemeColorsTo("light");
                break;
            default:
                console.log("Theme toggling resulted in error");
                break;
        }
    }

    const theme = {
        value: value,
        toggler: toggleTheme,
    };

    return [theme];
};

export default useTheme;