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
        
        // 1. حلقة التركيز (بيج غامق)
        ring: "#998472", 
        
        // 2. الخلفية (بيج كريمي)
        background: "#FAF9F6", 
        
        // 3. النصوص (بني محروق - Dark Espresso)
        foreground: "#2E2522", 
        
        // 4. اللون الأساسي (بيج غامق - Dark Taupe)
        primary: {
          DEFAULT: "#998472", 
          foreground: "#ffffff", 
        },
        
        // 5. اللون الثانوي (أحمر طوبي خافت - Terracotta)
        secondary: {
          DEFAULT: "#C06C5B", 
          foreground: "#ffffff", 
        },
        
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        
        // 6. اللون الهادي (بيج بني فاتح - مش رمادي)
        muted: {
          DEFAULT: "#E6DED5", 
          foreground: "#6B5D55",
        },
        
        // 7. اللمسات (Terracotta)
        accent: {
          DEFAULT: "#C06C5B", 
          foreground: "#ffffff",
        },
        
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#2E2522",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#2E2522",
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