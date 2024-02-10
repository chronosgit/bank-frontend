import styles from "./logo.module.css";
import logo from "../../../assets/images/logo.png";

const Logo = () => {

    return (
        <img 
            src={logo} 
            alt="bank logo"
            className={styles.img} 
        />
    )
}

export default Logo;