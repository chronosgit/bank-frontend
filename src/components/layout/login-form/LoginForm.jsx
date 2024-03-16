import { 
    Button, Flex, 
    FormControl, FormLabel, 
    VStack, Input, Text, InputGroup, 
    InputRightElement, Alert, 
    AlertIcon, UnorderedList, ListItem, 
    Spinner, useToast, 
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import LoginFormHeader from "./login-form-header/LoginFormHeader";
import RadioSquared from "src/components/ui/radio-squared/RadioSquared";
import useBoolean from "src/hooks/useBoolean";
import useLogin from "./hooks/useLogin";

const RegisterForm = () => {

    const forgotPwdToast = useToast();

    const {
        formData, errors, 
        isLoading, funcs,
        isRemember, 
    } = useLogin();

    const [isPwdVisible, togglePwdVisible] = useBoolean(false);

    const forgotPwdOnClick = () => {
        forgotPwdToast({
            title: "Не получилось...",
            description: "Такого функционала на сервере пока нету:(",
            status: "error",
            duration: 10000,
            isClosable: true,
        });
    }

    return (
        <VStack spacing="1rem" textAlign="center">
            <LoginFormHeader isLogin />

            <FormControl isRequired>
                <FormLabel>
                    Почта
                </FormLabel>

                <Input 
                    value={formData.email}
                    placeholder="Ваша электронная почта"
                    onChange={e => funcs.setEmail(e.target.value)}
                />
            </FormControl>

            <FormControl isRequired>
                <FormLabel>
                    Пароль
                </FormLabel>

                <InputGroup>
                    <Input
                        value={formData.pwd}
                        type={isPwdVisible ? "text" : "password"} 
                        placeholder="Ваш пароль"
                        onChange={e => funcs.setPwd(e.target.value)}
                    />

                    <InputRightElement 
                        cursor="pointer"
                        onClick={togglePwdVisible}
                    >
                    {
                    isPwdVisible 
                        ? <ViewOffIcon />
                        : <ViewIcon />
                    }
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            
            {
            errors && errors.length > 0 &&
                <Alert status="error" variant="left-accent">
                    <AlertIcon />

                    <UnorderedList 
                        display="flex"
                        flexDirection="column"
                        gap="0.5rem"
                        color="red.600"
                        textAlign="left"
                        listStyleType="none"
                    >
                    {
                        errors.map((e, i) => 
                            <ListItem 
                                key={i}
                                lineHeight="none"
                            >
                                {e}
                            </ListItem>
                        )
                    }
                    </UnorderedList>
                </Alert>
            }

            <Flex
                w="full"
                justifyContent="space-between"
                alignItems="center"
            >
                <Flex 
                    tabIndex="0"
                    alignItems="center" 
                    gap="0.5rem"
                    cursor="pointer"
                    onClick={funcs.toggleRemember}
                >
                    <RadioSquared 
                        isSelected={isRemember} 
                        toggle={funcs.toggleRemember} 
                    />

                    <Text>
                        Запомнить пароль
                    </Text>
                </Flex>

                <Text 
                    tabIndex="0"
                    color="blue.500"
                    cursor="pointer"
                    onClick={forgotPwdOnClick}
                >
                    Забыли пароль?
                </Text>
            </Flex>            

            <Button
                w="full" 
                color="white" 
                bgColor="blue.500"
                _hover={{
                    bgColor: "blue.600"
                }}
                isLoading={isLoading}
                spinner={<Spinner />}
                onClick={funcs.login}
            >
                Войти
            </Button>
        </VStack>
    );
};

export default RegisterForm;