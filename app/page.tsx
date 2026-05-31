// ─────────────────────────────────────────────────────────────────────────────
// Coming-soon page for Sparks.
//
// Ported from the Claude Design "Coming Soon.html" handoff (May 2026).
// Seven sections: hero mosaic + waitlist, the idea, six sources gallery,
// anatomy of a lesson, library strip, final CTA, footer. Static server
// component; the rotating headline, scroll-reveal, and Resend-wired waitlist
// form are small client islands. Imagery is the real Sparks lesson thumbnail
// set under /public/thumbs and /public/mosaic.
// ─────────────────────────────────────────────────────────────────────────────

import { RotatingWord } from "./RotatingWord";
import { RevealObserver } from "./RevealObserver";
import { WaitlistForm } from "./WaitlistForm";
import "./soon.css";

/* ── Hero mosaic tiles ───────────────────────────────────────────────────
   Canonical current Sparks lesson thumbnails, pulled from the main repo:
   art lessons use /illustrations/thumbs/<id>.webp, every other family uses
   /illustrations/specials/<fam>/<lesson-id>/thumb-card.webp. ───────────── */
const MOSAIC = [
  "/illustrations/thumbs/art-the-great-wave-off-kanagawa.webp",
  "/illustrations/specials/film/film-inception-youre-in-a-dream/thumb-card.webp",
  "/illustrations/thumbs/art-mona-lisa.webp",
  "/illustrations/specials/music/music-hey-ya/thumb-card.webp",
  "/illustrations/thumbs/art-the-starry-night.webp",
  "/illustrations/specials/news/news-a-cathedral-burned-1-billion-arrived-in-48-hours/thumb-card.webp",
  "/illustrations/specials/philosophy/philosophy-the-myth-of-sisyphus/thumb-card.webp",
  "/illustrations/thumbs/art-the-kiss.webp",
  "/illustrations/specials/science/science-half-the-room-misses-the-gorilla/thumb-card.webp",
  "/illustrations/thumbs/art-girl-with-a-pearl-earring.webp",
  "/illustrations/specials/film/film-la-la-land-this-is-not-your-dream/thumb-card.webp",
  "/illustrations/thumbs/art-las-meninas.webp",
  "/illustrations/specials/music/music-bohemian-rhapsody/thumb-card.webp",
  "/illustrations/thumbs/art-the-raft-of-the-medusa.webp",
  "/illustrations/specials/news/news-33-men-69-days-all-safe/thumb-card.webp",
  "/illustrations/specials/philosophy/philosophy-the-trolley-problem/thumb-card.webp",
  "/illustrations/thumbs/art-wanderer-above-the-sea-of-fog.webp",
  "/illustrations/specials/science/science-sleep-loss-is-like-being-drunk/thumb-card.webp",
  "/illustrations/thumbs/art-saturn-devouring-his-son.webp",
  "/illustrations/specials/film/film-the-truman-show-talking-to-the-creator/thumb-card.webp",
  "/illustrations/thumbs/art-the-third-of-may-1808.webp",
  "/illustrations/specials/music/music-stand-by-me/thumb-card.webp",
  "/illustrations/thumbs/art-water-lilies.webp",
  "/illustrations/specials/news/news-tested-clean-drove-dirty-11-million-cars/thumb-card.webp",
  "/illustrations/thumbs/art-the-creation-of-adam.webp",
  "/illustrations/specials/science/science-why-your-favorite-song-gives-you-chills/thumb-card.webp",
  "/illustrations/specials/philosophy/philosophy-the-ship-of-theseus/thumb-card.webp",
  "/illustrations/thumbs/art-the-milkmaid.webp",
  "/illustrations/thumbs/art-paris-street-rainy-day.webp",
  "/illustrations/specials/music/music-hallelujah/thumb-card.webp",
  "/illustrations/thumbs/art-the-tower-of-babel.webp",
  "/illustrations/thumbs/art-olympia.webp",
];

const SOURCES = ["film", "music", "art", "science", "philosophy", "news"] as const;

