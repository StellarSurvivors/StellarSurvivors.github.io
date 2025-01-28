// components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; // Importing the global CSS

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/staff-application">Staff Application</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
