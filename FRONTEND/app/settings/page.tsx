import { SettingsNav } from "@/components/settings-nav"
import { ProfileSettings } from "@/components/profile-settings"

export default function SettingsPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <SettingsNav />
        </div>
        <div className="md:col-span-3">
          <ProfileSettings />
        </div>
      </div>
    </div>
  )
}
