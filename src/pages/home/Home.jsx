import HomeHero from "./home-hero/HomeHero";
import styles from "./home.module.css";

const Home = () => {

    return (
        <div className={styles.page}>
            <HomeHero />
        </div>
    )
};

export default Home;