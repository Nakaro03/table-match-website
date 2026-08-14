import type { Metadata } from "next"
import { Header } from "@/components/header"
import { ForCompanies } from "@/components/for-companies"
import { Footer } from "@/components/footer"

// title は layout の template（'%s | Table Match'）で補完されるため、ここでは接尾辞なしにします
export const metadata: Metadata = {
  title: "企業様向けご案内",
  description:
    "Table Match は学生と経営者を少人数で繋ぐ採用マッチングイベントです。出展のご案内・費用・メリットをご紹介します。",
  alternates: {
    canonical: "/for-companies",
  },
  openGraph: {
    title: "企業様向けご案内 | Table Match",
    description:
      "Table Match は学生と経営者を少人数で繋ぐ採用マッチングイベントです。出展のご案内・費用・メリットをご紹介します。",
    url: "/for-companies",
    type: "website",
  },
}

export default function ForCompaniesPage() {
  return (
    <main className="min-h-screen pt-20">
      <Header />
      <ForCompanies />
      <Footer />
    </main>
  )
}
