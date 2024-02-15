import { Box } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchExpandable = ({size = "4"}) => {

    const onClick = () => {
        console.log("Search bar has been clicked");
    }

    return (
        <Box 
            as="button"
            onClick={onClick}
        >
            <SearchIcon w={size} h={size} />
        </Box>
    )
};

export default SearchExpandable;