"use client";

import { motion } from "framer-motion";
import type { Language } from "@/lib/translations";
import { translations } from "@/lib/translations";

export function Blog({ language }: { language: Language }) {
  const t = translations[language];

  return (
    <section id="blog" className="scroll-mt-28">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            {t.blog.heading}
          </h2>
          <div className="hidden text-sm text-white/60 md:block">
            {language === "en" ? "Writing & insights" : "写作与思考"}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {t.blog.items.map((title, idx) => (
            <motion.a
              key={title}
              href="#"
              onClick={(e) => e.preventDefault()}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.45, delay: idx * 0.06, ease: "easeOut" }}
              className="glass glass-hover group rounded-2xl p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold text-white/90 group-hover:text-white">
                  {title}
                </h3>
                <span className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-400/20 via-emerald-300/10 to-pink-400/20" />
              </div>
              <p className="mt-3 text-sm text-white/70">
                {language === "en"
                  ? "Short-form notes on building AI products with a security mindset."
                  : "关于以安全思维构建 AI 产品的短文笔记。"}
              </p>
              <div className="mt-5 text-xs font-medium text-white/60">
                {language === "en" ? "Read (coming soon)" : "阅读（即将上线）"}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

