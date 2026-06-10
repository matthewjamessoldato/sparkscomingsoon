// ─────────────────────────────────────────────────────────────────────────────
// Coming-soon page for Sparks.
//
// Static server component with small client islands for the rotating hero word,
// scroll reveal, and Resend-wired waitlist form. Imagery is the current Sparks
// lesson thumbnail set, downscaled from the main Spark repo by
// scripts/sync-assets.sh into /public/illustrations/{mosaic,cards}.
// ─────────────────────────────────────────────────────────────────────────────

import { RotatingWord } from "./RotatingWord";
import { RevealObserver } from "./RevealObserver";
import { WaitlistForm } from "./WaitlistForm";
import "./soon.css";

/* ── Hero mosaic tiles ───────────────────────────────────────────────────
   Canonical current Spark lesson thumbnails across all six public families,
   pre-cropped square and downscaled by scripts/sync-assets.sh. The slug order
   matches the script and interleaves families so no two neighbours match —
   including across the wrap when the set repeats. ──────────────────────── */
const MOSAIC = [
  "art-the-great-wave-off-kanagawa",
  "news-a-cathedral-burned-1-billion-arrived-in-48-hours",
  "philosophy-the-myth-of-sisyphus",
  "literature-sonnet-18",
  "science-half-the-room-misses-the-gorilla",
  "culture-the-queue",
  "art-mona-lisa",
  "news-four-minutes-broken-at-last",
  "philosophy-the-trolley-problem",
  "art-the-starry-night",
  "science-sleep-loss-is-like-being-drunk",
  "literature-hamlet-to-be-or-not-to-be",
  "art-girl-with-a-pearl-earring",
  "news-33-men-69-days-all-safe",
  "culture-the-baguette",
  "philosophy-the-ship-of-theseus",
  "art-the-raft-of-the-medusa",
  "science-walking-through-a-doorway-makes-you-forget",
  "literature-if",
  "art-wanderer-above-the-sea-of-fog",
  "news-tested-clean-drove-dirty-11-million-cars",
  "philosophy-who-do-you-owe-first",
  "art-saturn-devouring-his-son",
  "culture-shoes-at-the-door",
  "science-what-feels-like-learning-isnt-learning",
  "literature-stopping-by-woods-on-a-snowy-evening",
  "art-water-lilies",
  "news-lost-on-a-train-found-on-google-earth",
  "philosophy-the-experience-machine",
  "art-the-creation-of-adam",
  "science-what-did-the-marshmallow-test-actually-show",
  "culture-red-envelopes",
  "literature-the-tortoise-and-the-hare",
  "art-the-milkmaid",
  "news-the-art-that-shredded-itself",
  "philosophy-the-drowning-child",
  "art-the-tower-of-babel",
  "science-why-your-favorite-song-gives-you-chills",
  "literature-the-owl-and-the-pussycat",
  "art-olympia",
  "culture-personal-space",
  "news-one-hundred-million-users-two-years-the-argument-we-couldnt-postpone",
  "philosophy-the-chinese-room",
  "art-the-last-supper",
  "science-even-when-you-know-its-a-placebo-it-works",
  "art-las-meninas",
  "news-a-dog-2-500-miles-6-months-alone",
  "philosophy-the-banality-of-evil",
  "art-the-kiss",
  "culture-taste-and-status",
  "art-judith-slaying-holofernes",
  "science-nobodys-watching-you",
  "art-fountain",
  "news-a-man-a-field-a-kings-gold",
].map((slug) => `/illustrations/mosaic/${slug}.webp`);

