/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "#0B0D10", // brand.background
        foreground: "#E4DED4", // brand.primaryText
        card: {
          DEFAULT: "#12151A", // brand.surface
          foreground: "#E4DED4",
        },
        popover: {
          DEFAULT: "#12151A",
          foreground: "#E4DED4",
        },
        primary: {
          DEFAULT: "#B08B4F", // brand.gold
          foreground: "#0B0D10",
        },
        secondary: {
          DEFAULT: "#1A1E24", // brand.muted (muted)
          foreground: "#A7A094",
        },
        muted: {
          DEFAULT: "#1A1E24",
          foreground: "#A7A094", // brand.mutedText
        },
        accent: {
          DEFAULT: "#C7A96B", // brand.goldText
          foreground: "#0B0D10",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "rgba(255, 255, 255, 0.08)", // subtle border
        input: "rgba(255, 255, 255, 0.08)",
        ring: "#B08B4F", // gold ring
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        accent: ["var(--font-caveat)", "cursive"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
