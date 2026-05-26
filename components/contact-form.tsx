"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

type FormData = {
  name: string
  email: string
  organization: string
  type: "student" | "company" | "other"
  message: string
}

type FormStatus = "idle" | "submitting" | "success" | "error"

export function ContactForm() {
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

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
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
    } catch (error) {
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
    <section id="contact" className="py-24 bg-primary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            お問い合わせ
          </h2>
          <p className="text-lg text-primary-foreground/80">
            イベント参加や出展に関するお問い合わせはこちらから
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-primary-foreground rounded-2xl p-8 shadow-lg"
        >
          {status === "success" ? (
            <div className="text-center py-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                送信完了しました
              </h3>
              <p className="text-muted-foreground">
                お問い合わせありがとうございます。担当者より折り返しご連絡いたします。
              </p>
              <Button
                variant="outline"
                className="mt-6"
                onClick={() => setStatus("idle")}
              >
                新しいお問い合わせ
              </Button>
            </div>
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
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
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
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
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
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
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
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
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
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent transition-colors resize-none"
                  placeholder="お問い合わせ内容をご記入ください"
                />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 text-destructive text-sm">
                  <AlertCircle className="h-4 w-4" />
                  <span>送信に失敗しました。もう一度お試しください。</span>
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={status === "submitting"}
                className="w-full group"
              >
                {status === "submitting" ? (
                  "送信中..."
                ) : (
                  <>
                    送信する
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                送信いただいた内容は tablematch.info@gmail.com 宛に届きます
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
