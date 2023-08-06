import "./EpisodePic.css";

function EpisodePicData(props) {
    return (
        <div className="ep-card">
            <a href={props.url}>
            <div className="ep-image">
                <img src={props.image} alt="" />
            </div>
            </a>
            <h4>{props.heading}</h4>
            <h5>{props.date}</h5>
            <p>{props.text}</p>        
        </div>
    )
}

export default EpisodePicData;