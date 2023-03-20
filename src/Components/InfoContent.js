import styled from 'styled-components';
import { Box } from '@mui/material/';
import Grid from '@mui/material/Grid';
import InfoContentSection2 from './InfoContectSection2'

const StyledFlag = styled('img')({
    objectFit: 'cover',
    width: '93%',
    margin: 'auto',
    '@media (max-width: 899px)': {
        width: '100%',
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
        marginLeft: 14,
        marginRight: 14,
    }
})

function InfoContent(props) {
    return (
        <StyledBox>
            <Grid container spacing={5}>
                <Grid item sm={12} md={6}>
                    <StyledFlag src={props.countryData.flagSrc}></StyledFlag>
                </Grid>
                <Grid item sm={6} md={6}>
                    <InfoContentSection2 />
                </Grid>
            </Grid>
        </StyledBox>
    );
}

export default InfoContent;

