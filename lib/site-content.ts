export type Story = {
  slug: string
  category: "VOICE" | "COMPANY VISIT" | "MEDIA"
  title: string
  excerpt: string
  date: string
  image: string
  lead: string
  paragraphs: string[]
}

export const topics: Story[] = [
  {
    slug: "student-found-next-step",
    category: "VOICE",
    title: "『やりたい』が言葉になった。食卓から始まった次の一歩",
    excerpt: "将来像が決まっていなかった学生が、経営者との対話から自分の関心を見つけるまで。",
    date: "2026.07.24",
    image: "/images/real/student-smile.jpg",
    lead: "選考でも説明会でもないからこそ、正解を探さずに話せた。",
    paragraphs: [
      "参加前は、就職活動を始めなければと思いながらも、何を軸に企業を見ればいいか分からない状態でした。Table Matchでは、経営者から一方的に会社説明を聞くのではなく、学生の興味や日常についても聞いてもらえます。",
      "話していくうちに、自分は地域の人と一緒に新しい仕組みをつくることに関心があると気づきました。参加後は、気になった企業の仕事をさらに知るため、会社見学へ進みました。",
      "Table Matchはその場で進路を決める場所ではありません。対話を通して、自分なりの次の一歩を選べるようになる場所です。",
    ],
  },
  {
    slug: "company-visit-real-workplace",
    category: "COMPANY VISIT",
    title: "求人票の外側へ。地域企業の仕事場を訪ねました",
    excerpt: "社員の働き方や会社の空気を、現地で見て聞く少人数の会社見学レポート。",
    date: "2026.07.10",
    image: "/images/real/ceo-talk.jpg",
    lead: "職場を見ると、会社の言葉が自分の生活とつながって見えてくる。",
    paragraphs: [
      "イベントで出会った学生と企業をつなぎ、少人数で会社を訪問しました。仕事内容だけでなく、一日の流れ、地域との関係、社員が仕事を選んだ理由まで質問しました。",
      "学生からは、働く人の表情や会話を見たことで、自分が働く姿を具体的に想像できたという声がありました。企業にとっても、学生が何を不安に感じ、どんな情報を知りたいのかを直接聞ける時間になりました。",
      "見学後のインターンや面談は希望者だけが選びます。まず知ることから始められる入口を、これからも増やしていきます。",
    ],
  },
  {
    slug: "lcv-media-coverage",
    category: "MEDIA",
    title: "学生と地域企業の対話を、地元テレビLCVが取材",
    excerpt: "Table Matchの会場で生まれる会話と、学生運営の取り組みが紹介されました。",
    date: "2026.06.28",
    image: "/images/event-3.jpg",
    lead: "地域の若者と企業が、本音で出会う場として。",
    paragraphs: [
      "長野で開催したTable Matchを、地元テレビLCVに取材いただきました。当日は、学生と経営者が同じテーブルで食事をしながら、仕事や地域の未来について話す様子を撮影していただきました。",
      "運営メンバーからは、学生自身が企画・企業への声かけ・当日の進行まで担っていることや、イベント後の会社見学・インターンまで伴走していることを紹介しました。",
      "今後も地域の大学、企業、自治体と協力し、学生が挑戦を見つけられる接点を広げます。",
    ],
  },
]

export type NewsItem = {
  slug: string
  date: string
  category: "EVENT" | "PROJECT" | "MEDIA"
  title: string
  summary: string
  body: string[]
  relatedHref?: string
}

export const newsItems: NewsItem[] = [
  {
    slug: "fukuoka-6-preview",
    date: "2026.08.14",
    category: "EVENT",
    title: "第6回 Table Match 福岡の先行受付を開始しました",
    summary: "2026年10月中旬、福岡市内で開催予定。詳細決定前の先行受付を開始します。",
    body: ["第6回 Table Match 福岡を2026年10月中旬に開催予定です。会場、時間、参加企業は決まり次第、本サイトでお知らせします。", "先行受付へ登録いただいた方には、詳細の公開時に運営からご案内します。一人参加、進路が未定の学生も歓迎します。"],
    relatedHref: "/projects/table-match-fukuoka-6",
  },
  {
    slug: "internship-project-open",
    date: "2026.08.08",
    category: "PROJECT",
    title: "地域企業スタートアップ型インターンの募集を公開しました",
    summary: "事業課題に企画から実行まで取り組む実践型インターンです。",
    body: ["長野・福岡の地域企業と取り組む、実践型インターンの相談受付を始めました。専攻や学年よりも、まず話を聞いてみたいという気持ちを大切にします。", "活動時期や頻度は企業と学生の希望を聞き、運営が調整します。詳しい募集内容はPROJECTページをご確認ください。"],
    relatedHref: "/projects/regional-startup-internship",
  },
  {
    slug: "fifth-nagano-completed",
    date: "2026.07.18",
    category: "EVENT",
    title: "第5回 Table Match 長野を開催しました",
    summary: "茅野市Kiitosで、学生14名と地域企業が対話しました。",
    body: ["2026年7月17日、茅野市Kiitosで第5回 Table Match 長野を開催しました。学生14名が参加し、少人数のテーブルで仕事や進路について話しました。", "ご参加いただいた皆さま、運営を支えてくださった皆さまに感謝申し上げます。開催レポートはTOPICSで順次公開します。"],
    relatedHref: "/#achievements",
  },
]

export type ParticipantCompany = {
  name: string
  logo: string
  surface?: "blue" | "dark"
  logoScale?: "half" | "large"
}

export const participantCompanies: ParticipantCompany[] = [
  { name: "株式会社K2Tプランニング", logo: "/images/company-logos/official/k2t.jpg" },
  { name: "株式会社くじら", logo: "/images/company-logos/official/kujira.jpeg" },
  { name: "プランタンホテルグループ", logo: "/images/company-logos/official/printemps.png", logoScale: "large" },
  { name: "ちの技研", logo: "/images/company-logos/official/chino-giken.svg", surface: "blue", logoScale: "half" },
  { name: "諏訪三社電機", logo: "/images/company-logos/official/suwa.jpeg" },
  { name: "馬車馬テクノロジーズ", logo: "/images/company-logos/official/bashauma.png" },
  { name: "ハートアロー", logo: "/images/company-logos/official/heart-arrow.png" },
  { name: "平出精密", logo: "/images/company-logos/official/hiraide.jpg" },
  { name: "山万加島屋商店", logo: "/images/company-logos/official/kajimaya.png" },
]
