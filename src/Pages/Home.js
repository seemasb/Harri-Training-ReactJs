import Header from '../Components/header'
import HomeBodySection from '../Components/homeBodySection'
import '../Styles/home.css'
import bg from '../images/mobilebg.jpg'

function Home(props) {
    return (
        <div>
            {/* <img class="demo-bg" src={bg}></img> */}
            <Header />
            <HomeBodySection setCountry={props.setCountry}/>
        </div>
    );
}

export default Home;