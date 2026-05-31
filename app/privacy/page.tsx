// ─────────────────────────────────────────────────────────────────────────────
// /privacy — Privacy notice for the holding page.
//
// Single-page disclosure for what spark-soon does with the only data point it
// collects: a waitlist email address. Drafted against the union of GDPR
// Article 13, CCPA "Notice at Collection", CAN-SPAM, UK GDPR, and the active
// US state privacy laws. The site collects no other data, sets no cookies,
// runs no third-party analytics — those facts are verified by codebase audit
// and stated honestly below.
//
// Sections marked {/* LEGAL-REVIEW: ... */} flag the load-bearing clauses a
// human lawyer should sign off on before this page becomes the live policy
// for a paid product. For the holding page (no transactions, no minors), the
// draft is shippable as-is.
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import Link from "next/link";
import "./privacy.css";

export const metadata: Metadata = {
  title: "Privacy notice — Sparks",
  description:
    "What we collect when you join the Sparks waitlist, and what we do with it.",
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "29 May 2026";

export default function PrivacyPage() {
  return (
    <div className="privacy-shell">
      <article className="privacy-article">
        <Link href="/" className="privacy-back" aria-label="Back to sparks.">
          <svg
            viewBox="0 0 12 12"
            width="11"
            height="11"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            <path d="M7.5 2.5L3 6l4.5 3.5" />
          </svg>
          Back
        </Link>

        <p className="privacy-wordmark">
          sparks<span className="privacy-wordmark-dot">.</span>
        </p>

        <h1 className="privacy-title">Privacy notice</h1>
        <p className="privacy-updated">Last updated: {LAST_UPDATED}</p>

        {/* ─── Plain-English opener ──────────────────────────────────────── */}
        <p>
          This page is the holding page for Sparks. The only thing it asks
          for is your email address, when you join the waitlist. We&apos;ve
          tried to write this notice in plain language so you can read it in
          two minutes and walk away knowing exactly what we do with it.
        </p>

        {/* ─── Who we are (GDPR Art. 13(a)) ──────────────────────────────── */}
        {/* LEGAL-REVIEW: confirm legal entity name + registered address before launch */}
        <h2>Who we are</h2>
        <p>
          Sparks is operated by Matthew James Soldato. You can reach the
          person responsible for privacy questions at{" "}
          <a href="mailto:privacy@sparksesl.com">privacy@sparksesl.com</a>.
        </p>

        {/* ─── What we collect (GDPR Art. 13(c), CCPA Notice at Collection) */}
        <h2>What this page collects</h2>
        <p>
          One thing: your email address, when you submit the waitlist form.
          That&apos;s all. We don&apos;t set tracking cookies, run analytics,
          embed social-media pixels, or load any third-party scripts on this
          page. We don&apos;t collect your IP address for any purpose other
          than the standard server logs Vercel keeps to deliver the page.
        </p>

        {/* ─── Why + Legal basis (GDPR Art. 13(c)(d)) ─────────────────────── */}
        <h2>What we do with it</h2>
        <p>
          We send you a confirmation email right away so you know we
          received it. We&apos;ll email you once more when Sparks launches.
          That&apos;s it. We don&apos;t sell your email, we don&apos;t share
          it with advertisers, and we don&apos;t add you to lists you
          didn&apos;t sign up for.
        </p>
        <p>
          The legal basis for doing this is your consent — you submitted the
          form. You can withdraw it at any time by emailing us (see{" "}
          <em>Your rights</em> below).
        </p>

        {/* ─── Subprocessors (GDPR Art. 13(e), CCPA disclosure) ──────────── */}
        <h2>Who helps us send the email</h2>
        <p>Two services. Both are named here so you know exactly where your email goes.</p>
        <ul>
          <li>
            <strong>Resend</strong> delivers the email and stores your
            address in our audience list so we can send the launch
            announcement later. Resend is a US company.{" "}
            <a
              href="https://resend.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Resend&apos;s privacy policy
            </a>
            .
          </li>
          <li>
            <strong>Vercel</strong> hosts this site. Vercel doesn&apos;t see
            your email — the form submission goes straight to Resend.
            Vercel does keep standard request logs (IP, browser, page URL)
            for security and uptime, which is normal for any website host.{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Vercel&apos;s privacy policy
            </a>
            .
          </li>
        </ul>

        {/* ─── International transfers (GDPR Art. 13(f), Schrems II) ─────── */}
        {/* LEGAL-REVIEW: confirm SCCs in place with Resend + Vercel; add EU representative if launching in EU */}
        <h2>Where it&apos;s stored, and the US transfer question</h2>
        <p>
          Both Resend and Vercel keep data on servers in the United States.
          If you&apos;re in the EU or UK, the legal mechanism that allows
          your email to travel there is the Standard Contractual Clauses
          (SCCs) we have in place with both providers. US law gives US
          government agencies access rights that don&apos;t exist in EU/UK
          law; if that matters to you, please don&apos;t submit the form.
        </p>

        {/* ─── Retention (GDPR Art. 13(2)(a), CPRA retention disclosure) ── */}
        <h2>How long we keep it</h2>
        <p>
          Until Sparks launches plus 30 days, or until you ask us to delete
          it — whichever comes first. If Sparks doesn&apos;t launch within
          18 months of this notice&apos;s last-updated date, we&apos;ll
          delete the waitlist and stop the project before then anyway.
        </p>

        {/* ─── Rights (GDPR Art. 15-22, CCPA, state laws — union) ──────── */}
        <h2>Your rights</h2>
        <p>You can ask us at any time to:</p>
        <ul>
          <li>tell you what we have about you</li>
          <li>correct it if it&apos;s wrong</li>
          <li>delete it</li>
          <li>send you a copy in a portable format</li>
          <li>stop processing it</li>
          <li>not send you marketing</li>
        </ul>
        <p>
          Email{" "}
          <a href="mailto:privacy@sparksesl.com">privacy@sparksesl.com</a>{" "}
          and we&apos;ll respond within 30 days. If you&apos;re in
          California, Virginia, Colorado, Connecticut, Texas, Oregon, or
          Montana, you also have a right to appeal if we refuse a request —
          reply to our response and we&apos;ll review it again.
        </p>
        <p>
          If you think we&apos;ve mishandled something, you can complain to
          your local data protection authority. In the UK that&apos;s the{" "}
          <a
            href="https://ico.org.uk/make-a-complaint/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ICO
          </a>
          ; in the EU it&apos;s your country&apos;s supervisory authority;
          in California it&apos;s the{" "}
          <a
            href="https://cppa.ca.gov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CPPA
          </a>
          .
        </p>

        {/* ─── No sale + no targeted ads (CCPA + state laws) ────────────── */}
        <h2>We don&apos;t sell your data, and we don&apos;t serve ads</h2>
        <p>
          Sparks doesn&apos;t sell, share, or transfer your email for
          targeted advertising or any other commercial purpose. If we ever
          plan to change that, we&apos;ll email everyone on the waitlist
          first and you can opt out.
        </p>

        {/* ─── Children (under-18 carve-out) ────────────────────────────── */}
        {/* LEGAL-REVIEW: confirm 18+ floor language is the right move for COPPA exclusion */}
        <h2>Children</h2>
        <p>
          Sparks is built for adult English teachers. If you&apos;re under
          18, please don&apos;t submit the form. If we discover we&apos;ve
          collected an email from someone under 18, we&apos;ll delete it.
        </p>

        {/* ─── Changes (GDPR + CCPA last-updated) ───────────────────────── */}
        <h2>Changes to this notice</h2>
        <p>
          If we change anything material, we&apos;ll update the date at the
          top and email everyone on the waitlist about what changed. Small
          edits (typos, clearer wording) we&apos;ll just make.
        </p>

        {/* ─── Contact ──────────────────────────────────────────────────── */}
        <h2>Contact</h2>
        <p>
          <a href="mailto:privacy@sparksesl.com">privacy@sparksesl.com</a>{" "}
          for anything privacy-related.{" "}
          <a href="mailto:hello@sparksesl.com">hello@sparksesl.com</a> for
          everything else.
        </p>

        <hr className="privacy-rule" aria-hidden="true" />
        <p className="privacy-footnote">
          This notice covers the Sparks holding page only. When the full
          Sparks product launches, a separate, longer privacy policy will
          apply.
        </p>
      </article>
    </div>
  );
}
