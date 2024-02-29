import { HStack, StackDivider } from "@chakra-ui/react";
import GallerySwitcherItem from "../gallery-switcher-item/GallerySwitcherItem";

const GallerySwitcher = ({
    activeItem,
    items, 
    toItemById
}) => {

    const hStackDivider = <StackDivider 
                            borderColor="red.100" 
                            align="center"
                          />

    return (
        <HStack 
            spacing="0"
            divider={hStackDivider}
            justifyContent="space-between"
        >
        {
            items.map((item, arrId) => {
                const isActive = (item.id === activeItem.id);
                const hasRightBorderRadius = (arrId + 1 === items.length);
                const hasLeftBorderRadius = (arrId === 0);

                return (
                    <GallerySwitcherItem
                        key={item.id}
                        itemId={item.id}
                        isActive={isActive}
                        hasRightBorderRadius={hasRightBorderRadius}
                        hasLeftBorderRadius={hasLeftBorderRadius}
                        title={item.title}
                        descr={item.secondaryDescr}
                        onClick={() => toItemById(item.id)}
                    />
                )
            })
        }
        </HStack>
    )
};

export default GallerySwitcher;