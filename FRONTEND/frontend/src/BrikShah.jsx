import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./BrikShahFacility.css";

const BrikShahFacility = () => {
  return (
    <div className="container">
      {/* Top Bar */}
      <header className="top-bar">
        <div className="logo">Brik Shah Facility</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#more">More</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
      </header>
      
      {/* Treatment and Services Section */}
      <section id="services" className="services-section">
        <h2>Treatment and Services</h2>
        <div className="services-grid">
          <div className="service-box">General Consultation</div>
          <div className="service-box">Emergency Services</div>
          <div className="service-box">Specialist Clinics</div>
          <div className="service-box">Pharmacy</div>
        </div>
      </section>
      
      {/* Health Tips Section */}
      <section id="more" className="health-tips-section">
        <h2>Health Tips</h2>
        <div className="health-tips-grid">
          <div className="tip-box">Stay hydrated daily.</div>
          <div className="tip-box">Exercise regularly.</div>
          <div className="tip-box">Eat a balanced diet.</div>
          <div className="tip-box">Get enough sleep.</div>
        </div>
        <div className="medical-care">
          <p>Do you need Medical Care?</p>
          <button className="contact-btn">Contact Us</button>
        </div>
      </section>
      
      {/* Footer Section */}
      <footer id="contact" className="footer-section">
        <h2>Contacts</h2>
        <div className="contact-info"><FaPhone className="icon" /> +123 456 7890</div>
        <div className="contact-info"><FaEnvelope className="icon" /> info@brikshah.com</div>
        <div className="contact-info"><FaMapMarkerAlt className="icon" /> 123 Medical Street, Health City</div>
        <div className="footer-bottom">&copy; {new Date().getFullYear()} Brik Shah Facility. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default BrikShahFacility;
