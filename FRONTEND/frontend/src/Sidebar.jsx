import { Link } from "react-router-dom";
import "./styles.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/appointments">Appointments</Link></li>
        <li><Link to="/calendar">Calendar</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
