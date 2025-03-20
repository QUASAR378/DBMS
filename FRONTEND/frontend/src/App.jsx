import React, { useState } from "react";
import { User } from "lucide-react";

import AuthModal from "./Authmodal.jsx";
import AppointmentCalendar from "./Appointments.jsx";

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  const handleOpenAuthModal = () => {
    setIsAuthModalOpen(true);
  };

  const handleCloseAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true); // Set login status to true
    handleCloseAuthModal(); // Close the modal after login
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Set login status to false
  };

  return (
    <>
      {/* Show the "Open Auth Modal" button only if not logged in */}
      {!isLoggedIn && (
        <><button className="icon-button" onClick={handleOpenAuthModal}><User size={24} /></button><p>Click the User icon to sign in </p></>
      )}

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={handleCloseAuthModal}
        onLogin={handleLogin}
      />

      {/* Protected Route */}
      {isLoggedIn ? (
        <div>
          <button onClick={handleLogout}>Logout</button>
          <AppointmentCalendar />
        </div>
      ) : (
        <p>Please log in to view the appointment calendar.</p>
      )}
    </>
  );
}

export default App;