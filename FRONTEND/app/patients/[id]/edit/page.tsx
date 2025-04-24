import { PatientForm } from "@/components/patient-form"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function EditPatientPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center gap-4 mb-6">
        <Link href={`/patients/${params.id}`}>
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Edit Patient</h1>
      </div>
      <PatientForm patientId={params.id} />
    </div>
  )
}
