import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { PeopleNav } from "@/components/people-nav"
import { TeamPoster } from "@/components/team-poster"

export const metadata: Metadata = { title: "運営メンバー", description: "長野・福岡でTable Matchを運営する学生メンバーを紹介します。" }
export default function TeamPage() { return <main className="min-h-screen pt-20"><Header /><PeopleNav active="team" /><TeamPoster /><Footer /></main> }
