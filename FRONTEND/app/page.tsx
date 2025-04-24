import { DashboardStats } from "@/components/dashboard-stats"
import { RecentAppointments } from "@/components/recent-appointments"
import { UpcomingBookings } from "@/components/upcoming-bookings"

export default function Home() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <DashboardStats />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <RecentAppointments />
        <UpcomingBookings />
      </div>
    </div>
  )
}
