import { Component } from "react";
import "./NavbarStyle.css" //imported navbar style.css 
import { MenuItems } from "./Menuitems";
import { Link } from "react-router-dom";

class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() { //extending the components  if we need extend ,we need to render it         return (
            <nav className="NavbarItems">
                <h1 className="Navbar-logo">WordVerse</h1>
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div> 
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    <i className={item.icon}></i>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                    <button>Registration</button>
                   
                </ul>
            </nav>
        );
    }
}

export default Navbar;