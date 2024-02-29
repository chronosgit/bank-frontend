import { useContext, useState } from "react";
import HomeThemeContext from "src/pages/home/contexts/HomeThemeContext";
import getObjectById from "src/utils/getObjectById";

const useActiveGalleryItem = (items) => {
    const [activeItemInd, setItemInd] = useState(1); // we init from first item
    const [activeItem, setItem] = useState(getObjectById(1, items));
    const itemsSize = items.length;

    const themeController = useContext(HomeThemeContext);

    // Check if we need to change theme, when choosing item with passed id
    const controlItemThemeToggle = (id) => {
        if(id === activeItemInd) return;

        const togglingItemId = 3;
        if(id === togglingItemId || activeItemInd == togglingItemId) { 
            themeController.toggleTheme();
        }
    };

    const updateItemIdTo = (id) => {
        controlItemThemeToggle(id)

        setItemInd(id)
    };

    const toNextItem = () => {
        if(activeItemInd === itemsSize) {
            updateItemIdTo(1);
            setItem(getObjectById(1, items));
        } else {
            updateItemIdTo(activeItemInd + 1);
            setItem(getObjectById(activeItemInd + 1, items));
        }
    };

    const toPrevItem = () => {
        if(activeItemInd === 1) {
            updateItemIdTo(itemsSize);
            setItem(getObjectById(4, items));
        } else {
            updateItemIdTo(activeItemInd - 1);
            setItem(getObjectById(activeItemInd - 1, items));
        }
    };

    const toItemById = (itemId) => {
        if(itemId <= 0 || itemId > itemsSize) {
            console.log("Given gallery item ID is out of bounds");
            return;
        }

        setItem(getObjectById(itemId, items));
        updateItemIdTo(itemId);
    };

    return {activeItem, toNextItem, toPrevItem, toItemById};
};

export default useActiveGalleryItem;