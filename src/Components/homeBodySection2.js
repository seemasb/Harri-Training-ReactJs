import CountriesCards from '../Components/countriesCards'
import FavoriteList from '../Components/favoriteList'
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Section2 = styled('div')({
    marginTop: '49px',

})


function homeBodySection2() {
    return (
        <Section2>
            <Stack direction="row" spacing={3} justifyContent="space-between">
                <FavoriteList />
                <CountriesCards />
            </Stack>
        </Section2>
    );
}

export default homeBodySection2;