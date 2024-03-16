import Container from "../container/Container";
import CalculatorHeader from "./calculator-header/CalculatorHeader";
import useFilter from "./hooks/useFilter";

const Calculator = () => {

    const {
        filters,
        activeFilter, 
        changeActiveFilterTo
    } = useFilter();

    return (
        <Container>
            <CalculatorHeader 
                filters={filters}
                activeFilter={activeFilter}
                changeActiveFilterTo={changeActiveFilterTo} 
            />

            
        </Container>
    );
};

export default Calculator;