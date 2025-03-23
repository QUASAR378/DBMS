import { useState } from "react";
import { X } from "lucide-react";
import PropTypes from "prop-types";
import "./Authmodal.css";
import api from "./Axios";

const LoginForm = ({ onSwitch, onClose, onLogin }) => {
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simulate a login API call
      const response = await api.post("/login", formData);
      console.log("Login Successful:", response.data);
      onLogin(); // Call the onLogin prop to update the login state
      onClose(); // Close the modal after login
    } catch (error) {
      console.error("Login Error:", error.response?.data);
      alert("Login Failed!");
    }
  };

  return (
    <div className="auth-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="Password"
            value={formData.Password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-options">
          <label className="checkbox-label">
            <input type="checkbox" /> Remember me
          </label>
          <a href="#" className="forgot-password">
            Forgot Password?
          </a>
        </div>
        <button type="submit" className="submit-button">
          Login
        </button>
      </form>
      <p className="switch-text">
        Don&apos;t have an account?
        <button className="switch-button" onClick={onSwitch}>
          Sign Up
        </button>
      </p>
      <button className="close-button" onClick={onClose}>
        <X size={24} />
      </button>
    </div>
  );
};

LoginForm.propTypes = {
  onSwitch: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
};

const SignupForm = ({ onSwitch, onClose }) => {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    PhoneNumber: "",
    Password: "",
    ConfirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.Password !== formData.ConfirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const response = await api.post("User/", formData);
      console.log("User Registered:", response.data);
      alert("Registration Successful!");
      onSwitch(); // Switch to login form after successful registration
    } catch (error) {
      console.error("Registration Error:", error.response?.data);
      alert("Registration Failed!");
    }
  };

  return (
    <div className="auth-form">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="FirstName"
            value={formData.FirstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="LastName"
            value={formData.LastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="PhoneNumber"
            value={formData.PhoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="Password"
            value={formData.Password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="ConfirmPassword"
            value={formData.ConfirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Sign Up
        </button>
      </form>
      <p className="switch-text">
        Already have an account?
        <button className="switch-button" onClick={onSwitch}>
          Login
        </button>
      </p>
      <button className="close-button" onClick={onClose}>
        <X size={24} />
      </button>
    </div>
  );
};

SignupForm.propTypes = {
  onSwitch: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

const AuthModal = ({ isOpen, onClose, onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <X size={24} />
        </button>
        {isLogin ? (
          <LoginForm
            onSwitch={() => setIsLogin(false)}
            onClose={onClose}
            onLogin={onLogin}
          />
        ) : (
          <SignupForm
            onSwitch={() => setIsLogin(true)}
            onClose={onClose}
          />
        )}
      </div>
    </div>
  );
};

AuthModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
};

export default AuthModal;