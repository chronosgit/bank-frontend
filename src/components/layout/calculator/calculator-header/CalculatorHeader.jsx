import { Box, Button, Flex, Heading } from "@chakra-ui/react"; 

const CalculatorHeader = ({
    filters,
    activeFilter,
    changeActiveFilterTo,
}) => {

    return (    
        <Flex
            justifyContent="space-between"
            alignItems="center"
        >
            <Heading
                as="h2"
            >
                Рассчитайте выгоду
            </Heading>

            <Flex
                p="0.5rem" 
                alignItems="center"
                gap="0.5rem"
                bgColor="#f2f3f5"
                borderRadius="2rem"
            >
            {
                Array.isArray(filters) &&
                    filters.map((f, i) => 
                        <Button
                            key={i}
                            variant={activeFilter === f ? "solid" : "ghost"}
                            py="1.5rem"
                            borderRadius="1.5rem"
                            _hover={{
                                bgColor: activeFilter !== f && "#e6e8ec",
                            }}
                            onClick={() => changeActiveFilterTo(f)}
                        >
                            {f}
                        </Button>
                    )
            }

            {
                // Dynamic button bg ("bubbly bg")
                // TODO: Make bubbly wrapper
                //  consider el.offsetWidth
                //  and coords of an el to put it 
                Array.isArray(filters) && filters.length > 0 &&
                    <Box>

                    </Box>
            }
            </Flex>
        </Flex>
    );
};

export default CalculatorHeader