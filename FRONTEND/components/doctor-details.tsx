"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mail, Phone, Stethoscope, Award, Clock } from "lucide-react"

interface DoctorDetailsProps {
  id: string
}

export function DoctorDetails({ id }: DoctorDetailsProps) {
  // In a real app, this would fetch data from the API based on the ID
  const doctor = {
    id,
    firstName: "Sarah",
    lastName: "Johnson",
    specialty: "Cardiology",
    email: "sarah.johnson@brikshah.com",
    phone: "(555) 123-4567",
    licenseNumber: "MD12345",
    qualifications: "MD, PhD, Board Certified in Cardiology",
    bio: "Dr. Sarah Johnson is a board-certified cardiologist with over 15 years of experience. She specializes in preventive cardiology and heart disease management. Dr. Johnson completed her medical training at Harvard Medical School and her residency at Massachusetts General Hospital.",
    status: "Available",
    workingHours: "Mon-Fri: 9:00 AM - 5:00 PM",
    appointmentsToday: 8,
    totalPatients: 1245,
    yearsOfExperience: 15,
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
      case "In Surgery":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
      case "With Patient":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100"
      case "On Leave":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100"
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src="/placeholder.svg?height=96&width=96"
                alt={`Dr. ${doctor.firstName} ${doctor.lastName}`}
              />
              <AvatarFallback>{`${doctor.firstName[0]}${doctor.lastName[0]}`}</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h2 className="text-2xl font-bold">{`Dr. ${doctor.firstName} ${doctor.lastName}`}</h2>
              <div className="flex items-center text-muted-foreground">
                <Stethoscope className="mr-2 h-4 w-4" />
                <span>{doctor.specialty}</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="outline" className={getStatusColor(doctor.status)}>
                  {doctor.status}
                </Badge>
              </div>
            </div>
            <div className="ml-auto text-right space-y-1">
              <div className="flex items-center justify-end">
                <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>{doctor.email}</span>
              </div>
              <div className="flex items-center justify-end">
                <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>{doctor.phone}</span>
              </div>
              <div className="flex items-center justify-end">
                <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>{doctor.workingHours}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Total Patients</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{doctor.totalPatients}</div>
            <p className="text-xs text-muted-foreground">Lifetime patients</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Today's Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{doctor.appointmentsToday}</div>
            <p className="text-xs text-muted-foreground">Appointments today</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{doctor.yearsOfExperience} years</div>
            <p className="text-xs text-muted-foreground">Professional experience</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Professional Information</CardTitle>
          <CardDescription>Qualifications and professional background</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">License Number</p>
            <p>{doctor.licenseNumber}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Qualifications</p>
            <div className="flex items-center">
              <Award className="mr-2 h-4 w-4 text-muted-foreground" />
              <p>{doctor.qualifications}</p>
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Biography</p>
            <p>{doctor.bio}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
