import { Box, useToken } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import allExist from "src/utils/allExist";

const RadioSquared = ({
    isSelected,
    toggle
}) => {

    const clr = useToken(
        "colors",
        ["blue.500"],
    );

    if(!allExist(isSelected, toggle)) {
        return <></>
    }
    
    const boxStyles = {
        w: "1.1rem",
        h: "1.1rem",
        border: `1px solid ${clr}`,
        borderRadius: "0.1rem",
        cursor: "pointer",
        bgColor: isSelected ? clr : "white",
    }

    return (
        <Box {...boxStyles}>
        {
            isSelected && (
                <Box transform="translateY(-6px)">
                    <CheckIcon color="white" />
                </Box>
            )
        }
        </Box>
    );
};

export default RadioSquared;