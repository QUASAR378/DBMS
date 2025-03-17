from rest_framework import viewsets
from .models import *
from .serializers import *

class DoctorViewSet(viewsets.ModelViewSet):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer

class PatientViewSet(viewsets.ModelViewSet):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer

class AppointmentViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

class EquipmentViewSet(viewsets.ModelViewSet):
    queryset = Equipment.objects.all()
    serializer_class = EquipmentSerializer

class EquipmentBookingViewSet(viewsets.ModelViewSet):
    queryset = EquipmentBooking.objects.all()
    serializer_class = EquipmentBookingSerializer

class TheatreViewSet(viewsets.ModelViewSet):
    queryset = Theatre.objects.all()
    serializer_class = TheatreSerializer

class TheatreBookingViewSet(viewsets.ModelViewSet):
    queryset = TheatreBooking.objects.all()
    serializer_class = TheatreBookingSerializer

class MedicalReportViewSet(viewsets.ModelViewSet):
    queryset = MedicalReport.objects.all()
    serializer_class = MedicalReportSerializer
