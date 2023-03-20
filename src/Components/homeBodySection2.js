import CountriesCards from '../Components/countriesCards'
import FavoriteList from '../Components/favoriteList'
import { styled } from '@mui/material/styles';

const Section2 = styled('div')({
    marginTop: '49px',

})

let StyledStack = styled('div')({
    display: 'flex',
    direction: 'row',
    columnGap: '40px'
})


function homeBodySection2(props) {
    return (
        <Section2>
            <StyledStack>
                <FavoriteList />
                <CountriesCards setCountry={props.setCountry} />
            </StyledStack>
        </Section2>
    );
}

export default homeBodySection2;