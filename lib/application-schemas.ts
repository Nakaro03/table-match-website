import { z } from "zod"

const requiredText = (label: string, max = 200) =>
  z.string().trim().min(1, `${label}を入力してください`).max(max, `${label}は${max}文字以内で入力してください`)

const phoneSchema = z
  .string()
  .trim()
  .regex(/^[0-9+()\-\s]{8,20}$/, "電話番号を正しく入力してください")

export const studentApplicationSchema = z.object({
  opportunityId: z.string().uuid(),
  opportunitySlug: requiredText("対象企画", 120),
  applicationKind: z.enum(["event", "internship", "company_visit"]),
  name: requiredText("お名前", 100),
  kana: requiredText("フリガナ", 100),
  email: z.string().trim().email("メールアドレスを正しく入力してください").max(254),
  phone: phoneSchema,
  school: requiredText("学校名", 200),
  faculty: z.string().trim().max(200).default(""),
  grade: requiredText("学年", 40),
  region: z.string().trim().max(80).default(""),
  purposes: z.array(z.string().max(100)).min(1, "参加目的を1つ以上選択してください").max(8),
  industries: z.array(z.string().max(100)).max(12).default([]),
  desiredCompanies: z.string().trim().max(500).default(""),
  concern: z.string().trim().max(500).default(""),
  accommodations: z.string().trim().max(500).default(""),
  requests: z.string().trim().max(1000).default(""),
  photoPreference: z.enum(["allowed", "no_face", "not_allowed"]),
  under18: z.enum(["yes", "no"]),
  availableFrom: z.string().trim().max(100).default(""),
  availability: z.string().trim().max(500).default(""),
  workStyle: z.string().trim().max(100).default(""),
  motivation: z.string().trim().max(1000).default(""),
  skills: z.string().trim().max(1000).default(""),
  desiredExperience: z.string().trim().max(1000).default(""),
  portfolioUrl: z.union([z.literal(""), z.string().url("URLを正しく入力してください")]).default(""),
  privacyConsent: z.literal("on", {
    errorMap: () => ({ message: "個人情報の取扱いへの同意が必要です" }),
  }),
  companySharingConsent: z.boolean().default(false),
  marketingConsent: z.boolean().default(false),
  accommodationConsent: z.boolean().default(false),
  website: z.string().max(0, "送信できません").default(""),
}).superRefine((data, context) => {
  if (data.applicationKind === "internship" && !data.availableFrom) {
    context.addIssue({ code: z.ZodIssueCode.custom, path: ["availableFrom"], message: "参加可能時期を入力してください" })
  }
  if ((data.applicationKind === "internship" || data.applicationKind === "company_visit") && !data.availability) {
    context.addIssue({ code: z.ZodIssueCode.custom, path: ["availability"], message: "希望日時・稼働条件を入力してください" })
  }
})

export const companyApplicationSchema = z.object({
  opportunityId: z.string().uuid(),
  opportunitySlug: requiredText("対象企画", 120),
  applicationKind: z.enum(["company_participation", "sponsorship", "general_contact"]),
  organizationName: requiredText("会社・団体名", 200),
  corporateNumber: z.string().trim().max(20).default(""),
  websiteUrl: z.string().trim().url("WebサイトURLを正しく入力してください").max(500),
  industry: requiredText("業種", 120),
  address: requiredText("所在地", 300),
  contactName: requiredText("担当者名", 100),
  department: requiredText("部署・役職", 150),
  email: z.string().trim().email("メールアドレスを正しく入力してください").max(254),
  phone: phoneSchema,
  preferredContact: z.enum(["email", "phone", "either"]),
  purposes: z.array(z.string().max(100)).min(1, "参加目的を1つ以上選択してください").max(8),
  desiredStudents: z.string().trim().max(1000).default(""),
  attendees: z.string().trim().max(500).default(""),
  requests: z.string().trim().max(1500).default(""),
  internshipTitle: z.string().trim().max(200).default(""),
  internshipDescription: z.string().trim().max(2000).default(""),
  internshipPeriod: z.string().trim().max(300).default(""),
  compensation: z.string().trim().max(300).default(""),
  privacyConsent: z.literal("on", {
    errorMap: () => ({ message: "個人情報の取扱いへの同意が必要です" }),
  }),
  participationTermsConsent: z.literal("on", {
    errorMap: () => ({ message: "参加規約への同意が必要です" }),
  }),
  website: z.string().max(0, "送信できません").default(""),
})

export type ApplicationActionState = {
  status: "idle" | "error"
  message?: string
  errors?: Record<string, string[] | undefined>
}

export const initialApplicationState: ApplicationActionState = { status: "idle" }
