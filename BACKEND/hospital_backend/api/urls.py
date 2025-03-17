from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register(r'doctors', DoctorViewSet)
router.register(r'patients', PatientViewSet)
router.register(r'appointments', AppointmentViewSet)
router.register(r'equipment', EquipmentViewSet)
router.register(r'equipment-bookings', EquipmentBookingViewSet)
router.register(r'theatres', TheatreViewSet)
router.register(r'theatre-bookings', TheatreBookingViewSet)
router.register(r'medical-reports', MedicalReportViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
