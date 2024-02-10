import { Link } from "react-router-dom";
import styles from "./header-link-list.module.css";

const HeaderLinkList = ({links, isPrimary = false}) => {

    const linkStyle = isPrimary ? styles.link_primary : styles.link_secondary;

    return (
        <ul className={styles.link_list}>
        {
            links.map((link, i) => 
                <li key={i}>
                    <Link to={link.url} className={linkStyle}>
                        {link.name}
                    </Link>
                </li>
            )
        }
        </ul>
    )
};

export default HeaderLinkList;