import { Heading, Text } from "@chakra-ui/react"

const RegisterFormHeader = () => {

    return (
    <>
        <Heading
            as="h1"
            size="lg"
        >
            Зарегистрироваться
        </Heading>

        <Text>
            Предоставьте ваши данные для регистрации.
        </Text>
    </>
    )
};

export default RegisterFormHeader;