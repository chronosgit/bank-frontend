import { Link as ReactRouterLink } from "react-router-dom";
import { LinkBox, LinkOverlay, Image } from "@chakra-ui/react";

const Logo = ({size = "14", url="/"}) => {

    return (
        <LinkBox as="div" minW={size} >
            <LinkOverlay as={ReactRouterLink} to={url}>
                <Image 
                    src="src/assets/images/logo.png" 
                    alt="logo" 
                    boxSize={size}
                    borderRadius="50%"
                    fallbackSrc="https://via.placeholder.com/56" 
                />
            </LinkOverlay>
        </LinkBox>
    )
};

export default Logo;