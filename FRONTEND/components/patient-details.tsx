"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mail, Phone, MapPin, CalendarDays, User2 } from "lucide-react"

interface PatientDetailsProps {
  id: string
}

export function PatientDetails({ id }: PatientDetailsProps) {
  // In a real app, this would fetch data from the API based on the ID
  const patient = {
    id,
    firstName: "John",
    lastName: "Smith",
    dateOfBirth: "12/05/1985",
    gender: "Male",
    email: "john.smith@example.com",
    phone: "(555) 123-4567",
    address: "123 Main St, Anytown, CA 12345",
    medicalHistory: "Hypertension, diagnosed 2018. Allergic to penicillin.",
    bloodType: "O+",
    emergencyContact: "Mary Smith (Wife) - (555) 987-6543",
    insuranceProvider: "Blue Cross Blue Shield",
    insuranceNumber: "BCBS-12345678",
    registrationDate: "15/04/2020",
    lastVisit: "15/04/2023",
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src="/placeholder.svg?height=96&width=96" alt={`${patient.firstName} ${patient.lastName}`} />
              <AvatarFallback>{`${patient.firstName[0]}${patient.lastName[0]}`}</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h2 className="text-2xl font-bold">{`${patient.firstName} ${patient.lastName}`}</h2>
              <div className="flex items-center text-muted-foreground">
                <User2 className="mr-2 h-4 w-4" />
                <span>Patient ID: {patient.id}</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="outline" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                  {patient.bloodType}
                </Badge>
                <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                  Active
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Basic patient details and contact information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Date of Birth</p>
                <div className="flex items-center">
                  <CalendarDays className="mr-2 h-4 w-4 text-muted-foreground" />
                  <p>{patient.dateOfBirth}</p>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Gender</p>
                <p>{patient.gender}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Email</p>
                <div className="flex items-center">
                  <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                  <p>{patient.email}</p>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Phone</p>
                <div className="flex items-center">
                  <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                  <p>{patient.phone}</p>
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">Address</p>
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                <p>{patient.address}</p>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">Emergency Contact</p>
              <p>{patient.emergencyContact}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Medical Information</CardTitle>
            <CardDescription>Medical history and insurance details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">Medical History</p>
              <p>{patient.medicalHistory}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Insurance Provider</p>
                <p>{patient.insuranceProvider}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Insurance Number</p>
                <p>{patient.insuranceNumber}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Registration Date</p>
                <p>{patient.registrationDate}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Last Visit</p>
                <p>{patient.lastVisit}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
