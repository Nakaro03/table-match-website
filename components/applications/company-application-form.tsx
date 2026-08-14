"use client"

import { useActionState } from "react"
import Link from "next/link"
import { ArrowRight, LoaderCircle, ShieldCheck } from "lucide-react"
import { submitCompanyApplication } from "@/app/actions/applications"
import { initialApplicationState } from "@/lib/application-schemas"
import type { Opportunity } from "@/lib/opportunities"
import { CheckboxCard, Field, SectionHeading, inputClass, textareaClass } from "./form-parts"

const companyPurposes = ["新卒採用", "インターン採用", "会社・事業の認知", "若者の意見収集", "学生との事業共創", "地域貢献", "協賛・連携", "その他"]

export function CompanyApplicationForm({ opportunity, configured }: { opportunity: Opportunity; configured: boolean }) {
  const [state, formAction, pending] = useActionState(submitCompanyApplication, initialApplicationState)
  const errors = state.errors ?? {}

  return (
    <form action={formAction} className="space-y-12">
      <input type="hidden" name="opportunityId" value={opportunity.id} />
      <input type="hidden" name="opportunitySlug" value={opportunity.slug} />
      <div className="absolute -left-[9999px]" aria-hidden="true"><label htmlFor="website-field">Web site</label><input id="website-field" name="website" tabIndex={-1} autoComplete="off" /></div>

      {!configured && <div className="border-2 border-dashed border-action-yellow bg-action-yellow/15 p-5 text-sm"><strong>申込データベースは現在セットアップ待ちです。</strong> 接続情報が設定されるまで送信は保存されません。</div>}

      <section className="space-y-6">
        <SectionHeading number="01" title="参加・相談種別" />
        <Field label="申込種別" name="applicationKind" required error={errors.applicationKind}>
          <select id="applicationKind" name="applicationKind" className={inputClass} required defaultValue="company_participation">
            <option value="company_participation">イベント出展・インターン掲載</option>
            <option value="sponsorship">協賛・連携</option>
            <option value="general_contact">その他の相談</option>
          </select>
        </Field>
      </section>

      <section className="space-y-6">
        <SectionHeading number="02" title="会社・担当者情報" />
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="会社・団体名" name="organizationName" required error={errors.organizationName}><input id="organizationName" name="organizationName" className={inputClass} required /></Field>
          <Field label="法人番号" name="corporateNumber" error={errors.corporateNumber}><input id="corporateNumber" name="corporateNumber" className={inputClass} /></Field>
          <Field label="Webサイト" name="websiteUrl" required error={errors.websiteUrl}><input id="websiteUrl" name="websiteUrl" type="url" className={inputClass} placeholder="https://" required /></Field>
          <Field label="業種" name="industry" required error={errors.industry}><input id="industry" name="industry" className={inputClass} required /></Field>
        </div>
        <Field label="所在地" name="address" required error={errors.address}><input id="address" name="address" autoComplete="street-address" className={inputClass} required /></Field>
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="担当者氏名" name="contactName" required error={errors.contactName}><input id="contactName" name="contactName" autoComplete="name" className={inputClass} required /></Field>
          <Field label="部署・役職" name="department" required error={errors.department}><input id="department" name="department" className={inputClass} required /></Field>
          <Field label="メールアドレス" name="email" required error={errors.email}><input id="email" name="email" type="email" autoComplete="email" className={inputClass} required /></Field>
          <Field label="電話番号" name="phone" required error={errors.phone}><input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} required /></Field>
          <Field label="希望する連絡方法" name="preferredContact" required error={errors.preferredContact}>
            <select id="preferredContact" name="preferredContact" className={inputClass} defaultValue="email" required><option value="email">メール</option><option value="phone">電話</option><option value="either">どちらでも</option></select>
          </Field>
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading number="03" title="目的と希望" description="目的に合わせて、出展・募集掲載・会社見学・協賛をご提案します。" />
        <Field label="参加目的" name="purposes" required error={errors.purposes}>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">{companyPurposes.map((option) => <CheckboxCard key={option} name="purposes" value={option}>{option}</CheckboxCard>)}</div>
        </Field>
        <Field label="希望する学生像" name="desiredStudents" error={errors.desiredStudents}><textarea id="desiredStudents" name="desiredStudents" className={textareaClass} /></Field>
        <Field label="当日参加予定者" name="attendees" hint="氏名・役職・人数が決まっている範囲で入力してください。" error={errors.attendees}><textarea id="attendees" name="attendees" className={textareaClass} /></Field>
        <Field label="要望・相談内容" name="requests" error={errors.requests}><textarea id="requests" name="requests" className={textareaClass} /></Field>
      </section>

      <section className="space-y-6">
        <SectionHeading number="04" title="インターン募集について" description="募集予定がある場合だけ入力してください。" />
        <Field label="募集タイトル" name="internshipTitle" error={errors.internshipTitle}><input id="internshipTitle" name="internshipTitle" className={inputClass} /></Field>
        <Field label="業務内容・学生が得られる経験" name="internshipDescription" error={errors.internshipDescription}><textarea id="internshipDescription" name="internshipDescription" className={textareaClass} /></Field>
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="実施期間・頻度" name="internshipPeriod" error={errors.internshipPeriod}><input id="internshipPeriod" name="internshipPeriod" className={inputClass} /></Field>
          <Field label="報酬・交通費" name="compensation" error={errors.compensation}><input id="compensation" name="compensation" className={inputClass} /></Field>
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeading number="05" title="規約・個人情報" />
        <CheckboxCard name="privacyConsent" required><Link href="/privacy" target="_blank" className="font-bold text-primary underline">個人情報保護方針</Link>と、申込処理・連絡のための利用目的に同意します。</CheckboxCard>
        <CheckboxCard name="participationTermsConsent" required>参加企業として、学生情報を提示された目的以外に利用せず、本人同意のない第三者提供を行わないことに同意します。</CheckboxCard>
        {(errors.privacyConsent?.[0] || errors.participationTermsConsent?.[0]) && <p className="text-sm font-bold text-destructive">{errors.privacyConsent?.[0] ?? errors.participationTermsConsent?.[0]}</p>}
      </section>

      {state.status === "error" && <div role="alert" aria-live="polite" className="border-2 border-destructive bg-destructive/10 p-4 text-sm font-bold text-destructive">{state.message}</div>}

      <div className="border-2 border-foreground bg-primary p-5 text-white sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center gap-3 text-sm"><ShieldCheck className="h-5 w-5" /><span>担当者情報は運営連絡と企画調整に使用します。</span></div>
        <button disabled={pending} className="mt-4 inline-flex w-full items-center justify-center gap-2 bg-action-orange px-8 py-4 font-bold text-white transition hover:bg-action-orange/90 disabled:opacity-60 sm:mt-0 sm:w-auto">
          {pending ? <><LoaderCircle className="h-5 w-5 animate-spin" />送信中</> : <>この内容で相談する<ArrowRight className="h-5 w-5" /></>}
        </button>
      </div>
    </form>
  )
}
