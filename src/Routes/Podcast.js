import './Podcast.css';
import Navbar from '../Components/Navbar';
import EpisodePic from '../PodcastPlayer/EpisodePic';
import Suggest from '../Components/Suggest';
import Footer from "../Components/Footer";
// import Hero from '../Components/Hero';

function Podcast() {
    return (
        <>
        <Navbar/>
        <div className='podcast'>
            
            <div className='pod-profile'>
                <div className='name-detail'>
                    <h1>Experiences & Perspectives</h1>
                    <h4>By Siddsiwan</h4>
                </div>
            </div>
            <div className='desc'>
                <p>"Experience & Perspectives" is a podcast hosted by Siddharth, where he shares his journey of overcoming self-doubt and learning to trust in his own capabilities. Through deep research and personal reflection, Siddharth explores the intersection of spirituality, philosophy, and psychology. Each episode serves as a reminder to listeners to believe in themselves and their own potential, as we all journey towards personal growth and self-improvement. Join us on a journey towards a more fulfilling and meaningful life, as Siddharth shares his insights and experiences with honesty and vulnerability.</p>
            </div>
        </div>
        {/* <Hero
            cName = "hero"
                // heroImg = {HomeImg}
            title = "Experiences & Perspectives by Siddsiwan"
            text = "Experiences & Perspectives is a podcast hosted by Siddharth, where he shares his journey of overcoming self-doubt & learning to trust in his own capabilities. Through deep research and personal reflection, Siddharth explores the intersection of Spirituality, Philosophy, & Psychology. Each episode serves as a reminder to listeners to believe in themselves and their own potentials, as we all journey towards personal growth and self-improvement. Joining us on a journey towards a more fulfilling and meaningful life, as Sidsiwan shaes his insights and experiences with honesty and vulnerability."
        /> */}
        <EpisodePic/>
        <Suggest/>
        <Footer/>
        </>
        
    )
}

export default Podcast;