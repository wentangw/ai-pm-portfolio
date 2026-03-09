"use client";

import { motion } from "framer-motion";
import type { Language } from "@/lib/translations";
import { translations } from "@/lib/translations";
import { LanguageToggle } from "@/components/LanguageToggle";

const links = [
  { id: "about", key: "about" },
  { id: "skills", key: "skills" },
  { id: "projects", key: "projects" },
  { id: "experiments", key: "experiments" },
  { id: "blog", key: "blog" },
  { id: "process", key: "process" },
  { id: "contact", key: "contact" },
] as const;

export function Navbar({
  language,
  onToggleLanguage,
}: {
  language: Language;
  onToggleLanguage: () => void;
}) {
  const t = translations[language];

  return (
    <div className="sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <motion.nav
          initial={{ y: -12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="glass rounded-2xl px-4 py-3"
        >
          <div className="flex items-center justify-between gap-3">
            <a
              href="#top"
              className="group inline-flex items-center gap-2 font-semibold tracking-tight text-white"
            >
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-400 via-emerald-300 to-pink-400 shadow-[0_0_24px_rgba(99,102,241,0.55)]" />
              <span className="text-sm text-white/90 group-hover:text-white">
                AI PM
              </span>
            </a>

            <div className="hidden items-center gap-1 md:flex">
              {links.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  className="rounded-full px-3 py-1.5 text-sm text-white/70 hover:text-white hover:bg-white/5"
                >
                  {t.nav[l.key]}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <LanguageToggle
                language={language}
                onToggle={onToggleLanguage}
              />
            </div>
          </div>
        </motion.nav>
      </div>
    </div>
  );
}

