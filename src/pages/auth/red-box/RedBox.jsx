import { AbsoluteCenter, Box, Button, Center, Heading } from "@chakra-ui/react";

const RedBox = ({isLogin, toggleLogin}) => {

    const redBoxStyles = {
        pos: "relative",
        flexBasis: "40%",
        h: "100%",
        bgColor: "red.500",
    };

    return (
        <Box {...redBoxStyles}>
            <AbsoluteCenter>
                <Heading 
                    as="h2"
                    mb="2rem"
                    textAlign="center"
                    fontSize="2xl"
                    color="white"
                >
                {
                    isLogin 
                    ? "Нет аккаунта?"
                    : "Уже есть аккаунт?"
                }
                </Heading>

                <Center >
                    <Button
                        variant="outline"
                        color="white"
                        _hover={{
                            bgColor: "red.700",
                            borderColor: "red.700",
                        }}
                        onClick={toggleLogin}
                    >
                    {
                        isLogin 
                        ? "Зарегистрироваться"
                        : "Войти"
                    }
                    </Button>
                </Center>
            </AbsoluteCenter>
        </Box>
    );
};

export default RedBox;