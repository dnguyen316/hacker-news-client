import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        neutral: {
          950: "#0A0A0A",
          900: "#171717",
          700: "#404040",
          600: "#525252",
          400: "#A3A3A3",
          200: "#E5E5E5",
          50: "#FAFAFA",
        },
        stone: {
          50: "#FAFAF9",
        },
        orange: {
          600: "#EA580C",
          500: "#F97316",
          50: "#FFF7ED",
        },
      },
      fontFamily: {
        sans: ["var(--font-noto-sans)"],
        mono: ["var(--font-noto-mono)"],
      },
      fontSize: {
        xs: ["0.75rem", "1rem"],
        sm: ["0.875rem", "1.25rem"],
        base: ["1rem", "1.5rem"],
        lg: ["1.125rem", "1.75rem"],
        xl: ["1.25rem", "1.75rem"],
        "2xl": ["1.5rem", "2rem"],
        "3xl": ["1.875rem", "2.25rem"],
        "4xl": ["2.25rem", "2.5rem"],
      },
    },
  },
  plugins: [],
} satisfies Config;
