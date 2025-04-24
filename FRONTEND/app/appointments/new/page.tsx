import { AppointmentForm } from "@/components/appointment-form"

export default function NewAppointmentPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Schedule New Appointment</h1>
      <AppointmentForm />
    </div>
  )
}
