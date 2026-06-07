// ─────────────────────────────────────────────────────────────────────────────
// Coming-soon page for Sparks.
//
// Static server component with small client islands for the rotating hero word,
// scroll reveal, and Resend-wired waitlist form. Imagery is the current Sparks
// lesson thumbnail set copied from the main Spark repo under /public/illustrations.
// ─────────────────────────────────────────────────────────────────────────────

import { RotatingWord } from "./RotatingWord";
import { RevealObserver } from "./RevealObserver";
import { WaitlistForm } from "./WaitlistForm";
import "./soon.css";

/* ── Hero mosaic tiles ───────────────────────────────────────────────────
   Canonical current Spark lesson thumbnails, pulled from the main repo:
   /illustrations/specials/<family>/<lesson-id>/thumb.webp. ─────────────── */
const MOSAIC = [
  "/illustrations/specials/art/art-the-great-wave-off-kanagawa/thumb.webp",
  "/illustrations/specials/film/film-inception-youre-in-a-dream/thumb.webp",
  "/illustrations/specials/art/art-mona-lisa/thumb.webp",
  "/illustrations/specials/music/music-hey-ya/thumb.webp",
  "/illustrations/specials/art/art-the-starry-night/thumb.webp",
  "/illustrations/specials/news/news-a-cathedral-burned-1-billion-arrived-in-48-hours/thumb.webp",
  "/illustrations/specials/philosophy/philosophy-the-myth-of-sisyphus/thumb.webp",
  "/illustrations/specials/literature/literature-sonnet-18/thumb.webp",
  "/illustrations/specials/science/science-half-the-room-misses-the-gorilla/thumb.webp",
  "/illustrations/specials/art/art-girl-with-a-pearl-earring/thumb.webp",
  "/illustrations/specials/film/film-la-la-land-this-is-not-your-dream/thumb.webp",
  "/illustrations/specials/news/news-four-minutes-broken-at-last/thumb.webp",
  "/illustrations/specials/music/music-bohemian-rhapsody/thumb.webp",
  "/illustrations/specials/art/art-the-raft-of-the-medusa/thumb.webp",
  "/illustrations/specials/news/news-33-men-69-days-all-safe/thumb.webp",
  "/illustrations/specials/philosophy/philosophy-the-trolley-problem/thumb.webp",
  "/illustrations/specials/art/art-wanderer-above-the-sea-of-fog/thumb.webp",
  "/illustrations/specials/science/science-sleep-loss-is-like-being-drunk/thumb.webp",
  "/illustrations/specials/art/art-saturn-devouring-his-son/thumb.webp",
  "/illustrations/specials/film/film-the-truman-show-talking-to-the-creator/thumb.webp",
  "/illustrations/specials/literature/literature-hamlet-to-be-or-not-to-be/thumb.webp",
  "/illustrations/specials/music/music-stand-by-me/thumb.webp",
  "/illustrations/specials/art/art-water-lilies/thumb.webp",
  "/illustrations/specials/news/news-tested-clean-drove-dirty-11-million-cars/thumb.webp",
  "/illustrations/specials/art/art-the-creation-of-adam/thumb.webp",
  "/illustrations/specials/science/science-why-your-favorite-song-gives-you-chills/thumb.webp",
  "/illustrations/specials/philosophy/philosophy-the-ship-of-theseus/thumb.webp",
  "/illustrations/specials/art/art-the-milkmaid/thumb.webp",
  "/illustrations/specials/film/film-the-matrix-the-last-chance/thumb.webp",
  "/illustrations/specials/music/music-hallelujah/thumb.webp",
  "/illustrations/specials/art/art-the-tower-of-babel/thumb.webp",
  "/illustrations/specials/art/art-olympia/thumb.webp",
  "/illustrations/specials/literature/literature-if/thumb.webp",
  "/illustrations/specials/news/news-lost-on-a-train-found-on-google-earth/thumb.webp",
  "/illustrations/specials/science/science-walking-through-a-doorway-makes-you-forget/thumb.webp",
  "/illustrations/specials/philosophy/philosophy-who-do-you-owe-first/thumb.webp",
];

const SOURCES = ["film", "music", "art", "science", "philosophy", "literature", "news"] as const;

