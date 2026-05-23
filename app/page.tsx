// ─────────────────────────────────────────────────────────────────────────────
// Coming-soon holding page for Sparks.
//
// Full-screen dark overlay with ambient glow, grain texture, and entrance
// animations. Newsreader serif headline, Inter chrome, accent #d97757.
// `robots: noindex` in layout.tsx — flip when launching.
// ─────────────────────────────────────────────────────────────────────────────

import { WaitlistForm } from "./WaitlistForm";
import "./soon.css";

export default function SoonPage() {
  return (
    <div className="soon-shell">
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
