import { PatientDetails } from "@/components/patient-details"
import { PatientAppointments } from "@/components/patient-appointments"
import { PatientReports } from "@/components/patient-reports"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Edit } from "lucide-react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PatientPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/patients">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Patient Details</h1>
        <div className="ml-auto space-x-2">
          <Link href={`/appointments/new?patient=${params.id}`}>
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Appointment
            </Button>
          </Link>
          <Link href={`/patients/${params.id}/edit`}>
            <Button>
              <Edit className="mr-2 h-4 w-4" />
              Edit Patient
            </Button>
          </Link>
        </div>
      </div>

      <PatientDetails id={params.id} />

      <Tabs defaultValue="appointments" className="mt-6">
        <TabsList>
          <TabsTrigger value="appointments">Appointments</TabsTrigger>
          <TabsTrigger value="reports">Medical Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="appointments" className="mt-4">
          <PatientAppointments patientId={params.id} />
        </TabsContent>
        <TabsContent value="reports" className="mt-4">
          <PatientReports patientId={params.id} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
