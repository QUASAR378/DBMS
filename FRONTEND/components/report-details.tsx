"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, User, Calendar, UserRound, Tag } from "lucide-react"

interface ReportDetailsProps {
  id: string
}

export function ReportDetails({ id }: ReportDetailsProps) {
  // In a real app, this would fetch data from the API based on the ID
  const report = {
    id,
    title: "Annual Checkup Report",
    patient: "John Smith",
    patientId: "P-1001",
    doctor: "Dr. Sarah Johnson",
    doctorId: "D-1001",
    date: "15/06/2023",
    type: "General",
    status: "Final",
    content: `
      <h2>Physical Examination</h2>
      <p>Height: 5'10" (178 cm)<br>Weight: 165 lbs (75 kg)<br>BMI: 23.7 (Normal)<br>Blood Pressure: 120/80 mmHg<br>Heart Rate: 72 bpm<br>Respiratory Rate: 14 breaths/min<br>Temperature: 98.6°F (37°C)</p>
      
      <h2>Laboratory Results</h2>
      <p>Complete Blood Count (CBC): Within normal limits<br>Comprehensive Metabolic Panel (CMP): Within normal limits<br>Lipid Panel:<br>- Total Cholesterol: 185 mg/dL (Desirable: &lt;200 mg/dL)<br>- HDL: 55 mg/dL (Good: &gt;40 mg/dL)<br>- LDL: 110 mg/dL (Near optimal: 100-129 mg/dL)<br>- Triglycerides: 100 mg/dL (Normal: &lt;150 mg/dL)</p>
      
      <h2>Assessment</h2>
      <p>Patient is in good overall health. Blood pressure and heart rate are within normal ranges. Laboratory results show healthy cholesterol levels.</p>
      
      <h2>Recommendations</h2>
      <p>1. Continue current diet and exercise regimen<br>2. Follow up in one year for routine checkup<br>3. Maintain healthy lifestyle habits</p>
    `,
  }

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
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <CardTitle className="flex items-center">
                <FileText className="mr-2 h-5 w-5 text-primary" />
                {report.title}
              </CardTitle>
              <CardDescription>Report ID: {report.id}</CardDescription>
            </div>
            <Badge variant="outline" className={getStatusColor(report.status)}>
              {report.status}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-4">
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Patient</p>
                  <p>
                    <Link href={`/patients/${report.patientId}`} className="hover:underline">
                      {report.patient}
                    </Link>
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <UserRound className="mr-2 h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Doctor</p>
                  <p>
                    <Link href={`/doctors/${report.doctorId}`} className="hover:underline">
                      {report.doctor}
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Date</p>
                  <p>{report.date}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Tag className="mr-2 h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Type</p>
                  <p>{report.type}</p>
                </div>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Report Content</CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className="prose max-w-none dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: report.content }}
              />
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  )
}

import Link from "next/link"
