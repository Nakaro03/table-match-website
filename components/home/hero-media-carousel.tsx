"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const slides = [
  { src: "/images/real/students-table.jpg", alt: "学生がテーブルを囲み笑顔で食事を楽しむ様子" },
  { src: "/images/event-4.jpg", alt: "Table Matchで笑顔を見せる参加学生" },
  { src: "/images/program/closing.jpg", alt: "イベントを終えて笑顔で集まる参加者と企業の皆さま" },
  { src: "/images/event-2.jpg", alt: "食事を囲み笑顔で交流する学生と企業の参加者" },
]

export function HeroMediaCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const timer = window.setInterval(() => setActiveIndex((current) => (current + 1) % slides.length), 4500)
    return () => window.clearInterval(timer)
  }, [])

  return <div className="absolute inset-0 bg-foreground">
    {slides.map((slide, index) => <Image
      key={slide.src}
      src={slide.src}
      alt={index === activeIndex ? slide.alt : ""}
      fill
      priority={index === 0}
      sizes="(max-width: 1024px) 100vw, 50vw"
      className={`object-cover transition-opacity duration-700 ${index === activeIndex ? "opacity-100" : "opacity-0"}`}
    />)}
    <div className="absolute bottom-4 right-4 flex gap-2 border-2 border-foreground bg-paper p-2" aria-label="ヒーロー写真を選択">
      {slides.map((slide, index) => <button
        key={slide.src}
        type="button"
        onClick={() => setActiveIndex(index)}
        aria-label={`${index + 1}枚目の写真を表示`}
        aria-current={index === activeIndex}
        className={`h-2.5 w-8 transition-colors ${index === activeIndex ? "bg-action-orange" : "bg-foreground/30"}`}
      />)}
    </div>
  </div>
}
