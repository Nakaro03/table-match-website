import "server-only"

import { redirect } from "next/navigation"
import { hasPublicSupabaseConfig, hasServiceSupabaseConfig } from "@/lib/supabase/config"
import { createServiceClient, createSessionClient } from "@/lib/supabase/server"

export type AdminContext = {
  userId: string
  email: string
  displayName: string
  role: "staff" | "regional_manager" | "admin"
  region: "nagano" | "fukuoka" | "other" | "all"
}

export async function getAdminContext(): Promise<AdminContext | null> {
  if (!hasPublicSupabaseConfig() || !hasServiceSupabaseConfig()) return null

  const session = await createSessionClient()
  const { data: { user } } = await session.auth.getUser()
  if (!user) return null

  const service = createServiceClient()
  const { data: admin } = await service
    .from("admin_users")
    .select("display_name,role,region,active")
    .eq("user_id", user.id)
    .eq("active", true)
    .maybeSingle()

  if (!admin) return null
  return {
    userId: user.id,
    email: user.email ?? "",
    displayName: admin.display_name,
    role: admin.role,
    region: admin.region,
  }
}

export async function requireAdmin() {
  const admin = await getAdminContext()
  if (!admin) redirect("/admin/login")
  return admin
}

export function canAccessRegion(admin: AdminContext, region?: string | null) {
  return admin.role === "admin" || admin.region === "all" || !region || region === "other" || admin.region === region
}
