import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// 1. تعريف Thmanyah Sans
const thmanyahSans = localFont({
  src: [
    { path: "./fonts/thmanyahsans_regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/thmanyahsans_bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/thmanyahsans_black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-thmanyah-sans", // الاسم السري 1
  display: "swap",
});

// 2. تعريف Thmanyah Serif (المهم)
const thmanyahSerif = localFont({
  src: [
    { path: "./fonts/thmanyahseriftext_medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/thmanyahseriftext_black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-thmanyah-serif", // الاسم السري 2
  display: "swap",
});

// 3. تعريف Acumin
const acumin = localFont({
  src: [
    { path: "./fonts/Acumin-RPro.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Acumin-BdPro.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-acumin", // الاسم السري 3
  display: "swap",
});

export const metadata: Metadata = {
  // 1. العنوان: اسم الوكالة واضح وقوي
  title: "وكالة تخيُّل | Imagination Agency",
  
  // 2. الوصف: دمجنا (الرياض والقاهرة) + (ميديا شاملة) + (رؤية وأثر)
  description: "شريكك الإبداعي في الرياض والقاهرة. وكالة متكاملة للإنتاج الإعلامي، الحلول البصرية، وبناء العلامات التجارية. نحول الأفكار إلى تجارب تترك أثراً لا يُنسى. | Your creative partner in Riyadh & Cairo. Full-service agency for media production, visual solutions, and branding. Crafting unforgettable experiences.",
  
  // 3. كلمات مفتاحية (عشان محركات البحث تلاقيكم في المجالين)
  keywords: [
    "Media Production", "Branding", "Visual Identity", "Riyadh", "Cairo", 
    "إنتاج إعلامي", "تصميم جرافيك", "هوية بصرية", "إعلانات", "الرياض", "القاهرة", "وكالة دعاية وإعلان"
  ],

  icons: {
    icon: [
      { url: "/logo-icon.svg", type: "image/svg+xml" },
    ],
  },

  openGraph: {
    title: "وكالة تخيُّل | Imagination Agency",
    description: "شريكك الإبداعي في الرياض والقاهرة للإنتاج الإعلامي والحلول البصرية.",
    url: "https://imagination-agency.vercel.app",
    siteName: "Imagination Agency",
    images: [
      {
        // ⚠️ (تعديل هام جداً) اكتبي الرابط كاملاً
        url: "https://imagination-agency.vercel.app/social-preview.png",
        width: 1200,
        height: 630,
        alt: "Imagination Agency - Riyadh & Cairo",
      },
    ],
    locale: "ar_SA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      {/* هنا بنحقن الاسماء السرية في الموقع */}
      <body className={`${thmanyahSans.variable} ${thmanyahSerif.variable} ${acumin.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}