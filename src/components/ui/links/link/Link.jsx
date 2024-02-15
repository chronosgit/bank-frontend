import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, Text } from "@chakra-ui/react";

const Link = ({link, parentStyles}) => {

    if(!link) {
        return (
            <Text fontSize="xs" textTransform="uppercase">Битая_ссылка</Text>
        )
    }

    return (
        <ChakraLink 
            as={ReactRouterLink} 
            to={link.url}
            _hover={{
                color: "gray.500",
            }}
            {...parentStyles}
        >
            {link.title || "Ссылка"}
        </ChakraLink>
    )
};

export default Link;