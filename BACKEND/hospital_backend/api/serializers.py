from rest_framework import serializers
from .models import Doctor, Patient, Appointment

class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = ['id', 'full_name', 'specialization']

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = ['id', 'full_name', 'date_of_birth']

class AppointmentSerializer(serializers.ModelSerializer):
    patient = serializers.StringRelatedField()  # Returns patient name instead of ID
    doctor = serializers.StringRelatedField()   # Returns doctor name instead of ID

    class Meta:
        model = Appointment
        fields = ['id', 'patient', 'doctor', 'reason', 'start_time', 'end_time', 'urgency', 'status']
