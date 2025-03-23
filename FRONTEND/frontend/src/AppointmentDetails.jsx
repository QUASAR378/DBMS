import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";

const AppointmentDetails = () => {
  const { id } = useParams();
  const [appointment, setAppointment] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/api/appointments/${id}`)
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, [id]);

  if (!appointment) return <p>Loading...</p>;

  return (
    <div className="page-container">
      <h2>Appointment Details</h2>
      <p><strong>Patient:</strong> {appointment.patient}</p>
      <p><strong>Doctor:</strong> {appointment.doctor}</p>
      <p><strong>Reason:</strong> {appointment.reason}</p>
      <p><strong>Date:</strong> {appointment.start_time}</p>
    </div>
  );
};

export default AppointmentDetails;
