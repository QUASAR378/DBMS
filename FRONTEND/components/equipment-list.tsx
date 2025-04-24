"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Search, Calendar, Edit, Trash } from "lucide-react"
import Link from "next/link"

export function EquipmentList() {
  const [searchTerm, setSearchTerm] = useState("")

  // In a real app, this would fetch data from the API
  const equipment = [
    {
      id: "EQ-1001",
      name: "MRI Scanner",
      type: "Imaging",
      location: "Radiology Dept, Room 101",
      status: "Available",
      lastMaintenance: "15/04/2023",
      nextMaintenance: "15/10/2023",
    },
    {
      id: "EQ-1002",
      name: "Ultrasound Machine",
      type: "Imaging",
      location: "Radiology Dept, Room 102",
      status: "In Use",
      lastMaintenance: "20/03/2023",
      nextMaintenance: "20/09/2023",
    },
    {
      id: "EQ-1003",
      name: "X-Ray Machine",
      type: "Imaging",
      location: "Radiology Dept, Room 103",
      status: "Available",
      lastMaintenance: "10/05/2023",
      nextMaintenance: "10/11/2023",
    },
    {
      id: "EQ-1004",
      name: "Ventilator",
      type: "Life Support",
      location: "ICU, Room 201",
      status: "In Use",
      lastMaintenance: "05/04/2023",
      nextMaintenance: "05/10/2023",
    },
    {
      id: "EQ-1005",
      name: "ECG Machine",
      type: "Diagnostic",
      location: "Cardiology Dept, Room 301",
      status: "Maintenance",
      lastMaintenance: "01/06/2023",
      nextMaintenance: "01/12/2023",
    },
  ]

  const filteredEquipment = equipment.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

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
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search equipment..."
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
              <TableHead>Equipment ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Maintenance</TableHead>
              <TableHead className="w-[80px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredEquipment.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.type}</TableCell>
                <TableCell>{item.location}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={getStatusColor(item.status)}>
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div>Last: {item.lastMaintenance}</div>
                  <div className="text-xs text-muted-foreground">Next: {item.nextMaintenance}</div>
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
                        <Link href={`/equipment/${item.id}`} className="flex items-center">
                          <Edit className="mr-2 h-4 w-4" />
                          <span>Edit</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href={`/equipment/book?equipment=${item.id}`} className="flex items-center">
                          <Calendar className="mr-2 h-4 w-4" />
                          <span>Book</span>
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
