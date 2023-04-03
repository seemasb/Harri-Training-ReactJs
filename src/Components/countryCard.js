import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";
import { useDrag } from 'react-dnd';
import { useContext } from "react";
import { ThemeContext } from "../Themes/ThemeContext";


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

  backgroundColor: (props) => props.cardTheme.Lightbackground,
  color: (props) => props.cardTheme.color,

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


export default function CountryCard({ Country }) {

  const { flags, name, population, region, capital } = Country;
  const theme = useContext(ThemeContext);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'CARD',
    item: { Country },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return (
    <Link to={`Info/${name.common}`} style={{ textDecoration: 'none', opacity: isDragging ? 0.5 : 1 }}
      ref={drag}
    >
      <StyledCard sx={{ pb: 2, boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.1)' }}
        onClick={() => { console.log(Country) }}
      >

        {/* cardTheme={theme} */}
        <StyledFlag
          src={flags.svg}
        />
        <CardContent sx={{ pt: 2.5, pl: 3 }}>
          <Stack direction="column" spacing={1.5} justifyContent="space-between">

            <CountryTitle>
              {name.common}
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
