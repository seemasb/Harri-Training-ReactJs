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
function homeBodySection1(props) {
    const { onSearch, searchTerm } = props
    return (
        <StyledStack style={{ width: "100%" }}>
            <SearchBar onSearch={onSearch} searchTerm={searchTerm} />
            <DropDown onFilterChange={props.onFilterChange} filter={props.filter} />
        </StyledStack>
    );
}

export default homeBodySection1;