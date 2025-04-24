import { ReportList } from "@/components/report-list"
import { Button } from "@/components/ui/button"
import { PlusCircle, FileText } from "lucide-react"
import Link from "next/link"

export default function ReportsPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Medical Reports</h1>
        <div className="space-x-2">
          <Link href="/reports/upload">
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Upload Report
            </Button>
          </Link>
          <Link href="/reports/summary">
            <Button variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              View Summary
            </Button>
          </Link>
        </div>
      </div>
      <ReportList />
    </div>
  )
}
