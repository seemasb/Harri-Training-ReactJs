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
        <div>
          <SearchIcon />
          <span> Search for a country..</span>
        </div>
      }
      value={searchTerm}
      onChange={handleChange}
    />
  );
}