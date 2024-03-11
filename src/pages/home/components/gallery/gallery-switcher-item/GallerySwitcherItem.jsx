import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { useContext } from "react";
import FlashAnimationContext from "src/pages/home/contexts/FlashAnimationContext";

const GallerySwitcherItem = ({
    itemId,
    title, 
    descr,
    isActive,
    hasRightBorderRadius,
    hasLeftBorderRadius,
    onClick,
}) => {

    const {triggerAnimation} = useContext(FlashAnimationContext);

    const bodyTextColor = useColorModeValue("black", "black");

    const boxStyles = {
        "w": "full",
        "px": "5",
        "py": "8",
        "pb": "12",
        "borderLeftRadius": hasLeftBorderRadius && "lg",
        "borderRightRadius": hasRightBorderRadius && "lg",

        // Inactive item styles
        "bgColor": isActive ? "white" : "#f0f3f6",

        // Active item styles
        "borderRadius": isActive && "lg",
        "boxShadow": isActive && "md",
        "transform": isActive && "scaleX(1.05) scaleY(1.1)",
        "transition": "all 0.1s linear",
        "cursor": "pointer",
    };

    const onItemClick = () => {
        // onClick of for gallery-switcher
        onClick(itemId);

        triggerAnimation(itemId);
    }

    return (
        <Box {...boxStyles} onClick={onItemClick}>
            <Text color="red.500" fontWeight="semibold">
                {title}
            </Text>

            <Text color={bodyTextColor}>
                {descr}
            </Text>
        </Box>
    );
};

export default GallerySwitcherItem;