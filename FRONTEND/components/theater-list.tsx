"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Search, Calendar, Edit, Trash } from "lucide-react"
import Link from "next/link"

export function TheaterList() {
  const [searchTerm, setSearchTerm] = useState("")

  // In a real app, this would fetch data from the API
  const theaters = [
    {
      id: "TH-1001",
      name: "Theater 1",
      type: "General Surgery",
      location: "Building A, Floor 2",
      capacity: "10 staff",
      status: "Available",
      lastCleaning: "15/06/2023",
    },
    {
      id: "TH-1002",
      name: "Theater 2",
      type: "Cardiac Surgery",
      location: "Building A, Floor 2",
      capacity: "12 staff",
      status: "In Use",
      lastCleaning: "14/06/2023",
    },
    {
      id: "TH-1003",
      name: "Theater 3",
      type: "Orthopedic Surgery",
      location: "Building B, Floor 1",
      capacity: "8 staff",
      status: "Available",
      lastCleaning: "15/06/2023",
    },
    {
      id: "TH-1004",
      name: "Theater 4",
      type: "Neurosurgery",
      location: "Building B, Floor 1",
      capacity: "10 staff",
      status: "Maintenance",
      lastCleaning: "13/06/2023",
    },
    {
      id: "TH-1005",
      name: "Theater 5",
      type: "General Surgery",
      location: "Building C, Floor 1",
      capacity: "8 staff",
      status: "Available",
      lastCleaning: "15/06/2023",
    },
  ]

  const filteredTheaters = theaters.filter(
    (theater) =>
      theater.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      theater.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      theater.id.toLowerCase().includes(searchTerm.toLowerCase()),
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
            placeholder="Search theaters..."
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
              <TableHead>Theater ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Capacity</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[80px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTheaters.map((theater) => (
              <TableRow key={theater.id}>
                <TableCell className="font-medium">{theater.id}</TableCell>
                <TableCell>{theater.name}</TableCell>
                <TableCell>{theater.type}</TableCell>
                <TableCell>{theater.location}</TableCell>
                <TableCell>{theater.capacity}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={getStatusColor(theater.status)}>
                    {theater.status}
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
                        <Link href={`/theaters/${theater.id}`} className="flex items-center">
                          <Edit className="mr-2 h-4 w-4" />
                          <span>Edit</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href={`/theaters/book?theater=${theater.id}`} className="flex items-center">
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