/* ── Six-sources gallery ────────────────────────────────────────────────── */
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
    img: "/illustrations/specials/film/film-inception-youre-in-a-dream/thumb-card.webp",
    fam: "film",
    label: "Film",
    color: "var(--c-film)",
    src: "Inception: You're in a Dream",
    meta: "Christopher Nolan, 2010 · C2",
    alt: "A still evoking Inception — a city folding over itself",
  },
  {
    img: "/illustrations/specials/music/music-hey-ya/thumb-card.webp",
    fam: "music",
    label: "Music",
    color: "var(--c-music)",
    src: "Hey Ya!",
    meta: "OutKast, 2003 · B2",
    alt: "A house party, two people dancing as a record plays",
  },
  {
    img: "/illustrations/thumbs/art-the-great-wave-off-kanagawa.webp",
    fam: "art",
    label: "Art",
    color: "var(--c-art)",
    src: "The Great Wave off Kanagawa",
    meta: "Hokusai, c. 1830 · A2",
    alt: "The Great Wave off Kanagawa by Hokusai",
  },
  {
    img: "/illustrations/specials/news/news-33-men-69-days-all-safe/thumb-card.webp",
    fam: "news",
    label: "News",
    color: "var(--c-news)",
    src: "The 33 men under the mountain",
    meta: "The 2010 Chile mine rescue · A2",
    alt: "Chilean miners being rescued from underground in 2010",
  },
  {
    img: "/illustrations/specials/science/science-half-the-room-misses-the-gorilla/thumb-card.webp",
    fam: "science",
    label: "Science",
    color: "var(--c-science)",
    src: "Half the Room Misses the Gorilla",
    meta: "Selective attention · C1",
    alt: "The invisible gorilla selective-attention experiment",
  },
  {
    img: "/illustrations/specials/philosophy/philosophy-the-myth-of-sisyphus/thumb-card.webp",
    fam: "philosophy",
    label: "Philosophy",
    color: "var(--c-philosophy)",
    src: "Sisyphus Must Be Happy",
    meta: "Albert Camus, 1942 · C1",
    alt: "An engraving of Sisyphus pushing his boulder up the mountain",
  },
];

/* ── Anatomy steps ──────────────────────────────────────────────────────── */
type Step = { n: string; k: string; h: string; body?: string; quote?: string; lang?: string[] };
const STEPS: Step[] = [
  {
    n: "01",
    k: "Hook",
    h: "A door into the lesson",
    body:
      "You are on a bridge in Paris. Across the river, the spire of an 850-year-old cathedral is on fire. Strangers stand beside you in silence; some are singing. What do you feel — and why so strongly, for a building?",
  },
  {
    n: "02",
    k: "Background",
    h: "Enough context to argue",
    body:
      "One slide. Notre-Dame: 856 years old, 13 million visitors a year, a spire added in 1859, a crown of thorns inside. Students don't need to be historians — they need three facts and a reason to care. Then you show them the photograph.",
  },
  {
    n: "03",
    k: "The source",
    h: "An encounter with the real thing",
    quote:
      "By the next morning, nearly a billion euros had been pledged to rebuild a roof that had stood for eight centuries — and the argument had already begun.",
  },
  {
    n: "04",
    k: "Comprehension",
    h: "Check before you move on",
    body:
      "Two questions, one minute each. What surprised you most? What do you still want to know? Every student has an answer — and the second question opens the whole discussion before the discussion has officially started.",
  },
  {
    n: "05",
    k: "Language",
    h: "The words you'll actually need",
    body:
      "Lifted from the moment, pitched to the level — phrases for reacting to loss and weighing what something is worth.",
    lang: [
      "I couldn't believe it when…",
      "It hit me harder than I expected…",
      "You have to weigh that against…",
    ],
  },
  {
    n: "06",
    k: "Activate",
    h: "Use the phrase before you need it",
    body:
      "Pair work. Sixty seconds. One prompt each. The goal: use at least one phrase from the list before the timer ends. It's a rehearsal, not a performance — and it's the step that makes the main discussion feel fluent rather than halting.",
  },
  {
    n: "07",
    k: "Discussion",
    h: "The question worth an hour",
    quote:
      "Why does the world stop to mourn a building, when so much else is lost without a word?",
  },
  {
    n: "08",
    k: "Final task",
    h: "Make your case",
    body:
      "A newspaper gives you sixty seconds. That billion euros: was it right to spend it rebuilding the cathedral — or should it have gone somewhere else entirely? Take a side and defend it.",
  },
];

