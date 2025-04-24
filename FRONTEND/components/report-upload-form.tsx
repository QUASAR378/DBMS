"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { useSearchParams } from "next/navigation"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Upload } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required.",
  }),
  patientId: z.string().min(1, {
    message: "Patient is required.",
  }),
  doctorId: z.string().min(1, {
    message: "Doctor is required.",
  }),
  date: z.date({
    required_error: "Report date is required.",
  }),
  type: z.string().min(1, {
    message: "Report type is required.",
  }),
  status: z.string().min(1, {
    message: "Status is required.",
  }),
  file: z.any().optional(),
  notes: z.string().optional(),
})

export function ReportUploadForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const patientId = searchParams.get("patient")

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      patientId: patientId || "",
      doctorId: "",
      type: "",
      status: "Final",
      notes: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, this would send data to the API
    console.log(values)

    // Redirect to reports list
    router.push("/reports")
  }

  // In a real app, these would be fetched from the API
  const patients = [
    { id: "P-1001", name: "John Smith" },
    { id: "P-1002", name: "Emily Davis" },
    { id: "P-1003", name: "Robert Wilson" },
    { id: "P-1004", name: "Maria Garcia" },
    { id: "P-1005", name: "David Brown" },
  ]

  const doctors = [
    { id: "D-1001", name: "Dr. Sarah Johnson" },
    { id: "D-1002", name: "Dr. Michael Chen" },
    { id: "D-1003", name: "Dr. Lisa Wong" },
    { id: "D-1004", name: "Dr. James Miller" },
    { id: "D-1005", name: "Dr. Emily Davis" },
  ]

  const reportTypes = [
    { value: "general", label: "General" },
    { value: "radiology", label: "Radiology" },
    { value: "laboratory", label: "Laboratory" },
    { value: "surgery", label: "Surgery" },
    { value: "cardiology", label: "Cardiology" },
    { value: "neurology", label: "Neurology" },
  ]

  return (
    <Card>
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Report Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter report title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="patientId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Patient</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select patient" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {patients.map((patient) => (
                          <SelectItem key={patient.id} value={patient.id}>
                            {patient.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="doctorId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Doctor</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select doctor" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {doctors.map((doctor) => (
                          <SelectItem key={doctor.id} value={doctor.id}>
                            {doctor.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                          >
                            {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Report Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select report type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {reportTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Draft">Draft</SelectItem>
                        <SelectItem value="Preliminary">Preliminary</SelectItem>
                        <SelectItem value="Final">Final</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="file"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Upload File</FormLabel>
                    <FormControl>
                      <div className="flex items-center gap-2">
                        <Input
                          type="file"
                          className="flex-1"
                          onChange={(e) => {
                            const file = e.target.files?.[0]
                            field.onChange(file)
                          }}
                        />
                        <Button type="button" size="icon" variant="outline">
                          <Upload className="h-4 w-4" />
                        </Button>
                      </div>
                    </FormControl>
                    <FormDescription>Upload PDF, DOCX, or image files (max 10MB)</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Notes</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter any additional notes..." className="min-h-[120px]" {...field} />
                  </FormControl>
                  <FormDescription>Include any additional information or context for this report.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end space-x-2">
              <Button variant="outline" type="button" onClick={() => router.push("/reports")}>
                Cancel
              </Button>
              <Button type="submit">Upload Report</Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
