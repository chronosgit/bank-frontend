import { useState } from "react";

const useFilter = () => {
    const filters = [
        "Фильтр 1", "Фильтр 2",
    ];

    const [activeFilter, setActiveFilter] = useState(filters[0]);

    const validateFilterUpdate = (newFilter) => {
        let isValid = true;

        if(typeof newFilter !== "string") {
            console.error("New filter must be string.");
            isValid = false;
        }

        if(!filters.includes(newFilter)) {
            console.error("Such filter doesn't exist.");
            isValid = false;
        }

        return isValid;
    }

    const changeActiveFilterTo = (newFilter) => {
        if(!validateFilterUpdate(newFilter)) return;

        setActiveFilter(newFilter);
    };

    return {
        filters,
        activeFilter, 
        changeActiveFilterTo,
    };
};

export default useFilter;