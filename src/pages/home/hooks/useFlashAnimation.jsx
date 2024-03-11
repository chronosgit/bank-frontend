import { useState } from "react";
import getTimeoutOnCallback from "src/utils/getTimeoutOnCallback";

const useFlashAnimation = () => {
    const [isActive, setActive] = useState(false);
    const [lastTriggerId, setTriggeredId] = useState(null);

    const triggerAnimation = (id) => {
        if(lastTriggerId === id) return;
        
        setTriggeredId(id);
        setActive(true);

        getTimeoutOnCallback(50, () => setActive(false));
    };

    return [isActive, triggerAnimation];
};

export default useFlashAnimation;