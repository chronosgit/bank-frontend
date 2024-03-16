import { Box } from "@chakra-ui/react";
import CalculatorHeader from "./calculator-header/CalculatorHeader";
import useFilter from "./hooks/useFilter";

const Calculator = () => {

    const {
        filters,
        activeFilter, 
        changeActiveFilterTo
    } = useFilter();

    return (
        <Box>
            <CalculatorHeader 
                filters={filters}
                activeFilter={activeFilter}
                changeActiveFilterTo={changeActiveFilterTo} 
            />


        </Box>
    );
};

export default Calculator;