import CountryCard from "./countryCard";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import US from '../images/us.svg'
import Brazil from '../images/br.svg'
import Iceland from '../images/is.svg'
import Aland from '../images/ax.svg'
import Albania from '../images/al.svg'
import Algeria from '../images/dz.svg'


const CountriesCards = styled('div')({
    width: '75%',
    height: '100vh',
    overflowY: 'scroll',

    '@media (max-width: 1000px)': {
        width: '100%',
    }
})

let countries = [
    {
        flagSrc: US,
        countryName: 'Unites States of America',
        population: '323,947,000',
        region: 'Americas',
        capital: 'Washington, D.C.',
    },
    {
        flagSrc: Brazil,
        countryName: 'Brazil',
        population: '206,135,893',
        region: 'Americas',
        capital: 'Brasilia',
    },
    {
        flagSrc: Iceland,
        countryName: 'Iceland',
        population: '334,300',
        region: 'Europe',
        capital: 'Reykjavik',
    },
    {
        flagSrc: Aland,
        countryName: 'Aland Island',
        population: '28,875',
        region: 'Europe',
        capital: 'Mariehamn',
    },
    {
        flagSrc: Albania,
        countryName: 'Albania',
        population: '27,657,145',
        region: 'Asia',
        capital: 'Kabul',
    },
    {
        flagSrc: Algeria,
        countryName: 'Algeria',
        population: '27,657,145',
        region: 'Asia',
        capital: 'Kabul',
    }

]

function countriesCards() {


    return (

        <CountriesCards>
            <Grid container spacing={9}>
                {countries.map((country, index) => (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <CountryCard
                            flagSrc={country.flagSrc}
                            countryName={country.countryName}
                            population={country.population}
                            region={country.region}
                            capital={country.capital}
                        />
                    </Grid>
                ))}
            </Grid>
        </CountriesCards>
    );
}

export default countriesCards;