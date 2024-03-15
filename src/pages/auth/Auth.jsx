import { Box } from "@chakra-ui/react";
import { keyframes } from '@emotion/react'
import LoginForm from "src/components/layout/login-form/LoginForm";
import RegisterForm from "src/components/layout/register-form/RegisterForm";
import useBoolean from "src/hooks/useBoolean";
import RedBox from "./red-box/RedBox";

const Register = ({isLogin: initIsLogin}) => {
    
    const [isLogin, toggleLogin] = useBoolean(initIsLogin);

    const pageStyles = {
        display: "flex",
        flexDirection: isLogin ? "row" : "row-reverse",
        justifyContent: "space-between",
        alignItems: "center",
    };

    const authBoxStyles = {
        pos: "relative",
        maxW: "sm",
        w: "full",
        p: "0.5rem",
        m: "0 auto",
    };

    // const loginSlideAnimation = keyframes`
    //     0% {}

    //     50% {
    //         left: "10rem";
    //     }

    //     100% {
    //         opacity: 0;
    //     }
    // `

    return (
        <Box 
            h="100vh"
            overflowY="hidden"
            {...pageStyles}
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
            <RedBox 
                isLogin={isLogin} 
                toggleLogin={toggleLogin}
            />
        </Box>
    );
};

export default Register;