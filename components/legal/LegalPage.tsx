"use client";

// ─────────────────────────────────────────────────────────────────────────────
// LEGAL PAGE SHELL
//
// Privacy, Terms, and Cookie pages all render through this component so type,
// spacing, and the plain-English sidenote pattern stay in sync. The shape:
//
//   kicker  →  huge serif title  →  subtitle  →  effective / last-updated row
//   ┌──────────────┬──────────────────────────────┬──────────────────────────┐
//   │ sticky TOC   │ numbered sections            │ plain-English sidenotes  │
//   │ (desktop)    │ (single reading column)      │ (desktop only — inline   │
//   │              │                              │  between sections on     │
//   │              │                              │  mobile)                 │
//   └──────────────┴──────────────────────────────┴──────────────────────────┘
//
// The "sidenote" is the supercharge: most competitor legal pages are 8,000
// words of grey. We keep the legally precise clause intact AND surface a
// 20-word plain-English gloss beside it. Readers can scan the sidenotes,
// stop at anything surprising, then read the clause.
// ─────────────────────────────────────────────────────────────────────────────

import Link from "next/link";
import { useMemo, type ReactNode } from "react";

export type LegalSectionNode = {
  id: string;
  number: string;
  title: string;
  plain: string;
  body: ReactNode;
};

export function LegalPage({
  kicker,
  title,
  subtitle,
  effectiveDate,
  lastUpdated,
  sections,
  footerNote,
}: {
  kicker: string;
  title: string;
  subtitle: string;
  effectiveDate: string;
  lastUpdated: string;
  sections: LegalSectionNode[];
  footerNote?: ReactNode;
}) {
  const toc = useMemo(
    () => sections.map((s) => ({ id: s.id, number: s.number, title: s.title })),
    [sections]
  );

  return (
    <main
      style={{
        maxWidth: 1360,
        margin: "0 auto",
        padding: "120px clamp(20px, 4vw, 64px) 120px",
        color: "var(--ink-100)",
      }}
    >
      {/* Hero */}
      <header style={{ maxWidth: 920, marginBottom: 72 }}>
        <div
          style={{
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontSize: 11,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "var(--ink-40)",
            fontWeight: 700,
            marginBottom: 18,
          }}
        >
          {kicker}
        </div>
        <h1
          style={{
            fontFamily: "var(--font-newsreader), Newsreader, serif",
            fontSize: "clamp(44px, 7.5vw, 96px)",
            lineHeight: 0.94,
            letterSpacing: "-0.03em",
            fontWeight: 400,
            margin: "0 0 22px",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontFamily: "var(--font-newsreader), Newsreader, serif",
            fontSize: "clamp(19px, 2vw, 22px)",
            lineHeight: 1.5,
            color: "var(--ink-60)",
            maxWidth: 720,
            margin: "0 0 32px",
          }}
        >
          {subtitle}
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px 36px",
            paddingTop: 20,
            borderTop: "1px solid var(--hairline)",
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontSize: 11,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            fontWeight: 700,
            color: "var(--ink-40)",
          }}
        >
          <span>
            Effective <span style={{ color: "var(--ink-100)" }}>{effectiveDate}</span>
          </span>
          <span>
            Last updated <span style={{ color: "var(--ink-100)" }}>{lastUpdated}</span>
          </span>
          <Link href="/" style={{ color: "var(--ink-60)", textDecoration: "none" }}>
            Home
          </Link>
          <Link href="/legal/privacy" style={{ color: "var(--ink-60)", textDecoration: "none" }}>
            Privacy
          </Link>
          <Link href="/legal/terms" style={{ color: "var(--ink-60)", textDecoration: "none" }}>
            Terms
          </Link>
        </div>
      </header>

      {/* Body grid — TOC · column · sidenote, collapses to single column below 960 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 220px) minmax(0, 680px) minmax(0, 1fr)",
          gap: "clamp(24px, 4vw, 64px)",
          alignItems: "start",
        }}
        className="legal-grid"
      >
        {/* TOC — sticky on desktop */}
        <nav
          aria-label="On this page"
          style={{
            position: "sticky",
            top: 120,
            alignSelf: "start",
            paddingTop: 4,
          }}
          className="legal-toc"
        >
          <div
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: 10,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--ink-40)",
              fontWeight: 700,
              marginBottom: 16,
              paddingBottom: 12,
              borderBottom: "1px solid var(--hairline)",
            }}
          >
            On this page
          </div>
          <ol
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {toc.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  style={{
                    display: "flex",
                    gap: 10,
                    alignItems: "baseline",
                    color: "var(--ink-60)",
                    textDecoration: "none",
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                    fontSize: 13,
                    lineHeight: 1.45,
                  }}
                >
                  <span
                    style={{
                      color: "var(--ink-40)",
                      fontVariantNumeric: "tabular-nums",
                      minWidth: 18,
                    }}
                  >
                    {s.number}
                  </span>
                  <span>{s.title}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Main column + sidenotes (one section per row so sidenote tracks its clause) */}
        <div style={{ display: "contents" }}>
          {sections.map((s) => (
            <LegalSection key={s.id} section={s} />
          ))}
        </div>
      </div>

      {footerNote ? (
        <footer
          style={{
            maxWidth: 720,
            marginTop: 96,
            paddingTop: 32,
            borderTop: "1px solid var(--hairline)",
            fontFamily: "var(--font-newsreader), Newsreader, serif",
            fontSize: 15,
            lineHeight: 1.6,
            color: "var(--ink-60)",
          }}
        >
          {footerNote}
        </footer>
      ) : null}

      {/* Responsive: below Tailwind lg (1024) we collapse to a single column
          and TOC becomes a disclosure block at the top. */}
      <style jsx>{`
        @media (max-width: 1024px) {
          :global(.legal-grid) {
            grid-template-columns: 1fr !important;
          }
          :global(.legal-toc) {
            position: static !important;
            padding: 20px;
            background: var(--bg-surface);
            border-radius: 8px;
            margin-bottom: 16px;
          }
        }
      `}</style>
    </main>
  );
}

