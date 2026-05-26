"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Linkedin, Mail, Instagram } from "lucide-react"

// Team data - editable via GitHub
export const teamMembers = [
  {
    name: "中村 楼偉",
    role: "代表",
    university: "筑波大学大学院 情報学学位プログラム M1",
    description: "Table Matchの創設者。学生と企業の新しい出会いの形を追求。",
    image: "/team/nakamura.jpg",
  },
  {
    name: "後畠 隼輔",
    role: "長野支部リーダー",
    university: "公立諏訪東京理科大学 情報応用工学科 3年",
    description: "長野エリアの運営を統括。学生集客とイベント企画を担当。",
    image: "/team/shibasaki.jpg",
  },
  {
    name: "運営メンバー",
    role: "福岡支部",
    university: "九州大学・福岡大学など",
    description: "SNS運営、営業、司会進行など各分野で活躍するメンバーたち。",
    image: "/team/fukuoka.jpg",
  },
]

// Placeholder avatar component
function Avatar({ name }: { name: string }) {
  const initials = name.split(" ").map(n => n[0]).join("").slice(0, 2)
  return (
    <div className="w-32 h-32 rounded-full bg-accent/20 flex items-center justify-center">
      <span className="text-3xl font-bold text-accent">{initials}</span>
    </div>
  )
}

export function Team() {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            運営チーム
          </h2>
          <p className="text-lg text-muted-foreground">
            学生が主体となって運営しています
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-xl p-8 border border-border text-center"
            >
              <div className="flex justify-center mb-6">
                <Avatar name={member.name} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
              <p className="text-sm font-medium text-accent mb-2">{member.role}</p>
              <p className="text-xs text-muted-foreground mb-4">{member.university}</p>
              <p className="text-sm text-muted-foreground">{member.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Note for adding members */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground">
            ※ 写真や詳細プロフィールはGitHubリポジトリから更新できます
          </p>
        </motion.div>
      </div>
    </section>
  )
}
