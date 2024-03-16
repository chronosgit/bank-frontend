import { Box } from "@chakra-ui/react";
import LoginForm from "src/components/layout/login-form/LoginForm";
import RegisterForm from "src/components/layout/register-form/RegisterForm";
import RedBox from "./red-box/RedBox";
import AbsoluteWrapper from "src/components/ui/absolute-wrapper/AbsoluteWrapper";
import Logo from "src/components/ui/logo/Logo";

const Register = ({isLogin}) => {

    const authBoxStyles = {
        pos: "relative",
        maxW: "sm",
        w: "full",
        p: "0.5rem",
        m: "0 auto",
    };

    return (
        <Box 
            pos="relative"
            h="100vh"
            display="flex"
            flexDirection={isLogin ? "row" : "row-reverse"}
            justifyContent="space-between"
            alignItems="center"
            overflowY="hidden"
        >
            <AbsoluteWrapper
                top="0.5rem"
                left="0.5rem"
            >
                <Logo redirectUrl="/" />
            </AbsoluteWrapper>

        {
            isLogin
                ? (
                    <Box {...authBoxStyles}>
                        <LoginForm />
                    </Box>
                )
                : (
                    
                    <Box {...authBoxStyles}>
                        <RegisterForm />
                    </Box>
                    
                )
        }
            <RedBox isLogin={isLogin} />
        </Box>
    );
};

export default Register;