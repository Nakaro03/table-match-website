"use client"

import { useActionState } from "react"
import Link from "next/link"
import { ArrowRight, LoaderCircle, ShieldCheck } from "lucide-react"
import { submitStudentApplication } from "@/app/actions/applications"
import { initialApplicationState } from "@/lib/application-schemas"
import type { Opportunity } from "@/lib/opportunities"
import { CheckboxCard, Field, SectionHeading, inputClass, textareaClass } from "./form-parts"

const purposeOptions = [
  "自分の興味・やりたいことを見つけたい",
  "地域企業について知りたい",
  "経営者と話したい",
  "インターン先を探したい",
  "就職先の選択肢を広げたい",
  "起業・事業づくりに興味がある",
  "他の学生とつながりたい",
  "その他",
]

const industryOptions = ["IT・DX", "製造", "観光・ホテル", "金融", "食品", "地域づくり", "教育", "まだ決まっていない"]

export function StudentApplicationForm({ opportunity, configured }: { opportunity: Opportunity; configured: boolean }) {
  const [state, formAction, pending] = useActionState(submitStudentApplication, initialApplicationState)
  const errors = state.errors ?? {}
  const isInternship = opportunity.type === "internship"
  const isVisit = opportunity.type === "company_visit"

  return (
    <form action={formAction} className="space-y-12">
      <input type="hidden" name="opportunityId" value={opportunity.id} />
      <input type="hidden" name="opportunitySlug" value={opportunity.slug} />
      <input type="hidden" name="applicationKind" value={opportunity.type} />
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Web site</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {!configured && (
        <div className="border-2 border-dashed border-action-yellow bg-action-yellow/15 p-5 text-sm leading-7">
          <strong>申込データベースは現在セットアップ待ちです。</strong>
          <br />
          画面と入力確認は利用できますが、接続情報が設定されるまで送信は保存されません。
        </div>
      )}

      <section className="space-y-6">
        <SectionHeading number="01" title="基本情報" description="受付連絡と当日の本人確認に使用します。" />
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="お名前" name="name" required error={errors.name}>
            <input id="name" name="name" autoComplete="name" className={inputClass} placeholder="山田 太郎" required />
          </Field>
          <Field label="フリガナ" name="kana" required error={errors.kana}>
            <input id="kana" name="kana" className={inputClass} placeholder="ヤマダ タロウ" required />
          </Field>
          <Field label="メールアドレス" name="email" required error={errors.email}>
            <input id="email" name="email" type="email" autoComplete="email" className={inputClass} placeholder="student@example.com" required />
          </Field>
          <Field label="電話番号" name="phone" required hint="当日の緊急連絡にのみ使用します。" error={errors.phone}>
            <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} placeholder="090-1234-5678" required />
          </Field>
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading number="02" title="学校・現在のこと" />
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="学校名" name="school" required error={errors.school}>
            <input id="school" name="school" className={inputClass} placeholder="〇〇大学" required />
          </Field>
          <Field label="学部・学科" name="faculty" error={errors.faculty}>
            <input id="faculty" name="faculty" className={inputClass} placeholder="〇〇学部 〇〇学科" />
          </Field>
          <Field label="学年" name="grade" required error={errors.grade}>
            <select id="grade" name="grade" className={inputClass} required defaultValue="">
              <option value="" disabled>選択してください</option>
              <option>大学1年</option><option>大学2年</option><option>大学3年</option><option>大学4年</option>
              <option>大学院</option><option>専門学校</option><option>高校生</option><option>その他</option>
            </select>
          </Field>
          <Field label="居住・活動地域" name="region" error={errors.region}>
            <input id="region" name="region" className={inputClass} placeholder="福岡県福岡市" />
          </Field>
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading number="03" title="参加目的・興味" description="席や対話内容の設計に使います。選考評価には使いません。" />
        <Field label="参加目的" name="purposes" required error={errors.purposes}>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {purposeOptions.map((option) => <CheckboxCard key={option} name="purposes" value={option}>{option}</CheckboxCard>)}
          </div>
        </Field>
        <Field label="興味のある業界" name="industries" error={errors.industries}>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {industryOptions.map((option) => <CheckboxCard key={option} name="industries" value={option}>{option}</CheckboxCard>)}
          </div>
        </Field>
        <Field label="話してみたい企業・テーマ" name="desiredCompanies" error={errors.desiredCompanies}>
          <textarea id="desiredCompanies" name="desiredCompanies" className={textareaClass} placeholder="企業名が決まっていなくても、興味のある仕事やテーマを書いてください。" />
        </Field>
      </section>

      {(isInternship || isVisit) && (
        <section className="space-y-6">
          <SectionHeading number="04" title={isInternship ? "参加条件・経験" : "見学希望"} />
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label={isVisit ? "希望日時（第1〜第3希望）" : "参加可能な開始時期"} name="availableFrom" required error={errors.availableFrom}>
              <input id="availableFrom" name="availableFrom" className={inputClass} placeholder={isVisit ? "11/10午後、11/12終日…" : "2026年11月から"} required />
            </Field>
            <Field label={isVisit ? "移動・同行について" : "参加可能頻度"} name="availability" required error={errors.availability}>
              <input id="availability" name="availability" className={inputClass} placeholder={isVisit ? "現地集合可能・一人参加" : "週2日・平日夕方"} required />
            </Field>
          </div>
          {isInternship && (
            <>
              <Field label="希望形式" name="workStyle" required error={errors.workStyle}>
                <select id="workStyle" name="workStyle" className={inputClass} required defaultValue="">
                  <option value="" disabled>選択してください</option><option value="onsite">現地</option><option value="online">オンライン</option><option value="either">どちらでも</option>
                </select>
              </Field>
              <Field label="関心を持った理由" name="motivation" required error={errors.motivation}>
                <textarea id="motivation" name="motivation" className={textareaClass} required />
              </Field>
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="経験・スキル" name="skills" error={errors.skills}><textarea id="skills" name="skills" className={textareaClass} /></Field>
                <Field label="希望する経験" name="desiredExperience" required error={errors.desiredExperience}><textarea id="desiredExperience" name="desiredExperience" className={textareaClass} required /></Field>
              </div>
              <Field label="ポートフォリオURL" name="portfolioUrl" error={errors.portfolioUrl}>
                <input id="portfolioUrl" name="portfolioUrl" type="url" className={inputClass} placeholder="https://" />
              </Field>
            </>
          )}
        </section>
      )}

      <section className="space-y-6">
        <SectionHeading number={isInternship || isVisit ? "05" : "04"} title="参加に必要な確認" />
        <Field label="一人参加や当日について不安なこと" name="concern" error={errors.concern}>
          <textarea id="concern" name="concern" className={textareaClass} placeholder="初参加なので少し不安、会場までの行き方を知りたい、など" />
        </Field>
        <Field label="食物アレルギー・配慮事項" name="accommodations" hint="食事提供や当日の安全対応に必要な範囲だけ入力してください。" error={errors.accommodations}>
          <textarea id="accommodations" name="accommodations" className={textareaClass} />
        </Field>
        <Field label="その他の要望・質問" name="requests" error={errors.requests}>
          <textarea id="requests" name="requests" className={textareaClass} />
        </Field>
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="イベント写真の掲載" name="photoPreference" required error={errors.photoPreference}>
            <select id="photoPreference" name="photoPreference" className={inputClass} required defaultValue="">
              <option value="" disabled>選択してください</option>
              <option value="allowed">顔が分かる写真も掲載可</option>
              <option value="no_face">顔が判別できない写真のみ可</option>
              <option value="not_allowed">掲載不可</option>
            </select>
          </Field>
          <Field label="18歳未満ですか" name="under18" required error={errors.under18}>
            <select id="under18" name="under18" className={inputClass} required defaultValue="">
              <option value="" disabled>選択してください</option><option value="no">いいえ</option><option value="yes">はい</option>
            </select>
          </Field>
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeading number={isInternship || isVisit ? "06" : "05"} title="個人情報と同意" />
        <CheckboxCard name="privacyConsent" required>
          <Link href="/privacy" target="_blank" className="font-bold text-primary underline">個人情報保護方針</Link>と、申込処理・運営連絡のための利用目的に同意します。
        </CheckboxCard>
        <CheckboxCard name="companySharingConsent">
          参加後の接続支援のため、氏名・学校・関心事項を対象企業へ共有することに同意します。電話番号・メールは別途確認なく共有しません。
        </CheckboxCard>
        <CheckboxCard name="marketingConsent">今後のTable Matchイベント・募集案内を受け取ります。</CheckboxCard>
        <CheckboxCard name="accommodationConsent">入力したアレルギー・配慮事項を当日の安全対応に利用することに同意します。</CheckboxCard>
        {(errors.privacyConsent?.[0] || errors.accommodationConsent?.[0]) && (
          <p className="text-sm font-bold text-destructive">{errors.privacyConsent?.[0] ?? errors.accommodationConsent?.[0]}</p>
        )}
      </section>

      {state.status === "error" && (
        <div role="alert" aria-live="polite" className="border-2 border-destructive bg-destructive/10 p-4 text-sm font-bold text-destructive">
          {state.message}
        </div>
      )}

      <div className="border-2 border-foreground bg-primary p-5 text-white sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center gap-3 text-sm"><ShieldCheck className="h-5 w-5" /><span>入力情報は運営権限を持つメンバーだけが確認します。</span></div>
        <button disabled={pending} className="mt-4 inline-flex w-full items-center justify-center gap-2 bg-action-orange px-8 py-4 font-bold text-white transition hover:bg-action-orange/90 disabled:opacity-60 sm:mt-0 sm:w-auto">
          {pending ? <><LoaderCircle className="h-5 w-5 animate-spin" />送信中</> : <>内容を確認して申し込む<ArrowRight className="h-5 w-5" /></>}
        </button>
      </div>
    </form>
  )
}
