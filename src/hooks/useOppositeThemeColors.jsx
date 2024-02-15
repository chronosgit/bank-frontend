import { useColorModeValue } from "@chakra-ui/react";

const useOppositeThemeColors = () => {
    const oppositeColors = useColorModeValue("black", "white");

    return oppositeColors;
};

export default useOppositeThemeColors;