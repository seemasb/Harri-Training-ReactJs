import Container from '@mui/material/Container';
import HomeBodySection1 from './homeBodySection1';
import HomeBodySection2 from './homeBodySection2';

function homeBodySection() {
    return (
        <div className="homeBodySection">
            <Container>
                <HomeBodySection1 />
                <HomeBodySection2 />
            </Container>
        </div>
    );
}

export default homeBodySection;