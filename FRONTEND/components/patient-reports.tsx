"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Eye, Download, FileText } from "lucide-react"
import Link from "next/link"

interface PatientReportsProps {
  patientId: string
}

export function PatientReports({ patientId }: PatientReportsProps) {
  // In a real app, this would fetch data from the API based on the patientId
  const reports = [
    {
      id: "R-1001",
      title: "Annual Checkup Report",
      date: "15/04/2023",
      doctor: "Dr. Sarah Johnson",
      type: "General",
      status: "Final",
    },
    {
      id: "R-1002",
      title: "Blood Test Results",
      date: "15/04/2023",
      doctor: "Dr. Sarah Johnson",
      type: "Laboratory",
      status: "Final",
    },
    {
      id: "R-1003",
      title: "Cardiology Assessment",
      date: "02/05/2023",
      doctor: "Dr. Michael Chen",
      type: "Cardiology",
      status: "Final",
    },
    {
      id: "R-1004",
      title: "MRI Scan Results",
      date: "20/06/2023",
      doctor: "Dr. Lisa Wong",
      type: "Radiology",
      status: "Preliminary",
    },
  ]

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
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Report ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Doctor</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-[80px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reports.map((report) => (
            <TableRow key={report.id}>
              <TableCell className="font-medium">{report.id}</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <FileText className="mr-2 h-4 w-4 text-muted-foreground" />
                  {report.title}
                </div>
              </TableCell>
              <TableCell>{report.date}</TableCell>
              <TableCell>{report.doctor}</TableCell>
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