/* ── Library strip ──────────────────────────────────────────────────────── */
type Lesson = { fam: string; label: string; color: string; img: string; title: string; src: string; lvl: string };
const LESSONS: Lesson[] = [
  { fam: "news", label: "News", color: "var(--c-news)", img: "/illustrations/specials/news/news-the-art-that-shredded-itself/thumb-card.webp", title: "The Art That Shredded Itself", src: "Banksy at Sotheby’s, 2018", lvl: "B2" },
  { fam: "philosophy", label: "Philosophy", color: "var(--c-philosophy)", img: "/illustrations/specials/philosophy/philosophy-behind-the-veil/thumb-card.webp", title: "Behind the Veil", src: "John Rawls, A Theory of Justice (1971)", lvl: "B2" },
  { fam: "music", label: "Music", color: "var(--c-music)", img: "/illustrations/specials/music/music-wonderwall/thumb-card.webp", title: "Wonderwall", src: "Oasis, 1995", lvl: "B2" },
  { fam: "science", label: "Science", color: "var(--c-science)", img: "/illustrations/specials/science/science-what-feels-like-learning-isnt-learning/thumb-card.webp", title: "What Feels Like Learning Isn’t Learning", src: "Roediger & Karpicke, 2006", lvl: "B2" },
  { fam: "film", label: "Film", color: "var(--c-film)", img: "/illustrations/specials/film/film-the-truman-show-talking-to-the-creator/thumb-card.webp", title: "The Truman Show: Talking to the Creator", src: "dir. Peter Weir, 1998", lvl: "B2" },
  { fam: "art", label: "Art", color: "var(--c-art)", img: "/illustrations/thumbs/art-the-starry-night.webp", title: "The Starry Night", src: "Vincent van Gogh, 1889", lvl: "B2" },
  { fam: "news", label: "News", color: "var(--c-news)", img: "/illustrations/specials/news/news-one-hundred-million-users-two-years-the-argument-we-couldnt-postpone/thumb-card.webp", title: "One hundred million users. Two years.", src: "ChatGPT launches, Nov 2022", lvl: "C1" },
  { fam: "music", label: "Music", color: "var(--c-music)", img: "/illustrations/specials/music/music-hallelujah/thumb-card.webp", title: "Hallelujah", src: "Leonard Cohen, 1984", lvl: "C1" },
  { fam: "philosophy", label: "Philosophy", color: "var(--c-philosophy)", img: "/illustrations/specials/philosophy/philosophy-the-trolley-problem/thumb-card.webp", title: "The Trolley Problem", src: "Philippa Foot, 1967", lvl: "B1" },
];

