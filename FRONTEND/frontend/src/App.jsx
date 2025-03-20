import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import AppointmentCalendar from "./Appointments.jsx";
import Navbar from "./Navbar.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import "./styles.css";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/Login.jsx" element={<Login />} />
                <Route path="/Signup.jsx" element={<Signup />} />
                <Route path="/Appointments.jsx" element={<PrivateRoute><AppointmentCalendar /></PrivateRoute>} />
            </Routes>
        </Router>
    );
};

export default App;
