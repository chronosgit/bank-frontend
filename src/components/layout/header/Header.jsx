import HeaderFeatures from "./header-features/HeaderFeatures";
import HeaderNavbar from "./header-navbar/HeaderNavbar";
import styles from "./header.module.css";

const Header = () => {

    return (
        <header className={styles.header}>
            <HeaderNavbar />

            <HeaderFeatures />
        </header>
    )
};

export default Header;