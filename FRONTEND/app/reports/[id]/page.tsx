import { ReportDetails } from "@/components/report-details"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, Edit, Printer } from "lucide-react"
import Link from "next/link"

export default function ReportPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/reports">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Medical Report</h1>
        <div className="ml-auto space-x-2">
          <Button variant="outline">
            <Printer className="mr-2 h-4 w-4" />
            Print
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
          <Link href={`/reports/${params.id}/edit`}>
            <Button>
              <Edit className="mr-2 h-4 w-4" />
              Edit Report
            </Button>
          </Link>
        </div>
      </div>

      <ReportDetails id={params.id} />
    </div>
  )
}
