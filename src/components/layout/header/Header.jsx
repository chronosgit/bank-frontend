import { Flex, Spacer, useColorMode } from "@chakra-ui/react";
import HeaderNav from "./header-nav/HeaderNav";
import HeaderFeatures from "./header-features/HeaderFeatures";

const Header = () => {

    // VREMENNO
    const {colorMode, toggleColorMode} = useColorMode();

    return (
        <Flex align="center" >
            <HeaderNav /> 

            <Spacer />
            
            <button onClick={toggleColorMode}>временный тоггл темы</button>

            <Spacer />

            <HeaderFeatures />

            
        </Flex>
    )
};

export default Header;