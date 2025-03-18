-- Create database
CREATE DATABASE IF NOT EXISTS HospitalClinicSystem;
USE HospitalClinicSystem;

-- Users Table (for authentication & role management)
CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('admin', 'doctor', 'operator', 'nurse') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Doctors Table
CREATE TABLE Doctors (
    doctor_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT UNIQUE NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    specialization VARCHAR(100),
    contact_number VARCHAR(15),
    email VARCHAR(100) UNIQUE,
    status ENUM('active', 'inactive') DEFAULT 'active',
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
);

-- Patients Table
CREATE TABLE Patients (
    patient_id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    date_of_birth DATE NOT NULL,
    gender ENUM('male', 'female', 'other'),
    contact_number VARCHAR(15),
    email VARCHAR(100) UNIQUE,
    address TEXT,
    emergency_contact VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Equipment Table
CREATE TABLE Equipment (
    equipment_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    type VARCHAR(100),
    status ENUM('available', 'out_of_service', 'decommissioned') DEFAULT 'available',
    purchase_date DATE,
    last_maintenance DATE
);

-- Appointments Table
CREATE TABLE Appointments (
    appointment_id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT NOT NULL,
    doctor_id INT NOT NULL,
    appointment_date DATETIME NOT NULL,
    status ENUM('scheduled', 'completed', 'canceled') DEFAULT 'scheduled',
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (patient_id) REFERENCES Patients(patient_id) ON DELETE CASCADE,
    FOREIGN KEY (doctor_id) REFERENCES Doctors(doctor_id) ON DELETE CASCADE
);

-- Theatre Table
CREATE TABLE Theatre (
    theatre_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    status ENUM('available', 'in_use', 'maintenance', 'closed_down') DEFAULT 'available',
    capacity INT NOT NULL,
    location VARCHAR(255)
);

-- Medical Reports Table
CREATE TABLE MedicalReport (
    report_id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT NOT NULL,
    doctor_id INT NOT NULL,
    report_type VARCHAR(100) NOT NULL,
    report_file VARCHAR(255) NOT NULL,  -- Path to PDF file
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (patient_id) REFERENCES Patients(patient_id) ON DELETE CASCADE,
    FOREIGN KEY (doctor_id) REFERENCES Doctors(doctor_id) ON DELETE CASCADE
);

-- Operators Table
CREATE TABLE Operators (
    operator_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT UNIQUE NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    contact_number VARCHAR(15),
    email VARCHAR(100) UNIQUE,
    status ENUM('active', 'inactive') DEFAULT 'active',
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
);

-- Equipment Booking Table
CREATE TABLE EquipmentBookings (
    booking_id INT AUTO_INCREMENT PRIMARY KEY,
    equipment_id INT NOT NULL,
    patient_id INT NOT NULL,
    operator_id INT NOT NULL,
    booking_date DATETIME NOT NULL,
    status ENUM('booked', 'completed', 'canceled') DEFAULT 'booked',
    FOREIGN KEY (equipment_id) REFERENCES Equipment(equipment_id) ON DELETE CASCADE,
    FOREIGN KEY (patient_id) REFERENCES Patients(patient_id) ON DELETE CASCADE,
    FOREIGN KEY (operator_id) REFERENCES Operators(operator_id) ON DELETE CASCADE
);

-- Theatre Booking Table
CREATE TABLE TheatreBookings (
    booking_id INT AUTO_INCREMENT PRIMARY KEY,
    theatre_id INT NOT NULL,
    doctor_id INT NOT NULL,
    patient_id INT NOT NULL,
    booking_date DATETIME NOT NULL,
    status ENUM('booked', 'completed', 'canceled') DEFAULT 'booked',
    FOREIGN KEY (theatre_id) REFERENCES Theatre(theatre_id) ON DELETE CASCADE,
    FOREIGN KEY (doctor_id) REFERENCES Doctors(doctor_id) ON DELETE CASCADE,
    FOREIGN KEY (patient_id) REFERENCES Patients(patient_id) ON DELETE CASCADE
);

-- Access Control for Medical Reports
CREATE TABLE AccessControl (
    access_id INT AUTO_INCREMENT PRIMARY KEY,
    report_id INT NOT NULL,
    doctor_id INT NOT NULL,
    access_type ENUM('limited', 'unlimited') DEFAULT 'limited',
    expiry_date DATETIME NULL,
    FOREIGN KEY (report_id) REFERENCES MedicalReport(report_id) ON DELETE CASCADE,
    FOREIGN KEY (doctor_id) REFERENCES Doctors(doctor_id) ON DELETE CASCADE
);

-- Indexes for optimized performance
CREATE INDEX idx_appointment_date ON Appointments(appointment_date);
CREATE INDEX idx_equipment_status ON Equipment(status);
CREATE INDEX idx_theatre_status ON Theatre(status);
CREATE INDEX idx_medical_report ON MedicalReport(patient_id);