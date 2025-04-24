"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Search, FileText, Calendar, Edit, Trash } from "lucide-react"
import Link from "next/link"

export function PatientList() {
  const [searchTerm, setSearchTerm] = useState("")

  // In a real app, this would fetch data from the API
  const patients = [
    {
      id: "P-1001",
      name: "John Smith",
      dob: "12/05/1985",
      gender: "Male",
      phone: "(555) 123-4567",
      email: "john.smith@example.com",
      lastVisit: "15/04/2023",
    },
    {
      id: "P-1002",
      name: "Emily Davis",
      dob: "23/09/1990",
      gender: "Female",
      phone: "(555) 234-5678",
      email: "emily.davis@example.com",
      lastVisit: "02/05/2023",
    },
    {
      id: "P-1003",
      name: "Robert Wilson",
      dob: "08/11/1978",
      gender: "Male",
      phone: "(555) 345-6789",
      email: "robert.wilson@example.com",
      lastVisit: "28/04/2023",
    },
    {
      id: "P-1004",
      name: "Maria Garcia",
      dob: "17/03/1982",
      gender: "Female",
      phone: "(555) 456-7890",
      email: "maria.garcia@example.com",
      lastVisit: "10/05/2023",
    },
    {
      id: "P-1005",
      name: "David Brown",
      dob: "29/07/1975",
      gender: "Male",
      phone: "(555) 567-8901",
      email: "david.brown@example.com",
      lastVisit: "05/05/2023",
    },
  ]

  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.email.toLowerCase().includes(searchTerm.toLowerCase()),
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
              <TableHead>Date of Birth</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Last Visit</TableHead>
              <TableHead className="w-[80px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPatients.map((patient) => (
              <TableRow key={patient.id}>
                <TableCell className="font-medium">{patient.id}</TableCell>
                <TableCell>{patient.name}</TableCell>
                <TableCell>{patient.dob}</TableCell>
                <TableCell>{patient.gender}</TableCell>
                <TableCell>
                  <div>{patient.phone}</div>
                  <div className="text-xs text-muted-foreground">{patient.email}</div>
                </TableCell>
                <TableCell>{patient.lastVisit}</TableCell>
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
                          <Edit className="mr-2 h-4 w-4" />
                          <span>Edit</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href={`/appointments/new?patient=${patient.id}`} className="flex items-center">
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
