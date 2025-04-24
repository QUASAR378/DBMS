import { TheaterList } from "@/components/theater-list"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import Link from "next/link"

export default function TheatersPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Operating Theaters</h1>
        <div className="space-x-2">
          <Link href="/theaters/new">
            <Button variant="outline">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Theater
            </Button>
          </Link>
          <Link href="/theaters/book">
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Book Theater
            </Button>
          </Link>
        </div>
      </div>
      <TheaterList />
    </div>
  )
}
