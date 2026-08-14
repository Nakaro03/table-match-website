import "server-only"
import { canAccessRegion, type AdminContext } from "@/lib/admin"
import { createServiceClient } from "@/lib/supabase/server"
import type { ApplicationRow } from "@/components/admin/application-table"

const applicationSelect = "id,application_code,application_kind,applicant_type,status,submitted_at,opportunities(title,region),people(name,email),company_contacts(name,email,organizations(name))"

export async function listApplications(admin: AdminContext, filters?: { status?: string; kind?: string; query?: string }) {
  const service = createServiceClient()
  let request = service.from("applications").select(applicationSelect).order("submitted_at", { ascending: false }).limit(300)
  if (filters?.status) request = request.eq("status", filters.status)
  if (filters?.kind) request = request.eq("application_kind", filters.kind)
  const { data, error } = await request
  if (error) throw error
  const rows = (data ?? []) as unknown as ApplicationRow[]
  const regional = rows.filter((row) => canAccessRegion(admin, row.opportunities?.region))
  const query = filters?.query?.trim().toLowerCase()
  if (!query) return regional
  return regional.filter((row) => JSON.stringify(row).toLowerCase().includes(query))
}
