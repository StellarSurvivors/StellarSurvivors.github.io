import React from 'react';
import './Icon.css'; // Import the CSS file for the icon

function Icon({ size = 50 }) {  // Default size is 50px
    return (
        <div
            className="icon-container"
            style={{ width: size, height: size, borderRadius: size / 2 }} // Make the icon circular based on size
        ></div>
    );
}

export default Icon;
