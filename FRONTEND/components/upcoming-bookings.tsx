"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function UpcomingBookings() {
  // In a real app, this would fetch data from the API
  const bookings = [
    {
      id: "BK-1001",
      resource: "MRI Scanner",
      type: "Equipment",
      time: "Today, 3:00 PM",
      requestedBy: "Dr. Michael Chen",
    },
    {
      id: "BK-1002",
      resource: "Theater 1",
      type: "Theater",
      time: "Today, 4:30 PM",
      requestedBy: "Dr. James Miller",
    },
    {
      id: "BK-1003",
      resource: "Ultrasound Machine",
      type: "Equipment",
      time: "Tomorrow, 9:00 AM",
      requestedBy: "Dr. Lisa Wong",
    },
    {
      id: "BK-1004",
      resource: "Theater 2",
      type: "Theater",
      time: "Tomorrow, 11:00 AM",
      requestedBy: "Dr. Sarah Johnson",
    },
    {
      id: "BK-1005",
      resource: "X-Ray Room",
      type: "Equipment",
      time: "Tomorrow, 2:15 PM",
      requestedBy: "Dr. Michael Chen",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Bookings</CardTitle>
        <CardDescription>Equipment and theater bookings</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Resource</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Requested By</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell className="font-medium">{booking.resource}</TableCell>
                <TableCell>{booking.type}</TableCell>
                <TableCell>{booking.time}</TableCell>
                <TableCell>{booking.requestedBy}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
