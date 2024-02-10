import useImageThemeStyles from "../../../../hooks/useImageThemeStyles";
import search from "../../../../assets/icons/search.png";
import styles from "./header-search.module.css";

const HeaderSearch = () => {

    const themeStyles = useImageThemeStyles();

    const openModal = () => {
        
    };

    return (
        <button onClick={openModal}>
            <img
                src={search}
                alt="magnifying glass"
                className={styles.search}
                style={themeStyles}
            />
        </button>
    )
};

export default HeaderSearch;