import './Contact.css';
import Navbar from '../Components/Navbar';
import Suggest from '../Components/Suggest';
import Footer from "../Components/Footer";

function Contact() {
    return (
        <>
            <Navbar/>
            <div className='subscription-form'>
                <div className='heading'>
                    <h1>Let's keep in touch!</h1>
                    <p>Sign Up for Updates!</p>    
                </div>
                
                <div className='form-fill'>
                    <h1>Subscribe to my Newsletter & Podcast.</h1>
                    <p>Enter your Email to Subscribe.</p>
                    <form>
                        <input placeholder='Email' />
                        <button>Subscribe</button>
                    </form>

                </div>
            </div>
            <Suggest/>
            <Footer/>
        </>
    )
}

export default Contact;