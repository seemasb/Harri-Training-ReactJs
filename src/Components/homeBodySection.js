import { Container, Box } from '@mui/material/';
import { styled } from '@mui/material/';
import { useContext } from "react";
import { ThemeContext } from "../Themes/ThemeContext";
import SearchBar from '../Components/searchBar'
import DropDown from '../Components/dropDown'
import CountriesCards from './CountriesCards'
import FavoriteList from './FavoriteList'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const StyledBox = styled(Box)({
    marginLeft: 80,
    marginRight: 80,
    paddingTop: 47,

    '@media (max-width: 700px)': {
        marginLeft: 40,
        marginRight: 40,
    },
    '@media (max-width: 400px)': {
        marginLeft: 14,
        marginRight: 14,
        paddingTop: 25,
    }
})

const HomeBodyDiv = styled('div')`
    background-color: ${(props) => props.theme.Darkbackground};
    padding-bottom: 70px;
`

let StyledStackSearchAndDrop = styled('div')({
    display: 'flex',
    direction: 'row',
    justifyContent: "space-between",
    flexWrap: 'wrap',
    rowGap: '20px'
})

const Section2 = styled('div')({
    marginTop: '49px',

    '@media (max-width: 400px)': {
        marginTop: '35px',
    }

})

let StyledStackCountriesListAndFav = styled('div')({
    display: 'flex',
    direction: 'row',
    columnGap: '40px'
})


export default function HomeBodySection(props) {

    const {
        onFilterChange,
        filter,
        onSearch,
        searchTerm,
        countries,
        favoriteCountries,
        addFavCountry,
        removeFavCountry
    } = props

    const theme = useContext(ThemeContext);

    return (
        <HomeBodyDiv theme={theme}>
            <StyledBox>

                <StyledStackSearchAndDrop style={{ width: "100%" }}>
                    <SearchBar onSearch={onSearch} searchTerm={searchTerm} />
                    <DropDown onFilterChange={onFilterChange} filter={filter} />
                </StyledStackSearchAndDrop>

                <DndProvider backend={HTML5Backend}>
                    <Section2>
                        <StyledStackCountriesListAndFav>
                            <FavoriteList onCardDropped={addFavCountry} favoriteCountries={favoriteCountries} removeFavCountry={removeFavCountry} />
                            <CountriesCards countries={countries} favoriteCountries={favoriteCountries} addFavCountry={addFavCountry} removeFavCountry={removeFavCountry}/>
                        </StyledStackCountriesListAndFav>
                    </Section2>
                </DndProvider>

            </StyledBox>
        </HomeBodyDiv>
    );
}

