import { Heading, Text } from "@chakra-ui/react";

const LoginFormHeader = () => {

    return (
    <>
        <Heading
            as="h1"
            size="lg"
        >
            Войти
        </Heading>

        <Text>
            Предоставьте ваши данные для входа.
        </Text>
    </>
    )
};

export default LoginFormHeader;