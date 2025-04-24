"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Search, Calendar, FileText } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface DoctorPatientsProps {
  doctorId: string
}

export function DoctorPatients({ doctorId }: DoctorPatientsProps) {
  const [searchTerm, setSearchTerm] = useState("")

  // In a real app, this would fetch data from the API based on the doctorId
  const patients = [
    {
      id: "P-1001",
      name: "John Smith",
      age: 38,
      lastVisit: "15/04/2023",
      nextAppointment: "15/07/2023",
      condition: "Hypertension",
    },
    {
      id: "P-1002",
      name: "Emily Davis",
      age: 33,
      lastVisit: "02/05/2023",
      nextAppointment: "02/08/2023",
      condition: "Diabetes Type 2",
    },
    {
      id: "P-1003",
      name: "Robert Wilson",
      age: 45,
      lastVisit: "28/04/2023",
      nextAppointment: "20/06/2023",
      condition: "Coronary Artery Disease",
    },
    {
      id: "P-1004",
      name: "Maria Garcia",
      age: 41,
      lastVisit: "10/05/2023",
      nextAppointment: "10/08/2023",
      condition: "Hypertension",
    },
    {
      id: "P-1005",
      name: "David Brown",
      age: 48,
      lastVisit: "05/05/2023",
      nextAppointment: "05/08/2023",
      condition: "Arrhythmia",
    },
  ]

  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.condition.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search patients..."
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
              <TableHead>Patient ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Last Visit</TableHead>
              <TableHead>Next Appointment</TableHead>
              <TableHead>Condition</TableHead>
              <TableHead className="w-[80px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPatients.map((patient) => (
              <TableRow key={patient.id}>
                <TableCell className="font-medium">{patient.id}</TableCell>
                <TableCell>{patient.name}</TableCell>
                <TableCell>{patient.age}</TableCell>
                <TableCell>{patient.lastVisit}</TableCell>
                <TableCell>{patient.nextAppointment}</TableCell>
                <TableCell>{patient.condition}</TableCell>
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
                        <Link href={`/patients/${patient.id}`} className="flex items-center">
                          <Search className="mr-2 h-4 w-4" />
                          <span>View Patient</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href={`/appointments/new?patient=${patient.id}&doctor=${doctorId}`}
                          className="flex items-center"
                        >
                          <Calendar className="mr-2 h-4 w-4" />
                          <span>Schedule Appointment</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href={`/reports?patient=${patient.id}`} className="flex items-center">
                          <FileText className="mr-2 h-4 w-4" />
                          <span>View Reports</span>
                        </Link>
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
