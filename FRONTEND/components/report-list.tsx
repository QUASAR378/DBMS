"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Search, Download, Eye, Trash } from "lucide-react"
import Link from "next/link"

export function ReportList() {
  const [searchTerm, setSearchTerm] = useState("")

  // In a real app, this would fetch data from the API
  const reports = [
    {
      id: "R-1001",
      title: "Annual Checkup Report",
      patient: "John Smith",
      doctor: "Dr. Sarah Johnson",
      date: "15/06/2023",
      type: "General",
      status: "Final",
    },
    {
      id: "R-1002",
      title: "MRI Scan Results",
      patient: "Emily Davis",
      doctor: "Dr. Michael Chen",
      date: "10/06/2023",
      type: "Radiology",
      status: "Final",
    },
    {
      id: "R-1003",
      title: "Blood Test Results",
      patient: "Robert Wilson",
      doctor: "Dr. Lisa Wong",
      date: "12/06/2023",
      type: "Laboratory",
      status: "Preliminary",
    },
    {
      id: "R-1004",
      title: "Post-Surgery Evaluation",
      patient: "Maria Garcia",
      doctor: "Dr. James Miller",
      date: "08/06/2023",
      type: "Surgery",
      status: "Final",
    },
    {
      id: "R-1005",
      title: "Cardiology Assessment",
      patient: "David Brown",
      doctor: "Dr. Sarah Johnson",
      date: "05/06/2023",
      type: "Cardiology",
      status: "Final",
    },
  ]

  const filteredReports = reports.filter(
    (report) =>
      report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Final":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
      case "Preliminary":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100"
      case "Draft":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
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
            placeholder="Search reports..."
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
              <TableHead>Report ID</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Patient</TableHead>
              <TableHead>Doctor</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[80px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredReports.map((report) => (
              <TableRow key={report.id}>
                <TableCell className="font-medium">{report.id}</TableCell>
                <TableCell>{report.title}</TableCell>
                <TableCell>{report.patient}</TableCell>
                <TableCell>{report.doctor}</TableCell>
                <TableCell>{report.date}</TableCell>
                <TableCell>{report.type}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={getStatusColor(report.status)}>
                    {report.status}
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
                        <Link href={`/reports/${report.id}`} className="flex items-center">
                          <Eye className="mr-2 h-4 w-4" />
                          <span>View</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href={`/reports/${report.id}/download`} className="flex items-center">
                          <Download className="mr-2 h-4 w-4" />
                          <span>Download</span>
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
