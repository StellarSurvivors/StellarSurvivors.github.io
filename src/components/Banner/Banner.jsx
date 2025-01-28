import React from 'react';
import './Banner.css';  // Add this to style your banner

function Banner() {
    return (
        <div className="banner">
            <img src="/banner.jpeg" alt="Logo" className="banner-logo" />
        </div>
    );
}

export default Banner;