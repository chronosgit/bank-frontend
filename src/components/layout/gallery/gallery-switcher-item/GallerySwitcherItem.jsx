import { Box, Text, useColorModeValue } from "@chakra-ui/react";

const GallerySwitcherItem = ({
    isActive, 
    hasRightBorderRadius, 
    hasLeftBorderRadius,
    itemId,
    onClick,
    title, 
    descr
}) => {

    const bodyTextColor = useColorModeValue("black", "black");

    const activeItemBodyShadow = useColorModeValue("#e1e1e1", "#000");

    const boxStyles = {
        "w": "full",
        "px": "5",
        "py": "8",
        "pb": "12",
        "backgroundColor": "white",
        "borderInlineStartRadius": hasRightBorderRadius ? "16" : "0",
        "borderInlineEndRadius": hasLeftBorderRadius ? "16" : "0",
        "borderRadius": isActive ? "16" : 0,
        "boxShadow": isActive ? `0 3px 20px ${activeItemBodyShadow}` : 0,
        "transform": isActive ? "scale(1.1)" : "1",
        "transition": "transform 0.5s ease, boxShadow 0.1s linear",
        "cursor": "pointer",
    };

    return (
        <Box {...boxStyles} onClick={() => onClick(itemId)}>
            <Text color="red.500" fontWeight="semibold">
                {title}
            </Text>

            <Text color={bodyTextColor}>
                {descr}
            </Text>
        </Box>
    )
};

export default GallerySwitcherItem;