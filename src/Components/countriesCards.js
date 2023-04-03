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
    }
})


export default function CountriesCards({countries}) {

    return (


        <CountriesCardsContainer>
            {countries ?
                <Grid container spacing={9}>
                    {countries.map((country, index) => (
                        <Grid item lg={4} md={6} sm={6} xs={12} xl={3}>
                            <CountryCard Country={country} key={country.cca2}/>
                        </Grid>
                    ))}
                </Grid>
                : <CircularProgress />}
        </CountriesCardsContainer>

    );
}

