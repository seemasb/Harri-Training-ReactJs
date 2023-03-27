import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";



const CountryTitle = styled('div')({
  fontWeight: '800',
  fontSize: '18px',
})

const SemiBold = styled('span')({
  fontSize: '13px',
  fontWeight: '600',
})
const CardDetails = styled('span')({
  fontSize: '14px',
})

const StyledFlag = styled('img')({
  height: '160px',
  objectFit: 'cover',
  width: '100%'
})

const StyledCard = styled(Card)({

  '@media (max-width: 1000px)': {
    maxWidth: '300px',
    // margin: 'auto'
  },

  '@media (max-width: 600px)': {
    // maxWidth: '70%',
    margin: 'auto'
  },

  '@media (max-width: 400px)': {
    maxWidth: '260px',
  }

})


export default function CountryCard(props) {
  const { flagSrc, countryName, population, region, capital } = props;

  return (
    <Link to={`Info/${countryName}`} style={{ textDecoration: 'none' }}>
      <StyledCard sx={{ pb: 2, boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.1)' }}
        onClick={() => { }}
      >
        <StyledFlag
          src={flagSrc}
        />
        <CardContent sx={{ pt: 2.5, pl: 3 }}>
          <Stack direction="column" spacing={1.5} justifyContent="space-between">

            <CountryTitle>
              {countryName}
            </CountryTitle>

            <Stack direction="column" spacing={0.3} justifyContent="space-between">
              <div><SemiBold>Population: </SemiBold><CardDetails>{population}</CardDetails></div>
              <div><SemiBold>Region: </SemiBold><CardDetails>{region}</CardDetails></div>
              <div><SemiBold>Capital: </SemiBold><CardDetails>{capital}</CardDetails></div>
            </Stack>
          </Stack>
        </CardContent>
      </StyledCard>
    </Link>
  );
}
