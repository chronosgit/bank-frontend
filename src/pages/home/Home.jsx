import { Center, Container } from "@chakra-ui/react";
import Gallery from "src/components/layout/gallery/Gallery";
import Header from "src/components/layout/header/Header";
import HomeThemeContext from "./contexts/HomeThemeContext";
import useHomeTheme from "./hooks/useHomeTheme";
import galleryItems from "./api/galleryItems";

const Home = () => {

    const [theme, toggleTheme] = useHomeTheme();

    const themeController = {theme, toggleTheme};

    return (
        <HomeThemeContext.Provider value={themeController}>
            <Center py="6" color={theme.color} bgColor={theme.bgColor} >
                <Container maxW="6xl">
                    <Header />
                    
                    <Gallery items={galleryItems} />
                </Container>
            </Center>
        </HomeThemeContext.Provider> 
    )
};

export default Home;