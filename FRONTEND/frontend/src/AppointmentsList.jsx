import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const AppointmentsList = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/appointments/")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);

  return (
    <div className="page-container">
      <h2>Appointments</h2>
      <ul>
        {appointments.map((appt) => (
          <li key={appt.id}>
            <Link to={`/appointment/${appt.id}`}>{appt.patient} - {appt.reason}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentsList;
