from django.db import models

class User(models.Model):
    username = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=255)
    role = models.CharField(max_length=50, choices=[('doctor', 'Doctor'), ('operator', 'Operator')])

class Doctor(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=200)
    specialization = models.CharField(max_length=100)

class Patient(models.Model):
    full_name = models.CharField(max_length=200)
    date_of_birth = models.DateField()

class Appointment(models.Model):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    appointment_date = models.DateTimeField()
    status = models.CharField(max_length=50, choices=[('scheduled', 'Scheduled'), ('completed', 'Completed')])

class Equipment(models.Model):
    name = models.CharField(max_length=200)
    status = models.CharField(max_length=50, choices=[('available', 'Available'), ('out_of_service', 'Out of Service')])

class EquipmentBooking(models.Model):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    equipment = models.ForeignKey(Equipment, on_delete=models.CASCADE)
    date_booked = models.DateTimeField()

class Theatre(models.Model):
    name = models.CharField(max_length=200)
    status = models.CharField(max_length=50, choices=[('available', 'Available'), ('in_use', 'In Use')])

class TheatreBooking(models.Model):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    theatre = models.ForeignKey(Theatre, on_delete=models.CASCADE)
    date_booked = models.DateTimeField()

class MedicalReport(models.Model):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    report_file = models.FileField(upload_to='reports/')
