import Header from '../Components/Header'
import HomeBodySection from '../Components/HomeBodySection'
import '../Styles/home.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

function Home({ toggleTheme }) {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState();
    const [filter, setFilter] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [favoriteCountries, setFavoriteCountries] = useState(
        JSON.parse(localStorage.getItem('favoriteCountries')) || []
    );
    const debouncedSearchTerm = useDebounce(searchTerm, 300);

    const addFavCountry = (droppedCountry) => {
        let addedFavouriteCountries = [...favoriteCountries, droppedCountry]
        setFavoriteCountries([...new Set(addedFavouriteCountries)])
    };

    const removeFavCountry = (id) => {
        setFavoriteCountries(favoriteCountries.filter((country) => { return country.cca2 != id }))
    };


    const onSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    function onFilterChange(event) {
        setFilter(event.target.value)

    }

    function filterCountries(countries, filter , favoriteCountries) {
        //frontend filtering
        if (filter == '') {
            return [...countries];
        }
        if(filter == 'Favorites'){
            return [...favoriteCountries];
        }
        return countries.filter((country) => { return country.region == filter })

    }



    useEffect(() => {
        let url = debouncedSearchTerm ? 'https://restcountries.com/v3.1/name/' + debouncedSearchTerm : 'https://restcountries.com/v3.1/all'
        const fetchData = async () => {
            try {
                const fetcehdCountries = await axios.get(url)
                setCountries(fetcehdCountries.data);
            } catch (error) {
                console.error(error.message);
            }
        }

        fetchData();
    }, [debouncedSearchTerm])

    useEffect(() => {
        setFilteredCountries(filterCountries(countries, filter , favoriteCountries))

    }, [filter, countries])

    useEffect(() => {
        localStorage.setItem('favoriteCountries', JSON.stringify(favoriteCountries));
    }, [favoriteCountries]);

    return (
        <div>
            <Header toggleTheme={toggleTheme} />
            <HomeBodySection
                onFilterChange={onFilterChange}
                filter={filter}
                onSearch={onSearch}
                searchTerm={searchTerm}
                countries={filteredCountries}
                favoriteCountries={favoriteCountries}
                addFavCountry={addFavCountry}
                removeFavCountry={removeFavCountry}
            />
        </div>
    );
}

export default Home;


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
