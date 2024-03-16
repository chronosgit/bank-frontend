import { Center } from "@chakra-ui/react";
import AbsoluteWrapper from "src/components/ui/absolute-wrapper/AbsoluteWrapper";
import Flash from "src/components/ui/flash/Flash";
import Header from "src/components/layout/header/Header";
import Gallery from "../gallery/Gallery";
import Container from "src/components/layout/container/Container";
import FlashAnimationContext from "../../contexts/FlashAnimationContext";
import HomeThemeContext from "../../contexts/HomeThemeContext";
import useFlashAnimation from "../../hooks/useFlashAnimation";
import useHomeHeroTheme from "../../hooks/useHomeHeroTheme";
import apiGalleryItems from "../../api/galleryItems";
import getEmptyArrayIfNotExist from "src/utils/getEmptyArrayIfNotExist";

/* 
    This component is for both header and hero
    HomeThemeContext for changing colors from gallery switcher
    FlashAnimationContext for flash animation when gallery changes 
*/
const HomeHero = () => {

    const [theme, toggleTheme] = useHomeHeroTheme();
    const themeController = {theme, toggleTheme};

    const [isFlashAnimationActive, triggerFlashAnimation] = useFlashAnimation();
    const flashAnimationController = {
        isFlashAnimationActive, 
        triggerFlashAnimation
    };

    // Work-around for dealing with 
    // non-existant galleryItems arr.
    let galleryItems = getEmptyArrayIfNotExist(apiGalleryItems);

    return (
        <HomeThemeContext.Provider value={themeController}>
            <FlashAnimationContext.Provider value={flashAnimationController}>
                <Center 
                    mb="15rem" // cuz gallery-switcher pushes into the bottom
                    py="6" 
                    color={theme.color} 
                    bgColor={theme.bgColor} 
                >
                    <Container>
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
    );
};

export default HomeHero;