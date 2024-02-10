import { Link } from "react-router-dom";
import HeaderSearch from "../header-search/HeaderSearch";
import Moneybag from "../../../ui/moneybag/Moneybag";
import styles from "./header-features.module.css";

const HeaderFeatures = () => {

    return (
        <div className={styles.features}>
            <HeaderSearch />

            <button className={`${styles.btn} ${styles.btn_transparent}`}>
                <Moneybag />

                <Link to="/">Крутая кнопка</Link>
            </button>

            <button className={`${styles.btn} ${styles.btn_red}`}>
                <Link to="/">Тоже кнопка</Link>
            </button>
        </div>
    )
};

export default HeaderFeatures;