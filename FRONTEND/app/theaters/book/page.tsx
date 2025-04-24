import { TheaterBookingForm } from "@/components/theater-booking-form"

export default function BookTheaterPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Book Operating Theater</h1>
      <TheaterBookingForm />
    </div>
  )
}
