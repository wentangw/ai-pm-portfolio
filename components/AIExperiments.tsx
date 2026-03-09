"use client";

import { motion } from "framer-motion";
import type { Language } from "@/lib/translations";
import { translations } from "@/lib/translations";

export function AIExperiments({ language }: { language: Language }) {
  const t = translations[language];

  return (
    <section id="experiments" className="scroll-mt-28">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="glass rounded-3xl p-7 md:p-10"
        >
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
              {t.experiments.heading}
            </h2>
            <div className="text-sm text-white/60">
              {language === "en" ? "Prompt → Prototype → Product" : "Prompt → 原型 → 产品"}
            </div>
          </div>

          <p className="mt-4 max-w-3xl text-pretty text-white/70 leading-relaxed">
            {t.experiments.body}
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              {
                title: language === "en" ? "Ideation" : "构思",
                body:
                  language === "en"
                    ? "Turn fuzzy ideas into structured prompts and constraints."
                    : "把模糊想法转为结构化 Prompt 与约束条件。",
              },
              {
                title: language === "en" ? "Iteration" : "迭代",
                body:
                  language === "en"
                    ? "Ship fast loops with measurable outcomes."
                    : "用可量化结果驱动快速循环。",
              },
              {
                title: language === "en" ? "Hardening" : "工程化",
                body:
                  language === "en"
                    ? "Add security, reliability, and observability."
                    : "补齐安全、可靠性与可观测性。",
              },
            ].map((x) => (
              <div key={x.title} className="glass glass-hover rounded-2xl p-6">
                <h3 className="text-base font-semibold text-white/90">
                  {x.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {x.body}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

