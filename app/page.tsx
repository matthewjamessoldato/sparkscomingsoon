// ─────────────────────────────────────────────────────────────────────────────
// Coming-soon holding page for Spark.
//
// Full-screen dark overlay. Newsreader serif headline mirrors the main
// landing's "honest." treatment. Email capture wired to Resend audience.
// `robots: noindex` in layout.tsx — flip when launching.
// ─────────────────────────────────────────────────────────────────────────────

import { WaitlistForm } from "./WaitlistForm";
import "./soon.css";

export default function SoonPage() {
  return (
    <div className="soon-shell">
      <div className="soon-stage">
        <span className="soon-kicker">Coming Soon</span>

        <span className="soon-wordmark">
          spark<span className="soon-wordmark-dot">.</span>
        </span>

        <h1 className="soon-headline">
          honest<span className="soon-accent">.</span>
        </h1>

        <p className="soon-lede">
          Source-led English lessons built around real art, film, music, science,
          philosophy, and news. No filler. No fluff. Just&nbsp;honest.
        </p>

        <WaitlistForm />

        <p className="soon-micro">
          Join the waitlist — we'll let you know the moment we launch. No spam,
          ever.
        </p>
      </div>
    </div>
  );
}
