from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

class UserManager(BaseUserManager):
    def create_user(self, username, email, role, password=None):
        if not email:
            raise ValueError("Users must have an email address")
        if not username:
            raise ValueError("Users must have a username")

        user = self.model(username=username, email=self.normalize_email(email), role=role)
        user.set_password(password)  # Hashing the password
        user.save(using=self._db)
        return user

    def create_superuser(self, username, email, password):
        user = self.create_user(username, email, role="operator", password=password)
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user

class User(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=100, unique=True)
    email = models.EmailField(unique=True)
    role = models.CharField(max_length=50, choices=[('doctor', 'Doctor'), ('operator', 'Operator')])
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    contact = models.CharField(max_length=12)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    groups = models.ManyToManyField(
        "auth.Group", related_name="custom_user_groups", blank=True
    )
    user_permissions = models.ManyToManyField(
        "auth.Permission", related_name="custom_user_permissions", blank=True
    )

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'role', 'first_name', 'last_name']

    def __str__(self):
        return f"{self.first_name} {self.last_name} ({self.role})"


# Doctor model (linked to User)
class Doctor(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="doctor_profile")
    specialization = models.CharField(max_length=100)

    def __str__(self):
        return self.user.get_full_name()

# Patient model
class Patient(models.Model):
    full_name = models.CharField(max_length=200)
    date_of_birth = models.DateField()

    def __str__(self):
        return self.full_name

# Appointment model (aligned with React component)
class Appointment(models.Model):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    reason = models.TextField(default="General Consultation")  # Default value added
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    urgency = models.CharField(max_length=20, choices=[('Low', 'Low'), ('Medium', 'Medium'), ('High', 'High')], default='Medium')
    status = models.CharField(max_length=50, choices=[('scheduled', 'Scheduled'), ('completed', 'Completed')], default='scheduled')

    def __str__(self):
        return f"{self.patient} - {self.reason} ({self.start_time})"
