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
    samePasswordsValidationErrorMessage,
    emptyValueValidationErrorMessage,
    termsNotAcceptedErrorMessage,
    registrationErrorGeneralMessage,
} from "src/utils/texts";

const useRegister = () => {
    // const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fName: "",
        lName: "",
        email: "",
        pwd: "",
        rePwd: "",
    });
    const [errors, setErrors] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [isTermsAccept, toggleTermsAccept, setTermsAccept] = useBoolean(false);

    const setFName = (newFName) => {
        setFormData(prev => ({
            ...prev,
            fName: newFName,
        }));
    };

    const setLName = (newLName) => {
        setFormData(prev => ({
            ...prev,
            lName: newLName,
        }));
    };

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

    const setRePwd = (newRePwd) => {
        setFormData(prev => ({
            ...prev,
            rePwd: newRePwd,
        }));
    };

    const clearAllVals = () => {
        setFormData({
            fName: "",
            lName: "",
            email: "",
            pwd: "",
            rePwd: "",
        });
        setTermsAccept(false);
    };

    const areAllFieldsFilled = () => {
        let allFilled = true;

        if(formData.fName === "") allFilled = false;
        if(formData.lName === "") allFilled = false;
        if(formData.email === "") allFilled = false;
        if(formData.pwd === "") allFilled = false;
        if(formData.rePwd === "") allFilled = false;

        return allFilled;
    }

    const validateFormData = () => {
        const errs = [];

        // If some values are missing, force user type them first
        if(!areAllFieldsFilled()) {
            errs.push(emptyValueValidationErrorMessage);
        }

        // Terms of service must be accepted first
        if(!isTermsAccept) {
            errs.push(termsNotAcceptedErrorMessage);
            return errs;
        }

        if(!validateEmail(formData.email)) {
            errs.push(emailValidationErrorMessage);
        }
        if(!validatePassword(formData.pwd) || !validatePassword(formData.rePwd)) {
            errs.push(passwordValidationErrorMessage);
        }
        if(formData.pwd !== formData.rePwd) {
            errs.push(samePasswordsValidationErrorMessage);
        }

        return errs;
    };  

    const register = () => {
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
            setErrors([registrationErrorGeneralMessage]);
        }, 3000);

        // Simulating success response
        // navigate("/auth/login");
    };

    return {
        errors,
        isLoading,
        isTermsAccept,
        formData, 
        funcs: {
            setFName,
            setLName,
            setEmail,
            setPwd,
            setRePwd,
            clearAllVals,
            register,
            toggleTermsAccept,
        },
    };
};

export default useRegister;