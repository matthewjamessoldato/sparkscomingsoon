// ─────────────────────────────────────────────────────────────────────────────
// Coming-soon holding page for Sparks.
//
// Full-screen dark overlay with ambient glow, grain texture, artwork mosaic,
// and entrance animations. Newsreader serif headline, Inter chrome, #d97757.
// `robots: noindex` in layout.tsx — flip when launching.
// ─────────────────────────────────────────────────────────────────────────────

import Image from "next/image";
import { RotatingWord } from "./RotatingWord";
import { WaitlistForm } from "./WaitlistForm";
import "./soon.css";

/* ── Mosaic images — 2 per source type ─────────────────────────────────── */
const MOSAIC = [
  { src: "/mosaic/film-inception.webp",        alt: "Inception lesson" },
  { src: "/mosaic/music-hey-ya.webp",          alt: "Hey Ya! lesson" },
  { src: "/mosaic/philosophy-lifeboat.png",    alt: "The Lifeboat lesson" },
  { src: "/mosaic/art-great-wave.jpg",         alt: "The Great Wave off Kanagawa" },
  { src: "/mosaic/science-gorilla.webp",       alt: "The Invisible Gorilla lesson" },
  { src: "/mosaic/news-notre-dame.webp",       alt: "Notre-Dame fire lesson" },
  { src: "/mosaic/film-la-la-land.webp",       alt: "La La Land lesson" },
  { src: "/mosaic/music-stand-by-me.webp",     alt: "Stand by Me lesson" },
  { src: "/mosaic/philosophy-sisyphus.png",    alt: "The Myth of Sisyphus lesson" },
  { src: "/mosaic/art-the-kiss.jpg",           alt: "The Kiss — Klimt" },
  { src: "/mosaic/science-sleep-loss.webp",    alt: "Sleep Loss lesson" },
  { src: "/mosaic/news-chile-miners.webp",     alt: "Chile miners rescue lesson" },
];

const SOURCES = ["film", "music", "art", "science", "philosophy", "news"] as const;

export default function SoonPage() {
  return (
    <div className="soon-shell">
      {/* ── Background mosaic ──────────────────────────────────────────── */}
      <div className="soon-mosaic" aria-hidden="true">
        {MOSAIC.map((img) => (
          <div key={img.src} className="soon-mosaic-cell">
            <Image
              src={img.src}
              alt=""
              width={400}
              height={400}
              quality={60}
              loading="eager"
              draggable={false}
            />
          </div>
        ))}
      </div>
      <div className="soon-mosaic-vignette" aria-hidden="true" />

      {/* ambient glow behind the headline */}
      <div className="soon-glow" aria-hidden="true" />
      {/* film-grain texture overlay */}
      <div className="soon-grain" aria-hidden="true" />

      <div className="soon-stage">
        <span className="soon-wordmark anim-fade anim-d1">
          sparks<span className="soon-wordmark-dot">.</span>
        </span>

        <div className="soon-rule anim-fade anim-d2" aria-hidden="true" />

        <h1 className="soon-headline anim-fade anim-d2">
          <RotatingWord />
        </h1>

        <p className="soon-lede anim-fade anim-d3">
          Source-led English lessons built around real art, film, music,
          science, philosophy, and news.
        </p>

        <p className="soon-sublede anim-fade anim-d3">
          No filler. No fluff. Just&nbsp;honest.
        </p>

        {/* ── Source-type strip ─────────────────────────────────────────── */}
        <div className="soon-sources anim-fade anim-d3">
          {SOURCES.map((s) => (
            <span key={s} className="soon-source-pill">
              {s}
            </span>
          ))}
        </div>

        {/* ── Waitlist ───────────────────────────────────────────────────── */}
        <div className="soon-cta-block anim-fade anim-d4">
          <p className="soon-cta-head">Be the first to know when we launch.</p>
          <WaitlistForm />
          <p className="soon-micro">No spam, ever — just one email the day we go live.</p>
        </div>
      </div>
    </div>
  );
}
