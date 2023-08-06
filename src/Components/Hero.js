import "./Hero.css";

function Hero(props) {
    return (
        <>
            <div className={props.cName}>
                {/* <img src={props.heroImg} alt="HeroImg" /> */}
                <div className="hero-text">
                    <h1>{props.title}</h1>
                    <h3>{props.text}</h3>
                </div>
            </div>
        </>
    )
}

export default Hero;