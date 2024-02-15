import { Button, HStack, Box } from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";
import useOppositeThemeColors from "src/hooks/useOppositeThemeColors";
import SearchExpandable from "src/components/ui/search-expandable/SearchExpandable";

const HeaderFeatures = () => {

    const oppositeColors = useOppositeThemeColors();

    return (
        <HStack spacing="4" transform="translateY(-0.4rem)">
            <Box transform="translateY(-2px)">
                <SearchExpandable size="5" />
            </Box>

            <Button 
                variant="outline"
                size="sm"
                fontSize="sm"
                borderColor={oppositeColors}
                leftIcon={<PlusSquareIcon boxSize="4" />}
            >
                Присоединиться
            </Button>

            <Button
                size="sm"
                color="white"
                bgColor="red.500"
                fontSize="sm"
                _hover={{
                    bgColor: "red.600",
                }}
            >
                Вторая кнопка
            </Button>
        </HStack>
    )
};

export default HeaderFeatures;