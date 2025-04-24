"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Search, Calendar, Edit, Trash } from "lucide-react"
import Link from "next/link"

export function DoctorList() {
  const [searchTerm, setSearchTerm] = useState("")

  // In a real app, this would fetch data from the API
  const doctors = [
    {
      id: "D-1001",
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      email: "sarah.johnson@brikshah.com",
      phone: "(555) 123-4567",
      status: "Available",
    },
    {
      id: "D-1002",
      name: "Dr. Michael Chen",
      specialty: "Neurology",
      email: "michael.chen@brikshah.com",
      phone: "(555) 234-5678",
      status: "In Surgery",
    },
    {
      id: "D-1003",
      name: "Dr. Lisa Wong",
      specialty: "Pediatrics",
      email: "lisa.wong@brikshah.com",
      phone: "(555) 345-6789",
      status: "Available",
    },
    {
      id: "D-1004",
      name: "Dr. James Miller",
      specialty: "Orthopedics",
      email: "james.miller@brikshah.com",
      phone: "(555) 456-7890",
      status: "On Leave",
    },
    {
      id: "D-1005",
      name: "Dr. Emily Davis",
      specialty: "Dermatology",
      email: "emily.davis@brikshah.com",
      phone: "(555) 567-8901",
      status: "Available",
    },
  ]

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

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
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search doctors..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Doctor ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Specialty</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[80px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDoctors.map((doctor) => (
              <TableRow key={doctor.id}>
                <TableCell className="font-medium">{doctor.id}</TableCell>
                <TableCell>{doctor.name}</TableCell>
                <TableCell>{doctor.specialty}</TableCell>
                <TableCell>
                  <div>{doctor.phone}</div>
                  <div className="text-xs text-muted-foreground">{doctor.email}</div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={getStatusColor(doctor.status)}>
                    {doctor.status}
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
                        <Link href={`/doctors/${doctor.id}`} className="flex items-center">
                          <Edit className="mr-2 h-4 w-4" />
                          <span>Edit</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href={`/appointments/new?doctor=${doctor.id}`} className="flex items-center">
                          <Calendar className="mr-2 h-4 w-4" />
                          <span>Schedule Appointment</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Trash className="mr-2 h-4 w-4" />
                        <span>Delete</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
