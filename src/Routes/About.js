import './About.css';
import Navbar from "../Components/Navbar";
import Suggest from "../Components/Suggest";
import Footer from "../Components/Footer";
import img1 from "../Assets/spotifycard.png";
import img2 from "../Assets/me.jpg";

function About() {
    return (
        <>
            <Navbar/>
            <div className="about-page">
                <div className="description">
                    <h1>Siddharth Srivastava</h1>
                    <p>"Experience & Perspectives" is a podcast hosted by Siddharth, where he shares his journey of overcoming self-doubt and learning to trust in his own capabilities. Through deep research and personal reflection, Siddharth explores the intersection of spirituality, philosophy, and psychology. Each episode serves as a reminder to listeners to believe in themselves and their own potential, as we all journey towards personal growth and self-improvement. Join us on a journey towards a more fulfilling and meaningful life, as Siddharth shares his insights and experiences with honesty and vulnerability.</p>
                </div>
                <div className="images">
                    <img src={img2} alt="" />
                    <img src={img1} alt="" />
                </div>
            </div>
            <Suggest/>
            <Footer/>
        </>
    )
}

export default About;