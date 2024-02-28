import { useState } from "react";
import getObjectById from "src/utils/getObjectById";

const useActiveGalleryItem = (items) => {
    const [activeItemInd, setItemInd] = useState(1); // we start from first item
    const [activeItem, setItem] = useState(getObjectById(1, items));

    const itemsSize = items.length;
    
    const toNextItem = () => {
        if(activeItemInd === itemsSize) {
            setItemInd(1);
            setItem(getObjectById(1, items));
            return;
        }
        
        setItem(getObjectById(activeItemInd + 1, items));
        setItemInd(prev => prev + 1);
    };

    const toPrevItem = () => {
        if(activeItemInd === 1) {
            setItemInd(itemsSize);
            setItem(getObjectById(4, items));
            return;
        }

        setItem(getObjectById(activeItemInd - 1, items));
        setItemInd(prev => prev - 1);
    };

    const toItemById = (itemId) => {
        if(itemId <= 0 || itemId > itemsSize) {
            console.log("Given gallery item ID is out of bounds");
            return;
        }

        setItem(getObjectById(itemId, items));
        setItemInd(itemId);
    };

    return {activeItem, toNextItem, toPrevItem, toItemById};
};

export default useActiveGalleryItem;