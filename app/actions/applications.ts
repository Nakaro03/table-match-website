"use server"

import { randomBytes } from "node:crypto"
import { redirect } from "next/navigation"
import { companyApplicationSchema, studentApplicationSchema, type ApplicationActionState } from "@/lib/application-schemas"
import { createServiceClient } from "@/lib/supabase/server"
import { hasServiceSupabaseConfig } from "@/lib/supabase/config"
import { notifyNewApplication } from "@/lib/application-notifications"
import { getOpportunity } from "@/lib/opportunities"

function values(formData: FormData, key: string) {
  return formData.getAll(key).map(String).filter(Boolean)
}

function checkbox(formData: FormData, key: string) {
  return formData.get(key) === "on"
}

function applicationCode(prefix: "ST" | "CO") {
  const date = new Date().toISOString().slice(0, 10).replaceAll("-", "")
  return `TM-${prefix}-${date}-${randomBytes(3).toString("hex").toUpperCase()}`
}

function errorState(message: string, errors?: Record<string, string[] | undefined>): ApplicationActionState {
  return { status: "error", message, errors }
}

export async function submitStudentApplication(
  _previousState: ApplicationActionState,
  formData: FormData,
): Promise<ApplicationActionState> {
  const parsed = studentApplicationSchema.safeParse({
    opportunityId: formData.get("opportunityId"),
    opportunitySlug: formData.get("opportunitySlug"),
    applicationKind: formData.get("applicationKind"),
    name: formData.get("name"),
    kana: formData.get("kana"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    school: formData.get("school"),
    faculty: formData.get("faculty") || "",
    grade: formData.get("grade"),
    region: formData.get("region") || "",
    purposes: values(formData, "purposes"),
    industries: values(formData, "industries"),
    desiredCompanies: formData.get("desiredCompanies") || "",
    concern: formData.get("concern") || "",
    accommodations: formData.get("accommodations") || "",
    requests: formData.get("requests") || "",
    photoPreference: formData.get("photoPreference"),
    under18: formData.get("under18"),
    availableFrom: formData.get("availableFrom") || "",
    availability: formData.get("availability") || "",
    workStyle: formData.get("workStyle") || "",
    motivation: formData.get("motivation") || "",
    skills: formData.get("skills") || "",
    desiredExperience: formData.get("desiredExperience") || "",
    portfolioUrl: formData.get("portfolioUrl") || "",
    privacyConsent: formData.get("privacyConsent"),
    companySharingConsent: checkbox(formData, "companySharingConsent"),
    marketingConsent: checkbox(formData, "marketingConsent"),
    accommodationConsent: checkbox(formData, "accommodationConsent"),
    website: formData.get("website") || "",
  })

  if (!parsed.success) {
    return errorState("入力内容をご確認ください。", parsed.error.flatten().fieldErrors)
  }

  const opportunity = getOpportunity(parsed.data.opportunitySlug)
  if (!opportunity || opportunity.id !== parsed.data.opportunityId || opportunity.type !== parsed.data.applicationKind) {
    return errorState("対象企画を確認できませんでした。企画ページからもう一度お申し込みください。")
  }

  if (parsed.data.accommodations && !parsed.data.accommodationConsent) {
    return errorState("配慮事項を入力した場合は、その情報の取扱いに同意してください。", {
      accommodationConsent: ["配慮事項の取扱いへの同意が必要です"],
    })
  }

  if (!hasServiceSupabaseConfig()) {
    return errorState("現在、申込データベースの準備中です。お急ぎの場合はお問い合わせフォームをご利用ください。")
  }

  const supabase = createServiceClient()
  const code = applicationCode("ST")
  let personId: string | null = null

  try {
    const { data: existing } = await supabase
      .from("applications")
      .select("id")
      .eq("opportunity_id", parsed.data.opportunityId)
      .eq("applicant_email_normalized", parsed.data.email.toLowerCase())
      .not("status", "in", "(cancelled,withdrawn)")
      .maybeSingle()

    if (existing) {
      return errorState("このメールアドレスでは、すでに同じ企画へ申し込み済みです。")
    }

    const { data: person, error: personError } = await supabase
      .from("people")
      .insert({
        name: parsed.data.name,
        kana: parsed.data.kana,
        email: parsed.data.email,
        phone: parsed.data.phone,
      })
      .select("id")
      .single()

    if (personError) throw personError
    personId = person.id

    const { error: profileError } = await supabase.from("student_profiles").insert({
      person_id: person.id,
      school: parsed.data.school,
      faculty: parsed.data.faculty || null,
      grade: parsed.data.grade,
      region: parsed.data.region || null,
      under_18: parsed.data.under18 === "yes",
    })
    if (profileError) throw profileError

    const { data: application, error: applicationError } = await supabase
      .from("applications")
      .insert({
        application_code: code,
        opportunity_id: parsed.data.opportunityId,
        person_id: person.id,
        applicant_type: "student",
        application_kind: parsed.data.applicationKind,
        status: "submitted",
        applicant_email_normalized: parsed.data.email.toLowerCase(),
        purposes: parsed.data.purposes,
        interest_industries: parsed.data.industries,
        desired_companies: parsed.data.desiredCompanies || null,
        concern: parsed.data.concern || null,
        accommodations: parsed.data.accommodations || null,
        requests: parsed.data.requests || null,
        photo_preference: parsed.data.photoPreference,
        metadata: {
          availableFrom: parsed.data.availableFrom,
          availability: parsed.data.availability,
          workStyle: parsed.data.workStyle,
          motivation: parsed.data.motivation,
          skills: parsed.data.skills,
          desiredExperience: parsed.data.desiredExperience,
          portfolioUrl: parsed.data.portfolioUrl,
        },
      })
      .select("id")
      .single()
    if (applicationError) throw applicationError

    const consentRows = [
      { type: "privacy", granted: true },
      { type: "company_sharing", granted: parsed.data.companySharingConsent },
      { type: "marketing", granted: parsed.data.marketingConsent },
      { type: "accommodation", granted: parsed.data.accommodationConsent },
      { type: "photo", granted: parsed.data.photoPreference === "allowed" },
    ].map((consent) => ({
      application_id: application.id,
      consent_type: consent.type,
      granted: consent.granted,
      policy_version: "2026-08-14",
      source: "web",
    }))

    const { error: consentError } = await supabase.from("consent_records").insert(consentRows)
    if (consentError) throw consentError
    await notifyNewApplication({
      applicantEmail: parsed.data.email,
      applicantName: parsed.data.name,
      applicationCode: code,
      opportunityTitle: opportunity.title,
      applicationKind: parsed.data.applicationKind,
    })
  } catch (error) {
    if (personId) await supabase.from("people").delete().eq("id", personId)
    console.error("student application failed", error)
    return errorState("送信に失敗しました。時間をおいてもう一度お試しください。")
  }

  redirect(`/apply/complete?code=${encodeURIComponent(code)}&type=student`)
}

export async function submitCompanyApplication(
  _previousState: ApplicationActionState,
  formData: FormData,
): Promise<ApplicationActionState> {
  const parsed = companyApplicationSchema.safeParse({
    opportunityId: formData.get("opportunityId"),
    opportunitySlug: formData.get("opportunitySlug"),
    applicationKind: formData.get("applicationKind"),
    organizationName: formData.get("organizationName"),
    corporateNumber: formData.get("corporateNumber") || "",
    websiteUrl: formData.get("websiteUrl"),
    industry: formData.get("industry"),
    address: formData.get("address"),
    contactName: formData.get("contactName"),
    department: formData.get("department"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    preferredContact: formData.get("preferredContact"),
    purposes: values(formData, "purposes"),
    desiredStudents: formData.get("desiredStudents") || "",
    attendees: formData.get("attendees") || "",
    requests: formData.get("requests") || "",
    internshipTitle: formData.get("internshipTitle") || "",
    internshipDescription: formData.get("internshipDescription") || "",
    internshipPeriod: formData.get("internshipPeriod") || "",
    compensation: formData.get("compensation") || "",
    privacyConsent: formData.get("privacyConsent"),
    participationTermsConsent: formData.get("participationTermsConsent"),
    website: formData.get("website") || "",
  })

  if (!parsed.success) {
    return errorState("入力内容をご確認ください。", parsed.error.flatten().fieldErrors)
  }

  const opportunity = getOpportunity(parsed.data.opportunitySlug)
  if (!opportunity || opportunity.id !== parsed.data.opportunityId || opportunity.type !== "company_participation") {
    return errorState("対象企画を確認できませんでした。企業向け企画ページからもう一度お申し込みください。")
  }

  if (!hasServiceSupabaseConfig()) {
    return errorState("現在、申込データベースの準備中です。お急ぎの場合はお問い合わせフォームをご利用ください。")
  }

  const supabase = createServiceClient()
  const code = applicationCode("CO")
  let organizationId: string | null = null

  try {
    const { data: existing } = await supabase
      .from("applications")
      .select("id")
      .eq("opportunity_id", parsed.data.opportunityId)
      .eq("applicant_email_normalized", parsed.data.email.toLowerCase())
      .not("status", "in", "(cancelled,withdrawn)")
      .maybeSingle()

    if (existing) {
      return errorState("このメールアドレスでは、すでに同じ企画へ申し込み済みです。")
    }

    const { data: organization, error: organizationError } = await supabase
      .from("organizations")
      .insert({
        name: parsed.data.organizationName,
        corporate_number: parsed.data.corporateNumber || null,
        website_url: parsed.data.websiteUrl,
        industry: parsed.data.industry,
        address: parsed.data.address,
      })
      .select("id")
      .single()
    if (organizationError) throw organizationError
    organizationId = organization.id

    const { data: contact, error: contactError } = await supabase
      .from("company_contacts")
      .insert({
        organization_id: organization.id,
        name: parsed.data.contactName,
        department_role: parsed.data.department,
        email: parsed.data.email,
        phone: parsed.data.phone,
        preferred_contact: parsed.data.preferredContact,
      })
      .select("id")
      .single()
    if (contactError) throw contactError

    const { data: application, error: applicationError } = await supabase
      .from("applications")
      .insert({
        application_code: code,
        opportunity_id: parsed.data.opportunityId,
        company_contact_id: contact.id,
        applicant_type: "company",
        application_kind: parsed.data.applicationKind,
        status: "submitted",
        applicant_email_normalized: parsed.data.email.toLowerCase(),
        purposes: parsed.data.purposes,
        desired_students: parsed.data.desiredStudents || null,
        attendees: parsed.data.attendees || null,
        requests: parsed.data.requests || null,
        metadata: {
          internshipTitle: parsed.data.internshipTitle,
          internshipDescription: parsed.data.internshipDescription,
          internshipPeriod: parsed.data.internshipPeriod,
          compensation: parsed.data.compensation,
        },
      })
      .select("id")
      .single()
    if (applicationError) throw applicationError

    const { error: consentError } = await supabase.from("consent_records").insert([
      {
        application_id: application.id,
        consent_type: "privacy",
        granted: true,
        policy_version: "2026-08-14",
        source: "web",
      },
      {
        application_id: application.id,
        consent_type: "participation_terms",
        granted: true,
        policy_version: "2026-08-14",
        source: "web",
      },
    ])
    if (consentError) throw consentError
    await notifyNewApplication({
      applicantEmail: parsed.data.email,
      applicantName: `${parsed.data.organizationName} ${parsed.data.contactName}様`,
      applicationCode: code,
      opportunityTitle: opportunity.title,
      applicationKind: parsed.data.applicationKind,
    })
  } catch (error) {
    if (organizationId) await supabase.from("organizations").delete().eq("id", organizationId)
    console.error("company application failed", error)
    return errorState("送信に失敗しました。時間をおいてもう一度お試しください。")
  }

  redirect(`/apply/complete?code=${encodeURIComponent(code)}&type=company`)
}
