import Header from "../Components/header";
import InfoContent from '../Components/InfoContent'
import '../Styles/home.css'
import bg from '../images/mobileInfo.jpg'
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
            {/* <img class="demo-bg" src={bg}></img> */}
            <Header />
            <BackBtn />
            <InfoContent CountryName={CountryName}/>
        </div>
    );
}

export default Info;