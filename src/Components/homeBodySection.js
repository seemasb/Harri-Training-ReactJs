import { Container, Box } from '@mui/material/';
import HomeBodySection1 from './homeBodySection1';
import HomeBodySection2 from './homeBodySection2';
import { styled } from '@mui/material/';
import { FitScreen } from '@mui/icons-material';

const StyledBox = styled(Box)({
    marginLeft: 80,
    marginRight: 80,
    paddingTop: 47,

    '@media (max-width: 700px)': {
        marginLeft: 40,
        marginRight: 40,
    },
    '@media (max-width: 400px)': {
        marginLeft: 14,
        marginRight: 14,
    }
})

function homeBodySection(props) {
    return (
        <div className='homeBodySection'>
            {/* <Container maxWidth="lg"> */}
            <StyledBox>
                <HomeBodySection1 />
                <HomeBodySection2 setCountry={props.setCountry} />
            </StyledBox>
            {/* </Container> */}
        </div>
    );
}

export default homeBodySection;