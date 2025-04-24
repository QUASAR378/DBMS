"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Download, FileText } from "lucide-react"

export function ReportSummary() {
  const [period, setPeriod] = useState("month")

  // In a real app, this would fetch data from the API based on the selected period
  const summaryData = {
    totalReports: 128,
    byType: [
      { type: "General", count: 42 },
      { type: "Radiology", count: 35 },
      { type: "Laboratory", count: 28 },
      { type: "Surgery", count: 15 },
      { type: "Cardiology", count: 8 },
    ],
    byDoctor: [
      { name: "Dr. Sarah Johnson", count: 35 },
      { name: "Dr. Michael Chen", count: 30 },
      { name: "Dr. Lisa Wong", count: 25 },
      { name: "Dr. James Miller", count: 20 },
      { name: "Dr. Emily Davis", count: 18 },
    ],
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="w-48">
          <Select value={period} onValueChange={setPeriod}>
            <SelectTrigger>
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">Last Week</SelectItem>
              <SelectItem value="month">Last Month</SelectItem>
              <SelectItem value="quarter">Last Quarter</SelectItem>
              <SelectItem value="year">Last Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export Data
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Reports</CardTitle>
            <CardDescription>
              {period === "week"
                ? "Last 7 days"
                : period === "month"
                  ? "Last 30 days"
                  : period === "quarter"
                    ? "Last 90 days"
                    : "Last 365 days"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center h-40">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary">{summaryData.totalReports}</div>
                <div className="text-sm text-muted-foreground mt-2">Reports Generated</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Reports by Type</CardTitle>
            <CardDescription>Distribution by report category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {summaryData.byType.map((item) => (
                <div key={item.type} className="flex items-center">
                  <div className="w-36 text-sm">{item.type}</div>
                  <div className="flex-1">
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary"
                        style={{ width: `${(item.count / summaryData.totalReports) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="w-10 text-right text-sm">{item.count}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Reports by Doctor</CardTitle>
            <CardDescription>Top contributors</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {summaryData.byDoctor.map((item) => (
                <div key={item.name} className="flex items-center">
                  <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                  <div className="flex-1 text-sm truncate">{item.name}</div>
                  <div className="font-medium">{item.count}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
