import { AbsoluteCenter, Box, Center, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ButtonWhiteOutline from "src/components/ui/buttons/button-white-outline/ButtonWhiteOutline";

const RedBox = ({isLogin}) => {

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

                <Center>
                {
                    isLogin
                        ? (
                            <Link to="/auth/register">
                                <ButtonWhiteOutline text="Зарегистрироваться" />
                            </Link> 
                        )
                        : (
                            <Link to="/auth/login">
                                <ButtonWhiteOutline text="Войти" />
                            </Link> 
                        )
                }
                </Center>
            </AbsoluteCenter>
        </Box>
    );
};

export default RedBox;