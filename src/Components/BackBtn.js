import React from 'react';
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import styled from 'styled-components';
import { Box } from '@mui/material/';
import { useNavigate } from 'react-router-dom';



const StyledIconButton = styled(Button)`
  && {
    background-color: #fff;
    border: none;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    height: 40px;
    width: 100%;
    max-width: 135px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 25px;
    padding-right: 8px;
    color: black;
    font-weight: 600;
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

    const handleClick = () => {
        navigate('/');
    };

    return (
        <StyledBox>
            <StyledIconButton startIcon={<KeyboardBackspaceIcon />} onClick={handleClick}>
                Back
            </StyledIconButton>
        </StyledBox>
    );
};

export default BackBtn;
