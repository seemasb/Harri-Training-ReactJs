import { styled } from '@mui/material/styles';
import FavCountry from './favCountry';
import { Box, Stack } from '@mui/material/';

const FavList = styled('div')({
    backgroundColor: 'white',
    width: '24%',
    height: '100vh',
    borderRadius: '4px',
    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)',

    '@media (max-width: 1000px)': {
        display: 'none',
    },
});


const FavListTitle = styled('div')({
    fontSize: '20px',
    fontWeight: '800',
    marginLeft: '27px',
    marginTop: '16px',
    marginBottom: '26px'
});


function favoriteList() {
    return (
        <FavList>
            <FavListTitle>Favourites</FavListTitle>
            <Box sx={{
                pl: 3,
                pr: 3,
            }}>
                <Stack direction={'column'} spacing={2}>
                    <FavCountry />
                    <FavCountry />
                </Stack>
            </Box>
        </FavList>
    );
}

export default favoriteList;