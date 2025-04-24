import { ReportUploadForm } from "@/components/report-upload-form"

export default function UploadReportPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Upload Medical Report</h1>
      <ReportUploadForm />
    </div>
  )
}
