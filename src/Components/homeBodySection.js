import { Container, Box } from '@mui/material/';
import HomeBodySection1 from './homeBodySection1';
import HomeBodySection2 from './HomeBodySection2';
import { styled } from '@mui/material/';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useContext } from "react";
import { ThemeContext } from "../Themes/ThemeContext";

const StyledBox = styled(Box)({
    marginLeft: 80,
    marginRight: 80,
    paddingTop: 47,

    '@media (max-width: 700px)': {
        marginLeft: 40,
        marginRight: 40,
    },
    '@media (max-width: 400px)': {
        marginLeft: 14,
        marginRight: 14,
        paddingTop: 25,
    }
})

const HomeBodyDiv = styled('div')`
    background-color: ${(props) => props.theme.Darkbackground};
    padding-bottom: 70px;
`

export default function HomeBodySection() {
    const [countries, setCountries] = useState();
    const [filteredCountries, setFilteredCountries] = useState();
    const [filter, setFilter] = useState('');
    const [searchTerm, setSearchTerm] = useState("");
    const [favoriteCountries, setFavoriteCountries] = useState([]);
    const debouncedSearchTerm = useDebounce(searchTerm, 300);

    const handleCardDropped = (id) => {
        setFavoriteCountries((ids) => [...ids, id]);
    };

    const handleRemoveFav = (id) => {
        setFavoriteCountries(favoriteCountries.filter((country) => { return country.cca2 != id }))
    };


    const onSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    function onFilterChange(event) {
        setFilter(event.target.value)
        countriesFiltering(event.target.value)

    }

    function countriesFiltering(filter) {
        //frontend filtering
        if (filter == '') {
            setFilteredCountries()
        }
        else {
            setFilteredCountries(countries.filter((country) => { return country.region == filter }))
        }
    }

    useEffect(() => {
        let url = searchTerm ? 'https://restcountries.com/v3.1/name/' + searchTerm : 'https://restcountries.com/v3.1/all'
        const fetchData = async () => {
            try {
                const fetcehdCountries = await axios.get(url)
                setCountries(fetcehdCountries.data);
                countriesFiltering(filter)
            } catch (error) {
                console.error(error.message);
            }
        }

        fetchData();
    }, [debouncedSearchTerm])


    const theme = useContext(ThemeContext);

    return (
        <HomeBodyDiv theme={theme}>
            <StyledBox>
                <HomeBodySection1 onFilterChange={onFilterChange} filter={filter} onSearch={onSearch} searchTerm={searchTerm} />
                <HomeBodySection2 countries={filteredCountries ? filteredCountries : countries} 
                favoriteCountries={favoriteCountries}
                handleCardDropped={handleCardDropped}
                handleRemoveFav={handleRemoveFav}
                />
            </StyledBox>
        </HomeBodyDiv>
    );
}


// Hook
function useDebounce(value, delay) {
    // State and setters for debounced value
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(
        () => {
            // Update debounced value after delay
            const handler = setTimeout(() => {
                setDebouncedValue(value);
            }, delay);
            // Cancel the timeout if value changes (also on delay change or unmount)
            // This is how we prevent debounced value from updating if value is changed ...
            // .. within the delay period. Timeout gets cleared and restarted.
            return () => {
                clearTimeout(handler);
            };
        },
        [value, delay] // Only re-call effect if value or delay changes
    );
    return debouncedValue;
}
