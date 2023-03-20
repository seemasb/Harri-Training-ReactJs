import { Container, Box } from '@mui/material/';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';


const DarkModeBtn = styled(Button)`
  && {
    color: black;
    border: none;
    text-transform: none;
    font-weight: 600;
    // width: fit-content;

    //////caution////////
    margin-right: -17px;

    &:hover {
      background-color: transparent;
      color: black;
      border: none;
    }
  }
`;

const StyledBox = styled(Box)({
  marginLeft: 80,
  marginRight: 80,

  '@media (max-width: 700px)': {
    marginLeft: 40,
    marginRight: 40,
  },
  '@media (max-width: 400px)': {
    marginLeft: 14,
    marginRight: 14,
  }
})

const HeaderTitle = styled('div')({
  fontWeight: '800',
  fontSize: 25,


  '@media (max-width: 400px)': {
    fontSize: 14
  }
})


function header() {
  return (
    <div className='header'>
      <StyledBox>
        <Stack direction="row" spacing={0} justifyContent="space-between">
          <h2>Where in the world?</h2>

          <DarkModeBtn variant="outlined" startIcon={<DarkModeOutlinedIcon />}>
            Dark Mode
          </DarkModeBtn>
        </Stack>
      </StyledBox>
    </div>
  );
}

export default header;
