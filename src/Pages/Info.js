import Header from "../Components/header";
import InfoContent from '../Components/InfoContent'
import '../Styles/home.css'
import bg from '../images/mobileInfo.jpg'
import BackBtn from "../Components/BackBtn";


function Info(props) {
    return (
        <div>
            {/* <img class="demo-bg" src={bg}></img> */}
            <Header />
            <BackBtn />
            <InfoContent countryData={props.country} />
        </div>
    );
}

export default Info;