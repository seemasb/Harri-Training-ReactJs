import Grid from '@mui/material/Grid';
import styled from 'styled-components';

const FlexDiv = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    rowGap: '0.7rem',

})

const Flex1 = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    marginTop: 27,
    // columnGap: '8.5rem',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    rowGap: '55px',

    '@media (max-width: 1150px)': {
        fontSize: '14px',
      },

    '@media (max-width: 700px)': {
        fontSize: '13px'
      },


})

const DivInfoContentSection2 = styled('div')({
    paddingTop: 40,

    '@media (max-width: 900px)': {
        paddingTop: 0,
      },

})

const CountryTitle = styled('span')({
    fontSize: '2em',
    fontWeight: '800',
    
    '@media (max-width: 700px)': {
        fontSize: '20px'
      },

      '@media (max-width: 1150px)': {
        fontSize: '24px'
      },
})

const Bold = styled('span')({
    fontWeight: '800'
})

export default function InfoContentSection2() {
    return (
        <DivInfoContentSection2>
            <CountryTitle>Belguim</CountryTitle>
            <Flex1>
                {/* <Grid container spacing={0}> */}
                {/* <Grid sm={6} xs={12}> */}
                <FlexDiv>
                    <span><Bold>Native Name: </Bold>Belgie</span>
                    <span><Bold>Population: </Bold>11,319,511</span>
                    <span><Bold>Region: </Bold>Europe</span>
                    <span><Bold>Sub Region: </Bold>Western Europe</span>
                    <span><Bold>Capital: </Bold>Brussels</span>
                </FlexDiv>
                {/* </Grid> */}
                {/* <Grid sm={6} xs={12}> */}
                <FlexDiv>
                    <span><Bold>Top Level Domain: </Bold>be</span>
                    <span><Bold>Currencies: </Bold>Euro</span>
                    <span><Bold>Languages: </Bold>Dutch,French,German</span>
                </FlexDiv>
                {/* </Grid> */}
                {/* </Grid> */}
            </Flex1>

            {/* <div>
                <span>Border Countries:</span>
                <div>
                    <span>French</span>
                    <span>Germany</span>
                    <span>Netherlands</span>
                </div>
            </div> */}
        </DivInfoContentSection2>
    )
}
// style="padding-top: 5px; font-size: 16px;"