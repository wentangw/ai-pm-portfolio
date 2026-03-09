"use client";

import { motion } from "framer-motion";
import type { Language } from "@/lib/translations";
import { translations } from "@/lib/translations";

export function Contact({ language }: { language: Language }) {
  const t = translations[language];

  const items = [
    {
      label: t.contact.email,
      value: "tw2815903789@163.com",
      href: "mailto:you@example.com",
    },
    { label: t.contact.github, value: "https://github.com/wentangw", href: "#" },
    { label: t.contact.linkedin, value: "15387618361", href: "#" },
  ];

  return (
    <section id="contact" className="scroll-mt-28">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="glass rounded-3xl p-7 md:p-10"
        >
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
              {t.contact.heading}
            </h2>
            <div className="text-sm text-white/60">
              {language === "en"
                ? "Let’s build something ambitious."
                : "一起把想法做成产品。"}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {items.map((x) => (
              <a
                key={x.label}
                href={x.href}
                onClick={(e) => {
                  if (x.href === "#") e.preventDefault();
                }}
                className="glass glass-hover rounded-2xl p-6"
              >
                <div className="text-xs font-medium text-white/60">
                  {x.label}
                </div>
                <div className="mt-2 text-sm font-semibold text-white/90">
                  {x.value}
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

