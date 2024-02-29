import { Button } from "@chakra-ui/react";

const ButtonYellow = ({
    text = "Текст", 
    size = "sm", 
    fontSize = "sm", 
    maxW = "fill"
}) => {

    return (
        <Button
            size={size}
            maxW={maxW}
            color="white"
            bgColor="yellow.500"
            fontSize={fontSize}
            _hover={{
                bgColor: "yellow.600",
            }}
        >
            {text}
        </Button>
    )
};

export default ButtonYellow;