import type { Metadata } from "next";
import { Newsreader, Inter } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sparks — Source-led English lessons",
  description:
    "Conversation lessons built around real art, film, music, science, philosophy, and news. No filler. No fluff. Just honest.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Sparks — Source-led English lessons",
    description:
      "Conversation lessons built around real art, film, music, science, philosophy, and news. No filler. No fluff. Just honest.",
    siteName: "Sparks",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sparks — Source-led English lessons",
    description:
      "Conversation lessons built around real art, film, music, science, philosophy, and news.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
