const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return regex.test(email);
};

const validatePassword = (password) => {
    // 8 to 30 symbols
    // Latin characters
    // Has to have numbers
    // Has to have at least one uppercase letter
    // Has to have special signs
    const regex = /^(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*()-_+=]{8,30}$/;

    return regex.test(password);
};

const isStringEmpty = (s) => {
    return s.length !== "";
};

export {
    validateEmail,
    validatePassword,
    isStringEmpty,
};