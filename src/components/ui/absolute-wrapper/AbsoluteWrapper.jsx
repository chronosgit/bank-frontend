import { Box } from "@chakra-ui/react";

const AbsoluteWrapper = ({
    top = 0,
    right = 0,
    bottom = 0,
    left = 0,
    zIndex = 9999,
    children
}) => {

    const coordStyles = {
        top: top,
        right: right,
        bottom: bottom,
        left: left,
        zIndex: zIndex,
    };

    return (
        <Box 
            pos="absolute"
            boxSize="fit-content"
            {...coordStyles}
        >
            {children}
        </Box>
    );
};

export default AbsoluteWrapper;