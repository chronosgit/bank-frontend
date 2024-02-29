import { Flex, Spacer } from "@chakra-ui/react";
import HeaderNav from "./header-nav/HeaderNav";
import HeaderFeatures from "./header-features/HeaderFeatures";

const Header = () => {

    return (
        <Flex align="center" >
            <HeaderNav /> 

            <Spacer />

            <HeaderFeatures />
        </Flex>
    )
};

export default Header;