import Header from '../Components/header'
import HomeBodySection from '../Components/homeBodySection'
import '../Styles/home.css'
import bg from '../images/mobilebg.jpg'

function Home() {
    return (
        <div>
            {/* <img class="demo-bg" src={bg}></img> */}
            <Header />
            <HomeBodySection />
        </div>
    );
}

export default Home;