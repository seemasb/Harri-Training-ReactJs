import {Container , Box} from '@mui/material/';
import HomeBodySection1 from './homeBodySection1';
import HomeBodySection2 from './homeBodySection2';

function homeBodySection() {
    return (
        <div>
            {/* <Container maxWidth="lg"> */}
            <Box sx={{ ml: 10, mr: 10 , pt: 6 }}>
                <HomeBodySection1 />
                <HomeBodySection2 />
            </Box>
            {/* </Container> */}
        </div>
    ); 
}

export default homeBodySection;