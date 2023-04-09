import CountryCard from "./countryCard";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';



const CountriesCardsContainer = styled('div')({
    width: '75%',
    height: '100vh',
    overflowY: 'scroll',

    '@media (max-width: 1000px)': {
        width: '100%',
        overflowY: 'none',
    }
})


export default function CountriesCards({countries , favoriteCountries , addFavCountry , removeFavCountry}) {

    return (


        <CountriesCardsContainer>
            {countries ?
                <Grid container spacing={9}>
                    {countries.map((country, index) => (
                        <Grid item lg={4} md={6} sm={6} xs={12} xl={3}>
                            <CountryCard key={index} Country={country} favoriteCountries={favoriteCountries} addFavCountry={addFavCountry} removeFavCountry={removeFavCountry}/>
                        </Grid>
                    ))}
                </Grid>
                : <CircularProgress />}
        </CountriesCardsContainer>

    );
}

// key={country.cca2}

