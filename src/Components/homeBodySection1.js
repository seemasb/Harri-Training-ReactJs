import SearchBar from '../Components/searchBar'
import DropDown from '../Components/dropDown'
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/';

let StyledStack = styled('div')({
    display: 'flex',
    direction: 'row',
    justifyContent: "space-between",
    flexWrap: 'wrap',
    rowGap: '20px'
})
function homeBodySection1() {
    return (
        <StyledStack style={{ width: "100%" }}>
            {/* <styledStack direction="row" spacing={4} justifyContent="space-between" wrap="wrap"> */}
                <SearchBar />
                <DropDown />
            {/* </styledStack> */}
        </StyledStack>
    );
}

export default homeBodySection1;