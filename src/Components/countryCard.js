import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";
import { useDrag } from 'react-dnd';
import { useContext } from "react";
import { ThemeContext } from "../Themes/ThemeContext";
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';



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


const StyledCard = styled(Card)`

  background-color: ${(props) => props.cardtheme.Lightbackground};
  color: ${(props) => props.cardtheme.color};
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 1000px) {
    max-width: 300px;
  }
  @media screen and (min-width: 1000px) {
    // padding-bottom: 25px;
  }

  @media screen and (max-width: 600px) {
    margin : auto;
  }

  @media screen and (max-width: 400px) {
    max-width: 260px;
  }

`

const StyledFavButton = styled(IconButton)`
display: flex;
justify-content: flex-end;
margin: 0;
@media screen and (min-width: 1000px) {
  display: none;
}
`

const StyledCardContent = styled(CardContent)`

@media screen and (max-width: 1000px) {
  padding: 16px 0 0 27px!important;
}
`


export default function CountryCard({ Country, favoriteCountries, addFavCountry, removeFavCountry }) {

  const { flags, name, population, region, capital } = Country;
  const theme = useContext(ThemeContext);

  const isFav = favoriteCountries.find(matchedCountry => matchedCountry.cca2 == Country.cca2);

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
      <StyledCard
        onClick={() => { console.log(Country) }}
        cardtheme={theme}
      >

        <StyledFlag
          src={flags.svg}
        />
        <StyledCardContent>
        {/* sx={{ pt: 2.5, pl: 3 }} */}
          <Stack direction="column" spacing={1.5} justifyContent="space-between">

            <CountryTitle>
              {name.common}
            </CountryTitle>

            <Stack direction="column" spacing={0.3} justifyContent="space-between">
              <div><SemiBold>Population: </SemiBold><CardDetails>{population.toLocaleString('en-US')}</CardDetails></div>
              <div><SemiBold>Region: </SemiBold><CardDetails>{region}</CardDetails></div>
              <div><SemiBold>Capital: </SemiBold><CardDetails>{capital}</CardDetails></div>

              <StyledFavButton aria-label="addFav"  onClick={(e) => e.preventDefault}>
                <Link to={`/`} style={{ color: 'orange' }}>
                  {isFav ? <StarIcon onClick={() => removeFavCountry(Country.cca2)} /> : <StarBorderIcon onClick={() => addFavCountry(Country)} />}
                </Link>
              </StyledFavButton>

            </Stack>
          </Stack>

        </StyledCardContent>
      </StyledCard>
    </Link>
  );
}
