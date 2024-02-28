import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, Text } from "@chakra-ui/react";

const Link = ({linkText = "Ссылка", linkUrl, parentStyles}) => {

    if(!linkUrl) {
        return (
            <Text fontSize="xs" textTransform="uppercase">Пустая_ссылка</Text>
        )
    }

    return (
        <ChakraLink 
            as={ReactRouterLink} 
            to={linkUrl}
            _hover={{
                color: "gray.500",
            }}
            {...parentStyles}
        >
            {linkText}
        </ChakraLink>
    )
};

export default Link;