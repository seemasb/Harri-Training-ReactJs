import Header from "../Components/Header";
import InfoContent from '../Components/InfoContent'
import '../Styles/home.css'
import BackBtn from "../Components/BackBtn";
import { useLoaderData } from "react-router-dom";
import { useContext } from 'react';
import { ThemeContext } from '../Themes/ThemeContext';
import styled from 'styled-components';

const StyledInfoBody = styled('div')`
background-color: ${(props) => props.theme.Darkbackground};
color: ${(props) => props.theme.color};
padding-bottom: 50px;
`

export function Countryloader({ params }) {
    const CountryName = params.country;
    return { CountryName };
}


function Info({toggleTheme}) {
    const { CountryName } = useLoaderData();
    const theme = useContext(ThemeContext);

    return (
        <StyledInfoBody theme={theme}>
            <Header toggleTheme={toggleTheme}/>
            <BackBtn />
            <InfoContent CountryName={CountryName} />
        </StyledInfoBody>
    );
}

export default Info;