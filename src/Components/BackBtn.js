import React from 'react';
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import styled from 'styled-components';
import { Box } from '@mui/material/';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { ThemeContext } from "../Themes/ThemeContext";



const StyledIconButton = styled(Button)`
  && {
    background-color: ${(props) => props.btntheme.Lightbackground};
    color: ${(props) => props.btntheme.color};
    border: none;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    height: 40px;
    width: 100%;
    max-width: 135px;
    text-transform: none;
    &:hover {
      background-color: #f5f5f5;
    }
    .MuiSvgIcon-root {
      margin-right: 2px;
    }

    @media (max-width: 400px) {
        max-width: 105px;
        height: 30px;
      }
  }
`;

const StyledBox = styled(Box)({
    marginLeft: 80,
    marginRight: 80,
    marginTop: 80,
    marginBottom: 80,

    '@media (max-width: 700px)': {
        marginLeft: 40,
        marginRight: 40,
    },
    '@media (max-width: 400px)': {
        marginLeft: 27,
        marginRight: 27,
    }
    ,
    '@media (max-width: 450px)': {
        marginTop: 40,
        marginBottom: 65,
    }
})

const BackBtn = () => {
    const navigate = useNavigate();
    const theme = useContext(ThemeContext);


    const handleClick = () => {
        navigate('/');
    };

    return (
        <StyledBox >
            <StyledIconButton startIcon={<KeyboardBackspaceIcon />} onClick={handleClick} btntheme={theme}>
                Back
            </StyledIconButton>
        </StyledBox>
    );
};

export default BackBtn;
