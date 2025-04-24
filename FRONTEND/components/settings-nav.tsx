"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { User, Monitor, Bell, Shield, Database } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const settingsNavItems = [
  { name: "Profile", href: "/settings", icon: User },
  { name: "System", href: "/settings/system", icon: Monitor },
  { name: "Notifications", href: "/settings/notifications", icon: Bell },
  { name: "Security", href: "/settings/security", icon: Shield },
  { name: "Backup & Data", href: "/settings/backup", icon: Database },
]

export function SettingsNav() {
  const pathname = usePathname()

  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden">
      <div className="p-2">
        <nav className="space-y-1">
          {settingsNavItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link key={item.name} href={item.href} className="block">
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className={cn("w-full justify-start", isActive && "font-medium")}
                >
                  <item.icon className="h-5 w-5 mr-2" />
                  {item.name}
                </Button>
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
