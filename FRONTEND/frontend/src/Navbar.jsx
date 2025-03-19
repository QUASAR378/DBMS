import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
    <nav className="navbar">
        <h1>Brik Shah Clinic</h1>
        <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/appointments">Appointments</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    </nav>
);

export default Navbar;