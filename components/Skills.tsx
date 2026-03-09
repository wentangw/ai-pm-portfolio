"use client";

import { motion } from "framer-motion";
import type { Language } from "@/lib/translations";
import { translations } from "@/lib/translations";

export function Skills({ language }: { language: Language }) {
  const t = translations[language];

  return (
    <section id="skills" className="scroll-mt-28">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            {t.skills.heading}
          </h2>
          <div className="hidden text-sm text-white/60 md:block">
            {language === "en" ? "Animated capability cards" : "能力卡片动效展示"}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {t.skills.categories.map((c, idx) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.45, delay: idx * 0.06, ease: "easeOut" }}
              className="glass glass-hover rounded-2xl p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold text-white/90">
                  {c.title}
                </h3>
                <span className="h-9 w-9 rounded-xl bg-white/5" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

