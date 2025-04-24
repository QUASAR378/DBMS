"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Edit, X, Check } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

interface DoctorAppointmentsProps {
  doctorId: string
}

export function DoctorAppointments({ doctorId }: DoctorAppointmentsProps) {
  // In a real app, this would fetch data from the API based on the doctorId
  const todayAppointments = [
    {
      id: "AP-1234",
      time: "09:00 AM",
      patient: "John Smith",
      type: "Check-up",
      status: "Completed",
    },
    {
      id: "AP-1235",
      time: "10:15 AM",
      patient: "Emily Davis",
      type: "Follow-up",
      status: "In Progress",
    },
    {
      id: "AP-1236",
      time: "11:30 AM",
      patient: "Robert Wilson",
      type: "Consultation",
      status: "Scheduled",
    },
    {
      id: "AP-1237",
      time: "01:00 PM",
      patient: "Maria Garcia",
      type: "Check-up",
      status: "Scheduled",
    },
    {
      id: "AP-1238",
      time: "02:30 PM",
      patient: "David Brown",
      type: "Follow-up",
      status: "Scheduled",
    },
  ]

  const upcomingAppointments = [
    {
      id: "AP-1239",
      date: "Tomorrow",
      time: "09:30 AM",
      patient: "Jennifer Lee",
      type: "Check-up",
      status: "Scheduled",
    },
    {
      id: "AP-1240",
      date: "Tomorrow",
      time: "11:00 AM",
      patient: "Michael Johnson",
      type: "Follow-up",
      status: "Scheduled",
    },
    {
      id: "AP-1241",
      date: "23/06/2023",
      time: "10:15 AM",
      patient: "Sarah Williams",
      type: "Consultation",
      status: "Scheduled",
    },
    {
      id: "AP-1242",
      date: "24/06/2023",
      time: "02:00 PM",
      patient: "James Brown",
      type: "Check-up",
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
    <Tabs defaultValue="today">
      <TabsList>
        <TabsTrigger value="today">Today</TabsTrigger>
        <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
      </TabsList>
      <TabsContent value="today">
        <Card>
          <CardHeader>
            <CardTitle>Today's Appointments</CardTitle>
            <CardDescription>Manage today's scheduled appointments</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Time</TableHead>
                  <TableHead>Patient</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-[80px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {todayAppointments.map((appointment) => (
                  <TableRow key={appointment.id}>
                    <TableCell className="font-medium">{appointment.time}</TableCell>
                    <TableCell>{appointment.patient}</TableCell>
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
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="upcoming">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Appointments</CardTitle>
            <CardDescription>View and manage future appointments</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Patient</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-[80px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {upcomingAppointments.map((appointment) => (
                  <TableRow key={appointment.id}>
                    <TableCell>{appointment.date}</TableCell>
                    <TableCell>{appointment.time}</TableCell>
                    <TableCell>{appointment.patient}</TableCell>
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
                            <Link href={`/appointments/${appointment.id}`} className="flex items-center">
                              <Edit className="mr-2 h-4 w-4" />
                              <span>View Details</span>
                            </Link>
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
      </TabsContent>
    </Tabs>
  )
}
