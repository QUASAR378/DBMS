import { EquipmentList } from "@/components/equipment-list"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import Link from "next/link"

export default function EquipmentPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Medical Equipment</h1>
        <div className="space-x-2">
          <Link href="/equipment/new">
            <Button variant="outline">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Equipment
            </Button>
          </Link>
          <Link href="/equipment/book">
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Book Equipment
            </Button>
          </Link>
        </div>
      </div>
      <EquipmentList />
    </div>
  )
}
