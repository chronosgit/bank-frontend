import { Button } from "@chakra-ui/react";

const ButtonWhiteOutline = ({text}) => {

    return (
        <Button
            variant="outline"
            color="white"
            _hover={{
                bgColor: "red.700",
                borderColor: "red.700",
            }}
        >
            {text}
        </Button>
    );
};

export default ButtonWhiteOutline;