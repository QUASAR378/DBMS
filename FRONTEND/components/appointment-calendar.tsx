"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Edit, X, Check } from "lucide-react"

export function AppointmentCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  // In a real app, this would fetch data from the API based on the selected date
  const appointments = [
    {
      id: "AP-1234",
      time: "09:00 AM",
      patient: "John Smith",
      doctor: "Dr. Sarah Johnson",
      type: "Check-up",
      status: "Scheduled",
    },
    {
      id: "AP-1235",
      time: "10:15 AM",
      patient: "Emily Davis",
      doctor: "Dr. Michael Chen",
      type: "Follow-up",
      status: "In Progress",
    },
    {
      id: "AP-1236",
      time: "11:30 AM",
      patient: "Robert Wilson",
      doctor: "Dr. Lisa Wong",
      type: "Consultation",
      status: "Scheduled",
    },
    {
      id: "AP-1237",
      time: "01:00 PM",
      patient: "Maria Garcia",
      doctor: "Dr. James Miller",
      type: "Surgery",
      status: "Scheduled",
    },
    {
      id: "AP-1238",
      time: "02:30 PM",
      patient: "David Brown",
      doctor: "Dr. Sarah Johnson",
      type: "Check-up",
      status: "Scheduled",
    },
    {
      id: "AP-1239",
      time: "03:45 PM",
      patient: "Jennifer Lee",
      doctor: "Dr. Michael Chen",
      type: "Follow-up",
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

  const formatDate = (date: Date | undefined) => {
    if (!date) return ""
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="md:col-span-1">
        <CardHeader>
          <CardTitle>Select Date</CardTitle>
          <CardDescription>Choose a date to view appointments</CardDescription>
        </CardHeader>
        <CardContent>
          <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Appointments for {formatDate(date)}</CardTitle>
          <CardDescription>Manage scheduled appointments</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Time</TableHead>
                <TableHead>Patient</TableHead>
                <TableHead>Doctor</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-[80px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {appointments.map((appointment) => (
                <TableRow key={appointment.id}>
                  <TableCell className="font-medium">{appointment.time}</TableCell>
                  <TableCell>{appointment.patient}</TableCell>
                  <TableCell>{appointment.doctor}</TableCell>
                  <TableCell>{appointment.type}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={getStatusColor(appointment.status)}>
                      {appointment.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          <span>Edit</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Check className="mr-2 h-4 w-4" />
                          <span>Mark as Completed</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <X className="mr-2 h-4 w-4" />
                          <span>Cancel</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
