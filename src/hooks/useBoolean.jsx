import { useState } from "react";

const useBoolean = (initValue) => {
    if(initValue === null || initValue === undefined) {
        initValue = true;
    }

    const [boolValue, setBoolValue] = useState(initValue);

    const toggleValue = () => {
        setBoolValue(p => !p);
    };

    const setValue = (newVal) => {
        if(typeof newVal !== "boolean") {
            console.error("You cannot set value to non-bool.");
            return;
        }

        setBoolValue(newVal);
    }

    return [boolValue, toggleValue, setValue];
};

export default useBoolean;