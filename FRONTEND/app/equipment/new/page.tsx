import { EquipmentForm } from "@/components/equipment-form"

export default function NewEquipmentPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Add New Equipment</h1>
      <EquipmentForm />
    </div>
  )
}
