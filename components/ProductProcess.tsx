"use client";

import { motion } from "framer-motion";
import type { Language } from "@/lib/translations";
import { translations } from "@/lib/translations";

const icons = ["🔎", "⚡", "🧩", "✨", "🚀"] as const;

export function ProductProcess({ language }: { language: Language }) {
  const t = translations[language];

  return (
    <section id="process" className="scroll-mt-28">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            {t.process.heading}
          </h2>
          <div className="hidden text-sm text-white/60 md:block">
            {language === "en" ? "A practical timeline" : "从问题到上线的时间线"}
          </div>
        </div>

        <div className="mt-6 glass rounded-3xl p-7 md:p-10">
          <ol className="relative">
            <div className="absolute left-4 top-2 hidden h-[calc(100%-16px)] w-px bg-white/10 md:block" />

            <div className="grid grid-cols-1 gap-4 md:gap-6">
              {t.process.steps.map((s, idx) => (
                <motion.li
                  key={s.title}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.5, delay: idx * 0.06, ease: "easeOut" }}
                  className="glass glass-hover relative rounded-2xl p-6 md:pl-14"
                >
                  <div className="hidden md:flex absolute left-0 top-0 h-full w-14 items-start justify-center pt-6">
                    <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 text-sm">
                      {icons[idx] ?? "•"}
                    </div>
                  </div>

                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-xs font-medium text-white/60">
                        {idx + 1}
                      </div>
                      <h3 className="mt-1 text-base font-semibold text-white/90">
                        {s.title}
                      </h3>
                    </div>
                    <div className="md:hidden grid h-9 w-9 place-items-center rounded-xl bg-white/5 text-sm">
                      {icons[idx] ?? "•"}
                    </div>
                  </div>

                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {s.description}
                  </p>
                </motion.li>
              ))}
            </div>
          </ol>
        </div>
      </div>
    </section>
  );
}

