"use client";

import { motion } from "framer-motion";
import type { Language } from "@/lib/translations";

export function LanguageToggle({
  language,
  onToggle,
}: {
  language: Language;
  onToggle: () => void;
}) {
  const label = language === "en" ? "中文" : "EN";

  return (
    <motion.button
      type="button"
      onClick={onToggle}
      whileTap={{ scale: 0.98 }}
      className="glass glass-hover rounded-full px-3 py-1.5 text-sm font-medium tracking-wide text-white/90"
      aria-label="Toggle language"
    >
      {label}
    </motion.button>
  );
}

