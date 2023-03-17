import CountriesCards from '../Components/countriesCards'
import FavoriteList from '../Components/favoriteList'
import Stack from '@mui/material/Stack';


function homeBodySection2() {
    return (
        <div>
            <Stack direction="row" spacing={2} justifyContent="space-between">
                <FavoriteList />
                <CountriesCards />
            </Stack>
        </div>
    );
}

export default homeBodySection2;