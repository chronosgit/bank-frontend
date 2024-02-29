import { useContext } from "react";
import { Button, HStack, Box } from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";
import SearchExpandable from "src/components/ui/search-expandable/SearchExpandable";
import ButtonYellow from "src/components/ui/buttons/button-yellow/ButtonYellow";
import HomeThemeContext from "src/pages/home/contexts/HomeThemeContext";

const HeaderFeatures = () => {

    const {theme} = useContext(HomeThemeContext);
    const outlinedBtnHoverBgColor = getHoverBgColor();

    function getHoverBgColor() {
        if(!theme.type) return "";
        if(theme.type === "light") return "#b8e7e9" // blue
        if(theme.type === "dark") return "#262626"; // gray
    }

    return (
        <HStack spacing="4" transform="translateY(-0.4rem)">
            <Box transform="translateY(-2px)">
                <SearchExpandable size="5" />
            </Box>

            <Button 
                variant="outline"
                size="sm"
                fontSize="sm"
                color={theme.color}
                borderColor={theme.color}
                _hover={{
                    bgColor: outlinedBtnHoverBgColor,
                }}
                leftIcon={<PlusSquareIcon boxSize="4" />}
            >
                Присоединиться
            </Button>

            <ButtonYellow text="Вторая кнопка" size="sm" />
        </HStack>
    )
};

export default HeaderFeatures;