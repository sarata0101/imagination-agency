import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// 1. تحميل خط ثمانية (Serif)
const thmanyah = localFont({
  src: [
    {
      path: "../public/fonts/thmanyahseriftext_medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/thmanyahseriftext_black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-thmanyah", // ده الاسم اللي هنستخدمه في CSS
  display: "swap",
});

// 2. تحميل خط Acumin
const acumin = localFont({
  src: [
    {
      path: "../public/fonts/Acumin-RPro.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Acumin-BdPro.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-acumin",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Imagination Agency",
  description: "Full-service creative studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      {/* 3. حقن المتغيرات هنا عشان الموقع كله يشوفها */}
      <body className={`${thmanyah.variable} ${acumin.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}