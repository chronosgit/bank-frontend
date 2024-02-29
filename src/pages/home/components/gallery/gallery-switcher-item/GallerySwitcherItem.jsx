import { Box, Text, useColorModeValue } from "@chakra-ui/react";

const GallerySwitcherItem = ({
    itemId,
    isActive, 
    hasRightBorderRadius, 
    hasLeftBorderRadius,
    onClick,
    title, 
    descr
}) => {

    const bodyTextColor = useColorModeValue("black", "black");

    const boxStyles = {
        "w": "full",
        "px": "5",
        "py": "8",
        "pb": "12",
        "borderLeftRadius": hasLeftBorderRadius ? "lg" : "none",
        "borderRightRadius": hasRightBorderRadius ? "lg" : "none",
        
        // Inactive item styles
        "bgColor": isActive ? "white" : "#f0f3f6",

        // Active item styles
        "borderRadius": isActive && "lg",
        "transform": isActive && "scale(1.1)",
        "transition": "all 0.1s linear",
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
    );
};

export default GallerySwitcherItem;