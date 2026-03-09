"use client";

import { motion } from "framer-motion";
import type { Language } from "@/lib/translations";
import { translations } from "@/lib/translations";

export function Projects({ language }: { language: Language }) {
  const t = translations[language];

  return (
    <section id="projects" className="scroll-mt-28">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            {t.projects.heading}
          </h2>
          <div className="hidden text-sm text-white/60 md:block">
            {language === "en" ? "Selected work" : "精选作品"}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {t.projects.items.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.5, delay: idx * 0.06, ease: "easeOut" }}
              className="glass glass-hover rounded-2xl p-6"
            >
              <h3 className="text-base font-semibold text-white/90">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {p.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

