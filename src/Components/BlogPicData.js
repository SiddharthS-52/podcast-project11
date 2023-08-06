import "./BlogPic.css";

function BlogPicData(props){
    return (
        <div className="b-card">
            <a href={props.url}>
            <div className="b-image">
                <img src={props.image} alt="" />
            </div>
            <h4>{props.heading}</h4>
            <h5>{props.date}</h5>
            <p>{props.text}</p>
            </a>
        </div>
    );
}

export default BlogPicData;