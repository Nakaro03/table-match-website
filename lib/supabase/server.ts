import "server-only"

import { createServerClient } from "@supabase/ssr"
import { createClient } from "@supabase/supabase-js"
import { cookies } from "next/headers"
import { publicSupabaseConfig, serviceSupabaseConfig } from "./config"

export async function createSessionClient() {
  const cookieStore = await cookies()
  const { url, anonKey } = publicSupabaseConfig()

  return createServerClient(url, anonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
        } catch {
          // Server Components cannot write cookies. Actions and Route Handlers can.
        }
      },
    },
  })
}

export function createServiceClient() {
  const { url, serviceRoleKey } = serviceSupabaseConfig()

  return createClient(url, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })
}
