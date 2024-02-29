import { HStack, StackDivider } from "@chakra-ui/react";
import GallerySwitcherItem from "../gallery-switcher-item/GallerySwitcherItem";

const GallerySwitcher = ({
    activeItem,
    items, 
    toItemById
}) => {

    const hStackDivider = <StackDivider 
                            borderColor="gray.300" 
                            align="center"
                          />

    const styles = {
        pos: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        transform: "translateY(6rem)",
        boxShadow: "md",
    }

    return (
        <HStack 
            spacing="0"
            divider={hStackDivider}
            justifyContent="space-between"
            {...styles}
        >
        {
            items.map((item) => {
                const isActive = (item.id === activeItem.id);
                const hasLeftBorderRadius = (item.id === 1);
                const hasRightBorderRadius = (item.id === items.length);

                return (
                    <GallerySwitcherItem
                        key={item.id}
                        itemId={item.id}
                        title={item.title}
                        descr={item.secondaryDescr}
                        isActive={isActive}
                        hasLeftBorderRadius={hasLeftBorderRadius}
                        hasRightBorderRadius={hasRightBorderRadius}
                        onClick={() => toItemById(item.id)}
                    />
                )
            })
        }
        </HStack>
    )
};

export default GallerySwitcher;