/* ── Source gallery ─────────────────────────────────────────────────────── */
type GalleryCard = {
  img: string;
  fam: string;
  label: string;
  color: string;
  src: string;
  meta: string;
  alt: string;
  cut?: boolean;
};
const GALLERY: GalleryCard[] = [
  {
    img: "/illustrations/specials/film/film-inception-youre-in-a-dream/thumb.webp",
    fam: "film",
    label: "Film",
    color: "var(--c-film)",
    src: "Inception: You're in a Dream",
    meta: "Christopher Nolan, 2010 · C2",
    alt: "A still evoking Inception — a city folding over itself",
  },
  {
    img: "/illustrations/specials/music/music-hey-ya/thumb.webp",
    fam: "music",
    label: "Music",
    color: "var(--c-music)",
    src: "Hey Ya!",
    meta: "OutKast, 2003 · B2",
    alt: "A house party, two people dancing as a record plays",
  },
  {
    img: "/illustrations/specials/art/art-the-great-wave-off-kanagawa/thumb.webp",
    fam: "art",
    label: "Art",
    color: "var(--c-art)",
    src: "The Great Wave off Kanagawa",
    meta: "Hokusai, c. 1830 · A2",
    alt: "The Great Wave off Kanagawa by Hokusai",
  },
  {
    img: "/illustrations/specials/news/news-33-men-69-days-all-safe/thumb.webp",
    fam: "news",
    label: "News",
    color: "var(--c-news)",
    src: "The 33 men under the mountain",
    meta: "The 2010 Chile mine rescue · A2",
    alt: "Chilean miners being rescued from underground in 2010",
  },
  {
    img: "/illustrations/specials/science/science-half-the-room-misses-the-gorilla/thumb.webp",
    fam: "science",
    label: "Science",
    color: "var(--c-science)",
    src: "Half the Room Misses the Gorilla",
    meta: "Selective attention · C1",
    alt: "The invisible gorilla selective-attention experiment",
  },
  {
    img: "/illustrations/specials/philosophy/philosophy-the-myth-of-sisyphus/thumb.webp",
    fam: "philosophy",
    label: "Philosophy",
    color: "var(--c-philosophy)",
    src: "Sisyphus Must Be Happy",
    meta: "Albert Camus, 1942 · C1",
    alt: "An engraving of Sisyphus pushing his boulder up the mountain",
  },
  {
    img: "/illustrations/specials/literature/literature-sonnet-18/thumb.webp",
    fam: "literature",
    label: "Literature",
    color: "var(--c-literature)",
    src: "Sonnet 18",
    meta: "William Shakespeare, 1609 · B2",
    alt: "A warm illustrated scene for Shakespeare's Sonnet 18",
  },
];

/* ── New flexible lesson showcase: Sonnet 18 ────────────────────────────── */
type ShowcaseSlide = {
  n: string;
  k: string;
  h: string;
  time: string;
  body?: string;
  quote?: string;
  lang?: string[];
};
const SHOWCASE_SLIDES: ShowcaseSlide[] = [
  {
    n: "01",
    k: "Lead-in",
    h: "What makes something last forever?",
    time: "5 min",
    quote:
      "Can you think of something made by a human being that you believe will still be remembered in 500 years?",
  },
  {
    n: "02",
    k: "Pre-reading",
    h: "Key words before you read",
    time: "5 min",
    lang: ["eternal", "temperate", "complexion", "fair", "fade"],
  },
  {
    n: "03",
    k: "Source text",
    h: "Sonnet 18 — William Shakespeare",
    time: "5 min",
    quote:
      "Shall I compare thee to a summer's day? Thou art more lovely and more temperate.",
  },
  {
    n: "04",
    k: "Comprehension",
    h: "What does Shakespeare actually say?",
    time: "7 min",
    body:
      "Students answer from the poem, not from memory: the summer comparison, the short lease of beauty, the sun metaphor, and the final couplet.",
  },
  {
    n: "05",
    k: "Language focus",
    h: "Contrast and certainty",
    time: "8 min",
    body:
      "The language comes from the source: contrast, concession, and absolute certainty.",
    lang: [
      "Unlike…, you…",
      "While…may fade, …will endure",
      "As long as…, so too will…",
    ],
  },
  {
    n: "06",
    k: "Deeper discussion",
    h: "What is Shakespeare really claiming?",
    time: "10 min",
    body:
      "Small groups choose a question: arrogant or romantic? More powerful without a named person? Does art really outlive beauty?",
  },
  {
    n: "07",
    k: "Critical thinking",
    h: "Timeless, or showing its age?",
    time: "10 min",
    quote:
      "Half the class argues timeless. Half argues dated. Prepare for two minutes, then debate.",
  },
  {
    n: "08",
    k: "Production task",
    h: "A modern version",
    time: "8 min",
    body:
      "Rewrite the argument of Sonnet 18 for today. What would you compare a person to instead of a summer's day?",
  },
  {
    n: "09",
    k: "Reflection",
    h: "One minute, one thought",
    time: "2 min",
    quote:
      "What is one idea from today's lesson — from the poem or from the discussion — that you want to keep thinking about?",
  },
];

