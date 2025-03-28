from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DoctorViewSet, PatientViewSet, AppointmentViewSet

# Router automatically generates endpoints
router = DefaultRouter()
router.register(r'doctors', DoctorViewSet)
router.register(r'patients', PatientViewSet)
router.register(r'appointments', AppointmentViewSet)

urlpatterns = [
    path('', include(router.urls)),  # Auto-generates API endpoints
]

from django.urls import path
from .views import login_user, register_user

urlpatterns = [
    path('login/', login_user, name='login'),
    path('register/', register_user, name='register'),
]
