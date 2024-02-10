import Logo from "../../ui/logo/Logo";
import styles from "./header.module.css";

const Header = () => {

    return (
        <header className={styles.header}>
            <Logo />
        </header>
    )
}

export default Header;