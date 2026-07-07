"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Users, Heart, X, ChevronRight } from "lucide-react"
import { useState } from "react"

// 福岡支部メンバー（写真・役割・大学はここを編集）
// 写真は public/images/team/ に保存してください
export const naganoMembers = [
  {
    name: "後畠 隼輔",
    role: "事務担当", // ← 役割を記入（例：リーダー / SNS担当 など）
    university: "公立諏訪東京理科大学 情報応用工学科 3年", // ← 大学名を記入（例：九州大学 3年）
    image: "/images/team/nagano-1.jpg",
  },
  {
    name: "矢島 蓮",
    role: "営業・サイト運用担当", // ← 役割を記入（例：リーダー / SNS担当 など）
    university: "公立諏訪東京理科大学 情報応用工学科 4年", // ← 大学名を記入（例：九州大学 3年）
    image: "/images/team/nagano-2.jpg",
  },
  {
    name: "荒引 達弘",
    role: "当日運営担当", // ← 役割を記入（例：リーダー / SNS担当 など）
    university: "公立諏訪東京理科大学 情報応用工学科 3年", // ← 大学名を記入（例：九州大学 3年）
    image: "/images/team/nagano-3.jpg",
  },
  {
    name: "小笠原 春樹",
    role: "司会担当", // ← 役割を記入（例：リーダー / SNS担当 など）
    university: "公立諏訪東京理科大学 機械電気工学科 2年", // ← 大学名を記入（例：九州大学 3年）
    image: "/images/team/nagano-4.jpg",
  },
  {
    name: "置 未寛",
    role: "Web開発担当", // ← 役割を記入（例：リーダー / SNS担当 など）
    university: "公立諏訪東京理科大学 情報応用工学科 1年", // ← 大学名を記入（例：九州大学 3年）
    image: "/images/team/nagano-5.jpg",
  },
  {
    name: "柏木 統我",
    role: "司会担当", // ← 役割を記入（例：リーダー / SNS担当 など）
    university: "諏訪東京理科大学 工学部 情報応用工学科 3年", // ← 大学名を記入（例：九州大学 3年）
    image: "/images/team/nagano-6.jpg",
  },
]

// 福岡支部メンバー（写真・役割・大学はここを編集）
// 写真は public/images/team/ に保存してください
export const fukuokaMembers = [
  {
    name: "工藤 大晴",
    role: "司会担当", // ← 役割を記入（例：リーダー / SNS担当 など）
    university: "福岡医健・スポーツ専門学校3年生", // ← 大学名を記入（例：九州大学 3年）
    image: "/images/team/fukuoka-1.jpg",
  },
  {
    name: "桑野 櫻子",
    role: "事務担当", // ← 役割を記入
    university: "福岡大学 法学部 2年生", // ← 大学名を記入
    image: "/images/team/fukuoka-2.jpg",
  },
  {
    name: "大西 雄大",
    role: "SNS担当", // ← 役割を記入
    university: "九州大学 農学部 3年生", // ← 大学名を記入
    image: "/images/team/fukuoka-3.jpg",
  },
  {
    name: "佐藤 悠磨",
    role: "営業担当",
    university: "福岡大学 商学部 2年生",
    image: "/images/team/fukuoka-4.jpg",
  },
  {
    name: "三木 陽果",
    role: "営業担当",
    university: "九州産業大学 商学部 2年生",
    image: "/images/team/fukuoka-5.jpg",
  },
  {
    name: "西岡 恭侑",
    role: "営業担当",
    university: "福岡大学 理学部 地球科学科 2年生",
    image: "/images/team/fukuoka-6.jpg",
  }
]

// Team data - editable via GitHub
export const teamMembers = [
  {
    name: "中村 楼偉",
    role: "代表",
    university: "筑波大学大学院 情報学学位プログラム M1",
    description: "Table Matchの創設者。学生と企業の新しい出会いの形を追求。",
    image: "/images/representative.jpg",
    members: null,
    // ↓ アイコンをクリックすると開く詳細プロフィール（文章は自由に編集してください）
    bio: {
      tagline: "学生と企業の“本音の出会い”を、あたたかい食卓から。",
      paragraphs: [
        "はじめまして、Table Match 代表の中村楼偉です。筑波大学大学院で情報学を専攻しています。",
        "大手ナビサイトでは伝わりにくい、経営者の人柄や会社の空気感を、少人数の食卓を通じて届けたい——そんな想いで Table Match を立ち上げました。",
        "長野・福岡を中心に、学生と経営者が本音で語り合える場を運営しています。ここでの一度の出会いが、誰かの進路を変えるきっかけになればと願っています。",
      ],
      highlights: [
        "Table Match 創設者・代表",
        "長野・福岡でイベントを主催",
        "AI・DX・IT 領域にも関心",
      ],
    },
  },
  {
    name: "長野支部",
    role: "運営メンバー",
    university: "公立諏訪東京理科大学",
    description: "学生集客とイベント企画で活躍するメンバーたち。クリックで紹介を見る。",
    image: null,
    members: naganoMembers,
    bio: null,
  },
  {
    name: "福岡支部",
    role: "運営メンバー",
    university: "九州大学・福岡大学など",
    description: "SNS運営、営業、司会進行など各分野で活躍するメンバーたち。クリックで紹介を見る。",
    image: null,
    members: fukuokaMembers,
    bio: null,
  },
]

function initialsOf(name: string) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2)
}

