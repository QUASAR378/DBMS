import { PatientList } from "@/components/patient-list"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import Link from "next/link"

export default function PatientsPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Patients</h1>
        <Link href="/patients/new">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Patient
          </Button>
        </Link>
      </div>
      <PatientList />
    </div>
  )
}
