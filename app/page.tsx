import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Concept } from "@/components/concept"
import { Events } from "@/components/events"
import { Program } from "@/components/program"
import { Achievements } from "@/components/achievements"
import { ForCompanies } from "@/components/for-companies"
import { Team } from "@/components/team"
import { Testimonials } from "@/components/testimonials"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Concept />
      <Events />
      <Program />
      <Achievements />
      <ForCompanies />
      <Team />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  )
}
