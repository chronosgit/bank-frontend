import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import useBoolean from "src/hooks/useBoolean";
import {
    validateEmail,
    validatePassword,
} from "src/utils/validators";
import {
    emailValidationErrorMessage,
    passwordValidationErrorMessage,
    emptyValueValidationErrorMessage,
    loginErrorGeneralMessage,
} from "src/utils/texts";

const useLogin = () => {
    // const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        pwd: "",
    });
    const [errors, setErrors] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [isRemember, toggleRemember, setRemember] = useBoolean(false);

    const setEmail = (newEmail) => {
        setFormData(prev => ({
            ...prev,
            email: newEmail,
        }));    
    };

    const setPwd = (newPwd) => {
        setFormData(prev => ({
            ...prev,
            pwd: newPwd,
        }));
    };

    const clearAllVals = () => {
        setFormData({
            email: "",
            pwd: "",
        });
        setRemember(false);
    };

    const areAllFieldsFilled = () => {
        let allFilled = true;

        if(formData.email === "") allFilled = false;
        if(formData.pwd === "") allFilled = false;

        return allFilled;
    }

    const validateFormData = () => {
        const errs = [];

        // If some values are missing, force user type them first
        if(!areAllFieldsFilled()) {
            errs.push(emptyValueValidationErrorMessage);
            return errs;
        }

        if(!validateEmail(formData.email)) {
            errs.push(emailValidationErrorMessage);
        }
        if(!validatePassword(formData.pwd)) {
            errs.push(passwordValidationErrorMessage);
        }

        return errs;
    };  

    const login = () => {
        if(isLoading) return;
        setErrors([]);

        const validationErrs = validateFormData();

        if(validationErrs.length > 0) {
            setErrors(validationErrs);
            return;
        }

        // API calling starts here

        // Simulating loading state for now
        setLoading(true)

        // Simulating api call
        setTimeout(() => {
            setLoading(false);

            // Simulating error response
            setErrors([loginErrorGeneralMessage]);
        }, 3000);

        // Simulating success response
        // ...
        // navigate("/");
        // clearAllVals()
    };

    return {
        errors,
        isLoading,
        isRemember,
        formData, 
        toggleRemember,
        funcs: {
            setEmail,
            setPwd,
            clearAllVals,
            login,
            toggleRemember,
        },
    };
};

export default useLogin;