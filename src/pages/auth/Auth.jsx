import { Box } from "@chakra-ui/react";
import LoginForm from "src/components/layout/login-form/LoginForm";
import RegisterForm from "src/components/layout/register-form/RegisterForm";
import RedBox from "./red-box/RedBox";

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
            h="100vh"
            display="flex"
            flexDirection={isLogin ? "row" : "row-reverse"}
            justifyContent="space-between"
            alignItems="center"
            overflowY="hidden"
        >
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