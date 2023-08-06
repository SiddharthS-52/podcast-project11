import './Home.css';
import Hero from '../Components/Hero';
import HomeImg from "../Assets/pexels-dlxmediahu-11884525.jpg";
import Navbar from '../Components/Navbar';
import Suggest from '../Components/Suggest';
import ContentTypes from '../Components/ContentTypes';
import Footer from '../Components/Footer';
import Slider from '../Components/Slider';

function Home() {
    return (
        <>
            <Navbar/>
            <Hero
                cName = "hero"
                heroImg = {HomeImg}
                title = "Welcome"
                text = "Experiences & Perspectives is a podcast where we explore & reflect on how to live a healthy, joyous & creative life."
            />
            <ContentTypes/>
            <Slider/>
            <Suggest/>
            <Footer/>
        </>
    )
}

export default Home;