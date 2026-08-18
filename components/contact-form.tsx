"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Send, CheckCircle, AlertCircle, Mail, ArrowRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { upcomingEvents } from "@/components/events"

type FormData = {
  name: string
  email: string
  organization: string
  type: "student" | "company" | "other"
  message: string
}

type FormStatus = "idle" | "submitting" | "success" | "error"

// Web3Forms access key. This is designed to be public (it ships in the client
// bundle); abuse is prevented by the allowed-domains setting on web3forms.com.
const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
  "be131cc6-c673-4f3c-a391-284a649941d2"

export function ContactForm() {
  const pathname = usePathname()
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    organization: "",
    type: "student",
    message: "",
  })
  const [status, setStatus] = useState<FormStatus>("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")

    const typeLabels: Record<FormData["type"], string> = {
      student: "学生（イベント参加について）",
      company: "企業様（出展について）",
      other: "その他",
    }

    const emailContent = `Table Match ウェブサイトからのお問い合わせ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

【お名前】
${formData.name}

【メールアドレス】
${formData.email}

【所属】
${formData.organization || "未入力"}

【お問い合わせ種別】
${typeLabels[formData.type]}

【お問い合わせ内容】
${formData.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`

    try {
      // Submit directly from the browser to Web3Forms (avoids server-side
      // Cloudflare bot challenges; the access key is safe to expose client-side).
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `【Table Match】ウェブサイトからのお問い合わせ - ${formData.name}様`,
          from_name: "Table Match ウェブサイト",
          email: formData.email,
          name: formData.name,
          message: emailContent,
        }),
      })

      if (response.ok) {
        setStatus("success")
        setFormData({
          name: "",
          email: "",
          organization: "",
          type: "student",
          message: "",
        })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            お問い合わせ
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            イベント参加や出展に関するお問い合わせはこちらから
          </p>
        </motion.div>

        {/* 最終CTA：学生は申込へ、企業は企業様ページへ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          {upcomingEvents[0].applicationUrl ? (
            <Link
              href={upcomingEvents[0].applicationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-colors hover:bg-primary/90"
            >
              次回イベントに申し込む
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          ) : (
            <p className="text-sm font-medium text-muted-foreground">次回イベントの詳細・申込情報は順次公開します。</p>
          )}
          {pathname !== "/for-companies" && (
            <Link
              href="/for-companies"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              企業様はこちら
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-strong rounded-2xl p-6 sm:p-10"
        >
          {status === "success" ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                送信完了しました
              </h3>
              <p className="text-muted-foreground mb-8">
                お問い合わせありがとうございます。<br />
                担当者より折り返しご連絡いたします。
              </p>
              <Button
                variant="outline"
                onClick={() => setStatus("idle")}
                className="border-border"
              >
                新しいお問い合わせ
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    お名前 <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/50 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="山田 太郎"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    メールアドレス <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/50 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-foreground mb-2">
                    所属（大学名・企業名）
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/50 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="〇〇大学 / 株式会社〇〇"
                  />
                </div>
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-foreground mb-2">
                    お問い合わせ種別 <span className="text-destructive">*</span>
                  </label>
                  <select
                    id="type"
                    name="type"
                    required
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/50 text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  >
                    <option value="student">学生（イベント参加について）</option>
                    <option value="company">企業様（出展について）</option>
                    <option value="other">その他</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  お問い合わせ内容 <span className="text-destructive">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/50 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="お問い合わせ内容をご記入ください"
                />
              </div>

              {status === "error" && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-destructive text-sm p-4 rounded-xl bg-destructive/10 border border-destructive/20"
                >
                  <AlertCircle className="h-4 w-4 flex-shrink-0" />
                  <span>送信に失敗しました。もう一度お試しください。</span>
                </motion.div>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={status === "submitting"}
                className="w-full group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-14 text-base"
              >
                {status === "submitting" ? (
                  <span className="flex items-center gap-2">
                    <div className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    送信中...
                  </span>
                ) : (
                  <>
                    送信する
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>

              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Mail className="h-3 w-3" />
                <span>送信いただいた内容は tablematch.info@gmail.com 宛に届きます</span>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
