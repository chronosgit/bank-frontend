import { 
    Button, Flex, 
    FormControl, FormLabel, 
    VStack, Input, Text, InputGroup, 
    InputRightElement, Alert, 
    AlertIcon, UnorderedList, ListItem, Spinner, Link 
} from "@chakra-ui/react";
import { ExternalLinkIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import RegisterFormHeader from "./register-form-header/RegisterFormHeader";
import RadioSquared from "src/components/ui/radio-squared/RadioSquared";
import useBoolean from "src/hooks/useBoolean";
import useRegister from "./hooks/useRegister";

const RegisterForm = () => {

    const {
        formData, errors, isLoading, 
        isTermsAccept, funcs,
    } = useRegister();

    const [isPwdVisible, togglePwdVisible] = useBoolean(false);
    const [isRePwdVisible, toggleRePwdVisible] = useBoolean(false);

    const openTermsOfService = (e) => {
        e.preventDefault();
        e.stopPropagation();

        window.open(
            "https://assets.speakcdn.com/assets/2703/bulletin-may26.pdf", 
            "_blank"
        );
    }

    return (
        <VStack spacing="1rem" textAlign="center">
            <RegisterFormHeader />

            <Flex 
                w="full"
                justifyContent="start"
            >
                <FormControl isRequired>
                    <FormLabel>
                        Имя
                    </FormLabel>

                    <Input
                        value={formData.fName} 
                        borderRadius="0"
                        placeholder="Ваше имя"
                        onChange={e => funcs.setFName(e.target.value)}
                    />
                </FormControl>

                <FormControl isRequired>
                    <FormLabel>
                        Фамилия
                    </FormLabel>

                    <Input 
                        value={formData.lName}
                        borderRadius="0"
                        placeholder="Ваша фамилия"
                        onChange={e => funcs.setLName(e.target.value)}
                    />
                </FormControl>
            </Flex>

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

            <FormControl isRequired>
                <FormLabel>
                    Повторите пароль
                </FormLabel>

                <InputGroup>
                    <Input 
                        value={formData.rePwd}
                        type={isRePwdVisible ? "text" : "password"} 
                        placeholder="Повторите пароль"
                        onChange={e => funcs.setRePwd(e.target.value)}
                    />

                    <InputRightElement 
                        cursor="pointer"
                        onClick={toggleRePwdVisible}
                    >
                    {
                    isRePwdVisible 
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
                alignItems="center" 
                gap="0.5rem"
                cursor="pointer"
                onClick={funcs.toggleTermsAccept}
            >
                <RadioSquared 
                    isSelected={isTermsAccept} 
                    toggle={funcs.toggleTermsAccept} 
                />

                <Text>
                    Я принимаю&nbsp; 
                    <Link
                        href="https://assets.speakcdn.com/assets/2703/bulletin-may26.pdf"
                        isExternal
                        target="_blank"
                        as="span"
                        color="blue.600"
                        textDecorationLine="underline"
                        onClick={openTermsOfService}
                    >
                        условия соглашения <ExternalLinkIcon />
                    </Link>
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
                onClick={funcs.register}
            >
                Зарегистрироваться
            </Button>
        </VStack>
    );
};

export default RegisterForm;