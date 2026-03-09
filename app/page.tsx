"use client";

import { useMemo, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { AIExperiments } from "@/components/AIExperiments";
import { Blog } from "@/components/Blog";
import { ProductProcess } from "@/components/ProductProcess";
import { Contact } from "@/components/Contact";
import type { Language } from "@/lib/translations";
import { translations } from "@/lib/translations";

export default function Page() {
  const [language, setLanguage] = useState<Language>("en");
  const t = translations[language];

  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="min-h-screen bg-mesh-gradient">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(800px_400px_at_50%_-10%,rgba(255,255,255,0.10),transparent_55%)]" />
      <div className="relative">
        <Navbar
          language={language}
          onToggleLanguage={() =>
            setLanguage((l) => (l === "en" ? "zh" : "en"))
          }
        />

        <main>
          <Hero language={language} />
          <About language={language} />
          <Skills language={language} />
          <Projects language={language} />
          <AIExperiments language={language} />
          <Blog language={language} />
          <ProductProcess language={language} />
          <Contact language={language} />
        </main>

        <footer className="mx-auto max-w-6xl px-4 pb-10">
          <div className="glass rounded-2xl px-6 py-5 text-sm text-white/60">
            {t.footer.copyright.replace("{year}", String(year))}
          </div>
        </footer>
      </div>
    </div>
  );
}

