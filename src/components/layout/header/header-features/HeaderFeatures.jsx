import { useContext } from "react";
import { Button, HStack, Box } from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";
import SearchExpandable from "src/components/ui/search-expandable/SearchExpandable";
import ButtonRed from "src/components/ui/buttons/button-red/ButtonRed";
import HomeThemeContext from "src/pages/home/contexts/HomeThemeContext";
import { Link } from "react-router-dom";

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
            
            <Link to="/auth/register">
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
                    Стань клиентом
                </Button>
            </Link>

            <Link to="/auth/login">
                <ButtonRed text="Войти" size="sm" />
            </Link>
        </HStack>
    )
};

export default HeaderFeatures;