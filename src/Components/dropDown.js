import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styled from 'styled-components';

const StyledInputLabel = styled(InputLabel)({
  '@media (max-width: 400px)': {
    fontSize: '10px',
  }
})

export default function BasicSelect() {
  const [Filter, setFilter] = React.useState('');

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, width: '200px', backgroundColor: 'white', fontWeight: '800' }} >
      <FormControl fullWidth>
        <StyledInputLabel>Filter By Region</StyledInputLabel>
        <Select
          value={Filter}
          label="Filter By Region"
          onChange={handleChange}
        >
          <MenuItem value={'Africa'}>Africa</MenuItem>
          <MenuItem value={'America'}>America</MenuItem>
          <MenuItem value={'Asia'}>Asia</MenuItem>
          <MenuItem value={'Europe'}>Europe</MenuItem>
          <MenuItem value={'Oceania'}>Oceania</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}