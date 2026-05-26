"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Users, Heart } from "lucide-react"

// Team data - editable via GitHub
export const teamMembers = [
  {
    name: "中村 楼偉",
    role: "代表",
    university: "筑波大学大学院 情報学学位プログラム M1",
    description: "Table Matchの創設者。学生と企業の新しい出会いの形を追求。",
    image: "/images/representative.jpg",
  },
  {
    name: "後畠 隼輔",
    role: "長野支部リーダー",
    university: "公立諏訪東京理科大学 情報応用工学科 3年",
    description: "長野エリアの運営を統括。学生集客とイベント企画を担当。",
    image: null,
  },
  {
    name: "運営メンバー",
    role: "福岡支部",
    university: "九州大学・福岡大学など",
    description: "SNS運営、営業、司会進行など各分野で活躍するメンバーたち。",
    image: null,
  },
]

// Avatar component with image support
function Avatar({ name, image }: { name: string; image: string | null }) {
  if (image) {
    return (
      <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden ring-4 ring-primary/20 ring-offset-4 ring-offset-card shadow-xl">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
    )
  }
  
  const initials = name.split(" ").map(n => n[0]).join("").slice(0, 2)
  return (
    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center ring-4 ring-primary/10 ring-offset-4 ring-offset-card shadow-xl">
      <span className="text-2xl sm:text-3xl font-bold gradient-text">{initials}</span>
    </div>
  )
}

export function Team() {
  return (
    <section id="team" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4">
            <Users className="w-4 h-4" />
            Team
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            運営チーム
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            学生が主体となって運営しています
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-3xl p-8 text-center border border-border shadow-lg card-interactive group"
            >
              <div className="flex justify-center mb-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Avatar name={member.name} image={member.image} />
                </motion.div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">{member.name}</h3>
              <p className="text-sm font-semibold text-primary mb-2">{member.role}</p>
              {member.university && (
                <p className="text-xs text-muted-foreground mb-4">{member.university}</p>
              )}
              <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Join us CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl p-8 max-w-2xl mx-auto border border-primary/20">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-5 h-5 text-accent" />
              <h3 className="text-xl font-bold text-foreground">
                一緒に活動しませんか？
              </h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Table Matchでは運営メンバーを随時募集しています。
              興味がある方はお気軽にお問い合わせください。
            </p>
            <p className="text-xs text-muted-foreground">
              ※ 写真や詳細プロフィールはGitHubリポジトリから更新できます
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
