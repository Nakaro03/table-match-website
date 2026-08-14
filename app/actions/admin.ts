"use server"

import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { z } from "zod"
import { createSessionClient, createServiceClient } from "@/lib/supabase/server"
import { hasPublicSupabaseConfig } from "@/lib/supabase/config"
import { canAccessRegion, requireAdmin } from "@/lib/admin"

export async function loginAdmin(formData: FormData) {
  if (!hasPublicSupabaseConfig()) redirect("/admin/login?error=setup")
  const parsed = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  }).safeParse({ email: formData.get("email"), password: formData.get("password") })
  if (!parsed.success) redirect("/admin/login?error=input")

  const client = await createSessionClient()
  const { error } = await client.auth.signInWithPassword(parsed.data)
  if (error) redirect("/admin/login?error=credentials")
  redirect("/admin")
}

export async function logoutAdmin() {
  if (hasPublicSupabaseConfig()) {
    const client = await createSessionClient()
    await client.auth.signOut()
  }
  redirect("/admin/login")
}

async function authorizedApplication(applicationId: string) {
  const admin = await requireAdmin()
  const service = createServiceClient()
  const { data } = await service
    .from("applications")
    .select("id,status,opportunities(region)")
    .eq("id", applicationId)
    .single()
  const region = (data?.opportunities as { region?: string } | null)?.region
  if (!data || !canAccessRegion(admin, region)) throw new Error("この申込を操作する権限がありません。")
  return { admin, service, application: data }
}

export async function updateApplicationStatus(formData: FormData) {
  const parsed = z.object({
    applicationId: z.string().uuid(),
    status: z.enum(["submitted", "reviewing", "contacted", "confirmed", "waitlisted", "completed", "cancelled", "withdrawn"]),
  }).parse({ applicationId: formData.get("applicationId"), status: formData.get("status") })
  const { admin, service, application } = await authorizedApplication(parsed.applicationId)
  const { error } = await service.from("applications").update({ status: parsed.status }).eq("id", parsed.applicationId)
  if (error) throw error
  await service.from("audit_logs").insert({
    actor_user_id: admin.userId,
    action: "application.status_updated",
    target_type: "application",
    target_id: parsed.applicationId,
    before_data: { status: application.status },
    after_data: { status: parsed.status },
  })
  revalidatePath("/admin")
  revalidatePath(`/admin/applications/${parsed.applicationId}`)
}

export async function addApplicationNote(formData: FormData) {
  const parsed = z.object({
    applicationId: z.string().uuid(),
    body: z.string().trim().min(1).max(2000),
  }).parse({ applicationId: formData.get("applicationId"), body: formData.get("body") })
  const { admin, service } = await authorizedApplication(parsed.applicationId)
  const { error } = await service.from("application_notes").insert({
    application_id: parsed.applicationId,
    author_id: admin.userId,
    body: parsed.body,
  })
  if (error) throw error
  revalidatePath(`/admin/applications/${parsed.applicationId}`)
}

export async function updateAttendance(formData: FormData) {
  const parsed = z.object({
    applicationId: z.string().uuid(),
    result: z.enum(["attended", "no_show"]),
  }).parse({ applicationId: formData.get("applicationId"), result: formData.get("result") })
  const { service } = await authorizedApplication(parsed.applicationId)
  const { error } = await service.from("attendance_records").upsert({
    application_id: parsed.applicationId,
    result: parsed.result,
    checked_in_at: parsed.result === "attended" ? new Date().toISOString() : null,
  })
  if (error) throw error
  revalidatePath(`/admin/applications/${parsed.applicationId}`)
}
