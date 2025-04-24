"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Edit, X, Check } from "lucide-react"
import Link from "next/link"

interface PatientAppointmentsProps {
  patientId: string
}

export function PatientAppointments({ patientId }: PatientAppointmentsProps) {
  // In a real app, this would fetch data from the API based on the patientId
  const appointments = [
    {
      id: "AP-1234",
      date: "15/04/2023",
      time: "09:00 AM",
      doctor: "Dr. Sarah Johnson",
      type: "Check-up",
      status: "Completed",
      notes: "Regular check-up, all vitals normal.",
    },
    {
      id: "AP-1456",
      date: "02/05/2023",
      time: "10:15 AM",
      doctor: "Dr. Michael Chen",
      type: "Follow-up",
      status: "Completed",
      notes: "Follow-up on medication, patient responding well to treatment.",
    },
    {
      id: "AP-1789",
      date: "20/06/2023",
      time: "11:30 AM",
      doctor: "Dr. Lisa Wong",
      type: "Consultation",
      status: "Scheduled",
      notes: "Initial consultation for persistent headaches.",
    },
    {
      id: "AP-2034",
      date: "15/07/2023",
      time: "02:00 PM",
      doctor: "Dr. Sarah Johnson",
      type: "Check-up",
      status: "Scheduled",
      notes: "Quarterly check-up.",
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
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Appointment ID</TableHead>
            <TableHead>Date & Time</TableHead>
            <TableHead>Doctor</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Notes</TableHead>
            <TableHead className="w-[80px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {appointments.map((appointment) => (
            <TableRow key={appointment.id}>
              <TableCell className="font-medium">{appointment.id}</TableCell>
              <TableCell>
                {appointment.date}
                <div className="text-xs text-muted-foreground">{appointment.time}</div>
              </TableCell>
              <TableCell>{appointment.doctor}</TableCell>
              <TableCell>{appointment.type}</TableCell>
              <TableCell>
                <Badge variant="outline" className={getStatusColor(appointment.status)}>
                  {appointment.status}
                </Badge>
              </TableCell>
              <TableCell className="max-w-[200px] truncate" title={appointment.notes}>
                {appointment.notes}
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
                      <Link href={`/appointments/${appointment.id}`} className="flex items-center">
                        <Edit className="mr-2 h-4 w-4" />
                        <span>View Details</span>
                      </Link>
                    </DropdownMenuItem>
                    {appointment.status === "Scheduled" && (
                      <>
                        <DropdownMenuItem>
                          <Check className="mr-2 h-4 w-4" />
                          <span>Mark as Completed</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <X className="mr-2 h-4 w-4" />
                          <span>Cancel</span>
                        </DropdownMenuItem>
                      </>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
