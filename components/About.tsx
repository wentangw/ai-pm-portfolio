"use client";

import { motion } from "framer-motion";
import type { Language } from "@/lib/translations";
import { translations } from "@/lib/translations";

export function About({ language }: { language: Language }) {
  const t = translations[language];

  return (
    <section id="about" className="scroll-mt-28">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="glass rounded-3xl p-7 md:p-10"
        >
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            {t.about.heading}
          </h2>
          <p className="mt-4 max-w-3xl text-pretty text-white/70 leading-relaxed">
            {t.about.body}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

