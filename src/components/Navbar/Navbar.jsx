import { Link } from "react-router-dom";
import './Navbar.css';
import Icon from "../Icon/Icon";

function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar-right">
                <Link to="/" className="navbar-button">Home</Link>
                <Link to="/about-us" className="navbar-button">About Us</Link>
                <Link to="/contracts" className="navbar-button">Contracts</Link>
            </div>

            <div className="navbar-center">
                <Icon size={40}/>
            </div>

            <div className="navbar-left">
                <Link to="/staff-application" className="navbar-button">Career</Link>
                <Link to="/status" className="navbar-button">Status</Link>
                <Link to="/blog" className="navbar-button">Blog</Link>
            </div>
        </header>
    );
}

export default Navbar;
