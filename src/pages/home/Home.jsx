import { Center, Container, useColorModeValue } from "@chakra-ui/react";
import Gallery from "src/components/layout/gallery/Gallery";
import Header from "src/components/layout/header/Header";
import galleryItems from "./api/galleryItems";

const Home = () => {

    const bgColors = useColorModeValue("hsl(182, 84%, 88%)", "black");

    return (
        <Center py="6" bgColor={bgColors} >
            <Container maxW="6xl">
                <Header />
                
                <Gallery items={galleryItems} />
            </Container>
        </Center>
    )
};

export default Home;