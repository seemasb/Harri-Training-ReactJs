import SearchBar from '../Components/searchBar'
import DropDown from '../Components/dropDown'
import Stack from '@mui/material/Stack';


function homeBodySection1() {
    return (
        <div>
            <Stack direction="row" spacing={2} justifyContent="space-between">
                <SearchBar/>
                <DropDown/>
            </Stack>
        </div>
    );
}

export default homeBodySection1;