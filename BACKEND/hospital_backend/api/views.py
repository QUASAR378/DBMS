from rest_framework import viewsets
from rest_framework.response import Response
from .models import Doctor, Patient, Appointment
from .serializers import DoctorSerializer, PatientSerializer, AppointmentSerializer

class DoctorViewSet(viewsets.ModelViewSet):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer

class PatientViewSet(viewsets.ModelViewSet):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer

class AppointmentViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

    # Override list method to return data React expects
    def list(self, request):
        appointments = Appointment.objects.all()
        serializer = AppointmentSerializer(appointments, many=True)
        return Response(serializer.data)


from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import User

@csrf_exempt
def login_user(request):
    if request.method == "POST":
        data = json.loads(request.body)
        email = data.get("Email")
        password = data.get("Password")

        user = authenticate(request, email=email, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({"message": "Login Successful", "role": user.role})
        else:
            return JsonResponse({"error": "Invalid credentials"}, status=400)

@csrf_exempt
def register_user(request):
    if request.method == "POST":
        data = json.loads(request.body)
        first_name = data.get("FirstName")
        last_name = data.get("LastName")
        email = data.get("Email")
        phone = data.get("PhoneNumber")
        password = data.get("Password")
        role = "operator"  # Default role (Modify as needed)

        if User.objects.filter(email=email).exists():
            return JsonResponse({"error": "Email already registered"}, status=400)

        user = User.objects.create_user(username=email, email=email, role=role, password=password)
        user.first_name = first_name
        user.last_name = last_name
        user.contact = phone
        user.save()

        return JsonResponse({"message": "Registration Successful"})
