import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Import the components
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import HomePage from "./pages/HomePage/HomePage";
import StaffApplicationPage from "./pages/StaffApplicationPage/StaffApplicationPage";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/staff-application" element={<StaffApplicationPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
