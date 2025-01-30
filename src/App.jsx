import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import HomePage from "./pages/MainPages/HomePage/HomePage.jsx";
import StaffApplicationPage from "./pages/SubPages/StaffApplicationPage/StaffApplicationPage.jsx";

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
  )
}

export default App
