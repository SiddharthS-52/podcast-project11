import "./Suggest.css";

function Suggest() {
    return (
        <div className="form-container">
            <h1>Let me know what's on your mind...</h1>
            <form>
                <input placeholder="Name"/>
                <input placeholder="Email"/>
                <input placeholder="Subject"/>
                <textarea placeholder="Message" rows="4"></textarea>
                <button>Send Message</button>
            </form>
        </div>
    )
}

export default Suggest;