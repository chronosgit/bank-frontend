import { Center, Container, useColorModeValue } from "@chakra-ui/react";
import Header from "src/components/layout/header/Header";

const Home = () => {

    const bgColors = useColorModeValue("hsl(182, 84%, 88%)", "black");

    return (
        <Center py="6" bgColor={bgColors} >
            <Container maxW="6xl">
                <Header />
                
            </Container>
        </Center>
    )
};

export default Home;