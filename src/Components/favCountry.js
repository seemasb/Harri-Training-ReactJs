import { Button, Stack, styled } from '@mui/material/';
import US from '../images/us.svg'
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';


const FavFlag = styled('img')({
    width: '34px',
    height: '18px',
    objectFit: 'cover',
    marginRight: '3px',
    borderRadius: '5px'
})

const FavTitle = styled('span')({
    fontWeight: '800',
    fontSize: '12px',


})

const FavRemove = styled(Button)({
    color: 'black',
    height: '5px',
    '&:focus': {
        outline: 'none',
        backgroundColor: 'transparent',
    }
})

function favCountry({ favCountry, handleRemoveFav }) {
    return (
        <div>
            <Stack direction="row" justifyContent="space-between">
                <Stack direction="row" spacing={1}>
                    <FavFlag src={favCountry.flags.svg}></FavFlag>
                    <FavTitle>{favCountry.name.common}</FavTitle>
                </Stack>
                {/* <IconButton aria-label="delete" size="small">
                    <CloseIcon fontSize="inherit" />
                </IconButton> */}
                <FavRemove onClick={() => handleRemoveFav(favCountry.cca2)}><CloseIcon
                    sx={{ fontSize: 11, backgroundColor: 'lightgray', borderRadius: 5, p: 0.3 }}
                /></FavRemove>
            </Stack>
        </div>
    );
}

export default favCountry;