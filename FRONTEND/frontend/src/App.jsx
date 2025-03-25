import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import AuthModal from "./AuthModal.jsx";
import Home from "./Home.jsx";
import Dashboard from "./Dashboard.jsx";

import "./styles.css";

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleCloseAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsAuthModalOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div>
        {/* Authentication Modal */}
        <AuthModal isOpen={isAuthModalOpen} onClose={handleCloseAuthModal} onLogin={handleLogin} />

        {/* Routes */}
        <Routes>
          {/* Default Route - Home Page */}
          <Route path="/" element={<Home setIsAuthModalOpen={setIsAuthModalOpen} />} />

          {/* Redirect to Dashboard if logged in */}
          <Route path="/dashboard" element={isLoggedIn ? <Dashboard onLogout={handleLogout} /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
