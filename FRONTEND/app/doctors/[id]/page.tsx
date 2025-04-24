import { DoctorDetails } from "@/components/doctor-details"
import { DoctorAppointments } from "@/components/doctor-appointments"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Edit } from "lucide-react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DoctorPatients } from "@/components/doctor-patients"

export default function DoctorPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/doctors">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Doctor Details</h1>
        <div className="ml-auto space-x-2">
          <Link href={`/appointments/new?doctor=${params.id}`}>
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Appointment
            </Button>
          </Link>
          <Link href={`/doctors/${params.id}/edit`}>
            <Button>
              <Edit className="mr-2 h-4 w-4" />
              Edit Doctor
            </Button>
          </Link>
        </div>
      </div>

      <DoctorDetails id={params.id} />

      <Tabs defaultValue="schedule" className="mt-6">
        <TabsList>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
          <TabsTrigger value="patients">Patients</TabsTrigger>
        </TabsList>
        <TabsContent value="schedule" className="mt-4">
          <DoctorAppointments doctorId={params.id} />
        </TabsContent>
        <TabsContent value="patients" className="mt-4">
          <DoctorPatients doctorId={params.id} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
