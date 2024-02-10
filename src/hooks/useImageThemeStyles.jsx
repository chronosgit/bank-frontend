import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

const useImageThemeStyles = () => {
    const theme = useContext(ThemeContext);

    const themeStyles = {
        filter: theme.value === "dark" ? "invert(1)" : "none",
    }

    return themeStyles;
};

export default useImageThemeStyles;