export default function SoonPage() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <RevealObserver />

      {/* ══════════════ HERO ══════════════ */}
      <header className="hero">
        <div className="hero-mosaic" aria-hidden="true">
          {/* Plain <img> (not next/image): the masonry `columns` layout relies
              on each tile keeping its NATURAL aspect ratio. next/image with a
              fixed width/height forces one ratio on every tile and squashes
              them. width:100% + height:auto (in soon.css) preserves ratios.

              Tiles are rendered TWICE so every masonry column overflows the
              full hero height — 32 tiles across ~8 columns left the shortest
              columns short of the bottom, exposing the #050403 background as
              black space. Duplicate URLs are served from cache (no extra
              network requests); the vignette hides the seam. */}
          {[...MOSAIC, ...MOSAIC, ...MOSAIC, ...MOSAIC].map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={`${src}-${i}`} src={src} alt="" loading="eager" draggable={false} />
          ))}
        </div>
        <div className="hero-vignette" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />

        <div className="hero-card">
          <span className="wordmark fx d1">
            sparks<span className="dot">.</span>
          </span>
          <div className="hero-rule fx d2" aria-hidden="true" />
          <h1 className="hero-h1 fx d2">
            <span className="lead-in">Walk into class with</span>
            <RotatingWord />
          </h1>
          <p className="hero-lede fx d3">
            Ready-to-teach conversation lessons for adults, built on real art,
            film, music, science, philosophy and news. You bring the class — the
            lesson is already done.
          </p>
          <p className="hero-sublede fx d3">
            No prep. No filler. Just&nbsp;real conversation.
          </p>

          <div className="hero-sources fx d4">
            {SOURCES.map((s) => (
              <span key={s} className="src-pill">
                {s}
              </span>
            ))}
          </div>

          <div
            className="fx d5"
            style={{
              width: "min(100%,420px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="wl-proof">
              <span className="proof-dot" />
              Early access for teachers
            </div>
            <p className="wl-head">Be the first to teach with Sparks.</p>
            <WaitlistForm
              buttonLabel="Join the waitlist"
              micro="No spam, ever — just one email the day we open to teachers."
            />
          </div>
        </div>

        <a className="scroll-cue" href="#idea" aria-label="Scroll to learn more">
          <span>What is sparks</span>
          <span className="ln" />
        </a>
      </header>

      {/* ══════════════ THE IDEA ══════════════ */}
      <section className="section idea" id="idea">
        <div className="wrap">
          <div className="kicker reveal">01 · The idea</div>
          <h2 className="idea-lead reveal">
            Every lesson begins with something <em>real</em>.
          </h2>
          <p className="idea-body reveal">
            Every Sparks lesson is built on a real cultural source — a painting,
            a song, a film scene, a headline, a thought experiment — instead of a
            textbook unit invented to drill a tense. The source gives adults
            something they actually want to argue about, so the talking takes
            care of itself. You walk in with a complete lesson and spend the hour
            listening, not lecturing.
          </p>

          <div className="idea-grid reveal">
            <div className="idea-cell">
              <span className="n">A · Real sources</span>
              <h3>Worth arguing about</h3>
              <p>
                Hopper, Hokusai, Banksy, OutKast, Camus, the night Notre-Dame
                burned. Material adults already have opinions about — so the
                conversation is real, not rehearsed.
              </p>
            </div>
            <div className="idea-cell">
              <span className="n">B · Zero prep</span>
              <h3>Open it and teach</h3>
              <p>
                Each lesson is a complete, timed 60-minute arc — hook, source,
                language, practice, discussion, final task. Nothing to print,
                plan, or pad. Walk in and run it.
              </p>
            </div>
            <div className="idea-cell">
              <span className="n">C · Every student talks</span>
              <h3>Pitched A2 → C2</h3>
              <p>
                A clear speaking goal and tasks that pull in the whole room — not
                just the confident one. Every source is levelled, so you teach the
                right class in seconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ SIX SOURCES ══════════════ */}
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
              Each family brings its own kind of conversation. A single source
              can power a full hour of speaking.
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
            03 · Anatomy of a lesson
          </div>
          <div className="ana-grid">
            <div className="ana-figure reveal">
              <div className="ana-mount">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/illustrations/specials/news/news-a-cathedral-burned-1-billion-arrived-in-48-hours/thumb-card.webp"
                  alt="Notre-Dame de Paris ablaze at dusk as firefighters work below — 15 April 2019"
                />
              </div>
              <div className="ana-cap">
                <span className="dot" />
                News · the source
              </div>
              <div className="ana-figtitle">
                A cathedral burned. €1 billion arrived in 48 hours.
              </div>
              <p className="ana-figsub">
                Notre-Dame, Paris — April 2019. An 850-year-old cathedral caught
                fire in front of the world, and within two days nearly a billion
                euros had been pledged to rebuild it.
              </p>
              <div className="ana-meta">
                <span className="metachip">CEFR B2</span>
                <span className="metachip">60 min</span>
                <span className="metachip">Speaking</span>
                <span className="metachip">Discussion</span>
              </div>
            </div>

            <div className="steps reveal">
              {STEPS.map((s) => (
                <div className="step" data-n={s.n} key={s.n}>
                  <div className="step-k">{s.k}</div>
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

      {/* ══════════════ LIBRARY ══════════════ */}
      <section className="section library" id="library">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <div className="kicker" style={{ marginBottom: 0 }}>
                04 · A growing library
              </div>
              <h2 className="sec-title">Lessons, not lesson plans.</h2>
            </div>
            <p className="sec-note">
              A few of the sources already written. New ones land every week.
            </p>
          </div>
          <div className="lib-grid reveal">
            {LESSONS.map((l) => (
              <article className="lcard" key={l.title}>
                <div className="lcard-thumb">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={l.img} alt="" loading="lazy" />
                </div>
                <div className="lcard-top">
                  <span className="lcard-fam" style={{ color: l.color }}>
                    <span className="dot" style={{ background: l.color }} />
                    {l.label}
                  </span>
                  <span className="lcard-lvl">{l.lvl}</span>
                </div>
                <h4>{l.title}</h4>
                <div className="src">{l.src}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ CTA ══════════════ */}
      <section className="section cta" id="join">
        <div className="cta-glow" aria-hidden="true" />
        <div className="wrap">
          <div className="kicker reveal" style={{ justifyContent: "center" }}>
            05 · Join the waitlist
          </div>
          <h2 className="cta-title reveal">We&apos;re nearly ready to begin.</h2>
          <p className="cta-sub reveal">
            Leave your email and we&apos;ll send one note the day Sparks goes
            live — with a free lesson to try first.
          </p>
          <div
            className="reveal"
            style={{
              width: "min(100%,440px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <WaitlistForm
              buttonLabel="Notify me"
              micro="One email. No spam. Unsubscribe in a click."
            />
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap">
          <span className="mk">
            sparks<span className="dot">.</span>
          </span>
          <span className="meta">
            Source-led English · Film · Music · Art · Science · Philosophy · News
          </span>
          <span className="meta">
            © 2026 Sparks · <a href="/privacy">Privacy</a>
          </span>
        </div>
      </footer>
    </>
  );
}
