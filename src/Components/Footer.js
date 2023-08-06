import "./Footer.css";
// import logo from "../Assets/22441494-1656609146557-f0dcb618e2d31.jpg"

const Footer = () => {
    return (
        <div className="footer">
            <div className="logo">
                {/* <img src={logo} alt="" /> */}
                <h1>Experiences & Perspectives</h1>
            </div>
            <div className="icons">
                <a href="https://www.instagram.com/siddsiwan/">
                    <i className="fa-brands fa-instagram fa-2x"></i>
                </a>
                <a href="https://twitter.com/Siddharth__52__">
                    <i className="fa-brands fa-twitter fa-2x"></i>
                </a>
                <a href="https://open.spotify.com/show/55Z7va5NDuR6mH32Ikd8Gk">
                    <i className="fa-brands fa-spotify fa-2x"></i>
                </a>
                <a href="https://podcasts.apple.com/us/podcast/experiences-and-perspectives/id1627177879">
                    <i className="fa-brands fa-itunes fa-2x"></i>
                </a>
                <a href="https://music.amazon.com/podcasts/d17278d6-6f36-4871-9e64-3a01377ae084/experiences-and-perspectives">
                    <i className="fa-brands fa-audible fa-2x"></i>
                </a>
            </div>
        </div>
    )
}

export default Footer;