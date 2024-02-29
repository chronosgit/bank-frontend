import { Container } from "@chakra-ui/react";
import GalleryItem from "./gallery-item/GalleryItem";
import GallerySwitcher from "./gallery-switcher/GallerySwitcher";
import useActiveGalleryItem from "src/pages/home/hooks/useActiveGalleryItem";

const Gallery = ({items}) => {

    const {
        activeItem, 
        toNextItem, 
        toPrevItem,
        toItemById,
    } = useActiveGalleryItem(items);

    return (
        <Container maxW="fill" p="0">
            <GalleryItem item={activeItem} />

            <GallerySwitcher 
                items={items}
                activeItem={activeItem}
                toNextItem={toNextItem}
                toPrevItem={toPrevItem}
                toItemById={toItemById}
            />
        </Container>
    )
};

export default Gallery;