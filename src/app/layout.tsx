import React from "react";
import type { Metadata } from "next";
import { Outfit, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

// 1. إعداد الخط الإنجليزي (سميناه fontEnglish عشان نستخدمه للنصوص الإنجليزية)
const fontEnglish = Outfit({
  subsets: ["latin"],
  variable: "--font-english", // الاسم الجديد
  weight: ["300", "400", "500", "600", "700"],
});

// 2. إعداد الخط العربي (سميناه fontArabic عشان نستخدمه للعناوين العربية)
const fontArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic", // الاسم الجديد
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  // العنوان والوصف (ممكن يتغيروا لما ابن خالتك يختار الصيغة النهائية)
  title: "وكالة تخيُّل | Imagination Agency",
  description: "وكالة تصميم تجارب عالمية مقرها المملكة العربية السعودية. نحول الشغف إلى واقع. | Global experience design agency based in KSA.",
  
  // 3. أيقونة الموقع (Favicon)
  icons: {
    icon: [
      { url: "/logo-icon.svg", type: "image/svg+xml" },
    ],
  },

  // 4. إعدادات واتساب والسوشيال ميديا (عشان الصورة تظهر في الرابط)
  openGraph: {
    title: "وكالة تخيُّل | Imagination Agency",
    description: "نحول الشغف إلى واقع. وكالة تصميم تجارب عالمية في السعودية.",
    url: "https://imagination-agency.vercel.app",
    siteName: "Imagination Agency",
    images: [
      {
        url: "/social-preview.png", // ⚠️ تأكدي إنك حطيتي صورة PNG بالاسم ده في فولدر public
        width: 1200,
        height: 630,
        alt: "Imagination Agency Preview",
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
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body
        // 5. هنا ربطنا المتغيرات الجديدة بالموقع كله
        className={`${fontArabic.variable} ${fontEnglish.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}


// Force update colors - Final Version 🚀