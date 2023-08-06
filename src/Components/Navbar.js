import { Component } from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";
import m1 from "../Assets/logo.jpg";
import { MenuItems } from "./MenuItems";


class Navbar extends Component{
    state = {clicked: false};
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render() {
        return (
            <nav className="NavbarItems">
                <div className="navtop">
                    <div className="social-icons">
                        <a href="https://twitter.com/Siddharth__52__">
                            <i class="fa-brands fa-twitter fa-2x"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/siddharth-srivastava-1b32b3202/">
                            <i class="fa-brands fa-linkedin fa-2x"></i>
                        </a>
                        <a href="https://www.instagram.com/siddsiwan/">
                            <i class="fa-brands fa-instagram fa-2x"></i>
                        </a>                                        
                    </div>
                    <div className="show-icon">
                        <img src={m1} alt="icon" />
                        {/* <img src="https://drive.google.com/file/d/132vaYlzvyORs9x5LHTbs8t2n4oU8AjAs/view?usp=drive_link" alt="logo" /> */}
                        <h1 className="navbar-logo">Experiences & Perspectives</h1>
                    </div>
                    <div className="podcast-icons">
                        <a href="https://open.spotify.com/show/55Z7va5NDuR6mH32Ikd8Gk">
                            <i class="fa-brands fa-spotify fa-2x"></i>
                        </a>
                        <a href="https://podcasts.apple.com/us/podcast/experiences-and-perspectives/id1627177879">
                            <i class="fa-brands fa-itunes fa-2x"></i>
                        </a>
                        <a href="https://music.amazon.com/podcasts/d17278d6-6f36-4871-9e64-3a01377ae084/experiences-and-perspectives">
                            <i class="fa-brands fa-audible fa-2x"></i>
                        </a>                    
                    </div>
                </div>
            
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times fa-2x' : 'fas fa-bars fa-2x'}>
                    </i>
                </div>

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className= {item.cName} to={item.url} activeStyle={{color: ''}}>
                                <i class={item.icon}></i>
                                {item.title}
                                </Link>
                            </li>
                        )
                    })}

                </ul>

            </nav>
        );
    }
}

export default Navbar;