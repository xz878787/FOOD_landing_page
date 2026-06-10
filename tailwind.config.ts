import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        foodiez: {
          orange: "#FF6B35",
          coral: "#FF8A5B",
          green: "#16A34A",
          ink: "#1F2937",
          cream: "#FFF7F1",
        },
      },
      boxShadow: {
        soft: "0 18px 50px rgba(31, 41, 55, 0.10)",
        glow: "0 18px 45px rgba(255, 107, 53, 0.28)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
