import CountriesCards from './CountriesCards'
import FavoriteList from './FavoriteList'
import { styled } from '@mui/material/styles';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


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


function HomeBodySection2({ countries , favoriteCountries , handleCardDropped , handleRemoveFav }) {



    return (
        <DndProvider backend={HTML5Backend}>
            <Section2>
                <StyledStack>
                    <FavoriteList onCardDropped={handleCardDropped} favoriteCountries={favoriteCountries} handleRemoveFav={handleRemoveFav}/>
                    <CountriesCards countries={countries} />
                </StyledStack>
            </Section2>
        </DndProvider>
    );
}

export default HomeBodySection2;