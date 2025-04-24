"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, Upload, RefreshCw, Database, Clock } from "lucide-react"
import { Progress } from "@/components/ui/progress"

const backupFormSchema = z.object({
  automaticBackups: z.boolean(),
  backupFrequency: z.string(),
  retentionPeriod: z.string(),
  includePatientRecords: z.boolean(),
  includeAppointments: z.boolean(),
  includeReports: z.boolean(),
})

export function BackupSettings() {
  const [isLoading, setIsLoading] = useState(false)
  const [backupProgress, setBackupProgress] = useState(0)
  const [isBackingUp, setIsBackingUp] = useState(false)
  const [lastBackup, setLastBackup] = useState("June 15, 2023 - 03:45 PM")

  const form = useForm<z.infer<typeof backupFormSchema>>({
    resolver: zodResolver(backupFormSchema),
    defaultValues: {
      automaticBackups: true,
      backupFrequency: "daily",
      retentionPeriod: "30",
      includePatientRecords: true,
      includeAppointments: true,
      includeReports: true,
    },
  })

  function onSubmit(values: z.infer<typeof backupFormSchema>) {
    setIsLoading(true)
    // In a real app, this would send data to the API
    console.log(values)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  function startBackup() {
    setIsBackingUp(true)
    setBackupProgress(0)

    // Simulate backup progress
    const interval = setInterval(() => {
      setBackupProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsBackingUp(false)
          setLastBackup(new Date().toLocaleString())
          return 100
        }
        return prev + 10
      })
    }, 500)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Backup & Data Management</CardTitle>
          <CardDescription>Configure automatic backups and manage your clinic data.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="automaticBackups"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">Automatic Backups</FormLabel>
                      <FormDescription>Automatically backup your data on a regular schedule.</FormDescription>
                    </div>
                    <FormControl>
                      <Switch checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="backupFrequency"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Backup Frequency</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select frequency" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="hourly">Hourly</SelectItem>
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>How often automatic backups should be created.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="retentionPeriod"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Retention Period (days)</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select retention period" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="7">7 days</SelectItem>
                          <SelectItem value="30">30 days</SelectItem>
                          <SelectItem value="90">90 days</SelectItem>
                          <SelectItem value="365">365 days</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>How long to keep backup files before automatic deletion.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Data to Include</h3>
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="includePatientRecords"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                          <FormLabel className="text-base">Patient Records</FormLabel>
                          <FormDescription>Include all patient data in backups.</FormDescription>
                        </div>
                        <FormControl>
                          <Switch checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="includeAppointments"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                          <FormLabel className="text-base">Appointments</FormLabel>
                          <FormDescription>Include appointment history and schedules.</FormDescription>
                        </div>
                        <FormControl>
                          <Switch checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="includeReports"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                          <FormLabel className="text-base">Medical Reports</FormLabel>
                          <FormDescription>Include all medical reports and documents.</FormDescription>
                        </div>
                        <FormControl>
                          <Switch checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Saving..." : "Save Settings"}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Manual Backup & Restore</CardTitle>
          <CardDescription>Create backups on demand or restore from previous backups.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Last Backup</p>
                <p className="text-sm text-muted-foreground">{lastBackup}</p>
              </div>
            </div>
            <Button variant="outline" size="sm" disabled={isBackingUp}>
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh
            </Button>
          </div>

          {isBackingUp && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Backing up data...</span>
                <span>{backupProgress}%</span>
              </div>
              <Progress value={backupProgress} className="h-2" />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            <Button onClick={startBackup} disabled={isBackingUp}>
              <Database className="mr-2 h-4 w-4" />
              Create Backup Now
            </Button>
            <Button variant="outline">
              <Upload className="mr-2 h-4 w-4" />
              Restore from Backup
            </Button>
          </div>
        </CardContent>
        <CardFooter className="bg-muted/50 border-t">
          <div className="w-full flex justify-between items-center">
            <p className="text-sm text-muted-foreground">Download previous backups for offline storage</p>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Download Backups
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
