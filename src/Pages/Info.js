import Header from "../Components/Header";
import InfoContent from '../Components/InfoContent'
import '../Styles/home.css'
import BackBtn from "../Components/BackBtn";
import { useLoaderData } from "react-router-dom";

export function Countryloader({ params }) {
    const CountryName = params.country;
    return { CountryName };
}


function Info() {
    const { CountryName } = useLoaderData();
    return (
        <div>
            <Header />
            <BackBtn />
            <InfoContent CountryName={CountryName} />
        </div>
    );
}

export default Info;