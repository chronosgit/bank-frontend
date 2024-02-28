import Link from "../link/Link";

const LinkPrimary = ({linkText, linkUrl}) => {

    const primaryStyles = {
        position: "relative",
        fontSize: "xs",
        fontWeight: "bold",
        textTransform: "uppercase",
        textDecoration: "underline",
    }

    return (
        <Link 
            linkText={linkText} 
            linkUrl={linkUrl} 
            parentStyles={primaryStyles} 
        />
    )
};

export default LinkPrimary;