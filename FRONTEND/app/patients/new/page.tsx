import { PatientForm } from "@/components/patient-form"

export default function NewPatientPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Add New Patient</h1>
      <PatientForm />
    </div>
  )
}
