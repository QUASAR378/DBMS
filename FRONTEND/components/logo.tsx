import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  showText?: boolean
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <div className="relative h-8 w-8">
        <Image src="/images/brikshah-logo.png" alt="BrikShah Clinic Logo" fill className="object-contain" />
      </div>
      {showText && <span className="font-bold text-primary text-lg">BrikShah Clinic</span>}
    </Link>
  )
}
