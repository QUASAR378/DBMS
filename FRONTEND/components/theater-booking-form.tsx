"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { useSearchParams } from "next/navigation"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  theaterId: z.string().min(1, {
    message: "Theater is required.",
  }),
  surgeonId: z.string().min(1, {
    message: "Lead surgeon is required.",
  }),
  patientId: z.string().min(1, {
    message: "Patient is required.",
  }),
  date: z.date({
    required_error: "Booking date is required.",
  }),
  startTime: z.string().min(1, {
    message: "Start time is required.",
  }),
  endTime: z.string().min(1, {
    message: "End time is required.",
  }),
  procedureType: z.string().min(1, {
    message: "Procedure type is required.",
  }),
  staffRequired: z.string().min(1, {
    message: "Staff required is required.",
  }),
  notes: z.string().optional(),
})

export function TheaterBookingForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const theaterId = searchParams.get("theater")

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      theaterId: theaterId || "",
      surgeonId: "",
      patientId: "",
      startTime: "",
      endTime: "",
      procedureType: "",
      staffRequired: "",
      notes: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, this would send data to the API
    console.log(values)

    // Redirect to theaters list
    router.push("/theaters")
  }

  // In a real app, these would be fetched from the API
  const theaters = [
    { id: "TH-1001", name: "Theater 1" },
    { id: "TH-1002", name: "Theater 2" },
    { id: "TH-1003", name: "Theater 3" },
    { id: "TH-1004", name: "Theater 4" },
    { id: "TH-1005", name: "Theater 5" },
  ]

  const doctors = [
    { id: "D-1001", name: "Dr. Sarah Johnson" },
    { id: "D-1002", name: "Dr. Michael Chen" },
    { id: "D-1003", name: "Dr. Lisa Wong" },
    { id: "D-1004", name: "Dr. James Miller" },
    { id: "D-1005", name: "Dr. Emily Davis" },
  ]

  const patients = [
    { id: "P-1001", name: "John Smith" },
    { id: "P-1002", name: "Emily Davis" },
    { id: "P-1003", name: "Robert Wilson" },
    { id: "P-1004", name: "Maria Garcia" },
    { id: "P-1005", name: "David Brown" },
  ]

  const timeSlots = [
    "08:00 AM",
    "08:30 AM",
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "01:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
  ]

  const procedureTypes = [
    { value: "general", label: "General Surgery" },
    { value: "cardiac", label: "Cardiac Surgery" },
    { value: "orthopedic", label: "Orthopedic Surgery" },
    { value: "neuro", label: "Neurosurgery" },
    { value: "plastic", label: "Plastic Surgery" },
  ]

  return (
    <Card>
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="theaterId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Theater</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select theater" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {theaters.map((theater) => (
                          <SelectItem key={theater.id} value={theater.id}>
                            {theater.name}
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
                name="surgeonId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Lead Surgeon</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select surgeon" />
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
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="startTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Start Time</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Start" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={`start-${time}`} value={time}>
                              {time}
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
                  name="endTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>End Time</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="End" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={`end-${time}`} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="procedureType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Procedure Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select procedure type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {procedureTypes.map((type) => (
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
              <FormField
                control={form.control}
                name="staffRequired"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Staff Required</FormLabel>
                    <FormControl>
                      <Input type="number" min="1" placeholder="Number of staff" {...field} />
                    </FormControl>
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
                    <Textarea
                      placeholder="Enter any additional notes or requirements..."
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Include any special equipment requirements or setup instructions.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end space-x-2">
              <Button variant="outline" type="button" onClick={() => router.push("/theaters")}>
                Cancel
              </Button>
              <Button type="submit">Book Theater</Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
