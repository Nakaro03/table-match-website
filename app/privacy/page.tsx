import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export const metadata: Metadata = { title: "個人情報保護方針" }
const sections = [
  ["1. 取得する情報", "氏名、フリガナ、メールアドレス、電話番号、学校・所属、参加希望、要望、食物アレルギーや必要な配慮、企業担当者情報など、申込フォームに入力された情報を取得します。"],
  ["2. 利用目的", "申込受付、本人確認、日程調整、運営連絡、安全なイベント実施、インターン・会社見学の調整、問い合わせ対応、同意を得た案内配信、サービス改善のために利用します。"],
  ["3. 参加企業への共有", "氏名・学校・関心事項などは、申込時に本人が同意した場合に限り、対象となる参加企業へ共有します。電話番号とメールアドレス、配慮事項は、別途必要性を確認せず企業へ共有しません。"],
  ["4. 安全管理", "アクセス権限を付与された運営メンバーだけが管理画面から情報を閲覧できるようにし、操作履歴、認証、通信の暗号化など必要な安全管理措置を講じます。"],
  ["5. 保存期間・削除", "申込情報は運営・会計・トラブル対応に必要な期間だけ保存し、利用目的を終えた情報は削除または匿名化します。削除・訂正・利用停止のご希望は下記窓口へご連絡ください。"],
  ["6. お問い合わせ", "Table Match 個人情報窓口: tablematch.info@gmail.com"],
]
export default function PrivacyPage() { return <main className="min-h-screen bg-paper pt-20"><Header /><article className="mx-auto max-w-3xl px-5 py-16 sm:py-24"><p className="font-mono text-xs font-black tracking-widest text-primary">個人情報保護</p><h1 className="mt-3 text-4xl font-black">個人情報保護方針</h1><p className="mt-4 text-sm text-muted-foreground">制定・最終更新: 2026年8月14日</p><p className="mt-8 leading-8">Table Matchは、参加者と企業からお預かりする情報を、次の方針に基づいて取り扱います。</p><div className="mt-10 space-y-8">{sections.map(([title, body]) => <section key={title} className="border-t-2 border-foreground pt-5"><h2 className="text-xl font-black">{title}</h2><p className="mt-3 leading-8 text-muted-foreground">{body}</p></section>)}</div></article><Footer /></main> }
