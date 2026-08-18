export type Story = {
  slug: string
  category: "学生の声" | "会社見学" | "メディア掲載"
  title: string
  excerpt: string
  date: string
  image: string
  imagePosition?: string
  lead: string
  paragraphs: string[]
}

export const topics: Story[] = [
  {
    slug: "onishi-from-guest-to-staff",
    category: "学生の声",
    title: "「口だけ」が、動き出した日。",
    excerpt: "教科書リセールとゴミ分別AIアプリ、2つの事業を動かす大学生が、Table Matchでの対話をきっかけに運営メンバーになるまで。",
    date: "2026.08.19",
    image: "/images/team/fukuoka-3.jpg",
    imagePosition: "50% 15%",
    lead: "正直、最初は「意識高い系のイベント」だと思って、少し身構えていました。",
    paragraphs: [
      "はじめまして、九州大学農学部2年の大西です。兵庫県出身、今は福岡で、環境ビジネスで世界を動かすことを本気で目標にしている20歳です。今動かしているのは2つ。九大生向けに教科書を安く売り買いできる「Unibookle」(フォロワーは555人まで来ました)と、ゴミをAIでスキャンしてエコポイントが貯まるアプリ「Ecoist」。Ecoistは今週やっとMVPが動き始めたところで、企業のScope3データを可視化するところまで見据えています。頭で考えるより先に手が動くタイプで、息抜きは韓国旅行と、いつか交換留学に行くことを考えています。",
      "Table Matchに参加したのは、正直「口だけで終わらせたくない」という焦りがきっかけでした。事業を始めてはいるものの、経営者と本音で話せる機会なんてほとんどない。説明会形式のイベントには何度か行きましたが、結局は一方的に話を聞くだけで終わることが多くて、期待はしていませんでした。",
      "でも、第2回 福岡のテーブルに着いた瞬間、いつもの「聞くだけ」の空気とは違いました。同じ料理を囲んで、社長が僕の事業について本気で質問してくる。「それ、どうやってマネタイズするの?」「Scope3って、具体的にどこまで見てるの?」と、遠慮なく突っ込まれるたびに、自分の考えの甘いところが見えてきました。逆にこちらから聞くことも歓迎されて、「評価される場」じゃなく「一緒に考える場」だったのが、いちばん意外でした。",
      "参加した帰り道、「このテーブルを、自分でも作る側に回りたい」と思ったのを覚えています。それで気づいたら、福岡支部の広報担当として運営に入っていました。今は自分がイベントの空気を作る側になって、参加してくれた学生が「来てよかった」と思える瞬間を、裏側から設計しています。",
      "環境ビジネスも、Table Matchの運営も、正直まだ「口だけ」の部分はたくさんあります。でも、動きながら考えるしかないと思っています。もし今、何か始めたいけど一歩が踏み出せない学生がいたら、まずは食卓に座ってみてください。話しているうちに、自分でも気づいていなかった一歩が見つかるはずです。",
    ],
  },
  {
    slug: "student-found-next-step",
    category: "学生の声",
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
    category: "会社見学",
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
    category: "メディア掲載",
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
  category: "イベント" | "企画" | "メディア掲載"
  title: string
  summary: string
  body: string[]
  relatedHref?: string
}

export const newsItems: NewsItem[] = [
  {
    slug: "fukuoka-6-preview",
    date: "2026.08.14",
    category: "イベント",
    title: "第6回 Table Match 福岡の先行受付を開始しました",
    summary: "2026年10月中旬、福岡市内で開催予定。詳細決定前の先行受付を開始します。",
    body: ["第6回 Table Match 福岡を2026年10月中旬に開催予定です。会場、時間、参加企業は決まり次第、本サイトでお知らせします。", "先行受付へ登録いただいた方には、詳細の公開時に運営からご案内します。一人参加、進路が未定の学生も歓迎します。"],
    relatedHref: "/projects/table-match-fukuoka-6",
  },
  {
    slug: "internship-project-open",
    date: "2026.08.08",
    category: "企画",
    title: "地域企業スタートアップ型インターンの募集を公開しました",
    summary: "事業課題に企画から実行まで取り組む実践型インターンです。",
    body: ["長野・福岡の地域企業と取り組む、実践型インターンの相談受付を始めました。専攻や学年よりも、まず話を聞いてみたいという気持ちを大切にします。", "活動時期や頻度は企業と学生の希望を聞き、運営が調整します。詳しい募集内容は企画ページをご確認ください。"],
    relatedHref: "/projects/regional-startup-internship",
  },
  {
    slug: "fifth-nagano-completed",
    date: "2026.07.18",
    category: "イベント",
    title: "第5回 Table Match 長野を開催しました",
    summary: "茅野市Kiitosで、学生14名と地域企業が対話しました。",
    body: ["2026年7月17日、茅野市Kiitosで第5回 Table Match 長野を開催しました。学生14名が参加し、少人数のテーブルで仕事や進路について話しました。", "ご参加いただいた皆さま、運営を支えてくださった皆さまに感謝申し上げます。開催レポートは活動レポートで順次公開します。"],
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
