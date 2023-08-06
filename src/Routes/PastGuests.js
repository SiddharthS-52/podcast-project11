import Navbar from "../Components/Navbar";
import "./PastGuests.css";
import GuestPic from "../Guests/GuestPic";
import Suggest from "../Components/Suggest";
import Footer from "../Components/Footer";

function PastGuests() {
    return (
        <>
            <Navbar/>
            <GuestPic/>
            <Suggest/>
            <Footer/>
        </>
    )
}

export default PastGuests;