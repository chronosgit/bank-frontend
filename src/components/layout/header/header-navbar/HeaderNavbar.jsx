import Logo from "../../../ui/logo/Logo";
import HeaderLinkList from "../header-link-list/HeaderLinkList";
import styles from "./header-navbar.module.css";

const HeaderNavbar = () => {

    const linksPrimary = [
        {
            url: "/",
            name: "Ссылка1",
        },
        {
            url: "/",
            name: "Ссылка2",
        },
        {
            url: "/",
            name: "Ссылка3",
        },
    ]

    const linksSecondary = [
        {
            url: "/",
            name: "Ссылочка1",
        },
        {
            url: "/",
            name: "Ссылочка2",
        },
        {
            url: "/",
            name: "Ссылочка3",
        },
    ];

    return (
        <nav className={styles.navbar}>
            <Logo />

            <div className={styles.rows}>
                <HeaderLinkList links={linksPrimary} isPrimary />

                <HeaderLinkList links={linksSecondary} />
            </div>
        </nav>
    )
};

export default HeaderNavbar;