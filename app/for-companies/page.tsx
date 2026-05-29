import { Header } from "@/components/header"
import { ForCompanies } from "@/components/for-companies"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "企業様向けご案内 | Table Match",
  description:
    "Table Match は学生と経営者を少人数で繋ぐ採用マッチングイベントです。出展のご案内・費用・メリットをご紹介します。",
}

export default function ForCompaniesPage() {
  return (
    <main className="min-h-screen pt-20">
      <Header />
      <ForCompanies />
      <ContactForm />
      <Footer />
    </main>
  )
}
