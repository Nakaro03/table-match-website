"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function FoodHighlights() {
  return (
    <section id="food" className="py-24 sm:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-primary" />
              <span className="label-eyebrow text-xs text-primary">For Students</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
              学生は気軽に、
              <span className="text-primary">ごちそう</span>を。
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground leading-relaxed text-pretty"
          >
            毎回違うジャンルの美味しい食事を囲んで、社長と本音で話せます。
            参加費は<span className="font-semibold text-foreground">無料</span>、手ぶらで OK。
            会場や料理は回によって変わります。
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 mb-14"
        >
          <div className="relative aspect-[4/3] sm:col-span-2 overflow-hidden rounded-[1.5rem] border border-border shadow-sm">
            <Image
              src="/images/real/students-table.jpg"
              alt="テーブルを囲んで食事を楽しむ学生たち"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] sm:aspect-auto overflow-hidden rounded-[1.5rem] border border-border shadow-sm">
            <Image
              src="/images/real/student-smile.jpg"
              alt="料理を手に笑顔の学生"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
