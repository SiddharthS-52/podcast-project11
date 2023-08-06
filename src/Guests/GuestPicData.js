import "./GuestPic.css";

function GuestPicData(props) {
    return (
        <div className="g-card">
            <div className="g-image">
                <img src={props.image} alt="" />
            </div>
            <h3>{props.name}</h3>
            <h4>{props.detail}</h4>
        </div>
    );
}

export default GuestPicData;