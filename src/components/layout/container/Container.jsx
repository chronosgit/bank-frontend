import { Container as ChakraComponent } from "@chakra-ui/react";

const Container = ({children}) => {

    return (
        <ChakraComponent maxW="6xl">
            {children}
        </ChakraComponent>
    );
};

export default Container;