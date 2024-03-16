import { Button, Flex, Heading } from "@chakra-ui/react"; 

const CalculatorHeader = ({
    filters,
    activeFilter,
    changeActiveFilterTo,
}) => {

    const filterBtnStyles = {
        
    };

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

            <Flex alignItems="center">
            {
                Array.isArray(filters) &&
                    filters.map((f, i) => 
                        <Button
                            key={i}
                            style={filterBtnStyles}
                            onClick={() => changeActiveFilterTo(f)}
                        >
                            {f}
                        </Button>
                    )
            }
            </Flex>
        </Flex>
    );
};

export default CalculatorHeader