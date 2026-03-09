import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#070A12",
          800: "#0B1020",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.08), 0 20px 80px rgba(0,0,0,0.55)",
      },
      backgroundImage: {
        "mesh-gradient":
          "radial-gradient(1200px 600px at 15% 20%, rgba(99,102,241,0.25), transparent 55%), radial-gradient(1000px 500px at 85% 10%, rgba(16,185,129,0.22), transparent 55%), radial-gradient(1100px 650px at 60% 85%, rgba(236,72,153,0.18), transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;

