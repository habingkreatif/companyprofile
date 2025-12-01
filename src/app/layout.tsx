import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Habs Konstruksi Karya - Jasa Konstruksi & Renovasi Profesional",
  description:
    "Habs Konstruksi Karya menyediakan jasa perencanaan, konstruksi, management proyek, desain 2D/3D & RAB, make over interior & eksterior, kitchen set, atap & plafon anti bocor, dan instalasi MEP dengan garansi 6 bulan.",
  icons: {
    icon: "/51.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
