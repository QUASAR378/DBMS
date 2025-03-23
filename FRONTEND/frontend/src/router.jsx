import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import Dashboard from "./Dashboard.jsx";
import AppointmentCalendar from "./AppointmentCalendar.jsx";
import AppointmentsList from "./AppointmentsList.jsx";
import AppointmentDetails from "./AppointmentDetails.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/appointments"
              element={<PrivateRoute element={<AppointmentsList />} />}
            />
            <Route
              path="/appointment/:id"
              element={<PrivateRoute element={<AppointmentDetails />} />}
            />
            <Route
              path="/calendar"
              element={<PrivateRoute element={<AppointmentCalendar />} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default AppRouter;
