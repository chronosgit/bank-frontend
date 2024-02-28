import Link from "../link/Link";

const LinkHeading = ({linkText, linkUrl, size = "40"}) => {

    const headingStyles = {
        fontSize: size,
        fontWeight: "bold",
        lineHeight: "1.2", // kinda weird value
    }

    return (
        <Link 
            linkText={linkText} 
            linkUrl={linkUrl} 
            parentStyles={headingStyles} 
        />
    )
};

export default LinkHeading;