export default function SoonPage() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <RevealObserver />

      {/* ══════════════ HERO ══════════════ */}
      <header className="hero" id="top">
        <div className="hero-mosaic" aria-hidden="true">
          {/* Plain <img> (not next/image): the image wall relies
              on every tile keeping a stable square crop. The images are
              repeated so the drifting wall always fills wide and tall screens;
              duplicates are served from cache, and the vignette hides the seam. */}
          {[...MOSAIC, ...MOSAIC, ...MOSAIC, ...MOSAIC].map((src, i) => {
            const delay = 90 + ((i * 137) % 1040);

            return (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={`${src}-${i}`}
                src={src}
                alt=""
                loading="eager"
                decoding="async"
                draggable={false}
                style={{ animationDelay: `${delay}ms` }}
              />
            );
          })}
        </div>
        <div className="hero-vignette" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />

        <div className="hero-copy">
          <span className="hero-kicker fx d1">
            Source-led English for adult classes
          </span>
          <span className="wordmark fx d1">
            sparks<span className="dot">.</span>
          </span>
          <h1 className="hero-h1 fx d2">
            <span className="lead-in">Walk into class with</span>
            <RotatingWord />
          </h1>
          <p className="hero-lede fx d3">
            Coming soon: ready-to-teach conversation lessons for adults, built
            around real sources. Each Spark becomes the hour its source needs —
            up to nine clear slides, from A1 to C2.
          </p>
          <p className="hero-sublede fx d3">
            Join the waitlist and get the first teacher-ready lessons when we open.
          </p>

          <p className="source-line fx d4">
            {SOURCES.join(" / ")}
          </p>

          <div
            className="hero-form fx d5"
          >
            <div className="wl-proof">
              <span className="proof-dot" />
              Early access for teachers
            </div>
            <p className="wl-head">Be the first to teach with Sparks.</p>
            <WaitlistForm
              buttonLabel="Join the waitlist"
              micro="One launch email. No spam. Built for teachers first."
            />
          </div>
        </div>

        <a className="scroll-cue" href="#anatomy" aria-label="Scroll to see the example lesson">
          <span>See example lesson</span>
          <span className="ln" />
        </a>
      </header>

      {/* ══════════════ THE IDEA ══════════════ */}
      <section className="section idea" id="idea">
        <div className="wrap">
          <div className="kicker reveal">01 · The idea</div>
          <h2 className="idea-lead reveal">
            A real source becomes a <span>speaking hour</span>.
          </h2>
          <p className="idea-body reveal">
            Sparks turns art, literature, music, film, science, philosophy and
            news into complete adult conversation lessons. The source sets the
            route: sometimes vocabulary first, sometimes the text immediately,
            sometimes a debate, a rewrite, or a single question that carries the
            room.
          </p>

          <div className="idea-grid reveal">
            <div className="idea-cell">
              <span className="n">A · Source first</span>
              <h3>The material leads</h3>
              <p>
                A sonnet should not move like a film scene. A news story should
                not move like a song. The source sets the rhythm, the language,
                and the task.
              </p>
            </div>
            <div className="idea-cell">
              <span className="n">B · Up to nine slides</span>
              <h3>Enough, never padded</h3>
              <p>
                A Spark is short enough to scan before class and complete enough
                to carry the hour. Every slide has to earn its place.
              </p>
            </div>
            <div className="idea-cell">
              <span className="n">C · Teacher-ready</span>
              <h3>Open it and teach</h3>
              <p>
                Clear timing, visible speaking tasks, usable language, and a
                final moment that makes adults talk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ SOURCES ══════════════ */}
      <section className="section sources" id="sources">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <div className="kicker" style={{ marginBottom: 0 }}>
                02 · Where we start
              </div>
              <h2 className="sec-title">Seven places a lesson can begin.</h2>
            </div>
            <p className="sec-note">
              A painting, song, poem, scene, study or headline can each become a
              complete hour of adult speaking.
            </p>
          </div>

          <div className="gallery">
            {GALLERY.map((g) => (
              <article
                key={g.src}
                className={"gcard reveal" + (g.cut ? " gcard-cut" : "")}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={g.img} alt={g.alt} loading="lazy" />
                <div className="gcard-body">
                  <span className="gcard-tag" style={{ color: g.color }}>
                    <span className="dot" style={{ background: g.color }} />
                    {g.label}
                  </span>
                  <div className="gcard-src">{g.src}</div>
                  <div className="gcard-meta">{g.meta}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ ANATOMY ══════════════ */}
      <section className="section anatomy" id="anatomy">
        <div className="wrap">
          <div className="kicker reveal" style={{ marginBottom: 48 }}>
            03 · Example rebuilt lesson
          </div>
          <div className="ana-grid">
            <div className="ana-figure reveal">
              <div className="ana-mount">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/illustrations/specials/literature/literature-sonnet-18/thumb.webp"
                  alt="Illustrated portrait of William Shakespeare on a dark blue background"
                />
              </div>
              <div className="ana-cap">
                <span className="dot" />
                Literature · B2 speaking lesson
              </div>
              <div className="ana-figtitle">
                Sonnet 18: what makes something last forever?
              </div>
              <p className="ana-figsub">
                A nine-slide lesson from the new authoring direction: source
                text, vocabulary only where useful, live discussion, critical
                thinking, and a production task that brings the poem into today.
              </p>
              <div className="ana-meta">
                <span className="metachip">B2</span>
                <span className="metachip">9 slides max</span>
                <span className="metachip">60 min</span>
                <span className="metachip">Source-shaped</span>
              </div>
              <div className="class-preview" aria-label="In-class lesson preview">
                <div className="class-preview-top">
                  <span>Presentation mode</span>
                  <span>Slide 8 / 9</span>
                </div>
                <div className="class-screen">
                  <span className="class-phase">Production task</span>
                  <h4>Your turn: a modern version</h4>
                  <p>
                    Rewrite the argument of Sonnet 18 for today. What would you
                    compare a person to instead of a summer&apos;s day?
                  </p>
                </div>
                <div className="class-support">
                  <div>
                    <span>Teacher notes</span>
                    <p>
                      Pair students first. Listen for contrast and certainty
                      structures before opening the room.
                    </p>
                  </div>
                  <div>
                    <span>Worksheet language</span>
                    <p>Unlike..., While... may fade, As long as...</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="steps reveal">
              {SHOWCASE_SLIDES.map((s) => (
                <div className="step" data-n={s.n} key={s.n}>
                  <div className="step-k">
                    {s.k} · {s.time}
                  </div>
                  <h4>{s.h}</h4>
                  {s.body && <p>{s.body}</p>}
                  {s.quote && <p className="quote">{s.quote}</p>}
                  {s.lang && (
                    <div className="lang">
                      {s.lang.map((l) => (
                        <span className="langchip" key={l}>
                          {l}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ CTA ══════════════ */}
      <section className="section cta" id="join">
        <div className="cta-glow" aria-hidden="true" />
        <div className="wrap">
          <div className="kicker reveal" style={{ justifyContent: "center" }}>
            04 · Join the waitlist
          </div>
          <h2 className="cta-title reveal">Sparks is coming soon.</h2>
          <p className="cta-sub reveal">
            Leave your email in the hero and we&apos;ll send one note when the
            first Sparks are ready to teach.
          </p>
          <a className="cta-jump reveal" href="#top">
            Back to the email box
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap">
          <span className="mk">
            sparks<span className="dot">.</span>
          </span>
          <span className="meta">
            Source-led English · Film · Music · Art · Science · Philosophy · Literature · News
          </span>
          <span className="meta">
            © 2026 Sparks · <a href="/legal/privacy">Privacy</a> ·{" "}
            <a href="/legal/terms">Terms</a>
          </span>
        </div>
      </footer>
    </>
  );
}
