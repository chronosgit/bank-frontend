import { Flex, Image, Spacer, Text } from "@chakra-ui/react";
import ButtonRed from "src/components/ui/buttons/button-yellow/ButtonYellow";
import LinkHeading from "src/components/ui/links/link-heading/LinkHeading";

const GalleryItem = ({item}) => {

    return (
        <Flex align="center">
            <Flex
                maxW="40%"
                flexDirection="column"
                gap="8"
            >
                <LinkHeading 
                    linkText={item.title} 
                    linkUrl={item.url} 
                    size="40" 
                />

                <Text fontSize="lg" userSelect="none">
                    {item.descr}
                </Text>

                <ButtonRed 
                    text={item.btnText} 
                    maxW="40" 
                    size="lg" 
                    fontSize="md"  
                />
            </Flex>

            <Spacer />

            <Image
                src={item.bgUrl}
                alt=""
            />
        </Flex>
    )
};

export default GalleryItem;