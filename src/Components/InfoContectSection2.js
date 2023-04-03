import styled from 'styled-components';
import BorderCountry from './BorderCountry';

const FlexDiv = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    rowGap: '0.7rem',

    '@media (max-width: 400px)': {
        rowGap: '0.9rem',
    },

})

const BorderFlex = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    columnGap: '0.7rem',
    flexWrap: 'wrap',
    rowGap: '0.7rem',
    marginTop: 65,

    '@media (max-width: 1150px)': {
        marginTop: 20,
        fontSize: '13px'
    },
})

const BorderCountries = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    columnGap: '0.7rem',

})

const Flex1 = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    marginTop: 27,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    rowGap: '55px',

    '@media (max-width: 1150px)': {
        fontSize: '14px',
    },

    '@media (max-width: 700px)': {
        fontSize: '13px',
        rowGap: '40px',
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

const BoldBorderTitle = styled('span')({
    fontWeight: '800',
    marginTop: 5,
    '@media (max-width: 400px)': {
        fontSize: '15px',
        marginTop: 23,
    },
})

export default function InfoContentSection2({ countryInfo }) {

    const { name, population, region, subregion, capital,
        cca2, currencies, languages } = countryInfo
    return (
        <DivInfoContentSection2>
            <CountryTitle>{name.common}</CountryTitle>
            <Flex1>
                <FlexDiv>
                    <span><Bold>Native Name: </Bold>{name.common}</span>
                    <span><Bold>Population: </Bold>{population}</span>
                    <span><Bold>Region: </Bold>{region}</span>
                    <span><Bold>Sub Region: </Bold>{subregion}</span>
                    <span><Bold>Capital: </Bold>{capital}</span>
                </FlexDiv>
                <FlexDiv>
                    <span><Bold>Top Level Domain: </Bold>{cca2}</span>
                    <span><Bold>Currencies: </Bold>Euro</span>
                    <span><Bold>Languages: </Bold>Dutch,French,German</span>
                </FlexDiv>
            </Flex1>

            <BorderFlex>
                <BoldBorderTitle>Border Countries:</BoldBorderTitle>
                <BorderCountries>
                    <BorderCountry country='French' />
                    <BorderCountry country='Germany' />
                    <BorderCountry country='Netherlands' />
                </BorderCountries>
            </BorderFlex>
        </DivInfoContentSection2>
    )
}
