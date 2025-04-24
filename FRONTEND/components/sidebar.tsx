"use client"

import { useSidebar } from "./sidebar-provider"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Users,
  UserRound,
  Calendar,
  Monitor,
  Building2,
  FileText,
  Settings,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Logo } from "./logo"

const navItems = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Patients", href: "/patients", icon: Users },
  { name: "Doctors", href: "/doctors", icon: UserRound },
  { name: "Appointments", href: "/appointments", icon: Calendar },
  { name: "Equipment", href: "/equipment", icon: Monitor },
  { name: "Theaters", href: "/theaters", icon: Building2 },
  { name: "Reports", href: "/reports", icon: FileText },
  { name: "Settings", href: "/settings", icon: Settings },
]

export function Sidebar() {
  const { isOpen, toggle } = useSidebar()
  const pathname = usePathname()

  return (
    <div
      className={cn(
        "h-screen bg-card border-r border-border transition-all duration-300 relative",
        isOpen ? "w-64" : "w-20",
      )}
    >
      <div className="p-4 flex items-center justify-between">
        <div className={cn("transition-opacity", isOpen ? "opacity-100" : "opacity-0")}>
          <Logo />
        </div>
        {!isOpen && (
          <div className="absolute left-1/2 -translate-x-1/2">
            <Logo showText={false} />
          </div>
        )}
        <Button variant="ghost" size="icon" onClick={toggle} className="h-8 w-8">
          {isOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </Button>
      </div>

      <nav className="mt-6 px-2">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
            return (
              <li key={item.name}>
                <Link href={item.href}>
                  <Button
                    variant={isActive ? "secondary" : "ghost"}
                    className={cn("w-full justify-start", isOpen ? "px-4" : "px-2")}
                  >
                    <item.icon className="h-5 w-5 mr-2" />
                    <span className={cn("transition-opacity", isOpen ? "opacity-100" : "opacity-0")}>{item.name}</span>
                  </Button>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
