import { AppointmentCalendar } from "@/components/appointment-calendar"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import Link from "next/link"

export default function AppointmentsPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Appointments</h1>
        <Link href="/appointments/new">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            New Appointment
          </Button>
        </Link>
      </div>
      <AppointmentCalendar />
    </div>
  )
}
