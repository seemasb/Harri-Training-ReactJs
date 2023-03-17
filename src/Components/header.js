import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';


const DarkModeBtn = styled(Button)`
  && {
    color: black;
    border: none;
    text-transform: none;
    // margin-right: -20px;

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
      <Container>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <h3>Where in the world?</h3>

          <DarkModeBtn variant="outlined" startIcon={<DarkModeOutlinedIcon />}>
            Dark Mode
          </DarkModeBtn>
        </Stack>
      </Container>
    </div>
  );
}

export default header;
