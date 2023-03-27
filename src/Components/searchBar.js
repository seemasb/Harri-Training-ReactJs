import { TextField } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from '@mui/material/styles';



const SearchField = styled(TextField)`
  && {
    border: none;
    outline: none;
    border-color: transparent;
    background-color: white;
    width: 38%;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    min-width: 300px;

    &:focus {
      outline: none;
    }

    @media screen and (max-width: 600px) {
      width: 100%;
    }
  }
`;

const Flex = styled('div')({
  display: 'flex',
  fontSize: '14px',
  columnGap: 7,
})



export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <SearchField
      id="search"
      type="search"
      label={
        <Flex>
          <SearchIcon />
          <div>
            Search for a country..
          </div>
        </Flex>
      }
      value={searchTerm}
      onChange={handleChange}
    />
  );
}