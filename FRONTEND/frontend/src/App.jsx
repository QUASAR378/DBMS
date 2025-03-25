import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import AppointmentCalendar from "./Appointments";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} /> {/* Default to Dashboard */}
        <Route path="/appointments" element={<AppointmentCalendar />} />
      </Routes>
    </Router>
  );
}

export default App;
