// ─────────────────────────────────────────────────────────────────────────────
// Coming-soon holding page for Sparks.
//
// Full-screen dark overlay with ambient glow, grain texture, artwork mosaic,
// and entrance animations. Newsreader serif headline, Inter chrome, #d97757.
// `robots: noindex` in layout.tsx — flip when launching.
// ─────────────────────────────────────────────────────────────────────────────

import Image from "next/image";
import { WaitlistForm } from "./WaitlistForm";
import "./soon.css";

/* ── Mosaic images — 2 per source type ─────────────────────────────────── */
const MOSAIC = [
  { src: "/mosaic/film-inception.png",            alt: "Inception" },
  { src: "/mosaic/music-bohemian-rhapsody.png",   alt: "Bohemian Rhapsody" },
  { src: "/mosaic/philosophy-trolley-problem.png", alt: "The Trolley Problem" },
  { src: "/mosaic/art-flower-thrower.png",         alt: "Flower Thrower" },
  { src: "/mosaic/science-choice-overload.png",    alt: "Choice Overload" },
  { src: "/mosaic/news-plastic-packaging.png",     alt: "Plastic Packaging" },
  { src: "/mosaic/film-truman-show.png",           alt: "The Truman Show" },
  { src: "/mosaic/music-hallelujah.png",           alt: "Hallelujah" },
  { src: "/mosaic/philosophy-sisyphus.png",        alt: "The Myth of Sisyphus" },
  { src: "/mosaic/art-spilliaert.jpg",             alt: "Self-portrait" },
  { src: "/mosaic/science-food-insecurity.png",    alt: "Food Insecurity" },
  { src: "/mosaic/news-retirement-denmark.png",    alt: "Retirement Age" },
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
          honest<span className="soon-accent">.</span>
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
          {SOURCES.map((s, i) => (
            <span key={s} className="soon-source-pill">
              {s}
            </span>
          ))}
        </div>

        <div className="anim-fade anim-d4" style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <WaitlistForm />
        </div>

        <p className="soon-micro anim-fade anim-d5">
          Join the waitlist — we'll let you know the moment we launch.
          <br />
          No spam, ever.
        </p>
      </div>
    </div>
  );
}
