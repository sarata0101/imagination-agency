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
        
        // 1. حلقة التركيز (خليناها سوداء بدل البنفسجي)
        ring: "#1A1A1A", 
        
        // 2. الخلفية (البيج الكريمي الجديد)
        background: "#FAF9F6", 
        
        // 3. النصوص (أسود صريح)
        foreground: "#1A1A1A", 
        
        // 4. اللون الأساسي (أسود للزراير)
        primary: {
          DEFAULT: "#1A1A1A", 
          foreground: "#ffffff", 
        },
        
        // 5. اللون الثانوي (الأحمر الخافت Terracotta)
        secondary: {
          DEFAULT: "#8D5B4C", 
          foreground: "#ffffff", 
        },
        
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        
        // 6. اللون الهادي (بيج رمادي فاتح)
        muted: {
          DEFAULT: "#EBEAE6", 
          foreground: "hsl(var(--muted-foreground))",
        },
        
        // 7. اللمسات (نفس الأحمر الخافت)
        accent: {
          DEFAULT: "#8D5B4C", 
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