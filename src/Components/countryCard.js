import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";
import { useContext } from "react";
import CountryContext from '../App'



const CountryTitle = styled('div')({
  fontWeight: '800',
  fontSize: '19px',
})

const SemiBold = styled('span')({
  fontWeight: '600',
})

const StyledFlag = styled('img')({
  height: '160px',
  objectFit: 'cover',
  width: '100%'
})


export default function CountryCard(props) {
  const { flagSrc, countryName, population, region, capital, setCountry } = props;
  // const setCountry = useContext(CountryContext);

  return (
    <Link to="/Info" style={{ textDecoration: 'none' }}>
      <Card sx={{ pb: 2, boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.1)' }}
        onClick={() => setCountry(props)}
      >
        <StyledFlag
          src={flagSrc}
        />
        <CardContent sx={{ pt: 2.5, pl: 3 }}>
          <Stack direction="column" spacing={1} justifyContent="space-between">

            <CountryTitle>
              {countryName}
            </CountryTitle>

            <Stack direction="column" spacing={0.5} justifyContent="space-between">
              <div><SemiBold>Population: </SemiBold>{population}</div>
              <div><SemiBold>Region: </SemiBold>{region}</div>
              <div><SemiBold>Capital: </SemiBold>{capital}</div>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Link>
  );
}
