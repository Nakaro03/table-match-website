import Image from "next/image"

const pastEvents = [
  { title: "第5回　長野", date: "2026.07.17", people: "学生14名", image: "/images/event-5.jpeg" },
  { title: "第4回　福岡", date: "2026.06.21", people: "学生20名", image: "/images/event-4.jpg" },
  { title: "第3回　長野", date: "2026.05.08", people: "学生15名", image: "/images/event-3.jpg" },
]

/**
 * 本番には未反映の、比較用デザイン案。
 * 装飾よりも実際の活動記録と開催情報を優先した方向性です。
 */
export default function DesignsPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-[#1f2722]">
      <div className="border-b border-[#1f2722]/20 bg-[#e9d9ca] px-5 py-2 text-center text-xs font-medium text-[#4e5a53]">
        本番未反映のデザイン比較ページです
      </div>

      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6 sm:px-8">
        <a href="#top" className="text-lg font-bold tracking-tight">Table Match</a>
        <nav className="hidden gap-6 text-sm sm:flex">
          <a href="#event" className="hover:underline">次回開催</a>
          <a href="#about" className="hover:underline">Table Matchについて</a>
          <a href="#record" className="hover:underline">これまでの開催</a>
        </nav>
        <a href="#event" className="border border-[#1f2722] px-3 py-2 text-xs font-bold hover:bg-[#1f2722] hover:text-white">参加を検討する</a>
      </header>

      <section id="top" className="relative mx-auto max-w-6xl px-5 pb-16 pt-7 sm:px-8 sm:pt-12">
        <div className="pointer-events-none absolute -left-1 top-2 hidden h-20 w-20 border-l-2 border-t-2 border-[#c4674c] lg:block" />
        <div className="grid border-y border-[#1f2722]/30 lg:grid-cols-[1fr_1.32fr]">
          <div className="relative flex flex-col justify-between overflow-hidden py-10 pr-7 sm:py-16 lg:border-r lg:border-[#1f2722]/30 lg:pr-12">
            <span className="absolute -right-5 top-9 hidden rotate-90 text-[10px] font-bold tracking-[0.26em] text-[#c4674c] lg:block">AT THE SAME TABLE</span>
            <div>
              <p className="text-xs font-bold tracking-[0.14em] text-[#6b756e]">STUDENT × COMPANY / NAGANO &amp; FUKUOKA</p>
              <h1 className="mt-6 text-4xl font-bold leading-[1.3] tracking-tight sm:text-5xl">同じテーブルで、<br />ちゃんと話す。</h1>
              <p className="mt-6 max-w-sm text-sm leading-7 text-[#4e5a53]">Table Matchは、学生と地域の企業・経営者が少人数で食事をしながら話す交流会です。</p>
            </div>
            <p className="mt-12 border-l-2 border-[#c4674c] pl-4 text-sm leading-6 text-[#4e5a53]">説明会では聞けないことを聞く。<br />会社の名前より先に、人と出会う。</p>
          </div>
          <div className="relative min-h-[400px] overflow-hidden lg:min-h-[570px]">
            <Image src="/images/real/students-table.jpg" alt="テーブルを囲んで話す参加者" fill priority className="object-cover" />
            <div className="absolute right-0 top-0 h-24 w-24 bg-[#c4674c] [clip-path:polygon(100%_0,0_0,100%_100%)]" />
            <div className="absolute left-0 top-0 h-full w-1.5 bg-[#d8b83f]" />
            <a href="https://www.instagram.com/panthenon.works/" target="_blank" rel="noopener noreferrer" className="absolute bottom-4 right-4 bg-black/50 px-2 py-1 text-[11px] text-white hover:bg-black/70">Photo: @panthenon.works</a>
          </div>
        </div>
      </section>

      <section id="event" className="relative overflow-hidden border-y border-[#1f2722]/25 bg-[#e7eddf]">
        <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-[26%] opacity-45 md:block" style={{ backgroundImage: "radial-gradient(#789070 1px, transparent 1px)", backgroundSize: "12px 12px" }} />
        <div className="relative mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-[220px_1fr_auto] md:items-end">
          <div><p className="text-xs font-bold tracking-[0.14em] text-[#6b756e]">NEXT EVENT</p><p className="mt-2 inline-block bg-[#d8b83f] px-2 py-1 text-sm font-bold">開催予定</p></div>
          <div><h2 className="text-2xl font-bold">第6回 Table Match 福岡</h2><p className="mt-2 text-sm text-[#4e5a53]">2026年10月中旬予定　｜　福岡市内</p></div>
          <a href="#contact" className="inline-block border border-[#1f2722] px-5 py-3 text-center text-sm font-bold hover:bg-[#1f2722] hover:text-white">詳細を受け取る</a>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[220px_1fr]">
        <div><p className="text-xs font-bold tracking-[0.14em] text-[#6b756e]">ABOUT</p><h2 className="mt-3 text-xl font-bold">Table Matchについて</h2><div className="mt-8 flex h-14 w-14 items-center justify-center rounded-full border border-[#c4674c] text-xl text-[#c4674c]">↘</div></div>
        <div className="max-w-2xl"><p className="text-xl font-bold leading-9">大人数の合同説明会ではなく、ひとつのテーブルで話せる人数に絞っています。</p><p className="mt-5 text-sm leading-7 text-[#4e5a53]">仕事の内容、会社の雰囲気、暮らし方。気になることを、その場にいる人へ直接聞ける時間です。就職を決める場ではなく、選択肢を知る場として開催しています。</p><dl className="mt-9 grid grid-cols-3 border-t border-[#1f2722]/25 text-sm"><div className="border-b border-[#1f2722]/25 py-4"><dt className="text-[#6b756e]">開催実績</dt><dd className="mt-1 text-2xl font-bold">5回</dd></div><div className="border-b border-[#1f2722]/25 py-4"><dt className="text-[#6b756e]">開催地域</dt><dd className="mt-1 text-2xl font-bold">2地域</dd></div><div className="border-b border-[#1f2722]/25 py-4"><dt className="text-[#6b756e]">参加形式</dt><dd className="mt-1 text-2xl font-bold">少人数</dd></div></dl></div>
      </section>

      <section id="record" className="border-t border-[#1f2722]/25 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8"><div className="flex items-baseline justify-between"><div className="flex items-center gap-4"><span className="text-4xl font-bold text-[#c4674c]">05</span><h2 className="text-2xl font-bold">これまでの開催</h2></div><span className="text-xs text-[#6b756e]">2025 — 2026</span></div><div className="mt-7 grid gap-x-6 gap-y-10 md:grid-cols-3">{pastEvents.map((event, index) => <article key={event.title} className={index === 1 ? "md:mt-8" : ""}><div className="relative aspect-[4/3] bg-[#e9e7e1]"><Image src={event.image} alt={event.title} fill className="object-cover" /><span className="absolute left-0 top-0 bg-[#1f2722] px-2 py-1 text-xs font-bold text-white">0{5 - index}</span></div><div className="mt-3 flex justify-between border-b border-[#1f2722]/25 pb-3 text-sm"><div><h3 className="font-bold">{event.title}</h3><p className="mt-1 text-[#6b756e]">{event.date}</p></div><span className="text-[#6b756e]">{event.people}</span></div></article>)}</div></div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-5 py-20 sm:px-8"><div className="border-t-2 border-[#1f2722] pt-6"><p className="text-xs font-bold tracking-[0.14em] text-[#6b756e]">CONTACT</p><div className="mt-4 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><h2 className="text-3xl font-bold leading-snug">参加について、<br />気軽にお問い合わせください。</h2><a href="mailto:tablematch.info@gmail.com" className="border border-[#1f2722] bg-[#c4674c] px-5 py-3 text-sm font-bold text-white hover:bg-[#1f2722]">お問い合わせ</a></div></div></section>
    </main>
  )
}
