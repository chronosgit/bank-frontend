import { HStack, VStack } from "@chakra-ui/react";
import HeaderNavRow from "../header-nav-row/HeaderNavRow";
import Logo from "src/components/ui/logo/Logo";
import { navLinksPrimary, navLinksSecondary } from "../api/navLinks";

const HeaderNav = () => {

    return (
        <HStack spacing="4" >
            <Logo size="14" href="/" />

            <VStack align="flex-start">
                <HeaderNavRow links={navLinksPrimary} isPrimary />

                <HeaderNavRow links={navLinksSecondary} />
            </VStack>
        </HStack>
    )
};

export default HeaderNav;