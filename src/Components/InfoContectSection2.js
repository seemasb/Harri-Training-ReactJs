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
                <FlexDiv>
                    <span><Bold>Native Name: </Bold>Belgie</span>
                    <span><Bold>Population: </Bold>11,319,511</span>
                    <span><Bold>Region: </Bold>Europe</span>
                    <span><Bold>Sub Region: </Bold>Western Europe</span>
                    <span><Bold>Capital: </Bold>Brussels</span>
                </FlexDiv>
                <FlexDiv>
                    <span><Bold>Top Level Domain: </Bold>be</span>
                    <span><Bold>Currencies: </Bold>Euro</span>
                    <span><Bold>Languages: </Bold>Dutch,French,German</span>
                </FlexDiv>
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
