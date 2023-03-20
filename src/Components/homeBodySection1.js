import SearchBar from '../Components/searchBar'
import DropDown from '../Components/dropDown'
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
            <SearchBar />
            <DropDown />
        </StyledStack>
    );
}

export default homeBodySection1;