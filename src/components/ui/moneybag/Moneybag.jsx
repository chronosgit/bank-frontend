import useImageThemeStyles from "../../../hooks/useImageThemeStyles";
import moneybag from "../../../assets/icons/moneybag.svg";
import styles from "./moneybag.module.css";

const Moneybag = () => {

    const themeStyles = useImageThemeStyles();

    return (
        <img 
            src={moneybag} 
            alt="money bag"
            className={styles.moneybag}
            style={themeStyles} 
        />
    )
};

export default Moneybag;