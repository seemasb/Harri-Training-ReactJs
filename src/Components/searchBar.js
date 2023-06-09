import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from '@mui/material/styles';
import { useContext } from "react";
import { ThemeContext } from "../Themes/ThemeContext";


const SearchField = styled(TextField)`
  && {
    border: none;
    outline: none;
    border-color: transparent;
    background-color:${(props) => props.theme.Lightbackground};
    color: ${(props) => props.theme.color};
    width: 38% !important;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    min-width: 300px;

    &:focus {
      outline: none;
    }

    @media screen and (max-width: 600px) {
      width: 100% !important;
    }
  }
`;

const Flex = styled('div')({
  display: 'flex',
  fontSize: '14px',
  columnGap: 7,
})



export default function SearchBar(props) {

  const { onSearch, searchTerm } = props
  const theme = useContext(ThemeContext);

  return (
    <SearchField
      id="search"
      type="search"
      label={
        <Flex>
          <SearchIcon style={{color: theme.color}}/>
          <div style={{color: theme.color}}>
            Search for a country..
          </div>
        </Flex>
      }
      value={searchTerm}
      onChange={onSearch}
      theme={theme}
    />
  );
}