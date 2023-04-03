import { Container, Box } from '@mui/material/';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useContext } from "react";
import { ThemeContext } from "../Themes/ThemeContext";

// const Theme = useContext(ThemeContext);
// ${({ Theme }) => Theme.background}

const DarkModeBtn = styled(Button)`
  && {
    color: ${(props) => props.btntheme.color};
    border: none;
    text-transform: none;
    font-weight: 600;
    // width: fit-content;

    //////caution////////
    margin-right: -15px;

    &:hover {
      background-color:transparent;
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

const HeaderDiv = styled.div`
    height: 80px;
    line-height: 80px;
    background-color: ${(props) => props.theme.Lightbackground};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    position: relative;
    color: ${(props) => props.theme.color};
`


const HeaderTitle = styled('div')({
  fontWeight: '800',
  fontSize: 25,


  '@media (max-width: 600px)': {
    fontSize: 17
  }
})
// ${(props) => props.theme.background}

function Header({toggleTheme}) {
  const theme = useContext(ThemeContext);

  return (
    <HeaderDiv theme={theme}>
      <StyledBox>
        <Stack direction="row" spacing={0} justifyContent="space-between">
          <HeaderTitle>Where in the world?</HeaderTitle>

          <DarkModeBtn btntheme={theme} variant="outlined" startIcon={<DarkModeOutlinedIcon />} onClick={toggleTheme}>
            Dark Mode
          </DarkModeBtn>
        </Stack>
      </StyledBox>
    </HeaderDiv>
  );
}

export default Header;
