import { HStack } from "@chakra-ui/react";
import LinkPrimary from "src/components/ui/links/link-primary/LinkPrimary";
import Link from "src/components/ui/links/link/Link";

const HeaderNavRow = ({links = [], isPrimary = false}) => {

    return (
        <HStack spacing="3">
        {
            links.map((link, i) => 
                isPrimary 
                ?
                    <LinkPrimary key={i} link={link} />
                :
                    <Link key={i} link={link} />
            )
        }
        </HStack>
    )
};

export default HeaderNavRow;