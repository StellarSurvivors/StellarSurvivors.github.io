import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Import the components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import StaffApplicationPage from "./pages/StaffApplicationPage";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/staff-application" element={<StaffApplicationPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
