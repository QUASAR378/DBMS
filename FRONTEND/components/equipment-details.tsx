"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Monitor, MapPin, Calendar, Tag, Clock, PenToolIcon as Tool, AlertCircle } from "lucide-react"

interface EquipmentDetailsProps {
  id: string
}

export function EquipmentDetails({ id }: EquipmentDetailsProps) {
  // In a real app, this would fetch data from the API based on the ID
  const equipment = {
    id,
    name: "MRI Scanner",
    type: "Imaging",
    location: "Radiology Dept, Room 101",
    serialNumber: "MRI-2023-1001",
    manufacturer: "Siemens Healthineers",
    model: "MAGNETOM Vida",
    purchaseDate: "10/03/2021",
    warrantyExpiry: "10/03/2026",
    lastMaintenance: "15/04/2023",
    nextMaintenance: "15/10/2023",
    status: "Available",
    bookings: [
      {
        id: "BK-1001",
        date: "20/06/2023",
        time: "09:00 AM - 11:00 AM",
        requestedBy: "Dr. Michael Chen",
        purpose: "Patient Scan",
      },
      {
        id: "BK-1002",
        date: "22/06/2023",
        time: "02:00 PM - 04:00 PM",
        requestedBy: "Dr. Sarah Johnson",
        purpose: "Patient Scan",
      },
    ],
    notes:
      "Regular maintenance required every 6 months. Equipment requires specialized cooling system and dedicated power supply.",
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
      case "In Use":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
      case "Maintenance":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100"
      case "Out of Service":
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
            <div className="space-y-1">
              <h2 className="text-2xl font-bold">{equipment.name}</h2>
              <div className="flex items-center text-muted-foreground">
                <Monitor className="mr-2 h-4 w-4" />
                <span>{equipment.type}</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Tag className="mr-2 h-4 w-4" />
                <span>Serial: {equipment.serialNumber}</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="outline" className={getStatusColor(equipment.status)}>
                  {equipment.status}
                </Badge>
              </div>
            </div>
            <div className="ml-auto text-right space-y-1">
              <div className="flex items-center justify-end">
                <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>{equipment.location}</span>
              </div>
              <div className="flex items-center justify-end">
                <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>Last Maintenance: {equipment.lastMaintenance}</span>
              </div>
              <div className="flex items-center justify-end">
                <AlertCircle className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>Next Maintenance: {equipment.nextMaintenance}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Equipment Information</CardTitle>
            <CardDescription>Technical details and specifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Manufacturer</p>
                <p>{equipment.manufacturer}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Model</p>
                <p>{equipment.model}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Purchase Date</p>
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                  <p>{equipment.purchaseDate}</p>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Warranty Expiry</p>
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                  <p>{equipment.warrantyExpiry}</p>
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">Maintenance Schedule</p>
              <div className="flex items-center">
                <Tool className="mr-2 h-4 w-4 text-muted-foreground" />
                <p>Every 6 months</p>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">Notes</p>
              <p>{equipment.notes}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Bookings</CardTitle>
            <CardDescription>Scheduled usage of this equipment</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {equipment.bookings.map((booking) => (
                <div key={booking.id} className="flex flex-col p-4 border rounded-lg">
                  <div className="flex justify-between items-center">
                    <div className="font-medium">{booking.date}</div>
                    <Badge variant="outline" className="bg-blue-100 text-blue-800">
                      {booking.id}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{booking.time}</div>
                  <div className="flex justify-between items-center mt-2">
                    <div className="text-sm">{booking.purpose}</div>
                    <div className="text-sm font-medium">{booking.requestedBy}</div>
                  </div>
                </div>
              ))}
              {equipment.bookings.length === 0 && (
                <div className="text-center py-6 text-muted-foreground">No upcoming bookings</div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
