// components/HomePage.jsx
import React from "react";
import "../App.css"; // Importing global CSS

function HomePage() {
    return (
        <div className="homepage">
            <header className="hero">
                <h1>Welcome to Amazing App</h1>
                <p>Your journey begins here.</p>
                <button className="cta-btn">Get Started</button>
            </header>
            <section className="features">
                <h2>Features You'll Love</h2>
                <div className="feature-list">
                    <div className="feature">
                        <h3>Fast Performance</h3>
                        <p>Experience blazing speed and efficiency.</p>
                    </div>
                    <div className="feature">
                        <h3>Responsive Design</h3>
                        <p>Accessible on any device, anywhere.</p>
                    </div>
                    <div className="feature">
                        <h3>Secure</h3>
                        <p>Your data is protected with top-notch security.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
