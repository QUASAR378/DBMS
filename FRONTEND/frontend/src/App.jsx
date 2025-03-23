import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import AppointmentCalendar from "./Appointments.jsx";
import Navbar from "./Navbar.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import "./styles.css"; 
import Home from "./Home.jsx";


const App = () => {
    return (
   <Dashboard/>
    );
};

export default App;
