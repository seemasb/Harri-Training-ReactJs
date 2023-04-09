import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styled from 'styled-components';
import { useContext } from "react";
import { ThemeContext } from "../Themes/ThemeContext";

const StyledInputLabel = styled(InputLabel)({
  '@media (max-width: 400px)': {
    fontSize: '10px',
  }
})

const StyledBox = styled(Box)`
  background-color: ${(props) => props.theme.Lightbackground};
  // color: ${(props) => props.theme.color};
`

// const StyledMenuItem = styled(MenuItem)`
// background-color: ${(props) => props.theme.Lightbackground};
// color: ${(props) => props.theme.color};
// `
export default function BasicSelect({onFilterChange , filter}) {


  const theme = useContext(ThemeContext);

  return (
    <StyledBox sx={{ minWidth: 120, width: '200px', fontWeight: '800' }} theme={theme}>
      <FormControl fullWidth >
        <StyledInputLabel sx={{color: theme.color}}>Filter By Region</StyledInputLabel>
        <Select
          value={filter}
          label="Filter By Region"
          onChange={onFilterChange}
          sx={{color: theme.color}}
        >
          <MenuItem value={''}>No Filter</MenuItem>
          <MenuItem value={'Favorites'}>Favorites</MenuItem>
          <MenuItem value={'Africa'}>Africa</MenuItem>
          <MenuItem value={'Americas'}>Americas</MenuItem>
          <MenuItem value={'Asia'}>Asia</MenuItem>
          <MenuItem value={'Europe'}>Europe</MenuItem>
          <MenuItem value={'Oceania'}>Oceania</MenuItem>
        </Select>
      </FormControl>
    </StyledBox>
  );
}