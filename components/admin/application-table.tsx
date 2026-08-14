import Link from "next/link"
import { formatDateTime, kindLabels, statusLabels } from "@/lib/admin-labels"

export type ApplicationRow = {
  id: string
  application_code: string
  application_kind: string
  applicant_type: string
  status: string
  submitted_at: string
  opportunities: { title?: string; region?: string } | null
  people: { name?: string; email?: string } | null
  company_contacts: { name?: string; email?: string; organizations?: { name?: string } | null } | null
}

export function applicantName(row: ApplicationRow) {
  if (row.applicant_type === "student") return row.people?.name ?? "—"
  return row.company_contacts?.organizations?.name ?? row.company_contacts?.name ?? "—"
}

export function ApplicationTable({ rows }: { rows: ApplicationRow[] }) {
  if (!rows.length) return <div className="border-2 border-dashed border-slate-300 bg-white p-10 text-center text-sm text-slate-500">該当する申込はありません。</div>
  return (
    <div className="overflow-x-auto border-2 border-slate-950 bg-white">
      <table className="w-full min-w-[850px] text-left text-sm">
        <thead className="bg-slate-950 text-white"><tr>{["受付日時", "申込者", "種別", "企画", "状態", "受付番号"].map((label) => <th key={label} className="px-4 py-3 font-bold">{label}</th>)}</tr></thead>
        <tbody className="divide-y divide-slate-200">
          {rows.map((row) => <tr key={row.id} className="hover:bg-yellow-50">
            <td className="whitespace-nowrap px-4 py-3">{formatDateTime(row.submitted_at)}</td>
            <td className="px-4 py-3 font-bold"><Link className="underline decoration-primary decoration-2 underline-offset-4" href={`/admin/applications/${row.id}`}>{applicantName(row)}</Link></td>
            <td className="px-4 py-3">{kindLabels[row.application_kind] ?? row.application_kind}</td>
            <td className="px-4 py-3">{row.opportunities?.title ?? "—"}</td>
            <td className="px-4 py-3"><span className="inline-flex bg-action-yellow px-2 py-1 text-xs font-bold">{statusLabels[row.status] ?? row.status}</span></td>
            <td className="px-4 py-3 font-mono text-xs">{row.application_code}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}
