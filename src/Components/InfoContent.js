import styled from 'styled-components';
import { Box } from '@mui/material/';
import Grid from '@mui/material/Grid';
import CountryDetails from './CountryDetails'
import CircularProgress from '@mui/material/CircularProgress';
import { useState, useEffect } from 'react';
import axios from 'axios';


const StyledFlag = styled('img')({
    objectFit: 'cover',
    width: '93%',
    margin: 'auto',
    // height: '400px',
    '@media (max-width: 899px)': {
        width: '100%',
        // height: '200px',
    },
})

const StyledBox = styled(Box)({
    marginLeft: 80,
    marginRight: 80,
    marginBottom: 80,

    '@media (max-width: 700px)': {
        marginLeft: 40,
        marginRight: 40,
    },
    '@media (max-width: 400px)': {
        marginLeft: 27,
        marginRight: 27,
    }
})

function InfoContent({ CountryName }) {
    const [countryInfo, setCountryInfo] = useState();

    useEffect(() => {

        const fetchData = async () => {
            try {
                const fetcehdInfo = await axios.get('https://restcountries.com/v3.1/name/' + CountryName)
                setCountryInfo(fetcehdInfo.data[0]);
            } catch (error) {
                console.error(error.message);
            }
        }

        fetchData();
    }, [])

    return (
        <StyledBox>
            {countryInfo ? 
            <Grid container spacing={9}>
                <Grid item sm={12} md={6}>
                    <StyledFlag src={countryInfo.flags.svg}></StyledFlag>
                </Grid>
                <Grid item sm={12} md={6}>
                    <CountryDetails countryInfo={countryInfo} />
                </Grid>
            </Grid>
            : <CircularProgress /> }
        </StyledBox>
    );
}

export default InfoContent;