const SOURCES = [
  "art",
  "science",
  "philosophy",
  "literature",
  "culture",
  "news",
] as const;

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
    img: "/illustrations/cards/art-the-great-wave-off-kanagawa.webp",
    fam: "art",
    label: "Art",
    color: "var(--c-art)",
    src: "The Great Wave off Kanagawa",
    meta: "Katsushika Hokusai, c. 1830 · A2",
    alt: "The Great Wave off Kanagawa by Hokusai, framed on a gallery wall",
  },
  {
    img: "/illustrations/cards/literature-sonnet-18.webp",
    fam: "literature",
    label: "Literature",
    color: "var(--c-literature)",
    src: "Sonnet 18",
    meta: "William Shakespeare, 1609 · C1",
    alt: "Cut-out portrait of William Shakespeare on a deep blue ground",
  },
  {
    img: "/illustrations/cards/news-33-men-69-days-all-safe.webp",
    fam: "news",
    label: "News",
    color: "var(--c-news)",
    src: "33 men, 69 days, all safe",
    meta: "The 2010 Chile mine rescue · A2",
    alt: "The Fénix rescue capsule from the 2010 Chile mine rescue, drawn as a cut-out on red",
  },
  {
    img: "/illustrations/cards/science-half-the-room-misses-the-gorilla.webp",
    fam: "science",
    label: "Science",
    color: "var(--c-science)",
    src: "Half the Room Misses the Gorilla",
    meta: "Simons & Chabris, 1999 · C1",
    alt: "A gorilla hidden inside a basketball, drawn as a cut-out on green",
  },
  {
    img: "/illustrations/cards/philosophy-the-myth-of-sisyphus.webp",
    fam: "philosophy",
    label: "Philosophy",
    color: "var(--c-philosophy)",
    src: "The Myth of Sisyphus",
    meta: "Albert Camus, 1942 · C1",
    alt: "Cut-out portrait of Albert Camus on a purple ground",
  },
  {
    img: "/illustrations/cards/culture-the-queue.webp",
    fam: "culture",
    label: "Culture",
    color: "var(--c-culture)",
    src: "The Queue",
    meta: "Waiting your turn · B2",
    alt: "A take-a-number ticket dispenser, drawn as a cut-out on gold",
  },
];

