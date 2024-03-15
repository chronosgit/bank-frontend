import { Center, Container } from "@chakra-ui/react";
import Gallery from "src/pages/home/components/gallery/Gallery";
import AbsoluteWrapper from "src/components/ui/absolute-wrapper/AbsoluteWrapper";
import Flash from "src/components/ui/flash/Flash";
import Header from "src/components/layout/header/Header";
import HomeThemeContext from "./contexts/HomeThemeContext";
import FlashAnimationContext from "./contexts/FlashAnimationContext";
import useHomeTheme from "./hooks/useHomeTheme";
import galleryItems from "./api/galleryItems";
import useFlashAnimation from "./hooks/useFlashAnimation";

const Home = () => {

    const [theme, toggleTheme] = useHomeTheme();
    const themeController = {theme, toggleTheme};

    const [isFlashAnimationActive, triggerFlashAnimation] = useFlashAnimation();
    const flashAnimationController = {
        isFlashAnimationActive, 
        triggerFlashAnimation
    };

    return (
        <HomeThemeContext.Provider value={themeController}>
            <FlashAnimationContext.Provider value={flashAnimationController}>
                <Center py="6" color={theme.color} bgColor={theme.bgColor} >
                    <Container maxW="6xl">
                        <Header />

                        <Gallery items={galleryItems} />

                        {
                        // onClick flash animation controller
                        isFlashAnimationActive &&
                            <AbsoluteWrapper zIndex={2}>
                                <Flash />
                            </AbsoluteWrapper>
                        }
                    </Container>
                </Center>
            </FlashAnimationContext.Provider>
        </HomeThemeContext.Provider> 
    )
};

export default Home;