import CountriesCards from '../Components/countriesCards'
import FavoriteList from '../Components/favoriteList'
import { styled } from '@mui/material/styles';

const Section2 = styled('div')({
    marginTop: '49px',

    '@media (max-width: 400px)': {
        marginTop: '35px',
      }

})

let StyledStack = styled('div')({
    display: 'flex',
    direction: 'row',
    columnGap: '40px'
})


function homeBodySection2() {
    return (
        <Section2>
            <StyledStack>
                <FavoriteList />
                <CountriesCards />
            </StyledStack>
        </Section2>
    );
}

export default homeBodySection2;