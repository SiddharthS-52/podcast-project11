import "./ContentTypes.css"
import { Component } from "react";

class ContentTypesData extends Component {
    render () {
        return (
            <div className={this.props.className}>
                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <h4>{this.props.subheading1}</h4>
                    <h4>{this.props.subheading2}</h4>
                    <h4>{this.props.subheading3}</h4>
                    <h4>{this.props.subheading4}</h4>
                </div>

                <div className="image">
                    <img src={this.props.img1} alt="" />
                    <img src={this.props.img2} alt="" />
                </div>
            </div>
        );
    }
}

export default ContentTypesData;