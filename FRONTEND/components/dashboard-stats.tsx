"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Calendar, Monitor, Building2 } from "lucide-react"

export function DashboardStats() {
  // In a real app, this would fetch data from the API
  const stats = [
    {
      title: "Total Patients",
      value: "1,284",
      icon: Users,
      description: "12 new this week",
      color: "text-blue-500",
    },
    {
      title: "Appointments Today",
      value: "32",
      icon: Calendar,
      description: "4 pending confirmation",
      color: "text-green-500",
    },
    {
      title: "Equipment Bookings",
      value: "18",
      icon: Monitor,
      description: "3 available units",
      color: "text-amber-500",
    },
    {
      title: "Theater Utilization",
      value: "86%",
      icon: Building2,
      description: "2 theaters available",
      color: "text-purple-500",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
