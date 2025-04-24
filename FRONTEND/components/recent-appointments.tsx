"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export function RecentAppointments() {
  // In a real app, this would fetch data from the API
  const appointments = [
    {
      id: "AP-1234",
      patient: "John Smith",
      doctor: "Dr. Sarah Johnson",
      date: "Today, 9:30 AM",
      status: "Completed",
    },
    {
      id: "AP-1235",
      patient: "Emily Davis",
      doctor: "Dr. Michael Chen",
      date: "Today, 10:15 AM",
      status: "In Progress",
    },
    {
      id: "AP-1236",
      patient: "Robert Wilson",
      doctor: "Dr. Lisa Wong",
      date: "Today, 11:00 AM",
      status: "Scheduled",
    },
    {
      id: "AP-1237",
      patient: "Maria Garcia",
      doctor: "Dr. James Miller",
      date: "Today, 1:30 PM",
      status: "Scheduled",
    },
    {
      id: "AP-1238",
      patient: "David Brown",
      doctor: "Dr. Sarah Johnson",
      date: "Today, 2:45 PM",
      status: "Scheduled",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
      case "In Progress":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
      case "Scheduled":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100"
      case "Cancelled":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Appointments</CardTitle>
        <CardDescription>Overview of today's appointments</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Patient</TableHead>
              <TableHead>Doctor</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {appointments.map((appointment) => (
              <TableRow key={appointment.id}>
                <TableCell className="font-medium">{appointment.patient}</TableCell>
                <TableCell>{appointment.doctor}</TableCell>
                <TableCell>{appointment.date}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={getStatusColor(appointment.status)}>
                    {appointment.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
