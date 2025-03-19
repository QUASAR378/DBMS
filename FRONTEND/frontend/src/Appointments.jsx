import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./AppointmentCalendar.css";

const localizer = momentLocalizer(moment);

const AppointmentCalendar = () => {
    const [appointments, setAppointments] = useState([]);
    const [filteredAppointments, setFilteredAppointments] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState("");
    const [searchPatient, setSearchPatient] = useState("");

    useEffect(() => {
        fetch("http://localhost:8000/api/appointments/")
            .then((response) => response.json())
            .then((data) => {
                setAppointments(data);
                setFilteredAppointments(data);
            });
        
        fetch("http://localhost:8000/api/doctors/")
            .then((response) => response.json())
            .then((data) => setDoctors(data));
    }, []);

    const eventStyleGetter = (event) => {
        let className = "event-default";
        if (event.urgency === "High") className = "event-high";
        if (event.urgency === "Medium") className = "event-medium";
        if (event.urgency === "Low") className = "event-low";

        return {
            className
        };
    };

    useEffect(() => {
        let filtered = appointments;
        if (selectedDoctor) {
            filtered = filtered.filter(appt => appt.doctor === selectedDoctor);
        }
        if (searchPatient) {
            filtered = filtered.filter(appt => appt.patient.toLowerCase().includes(searchPatient.toLowerCase()));
        }
        setFilteredAppointments(filtered);
    }, [selectedDoctor, searchPatient, appointments]);

    return (
        <div className="calendar-container">
            <h2 className="calendar-title">Appointment Calendar</h2>
            <div className="calendar-filters">
                <select className="select-filter" onChange={(e) => setSelectedDoctor(e.target.value)}>
                    <option value="">All Doctors</option>
                    {doctors.map((doc) => (
                        <option key={doc.id} value={doc.name}>{doc.name}</option>
                    ))}
                </select>
                <input className="input-filter" type="text" placeholder="Search Patient" value={searchPatient} onChange={(e) => setSearchPatient(e.target.value)} />
            </div>
            <div className="calendar-wrapper">
                <Calendar
                    localizer={localizer}
                    events={filteredAppointments.map(appt => ({
                        title: `${appt.patient} - ${appt.reason}`,
                        start: new Date(appt.start_time),
                        end: new Date(appt.end_time),
                        urgency: appt.urgency,
                    }))}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 600 }}
                    eventPropGetter={eventStyleGetter}
                />
            </div>
        </div>
    );
};

export default AppointmentCalendar;
