import Link from "../link/Link";

const LinkPrimary = ({link}) => {

    const primaryStyles = {
        position: "relative",
        fontSize: "xs",
        fontWeight: "bold",
        textTransform: "uppercase",
        textDecoration: "underline",
    }

    return (
        <Link link={link} parentStyles={primaryStyles} />
    )
};

export default LinkPrimary;