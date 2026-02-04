/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "#49368c", // (تعديل) خليناه لون البراند البنفسجي
        background: "#f6f5f5", // (تعديل) لون الخلفية الأوف وايت بتاعكم
        foreground: "#1a1a1a", // لون الكلام (أسود غامق)
        primary: {
          DEFAULT: "#49368c", // (تعديل) اللون البنفسجي الأساسي
          foreground: "#ffffff", // الكلام اللي فوقه يكون أبيض
        },
        secondary: {
          DEFAULT: "#4fb27d", // (تعديل) اللون الأخضر الثانوي
          foreground: "#ffffff", // الكلام اللي فوقه يكون أبيض
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#f0f0f0", // لون رمادي فاتح جداً
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "#4fb27d", // (تعديل) خليناه الأخضر برضه عشان التناسق
          foreground: "#ffffff",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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