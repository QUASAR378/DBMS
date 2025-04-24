import { DoctorForm } from "@/components/doctor-form"

export default function NewDoctorPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Add New Doctor</h1>
      <DoctorForm />
    </div>
  )
}
