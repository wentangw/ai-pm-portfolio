import "./globals.css";

export const metadata = {
  title: "AI Product Manager | Portfolio",
  description:
    "AI Product Manager portfolio. Bilingual (EN/中文). Next.js + Tailwind + Framer Motion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-ink-900 text-white antialiased">
        {children}
      </body>
    </html>
  );
}