// Avatar with image support; falls back to initials if the image is
// missing or fails to load (e.g. photo not uploaded yet).
function Avatar({ name, image }: { name: string; image: string | null }) {
  const [failed, setFailed] = useState(false)

  if (image && !failed) {
    return (
      <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden ring-4 ring-primary/20 ring-offset-4 ring-offset-card shadow-xl">
        <Image src={image} alt={name} fill className="object-cover" onError={() => setFailed(true)} />
      </div>
    )
  }

  return (
    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center ring-4 ring-primary/10 ring-offset-4 ring-offset-card shadow-xl">
      <span className="text-2xl sm:text-3xl font-bold gradient-text">{initialsOf(name)}</span>
    </div>
  )
}

// One circle in the overlapping preview; also falls back to initials.
function StackCircle({ name, image }: { name: string; image: string | null }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden ring-4 ring-card shadow-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
      {image && !failed ? (
        <Image src={image} alt={name} fill className="object-cover" onError={() => setFailed(true)} />
      ) : (
        <span className="text-lg font-bold gradient-text">{initialsOf(name)}</span>
      )}
    </div>
  )
}

// Overlapping avatar preview shown on the clickable card.
// Caps the visible circles at 3 so the layout stays compact; click the
// card to see everyone in the modal.
const PREVIEW_LIMIT = 3
function MemberStack({ members }: { members: typeof fukuokaMembers }) {
  return (
    <div className="flex items-center justify-center -space-x-5">
      {members.slice(0, PREVIEW_LIMIT).map((m) => (
        <StackCircle key={m.name} name={m.name} image={m.image} />
      ))}
    </div>
  )
}

type Representative = (typeof teamMembers)[number]

export function Team() {
  const [openBranch, setOpenBranch] = useState<{ name: string; members: typeof fukuokaMembers } | null>(null)
  const [openProfile, setOpenProfile] = useState<Representative | null>(null)

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
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-10 bg-primary" />
            <span className="label-eyebrow text-xs text-primary">Team</span>
            <span className="h-px w-10 bg-primary" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            運営チーム
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            学生が主体となって運営しています。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => {
            const clickable = !!(member.members || member.bio)
            const openDetail = () => {
              if (member.members) setOpenBranch({ name: member.name, members: member.members })
              else if (member.bio) setOpenProfile(member)
            }
            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => clickable && openDetail()}
                role={clickable ? "button" : undefined}
                tabIndex={clickable ? 0 : undefined}
                onKeyDown={(e) => {
                  if (clickable && (e.key === "Enter" || e.key === " ")) {
                    e.preventDefault()
                    openDetail()
                  }
                }}
                className={`relative bg-card rounded-3xl p-8 text-center border border-border shadow-lg card-interactive group ${
                  clickable ? "cursor-pointer ring-1 ring-transparent hover:ring-primary/40 transition" : ""
                }`}
              >
                <div className="flex justify-center mb-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {member.members ? (
                      <MemberStack members={member.members} />
                    ) : (
                      <Avatar name={member.name} image={member.image} />
                    )}
                  </motion.div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm font-semibold text-primary mb-2">{member.role}</p>
                {member.university && (
                  <p className="text-xs text-muted-foreground mb-4">{member.university}</p>
                )}
                <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
                {clickable && (
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    {member.members ? "メンバーを見る" : "プロフィールを見る"}
                    <ChevronRight className="w-4 h-4" />
                  </span>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Branch members modal */}
        <AnimatePresence>
          {openBranch && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenBranch(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 backdrop-blur-sm p-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 28 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-card rounded-3xl p-6 sm:p-10 shadow-2xl border border-border"
              >
                <button
                  onClick={() => setOpenBranch(null)}
                  aria-label="閉じる"
                  className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-muted-foreground hover:bg-muted transition"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="text-center mb-8">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-3">
                    <Users className="w-4 h-4" />
                    {openBranch.name}
                  </span>
                  <h3 className="text-2xl font-bold text-foreground">運営メンバー紹介</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {openBranch.members.map((m, i) => (
                    <motion.div
                      key={m.name}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="text-center"
                    >
                      <div className="flex justify-center mb-4">
                        <Avatar name={m.name} image={m.image} />
                      </div>
                      <h4 className="text-lg font-bold text-foreground mb-1">{m.name}</h4>
                      {m.role && <p className="text-sm font-semibold text-primary">{m.role}</p>}
                      {m.university && (
                        <p className="text-xs text-muted-foreground mt-1">{m.university}</p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Representative profile modal */}
        <AnimatePresence>
          {openProfile?.bio && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenProfile(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 backdrop-blur-sm p-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 28 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-card rounded-3xl p-6 sm:p-10 shadow-2xl border border-border"
              >
                <button
                  onClick={() => setOpenProfile(null)}
                  aria-label="閉じる"
                  className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-muted-foreground hover:bg-muted transition"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="text-center mb-8">
                  <div className="flex justify-center mb-5">
                    <Avatar name={openProfile.name} image={openProfile.image} />
                  </div>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-3">
                    <Users className="w-4 h-4" />
                    {openProfile.role}
                  </span>
                  <h3 className="text-2xl font-bold text-foreground">{openProfile.name}</h3>
                  {openProfile.university && (
                    <p className="text-sm text-muted-foreground mt-1">{openProfile.university}</p>
                  )}
                  {openProfile.bio.tagline && (
                    <p className="mt-4 text-base font-semibold text-foreground/90">
                      {openProfile.bio.tagline}
                    </p>
                  )}
                </div>

                <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {openProfile.bio.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                {openProfile.bio.highlights.length > 0 && (
                  <div className="mt-8 flex flex-wrap gap-2">
                    {openProfile.bio.highlights.map((h) => (
                      <span
                        key={h}
                        className="px-4 py-2 bg-muted text-muted-foreground text-sm font-medium rounded-full"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

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
              ※学生限定です。社会人の方はお問い合わせいただいてもお断りする場合があります。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
