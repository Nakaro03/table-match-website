export type OpportunityType = "event" | "internship" | "company_visit" | "company_participation"

export type Opportunity = {
  id: string
  slug: string
  type: OpportunityType
  status: "open" | "preview" | "closed"
  title: string
  summary: string
  date: string
  time: string
  location: string
  region: "fukuoka" | "nagano" | "other"
  target: string
  capacity: string
  price: string
  image: string
  benefits: string[]
}

export const opportunities: Opportunity[] = [
  {
    id: "00000000-0000-4000-8000-000000000006",
    slug: "table-match-fukuoka-6",
    type: "event",
    status: "preview",
    title: "第6回 Table Match 福岡",
    summary: "学生と地域企業の経営者が、少人数のテーブルで本音を交わす交流イベントです。",
    date: "2026年10月中旬予定",
    time: "詳細は後日公開",
    location: "福岡市内（予定）",
    region: "fukuoka",
    target: "大学生・大学院生・専門学校生",
    capacity: "30名（予定）",
    price: "無料（予定）",
    image: "/images/event-4.jpg",
    benefits: ["経営者と直接話せる", "地域企業のリアルを知れる", "インターンや次の挑戦につながる"],
  },
  {
    id: "00000000-0000-4000-8000-000000001001",
    slug: "regional-startup-internship",
    type: "internship",
    status: "open",
    title: "地域企業スタートアップ型インターン",
    summary: "地域企業の事業課題に入り込み、社員と一緒に企画から実行まで取り組む実践型インターンです。",
    date: "2026年11月以降",
    time: "週1〜2日・応相談",
    location: "長野・福岡 / 一部オンライン",
    region: "other",
    target: "大学1年生以上",
    capacity: "若干名",
    price: "参加無料",
    image: "/images/real/lecture.jpg",
    benefits: ["事業づくりを経験できる", "経営者から直接フィードバック", "学年・専攻を問わず相談可能"],
  },
  {
    id: "00000000-0000-4000-8000-000000002001",
    slug: "company-visit-dialogue",
    type: "company_visit",
    status: "open",
    title: "地域企業の仕事場を訪ねる会社見学",
    summary: "求人票だけでは分からない職場の空気や仕事の面白さを、現地で見て聞く少人数見学会です。",
    date: "希望日を調整",
    time: "約2時間",
    location: "長野・福岡の参加企業",
    region: "other",
    target: "地域企業に興味のある学生",
    capacity: "各回5名程度",
    price: "参加無料",
    image: "/images/real/ceo-talk.jpg",
    benefits: ["実際の職場を見られる", "社員へ質問できる", "インターン前の情報収集にも使える"],
  },
  {
    id: "00000000-0000-4000-8000-000000003001",
    slug: "company-participation",
    type: "company_participation",
    status: "open",
    title: "Table Match 企業出展・協賛相談",
    summary: "イベント出展、インターン募集、会社見学、若者との共創について運営がご相談を承ります。",
    date: "随時受付",
    time: "初回相談 約30分",
    location: "オンライン",
    region: "other",
    target: "企業・自治体・大学関係者",
    capacity: "—",
    price: "相談無料",
    image: "/images/real/ceo-talk.jpg",
    benefits: ["採用課題を整理", "企画に合う参加方法を提案", "実施後の接続まで伴走"],
  },
]

export function getOpportunity(slug: string) {
  return opportunities.find((opportunity) => opportunity.slug === slug)
}

export function opportunityTypeLabel(type: OpportunityType) {
  return {
    event: "イベント",
    internship: "インターン",
    company_visit: "会社見学",
    company_participation: "企業の方へ",
  }[type]
}