function LegalSection({ section }: { section: LegalSectionNode }) {
  return (
    <>
      {/* Clause column */}
      <section
        id={section.id}
        style={{
          gridColumn: "2 / 3",
          marginBottom: 56,
          scrollMarginTop: 100,
        }}
        className="legal-clause"
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 16,
            marginBottom: 18,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: "0.12em",
              color: "var(--accent)",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {section.number}
          </span>
          <h2
            style={{
              fontFamily: "var(--font-newsreader), Newsreader, serif",
              fontSize: "clamp(26px, 3.2vw, 36px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              fontWeight: 400,
              margin: 0,
            }}
          >
            {section.title}
          </h2>
        </div>
        <div
          style={{
            fontFamily: "var(--font-newsreader), Newsreader, serif",
            fontSize: 17,
            lineHeight: 1.6,
            color: "var(--ink-80)",
          }}
          className="legal-body"
        >
          {section.body}
        </div>
      </section>

      {/* Sidenote column (desktop) — sits in grid column 3 on the same row.
          Earlier this was `position: sticky; top: 120` so each sidenote
          tracked its clause as you scrolled. With many sidenotes and the
          `display: contents` wrapper around `<LegalSection>` fragments,
          Chromium placed consecutive asides into overlapping containing
          blocks, so once you scrolled into the second clause, sidenote 2
          rendered ON TOP OF sidenote 1 — illegible double-print. Removing
          sticky lets each sidenote stay anchored to its own row. The
          tradeoff (sidenote doesn't follow you while you read a long
          clause) is preferable to the overlap. */}
      <aside
        aria-hidden="true"
        style={{
          gridColumn: "3 / 4",
          marginBottom: 56,
          paddingLeft: 20,
          borderLeft: "2px solid var(--accent)",
          alignSelf: "start",
        }}
        className="legal-sidenote"
      >
        <div
          style={{
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontSize: 10,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--ink-40)",
            fontWeight: 700,
            marginBottom: 10,
          }}
        >
          In plain English
        </div>
        <p
          style={{
            fontFamily: "var(--font-newsreader), Newsreader, serif",
            fontSize: 16,
            lineHeight: 1.5,
            color: "var(--ink-100)",
            margin: 0,
            fontStyle: "italic",
          }}
        >
          {section.plain}
        </p>
      </aside>

      <style jsx>{`
        @media (max-width: 1024px) {
          :global(.legal-clause) {
            grid-column: 1 / -1 !important;
            margin-bottom: 20px !important;
            /* A grid item defaults to min-width:auto, so a wide child (the
               cookie table) would force this column past the viewport track
               and out under the body overflow-x:clip. Letting it shrink to
               the track keeps the table's scroll container at viewport width
               so the ≤640px overflow-x:auto rule can actually scroll. */
            min-width: 0 !important;
          }
          :global(.legal-sidenote) {
            grid-column: 1 / -1 !important;
            position: static !important;
            margin-bottom: 40px !important;
          }
        }

        :global(.legal-body) p {
          margin: 0 0 14px;
        }
        :global(.legal-body) p:last-child {
          margin-bottom: 0;
        }
        :global(.legal-body) ul,
        :global(.legal-body) ol {
          margin: 0 0 16px;
          padding-left: 22px;
        }
        :global(.legal-body) li {
          margin-bottom: 8px;
        }
        :global(.legal-body) a {
          color: var(--accent);
          text-decoration: underline;
          text-underline-offset: 3px;
          text-decoration-thickness: 1px;
        }
        :global(.legal-body) strong {
          color: var(--ink-100);
          font-weight: 600;
        }
        :global(.legal-body) h3 {
          font-family: var(--font-inter), Inter, sans-serif;
          font-size: 11px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--ink-60);
          font-weight: 700;
          margin: 24px 0 10px;
        }
        :global(.legal-body) table {
          width: 100%;
          border-collapse: collapse;
          margin: 12px 0 18px;
          font-family: var(--font-inter), Inter, sans-serif;
          font-size: 13px;
        }
        :global(.legal-body) th {
          text-align: left;
          font-weight: 700;
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--ink-40);
          padding: 10px 10px 10px 0;
          border-bottom: 1px solid var(--hairline-hi);
        }
        :global(.legal-body) td {
          padding: 12px 10px 12px 0;
          border-bottom: 1px solid var(--hairline);
          vertical-align: top;
          color: var(--ink-80);
          line-height: 1.5;
        }

        /* Small-screen fallback for wide tables (such as the cookie inventory)
           so the rightmost columns stay reachable instead of being clipped by
           an ancestor. Cells stay on one line; at 768px and up, unchanged. The
           fully global form is required because the table markup comes from the
           page component and carries no styled-jsx hash from this file. */
        @media (max-width: 640px) {
          :global(.legal-body table) {
            display: block;
            width: 100%;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }
          :global(.legal-body table th),
          :global(.legal-body table td) {
            white-space: nowrap;
          }
        }
      `}</style>
    </>
  );
}
