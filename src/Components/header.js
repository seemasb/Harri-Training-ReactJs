import {Container , Box} from '@mui/material/';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';


const DarkModeBtn = styled(Button)`
  && {
    color: black;
    // border: none;
    text-transform: none;
    font-weight: 600;
    // width: fit-content;
    // padding-right: -10px;

    &:hover {
      background-color: transparent;
      color: black;
      border: none;
    }
  }
`;

// const DarkModeBtn = styled(Button)({
//     color: 'white',
//     backgroundColor: 'black',
//     border: 'none',
//   }); 


function header() {
  return (
    <div className='header'>
      <Box sx={{ml: 9 , mr: 9}}>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <h2>Where in the world?</h2>

          <DarkModeBtn variant="outlined" startIcon={<DarkModeOutlinedIcon />}>
            Dark Mode
          </DarkModeBtn>
        </Stack>
      </Box>
    </div>
  );
}

export default header;
