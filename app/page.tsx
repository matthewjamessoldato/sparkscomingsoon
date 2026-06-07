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
  { fam: "news", label: "News", color: "var(--c-news)", img: "/illustrations/specials/news/news-four-minutes-broken-at-last/thumb.webp", title: "Four Minutes, Broken at Last", src: "Roger Bannister, 1954", lvl: "B1" },
  { fam: "philosophy", label: "Philosophy", color: "var(--c-philosophy)", img: "/illustrations/specials/philosophy/philosophy-who-do-you-owe-first/thumb.webp", title: "Who Do You Owe First?", src: "Moral obligation · C1", lvl: "C1" },
  { fam: "music", label: "Music", color: "var(--c-music)", img: "/illustrations/specials/music/music-vienna/thumb.webp", title: "Vienna", src: "Billy Joel, 1977", lvl: "B2" },
  { fam: "science", label: "Science", color: "var(--c-science)", img: "/illustrations/specials/science/science-walking-through-a-doorway-makes-you-forget/thumb.webp", title: "Walking Through a Doorway Makes You Forget", src: "Event boundaries · B2", lvl: "B2" },
  { fam: "film", label: "Film", color: "var(--c-film)", img: "/illustrations/specials/film/film-the-matrix-the-last-chance/thumb.webp", title: "The Matrix: The Last Chance", src: "dir. Wachowskis, 1999", lvl: "B2" },
  { fam: "art", label: "Art", color: "var(--c-art)", img: "/illustrations/specials/art/art-the-garden-of-earthly-delights/thumb.webp", title: "The Garden of Earthly Delights", src: "Hieronymus Bosch, c. 1500", lvl: "C1" },
  { fam: "literature", label: "Literature", color: "var(--c-literature)", img: "/illustrations/specials/literature/literature-sonnet-18/thumb.webp", title: "Sonnet 18", src: "William Shakespeare, 1609", lvl: "B2" },
  { fam: "news", label: "News", color: "var(--c-news)", img: "/illustrations/specials/news/news-lost-on-a-train-found-on-google-earth/thumb.webp", title: "Lost on a Train, Found on Google Earth", src: "A missing person story", lvl: "B2" },
  { fam: "music", label: "Music", color: "var(--c-music)", img: "/illustrations/specials/music/music-what-a-wonderful-world/thumb.webp", title: "What a Wonderful World", src: "Louis Armstrong, 1967", lvl: "A2" },
];

const TYPE_TILES = [
  { label: "Film", img: "/illustrations/library/type-tiles/film.webp", color: "var(--c-film)" },
  { label: "Music", img: "/illustrations/library/type-tiles/music.webp", color: "var(--c-music)" },
  { label: "Art", img: "/illustrations/library/type-tiles/art.webp", color: "var(--c-art)" },
  { label: "Science", img: "/illustrations/library/type-tiles/science.webp", color: "var(--c-science)" },
  { label: "Philosophy", img: "/illustrations/library/type-tiles/philosophy.webp", color: "var(--c-philosophy)" },
  { label: "Literature", img: "/illustrations/library/type-tiles/literature.webp", color: "var(--c-literature)" },
  { label: "News", img: "/illustrations/library/type-tiles/news.webp", color: "var(--c-news)" },
] as const;

export default function SoonPage() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <RevealObserver />

      {/* ══════════════ HERO ══════════════ */}
      <header className="hero">
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
            Ready-to-teach conversation lessons for adults, built on real art,
            film, music, science, philosophy, literature and news. You bring the
            class — the lesson is already done.
          </p>
          <p className="hero-sublede fx d3">
            No prep. No filler. Just real conversation.
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
            Every lesson begins with something <span>real</span>.
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
                  src="/illustrations/specials/news/news-a-cathedral-burned-1-billion-arrived-in-48-hours/thumb.webp"
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
          <div className="library-feature reveal">
            <div className="library-feature-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/illustrations/marketing/hero-library-sticker-system.webp"
                alt="Illustrated Spark library categories arranged as source cards"
                loading="lazy"
              />
            </div>
            <div className="library-feature-copy">
              <span className="library-feature-eyebrow">The library system</span>
              <h3>One shelf for every source-led hour.</h3>
              <p>
                The new Spark illustration set gives every family its own visual
                language while keeping the lesson cards recognisably part of the
                same system.
              </p>
            </div>
          </div>
          <div className="type-tiles reveal" aria-label="Spark source families">
            {TYPE_TILES.map((tile) => (
              <div className="type-tile" key={tile.label}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={tile.img} alt="" loading="lazy" />
                <span style={{ color: tile.color }}>{tile.label}</span>
              </div>
            ))}
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
