import React from "react";
import { FaCalendarAlt, FaLaptopMedical, FaProcedures, FaFileMedical, FaHome, FaUser, FaCog, FaHandsHelping } from "react-icons/fa";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Top Bar */}
      <header className="dashboard-top-bar">
        <div className="dashboard-icons">
          <FaHome className="icon" title="Home" />
          <FaUser className="icon" title="Profile" />
          <FaCog className="icon" title="Settings" />
          <FaHandsHelping className="icon" title="Support" />
        </div>
        <div className="dashboard-title">Brik Shah Facility Dashboard</div>
      </header>

      {/* Welcome Section */}
      <section className="welcome-section">
        <h2>Welcome, User! <span className="emoji">🖐️</span></h2>
      </section>

      {/* Dashboard Sections */}
      <section className="dashboard-grid">
        <div className="dashboard-box" onClick={() => window.location.href = "./Appointments.jsx"}>
          <FaCalendarAlt className="section-icon" />
          <span>Appointment Calendar</span>
        </div>
        <div className="dashboard-box">
          <FaLaptopMedical className="section-icon" />
          <span>Equipment Booking</span>
        </div>
        <div className="dashboard-box">
          <FaProcedures className="section-icon" />
          <span>Theatre Booking</span>
        </div>
        <div className="dashboard-box">
          <FaFileMedical className="section-icon" />
          <span>Medical Reports</span>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="dashboard-footer">
        <div className="footer-bottom">&copy; {new Date().getFullYear()} Brik Shah Facility. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default Dashboard;
