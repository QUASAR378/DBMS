import { EquipmentDetails } from "@/components/equipment-details"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Edit } from "lucide-react"
import Link from "next/link"

export default function EquipmentPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/equipment">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Equipment Details</h1>
        <div className="ml-auto space-x-2">
          <Link href={`/equipment/book?equipment=${params.id}`}>
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Book Equipment
            </Button>
          </Link>
          <Link href={`/equipment/${params.id}/edit`}>
            <Button>
              <Edit className="mr-2 h-4 w-4" />
              Edit Equipment
            </Button>
          </Link>
        </div>
      </div>

      <EquipmentDetails id={params.id} />
    </div>
  )
}
