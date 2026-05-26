import type { Metadata } from "next";
import { Newsreader, Inter } from "next/font/google";
import "./globals.css";

const SITE_URL = "https://sparksesl.com";

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
  title: "Sparks — Source-Led ESL Conversation Lessons | Art, Film, Music & More",
  description:
    "Premium adult ESL conversation lessons built around real art, film, music, science and philosophy. CEFR-aligned A2–C1. No textbook filler — every lesson starts with a real cultural source.",
  keywords: [
    "online ESL course",
    "adult ESL conversation lessons",
    "learn English through film",
    "learn English with music",
    "ESL speaking practice",
    "CEFR English course online",
    "B1 B2 English lessons",
    "ESL lesson plans for adults",
    "English conversation class online",
    "source-based English lessons",
    "premium ESL subscription",
    "Sparks ESL",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Sparks — Source-Led ESL Conversation Lessons",
    description:
      "Premium adult ESL conversation lessons built around real art, film, music, science and philosophy. CEFR-aligned. No textbook filler.",
    siteName: "Sparks",
    url: SITE_URL,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sparks — Source-Led ESL Conversation Lessons",
    description:
      "Premium adult ESL conversation lessons built around real art, film, music, science and philosophy. CEFR-aligned. No textbook filler.",
  },
};

/* ── JSON-LD structured data ──────────────────────────────────────────── */
const organizationLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Sparks",
  url: SITE_URL,
  description:
    "Source-led ESL conversation lessons built around real art, film, music, science, philosophy, and news.",
  areaServed: "Worldwide",
  teaches: "English as a Second Language",
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Sparks",
  url: SITE_URL,
  description:
    "Premium adult ESL conversation lessons built around real cultural sources.",
  inLanguage: "en",
};

const courseLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Sparks ESL Conversation Course",
  description:
    "Source-led English conversation lessons for adults, built around real art, film, music, science, philosophy, and news. CEFR-aligned A2 to C1.",
  provider: {
    "@type": "EducationalOrganization",
    name: "Sparks",
    url: SITE_URL,
  },
  educationalLevel: ["A2", "B1", "B2", "C1"],
  inLanguage: "en",
  teaches: "English as a Second Language",
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "online",
    courseWorkload: "PT1H",
  },
  offers: {
    "@type": "Offer",
    category: "Subscription",
    availability: "https://schema.org/PreOrder",
    url: SITE_URL,
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is source-led English learning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Source-led learning uses a real cultural artifact — a painting, a song, a film scene, a news story — as the spine of a language lesson. Students acquire vocabulary and grammar through the source rather than from a textbook unit.",
      },
    },
    {
      "@type": "Question",
      name: "Can you learn English through film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Film scenes supply natural spoken models, emotional context, and discussion fuel. A single scene can power a 60-minute lesson: prediction, comprehension, language extraction, and extended discussion all emerge from the same clip.",
      },
    },
    {
      "@type": "Question",
      name: "Can you learn English through music?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Song lyrics deliver rhythm, repetition, and emotional hooks that aid retention. The key is selecting songs whose language maps to a specific CEFR level and building tasks around the meaning, not just gap-fills.",
      },
    },
    {
      "@type": "Question",
      name: "What CEFR level should I study at?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CEFR levels range from A1 (beginner) to C2 (mastery). Most adult learners returning to English after school are B1 (intermediate). A placement test or a short conversation with a teacher can identify your level in under 10 minutes.",
      },
    },
    {
      "@type": "Question",
      name: "What makes a good ESL conversation lesson?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A clear speaking outcome, a concrete anchor that prevents drift, language pitched at the declared level, and tasks that make every student talk. If only the teacher or the strongest student speaks, the lesson has failed.",
      },
    },
    {
      "@type": "Question",
      name: "Do ESL students need textbooks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Textbooks provide structure but often lack authentic material and real speaking time. Supplementing or replacing textbook units with source-led lessons gives students richer input and more talk time per hour.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationLd, websiteLd, courseLd, faqLd]),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
