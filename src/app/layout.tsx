import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Provider } from "@/components/ui/provider"
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Konsultprofil | Joatin Granlund",
  description: "Jag är senior tech lead och systemarkitekt med över 10 års erfarenhet av att leda och modernisera komplexa backend‑ och cloud‑lösningar i enterprise‑miljöer. Jag har drivit leveranser, designat robusta system i AWS och Azure, och coachat team mot leverans och hållbar teknisk kvalitet. Jag hjälper organisationer att röra sig mot moderna molnarkitekturer, tekniska riktlinjer och skalbara plattformar med fokus på stabilitet, säkerhet och affärsnytta.",
  metadataBase: new URL("https://granlund.io"),
  openGraph: {
    siteName: "Konsultprofil | Joatin Granlund",
    type: "website",
    locale: "sv_SE"
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow"
  },
  applicationName: "Konsultprofil | Joatin Granlund",
  keywords: [
    "Joatin Granlund",
    "systemutveckling",
    "full-stack",
    "react",
    "typescript",
    "ai"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" suppressHydrationWarning>
      <GoogleTagManager gtmId="G-QGGS50P0B5" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Provider>{children}</Provider>
      </body>
    </html>
  );
}
