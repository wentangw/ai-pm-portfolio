"use client";

import { motion } from "framer-motion";
import type { Language } from "@/lib/translations";
import { translations } from "@/lib/translations";

export function Hero({ language }: { language: Language }) {
  const t = translations[language];

  return (
    <section id="top" className="relative">
      <div className="mx-auto max-w-6xl px-4 pb-10 pt-14 md:pb-16 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="glass rounded-3xl p-8 md:p-12"
        >
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300/90" />
              <span>AI • Security • Product</span>
            </div>

            <h1 className="text-balance bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-4xl font-semibold tracking-tight text-transparent md:text-6xl">
              唐雯（Tang Wen）
            </h1>

            <p className="mt-3 text-lg font-medium text-white/90 md:text-xl">
              {t.hero.title}
            </p>

            <p className="mt-4 text-pretty text-base leading-relaxed text-white/70 md:text-lg">
              {t.hero.subtitle}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 via-emerald-400 to-pink-500 px-5 py-3 text-sm font-semibold text-ink-900 shadow-[0_20px_80px_rgba(99,102,241,0.25)] hover:brightness-110"
              >
                {t.hero.ctaProjects}
              </a>
              <a
                href="#contact"
                className="glass glass-hover inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white/90"
              >
                {t.hero.ctaContact}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

