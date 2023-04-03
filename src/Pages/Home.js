import Header from '../Components/Header'
import HomeBodySection from '../Components/HomeBodySection'
import '../Styles/home.css'

function Home({toggleTheme}) {
    return (
        <div>
            <Header toggleTheme={toggleTheme}/>
            <HomeBodySection />
        </div>
    );
}

export default Home;