/* ── Lesson showcase: Sonnet 18 ─────────────────────────────────────────
   The real nine-stage Spark, condensed from the shipping C1 deck in the main
   repo (stage names, timings and tasks are the actual lesson's). ────────── */
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
    k: "Title",
    h: "Sonnet 18",
    time: "1 min",
    body:
      "Shakespeare's sonnet — and the strange promise it makes: that a poem can keep someone alive forever.",
  },
  {
    n: "02",
    k: "Hook",
    h: "Think of one person you love.",
    time: "4 min",
    quote:
      "What would you compare them to? Not a summer's day — something of your own. A season, a place, a kind of weather, a piece of music?",
  },
  {
    n: "03",
    k: "Source",
    h: "The poem, read together",
    time: "13 min",
    quote:
      "Shall I compare thee to a summer's day? Thou art more lovely and more temperate.",
    body:
      "He starts to compare her to summer — then stops, because summer loses. The claim worth sitting with: art outlasts the thing it's about. Who is more alive on this slide — the woman, or Shakespeare?",
  },
  {
    n: "04",
    k: "Main task",
    h: "What do we actually know about her?",
    time: "14 min",
    body:
      "Look at the poem — is there a single real detail? A face, a name, a thing she said? Verdict: did art make her last, or did it quietly replace her with itself?",
  },
  {
    n: "05",
    k: "Useful language",
    h: "Arguing whether something truly lasts",
    time: "7 min",
    lang: [
      "It's not her that survives, so much as…",
      "It immortalises the feeling rather than the person.",
      "That's preservation in name only.",
      "The art has eclipsed what it was meant to honour.",
    ],
  },
  {
    n: "06",
    k: "Practice",
    h: "Kept, or just gestured at?",
    time: "5 min",
    body:
      "Quick takes with the new language: a statue of a general nobody can identify, a love song with the singer long dead, a stranger's face in a junk-shop photo, a name carved into a park bench.",
  },
  {
    n: "07",
    k: "Discussion",
    h: "Flattered — or slightly erased?",
    time: "4 min",
    quote:
      "If a poem this good were written about you, would you feel flattered — or reduced to one line of praise?",
  },
  {
    n: "08",
    k: "Final task",
    h: "Choose how you'd want to last",
    time: "9 min",
    body:
      "A poem, a photo, or a song — decide what your choice keeps and what it quietly throws away. Then finish out loud: “Don't remember my face. Remember that I…”",
  },
  {
    n: "09",
    k: "Lesson quiz",
    h: "Back through the poem",
    time: "3 min",
    body:
      "Six open questions — why summer loses the comparison, the turn at line 9, and a verdict every student has to commit to.",
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
              duplicates are served from cache, and the vignette hides the seam.
              The first pass loads eagerly; the repeats can lazy-load. */}
          {[...MOSAIC, ...MOSAIC, ...MOSAIC].map((src, i) => {
            const delay = 90 + ((i * 137) % 1040);

            return (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={`${src}-${i}`}
                src={src}
                alt=""
                width={480}
                height={480}
                loading={i < MOSAIC.length ? "eager" : "lazy"}
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
            Sparks<span className="dot">.</span>
          </span>
          {/* The rotator is decorative for assistive tech: the h1 carries a
              stable label while the cycling words stay aria-hidden. */}
          <h1
            className="hero-h1 fx d2"
            aria-label="Walk into class with something real."
          >
            <span className="lead-in" aria-hidden="true">
              Walk into class with
            </span>
            <RotatingWord />
          </h1>
          <p className="hero-lede fx d3">
            Coming soon: ready-to-teach conversation lessons for adults, built
            on real art, science, philosophy, literature, culture and news.
            Each Spark becomes the hour its source needs — up to nine clear
            slides, 60 minutes, from A1 to C2.
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
            Sparks turns art, science, philosophy, literature, culture and
            news into complete adult conversation lessons. Every Spark walks
            the same teachable spine — a hook, the source itself, one big
            task, language worth keeping, discussion, a final task — and the
            source decides what fills it: a museum mount, a newspaper column,
            a study&apos;s key finding, a question that carries the room.
          </p>

          <div className="idea-grid reveal">
            <div className="idea-cell">
              <span className="n">A · Source first</span>
              <h3>The material leads</h3>
              <p>
                A sonnet is not a science study. A headline is not a painting.
                The source sets the imagery, the language, and what the room
                ends up arguing about.
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
              <h2 className="sec-title">Six places a lesson can begin.</h2>
            </div>
            <p className="sec-note">
              A painting, a poem, a headline, a study, a question or a
              cultural habit can each become a complete hour of adult
              speaking.
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
            03 · Inside a real lesson
          </div>
          <div className="ana-grid">
            <div className="ana-figure reveal">
              <div className="ana-mount">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/illustrations/cards/literature-sonnet-18.webp"
                  alt="Cut-out portrait of William Shakespeare on a deep blue ground"
                />
              </div>
              <div className="ana-cap">
                <span className="dot" />
                Literature · C1 speaking lesson
              </div>
              <div className="ana-figtitle">
                Sonnet 18: can a poem keep someone alive forever?
              </div>
              <p className="ana-figsub">
                The real shipping Spark, slide for slide: a hook, the full
                sonnet, one big task, language worth keeping, guided practice,
                open discussion, a final task that gets personal, and a quiz
                back through the poem.
              </p>
              <div className="ana-meta">
                <span className="metachip">C1</span>
                <span className="metachip">9 slides</span>
                <span className="metachip">60 min</span>
                <span className="metachip">Source-shaped</span>
              </div>
              <div className="class-preview" aria-label="In-class lesson preview">
                <div className="class-preview-top">
                  <span>Presentation mode</span>
                  <span>Slide 8 / 9</span>
                </div>
                <div className="class-screen">
                  <span className="class-phase">Final task</span>
                  <h4>Choose how you&apos;d want to last</h4>
                  <p>
                    A poem, a photo, or a song. Decide, defend it, then finish
                    out loud: &ldquo;Don&apos;t remember my face. Remember
                    that I&hellip;&rdquo;
                  </p>
                </div>
                <div className="class-support">
                  <div>
                    <span>Teacher notes</span>
                    <p>
                      Pair students first and push for the why: what does each
                      choice keep, and what does it quietly throw away?
                    </p>
                  </div>
                  <div>
                    <span>Worksheet language</span>
                    <p>
                      It&apos;s not her that survives, so much as&hellip; ·
                      That&apos;s preservation in name only.
                    </p>
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
            Sparks<span className="dot">.</span>
          </span>
          <span className="meta">
            Source-led English · Art · Science · Philosophy · Literature ·
            Culture · News
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
