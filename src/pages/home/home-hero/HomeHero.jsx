import { useContext } from "react";
import Header from "../../../components/layout/header/Header";
import ThemeContext from "../../../contexts/ThemeContext";
import styles from "./home-hero.module.css";

const HomeHero = () => {

    const theme = useContext(ThemeContext);

    const bgStyle = {
        backgroundColor: theme.value === "dark" ? "var(--clr-black-pitch)" : "var(--clr-cyan-400)",
    }

    return (
        <section className={styles.hero} style={bgStyle}>
            <Header />
        </section>
    )
};

export default HomeHero;