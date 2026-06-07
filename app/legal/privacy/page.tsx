// ─────────────────────────────────────────────────────────────────────────────
// PRIVACY POLICY — /legal/privacy
//
// Structured to GDPR Art. 13 + 14 completeness: controller identity, purposes,
// legal bases, recipients, international transfers, retention, rights,
// supervisory authority, complaint and judicial-remedy paths, balancing-test
// references for legitimate interests, source-of-data for Art. 14 data, and
// Italian Garante guidance overlays (PEC channel, complaint URL, Art. 30
// register, DPIA assessment, ePrivacy-implementation overlays, Garante April
// 2026 binding guidelines on email tracking pixels).
//
// Italian law flavour: Garante Privacy as competent authority; fiscal
// retention under art. 2220 c.c. and DPR 600/1973; Italian Privacy Code
// (D.Lgs. 196/2003 as amended by D.Lgs. 101/2018); D.Lgs. 70/2003 (eCommerce).
//
// Facts that MUST stay true for this page to remain accurate:
//   • Controller: Soldato Matthew James (Italian sole trader).
//   • Subprocessors currently WIRED: Vercel (hosting), Supabase (auth ONLY —
//     the app makes zero DB/storage calls; identity + session store), Resend
//     (transactional email, wired as Supabase's custom SMTP, US), Upstash
//     (rate-limiting / abuse-prevention; stores a salted hash of the IP, US).
//     (Google Fonts was previously listed for the Material Symbols icon
//     stylesheet; removed in the 2026-04-22 perf pass — icons are now
//     inline SVG so no third-party font requests are made.)
//   • Paddle is NOT wired today (no SDK / dependency / checkout in code).
//     All Paddle content is forward-looking: "When paid subscriptions
//     launch, Paddle.com Market Ltd will be Merchant of Record, collect
//     VAT, and hold the payment data; we will receive subscription
//     metadata only." Do not assert a live Paddle relationship.
//   • There is no newsletter / marketing email. Email is transactional
//     only (sign-up confirmation, password reset).
//   • Performance + error telemetry: /api/vitals + /api/csp-report.
//   • No analytics, no advertising cookies at launch.
//   • Audience: adult ESL teachers. No student accounts. No minors.
//
// When any of those change: update §2, §4, §5, and bump the "last updated"
// date below. Consent policy version in lib/consent.ts should also bump if
// the subprocessor list meaningfully changes.
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import { LegalPage, type LegalSectionNode } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy · Sparks",
  description:
    "How Sparks collects, uses, and protects personal data under GDPR and Italian law. Written in plain English alongside the legal text.",
};

const SECTIONS: LegalSectionNode[] = [
  {
    id: "who-we-are",
    number: "01",
    title: "Who we are",
    plain:
      "Sparks is run by one person in Italy. Their name, address, and tax ID are here so you always know who's actually handling your data.",
    body: (
      <>
        <p>
          Sparks (the &ldquo;Service&rdquo;) is operated by <strong>Soldato Matthew James</strong>,
          an Italian sole trader (ditta individuale). We are the <strong>data controller</strong>{" "}
          for all personal data processed through sparksesl.com and any subdomain we operate.
        </p>
        <p>
          Our identification details, as registered with the Italian Chamber of Commerce and Agenzia
          delle Entrate:
        </p>
        <ul>
          <li>
            <strong>Registered name:</strong> Soldato Matthew James
          </li>
          <li>
            <strong>Registered address:</strong> Via Torino 2, 20831 Seregno (MB), Italy
          </li>
          <li>
            <strong>Codice Fiscale:</strong> SLDMTH99T02B729X
          </li>
          <li>
            <strong>Partita IVA / EU VAT:</strong> IT13444260965
          </li>
          <li>
            <strong>Privacy contact:</strong>{" "}
            <a href="mailto:privacy@sparksesl.com">privacy@sparksesl.com</a>
          </li>
          <li>
            <strong>General contact:</strong>{" "}
            <a href="mailto:hello@sparksesl.com">hello@sparksesl.com</a>
          </li>
        </ul>
        <p>
          We have not appointed a Data Protection Officer because our processing does not meet the
          thresholds in GDPR Art. 37. We are established in Italy and process personal data from our
          Italian establishment, so no representative under EU GDPR Art. 27 is required for
          processing carried out by Sparks itself. For any privacy question, write to the privacy
          email above. We respond within thirty days as required by GDPR Art. 12, extendable by up
          to two further months for complex requests with written notice and reasons.
        </p>
        <p>
          Because we offer the Service to users in the United Kingdom on an ongoing basis,{" "}
          <strong>UK GDPR Art. 27</strong> is likely to require us to appoint a UK representative.
          We are putting this in place ahead of our paid launch; once appointed, the
          representative&rsquo;s name and contact address will be published here. Until then, UK
          users can reach us at the privacy email above and we will honour all UK GDPR rights
          directly.
        </p>
        <h3>Records of Processing (GDPR Art. 30)</h3>
        <p>
          We maintain an internal Register of Processing Activities (Registro dei Trattamenti) as
          required by GDPR Art. 30(1). The Register documents purposes, categories of data,
          recipients, retention periods, transfer safeguards, and the security measures summarised
          in §9. It is available to the Garante on request.
        </p>
        <h3>Data Protection Impact Assessment (GDPR Art. 35)</h3>
        <p>
          We have assessed our processing against the Italian Garante&rsquo;s list of operations
          requiring a Data Protection Impact Assessment (Provv. n. 467/2018) and concluded that no
          DPIA is required: we do not engage in large-scale profiling, systematic monitoring of
          public areas, processing of special-category or criminal data, evaluation of vulnerable
          individuals, or other listed high-risk operations. We will reassess if any of those
          circumstances change.
        </p>
      </>
    ),
  },
  {
    id: "what-we-collect",
    number: "02",
    title: "What data we collect",
    plain:
      "Email, password (stored by our login provider), the lessons you save, and the usual technical and security logs. When paid subscriptions launch, Paddle will handle your card — we will never see it.",
    body: (
      <>
        <p>
          We collect the minimum data needed to run the Service. We do <strong>not</strong> buy
          personal data from third parties, and we do <strong>not</strong> enrich your profile from
          data brokers.
        </p>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Examples</th>
              <th>Source</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Account data</td>
              <td>
                Email address, password (sent over TLS to our login provider Supabase, which stores
                it as a salted hash &mdash; we do not store or see your password), display name if
                provided
              </td>
              <td>You, at signup</td>
            </tr>
            <tr>
              <td>Authentication session</td>
              <td>
                Signed session token; a coarse browser signal (user-agent string, IP address class,
                and session-token age) used to detect when a session token is being used from an
                obviously different device than the one it was issued to. We do not run canvas
                fingerprinting, font enumeration, audio fingerprinting, or any persistent cross-site
                identifier. Strictly necessary cookie names and durations are documented in this
                policy.
              </td>
              <td>Generated when you sign in</td>
            </tr>
            <tr>
              <td>Teacher workspace (stored in your browser)</td>
              <td>
                Lessons you save or shortlist, student group labels and notes you define, any
                class-capture notes you type during a live class, and product preferences.{" "}
                <strong>
                  This data is stored only in your browser (localStorage), not on our servers
                </strong>{" "}
                &mdash; so you control it directly. Because roster and class-capture notes can
                contain other people&rsquo;s personal data, we ask you to keep them minimal (first
                names at most); you remain responsible for what you record about your students.
              </td>
              <td>Your activity in the product, kept on your device</td>
            </tr>
            <tr>
              <td>Browser-side preferences</td>
              <td>Theme choice (light/dark), cookie consent record</td>
              <td>Your browser, when you change a preference or respond to the cookie banner</td>
            </tr>
            <tr>
              <td>Billing metadata (when paid subscriptions launch)</td>
              <td>
                <strong>When paid subscriptions launch:</strong> subscription plan, start and
                renewal dates, Paddle customer ID, invoice references
              </td>
              <td>
                Paddle, as Merchant of Record (when paid subscriptions launch, this will be the only
                category we receive from a third party under GDPR Art. 14 &mdash; see §4)
              </td>
            </tr>
            <tr>
              <td>Technical and security logs</td>
              <td>
                User agent, referring URL, request timestamps, error stack traces, and a{" "}
                <strong>salted hash of your IP address</strong> (used for rate-limiting and
                abuse-prevention &mdash; we do not retain the raw IP for this purpose)
              </td>
              <td>Your browser when it contacts our servers</td>
            </tr>
            <tr>
              <td>Performance &amp; error telemetry</td>
              <td>
                Core Web Vitals (performance metrics), error messages and stack traces, the page
                URL, and a hashed IP &mdash; reported to our own endpoints (<code>/api/vitals</code>{" "}
                and <code>/api/csp-report</code>) to diagnose faults and keep the Service reliable
                and secure
              </td>
              <td>Your browser when it loads or reports an error on a page</td>
            </tr>
            <tr>
              <td>Support correspondence</td>
              <td>Emails you send us and our replies</td>
              <td>You, when you write in</td>
            </tr>
          </tbody>
        </table>
        <p>
          We do <strong>not</strong> collect payment-card details, bank information, billing
          addresses, or tax IDs. When paid subscriptions launch, those will be collected and held by
          Paddle (see §4). We do not process special-category data (GDPR Art. 9) and do not ask for
          any.
        </p>
        <h3>Is providing this data mandatory?</h3>
        <p>
          Under GDPR Art. 13(2)(e) we tell you whether each category is required and what happens if
          you refuse:
        </p>
        <ul>
          <li>
            <strong>Account data</strong> (email and password) is{" "}
            <strong>contractually required</strong>: if you do not provide it, we cannot create your
            account and you cannot use the Service.
          </li>
          <li>
            <strong>Billing metadata</strong> (when paid subscriptions launch) will be required to
            process your subscription and to meet Italian tax law (legal obligation under GDPR Art.
            6(1)(c)). Paddle will collect it directly.
          </li>
          <li>
            <strong>Authentication session</strong> and <strong>technical and security logs</strong>{" "}
            (including the salted hash of your IP and the performance/error telemetry) are
            technically necessary to deliver the Service and to keep it reliable and secure; they
            cannot be opted out of while you use the Service.
          </li>
          <li>
            <strong>Support correspondence</strong> is only collected if you write to us; you do not
            have to.
          </li>
        </ul>
        <h3>Source of data received from third parties (GDPR Art. 14)</h3>
        <p>
          When paid subscriptions launch, the <strong>billing metadata</strong> listed above will be
          received from Paddle (not collected directly from you). Under GDPR Art. 14 the source of
          this category will be Paddle.com Market Ltd (United Kingdom) acting as Merchant of Record.
          We do not currently receive any personal data from a third party; we collect everything
          directly from you and generate the technical logs automatically. The data is not obtained
          from publicly accessible sources, data brokers, or any other third party.
        </p>
      </>
    ),
  },
  {
    id: "why-we-use-it",
    number: "03",
    title: "Why we use it, and on what legal basis",
    plain:
      "Every use is tied to a specific legal basis under GDPR Art. 6. If we can't point to one, we don't do it.",
    body: (
      <>
        <table>
          <thead>
            <tr>
              <th>Purpose</th>
              <th>Data used</th>
              <th>Legal basis (GDPR Art. 6)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Create and maintain your account; deliver the Service you subscribed to</td>
              <td>Account, authentication, usage</td>
              <td>Performance of a contract (6(1)(b))</td>
            </tr>
            <tr>
              <td>
                When paid subscriptions launch: process subscriptions, renewals, refunds and
                invoicing through Paddle
              </td>
              <td>Billing metadata</td>
              <td>Performance of a contract (6(1)(b)) and legal obligation (6(1)(c))</td>
            </tr>
            <tr>
              <td>Keep the Service secure: rate limiting, abuse detection, bot mitigation</td>
              <td>Technical and security logs (incl. salted IP hash), session data</td>
              <td>
                Legitimate interests (6(1)(f)) &mdash; our interest in preventing fraud, abuse, and
                security incidents that would harm other users and the integrity of the Service. We
                have carried out a balancing test (LIA) and concluded that this interest is not
                overridden by your interests or fundamental rights, given the minimisation, short
                retention, and absence of profiling
              </td>
            </tr>
            <tr>
              <td>
                Diagnose faults and keep the Service reliable and secure: performance and error
                telemetry (<code>/api/vitals</code>, <code>/api/csp-report</code>)
              </td>
              <td>Core Web Vitals, error messages/stack traces, page URL, hashed IP</td>
              <td>
                Legitimate interests (6(1)(f)) &mdash; our interest in keeping the Service reliable
                and secure. We have carried out a balancing test (LIA), and the data is minimised
                (no raw IP is retained for this purpose) and short-lived
              </td>
            </tr>
            <tr>
              <td>Answer your support requests</td>
              <td>Support correspondence, account</td>
              <td>Performance of a contract (6(1)(b)) and legitimate interests (6(1)(f))</td>
            </tr>
            <tr>
              <td>Remember your interface preferences (theme, cookie choice)</td>
              <td>Browser-side preferences</td>
              <td>
                Legitimate interests (6(1)(f)) for theme (no consent needed; no personal data leaves
                the browser); legal obligation (6(1)(c)) for the cookie consent record, kept as
                evidence under the Garante 2021 cookie guidelines
              </td>
            </tr>
            <tr>
              <td>
                Comply with Italian tax and accounting law (e.g. art. 2220 c.c., DPR 600/1973)
              </td>
              <td>Billing metadata</td>
              <td>Legal obligation (6(1)(c))</td>
            </tr>
            <tr>
              <td>
                Send transactional emails you need to receive (sign-up confirmation, password reset,
                and, when paid subscriptions launch, billing receipts and important service notices)
              </td>
              <td>Email address, account identifier, event context</td>
              <td>Performance of a contract (6(1)(b)) and legal obligation (6(1)(c))</td>
            </tr>
            <tr>
              <td>Analytics and product measurement, if and when we enable it</td>
              <td>Usage, pseudonymised identifiers</td>
              <td>Consent (6(1)(a)), collected through the cookie banner</td>
            </tr>
          </tbody>
        </table>
        <p>
          We do <strong>not</strong> carry out automated decision-making or profiling that produces
          legal or similarly significant effects on you (GDPR Art. 22). If that ever changes, we
          will update this policy and, where required, ask for your explicit consent.
        </p>
        <h3>Right to object to legitimate-interest processing (GDPR Art. 21)</h3>
        <p>
          Where we rely on legitimate interests, you have the <strong>right to object</strong> at
          any time on grounds relating to your particular situation (GDPR Art. 21(1)). Write to{" "}
          <a href="mailto:privacy@sparksesl.com">privacy@sparksesl.com</a> and we will stop the
          processing unless we demonstrate compelling legitimate grounds that override your rights,
          or the processing is necessary for the establishment, exercise, or defence of legal
          claims. You can also request a summary of the balancing test (LIA) we performed for any
          specific purpose.
        </p>
      </>
    ),
  },
  {
    id: "who-we-share-with",
    number: "04",
    title: "Who processes your data for us",
    plain:
      "A few companies help us run Sparks — Vercel (hosting), Supabase (login + database), Resend (email), and Upstash (abuse-prevention). Paddle joins when paid subscriptions launch. Each is bound by a contract to follow GDPR on our behalf.",
    body: (
      <>
        <p>
          We rely on a small number of providers chosen after a documented due-diligence assessment
          against GDPR Art. 28. Each one is bound by a Data Processing Agreement (&ldquo;DPA&rdquo;)
          with us under its standard GDPR Art. 28 processor terms and, where data leaves the EEA,
          Standard Contractual Clauses (Implementing Decision (EU) 2021/914) and/or relies on the
          EU&ndash;US Data Privacy Framework adequacy decision of 10 July 2023. The current list of
          subprocessors:
        </p>
        <table>
          <thead>
            <tr>
              <th>Provider</th>
              <th>Role</th>
              <th>Where it runs</th>
              <th>Safeguard</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Vercel Inc.</strong>
              </td>
              <td>Hosting, edge runtime, request logs</td>
              <td>United States, with EU edge regions</td>
              <td>DPF + SCCs</td>
            </tr>
            <tr>
              <td>
                <strong>Supabase Inc.</strong>
              </td>
              <td>
                Authentication and identity store (holds your account data, sets the sign-in cookie,
                and sends our authentication emails)
              </td>
              <td>United States</td>
              <td>DPF + SCCs</td>
            </tr>
            <tr>
              <td>
                <strong>Resend</strong>
              </td>
              <td>
                Transactional email &mdash; delivers the account messages you need (for example,
                sign-up confirmation and password reset). Wired as Supabase&rsquo;s custom SMTP
                provider
              </td>
              <td>United States</td>
              <td>DPF + SCCs</td>
            </tr>
            <tr>
              <td>
                <strong>Upstash, Inc.</strong>
              </td>
              <td>
                Rate-limiting and abuse-prevention (stores a <strong>salted hash of your IP</strong>
                , not your IP address)
              </td>
              <td>United States</td>
              <td>DPF + SCCs</td>
            </tr>
            <tr>
              <td>
                <strong>Paddle.com Market Ltd</strong> (when paid subscriptions launch)
              </td>
              <td>
                <strong>When paid subscriptions launch:</strong> <strong>Merchant of Record</strong>{" "}
                &mdash; takes payments, issues invoices, collects and remits VAT and sales tax,
                handles chargebacks and refunds. Paddle is not wired today
              </td>
              <td>United Kingdom, with US and EU processors</td>
              <td>UK IDTA / SCCs; UK adequacy</td>
            </tr>
          </tbody>
        </table>
        <h3>Email</h3>
        <p>
          We send <strong>transactional email only</strong> &mdash; the account and security
          messages you need, such as sign-up confirmation and password reset. We do not run a
          newsletter or send marketing email. These messages are delivered by{" "}
          <strong>Resend</strong>, wired as our login provider Supabase&rsquo;s custom SMTP.
        </p>
        <h3>Paddle as Merchant of Record (when paid subscriptions launch)</h3>
        <p>
          <strong>When paid subscriptions launch</strong>, your counterparty for the{" "}
          <strong>purchase transaction</strong> will be <strong>Paddle.com Market Ltd</strong>, not
          Sparks. Paddle will act as a separate data controller for the payment data it collects
          (card details, billing address, tax status). Paddle&rsquo;s own privacy notice applies to
          that processing and is available at{" "}
          <a href="https://www.paddle.com/legal/privacy" rel="noreferrer noopener" target="_blank">
            paddle.com/legal/privacy
          </a>
          . Sparks will only ever receive a customer reference, the subscription state, and the
          invoice number from Paddle. We will not see, store, or have access to your card details.
          Paddle is not wired into the Service today.
        </p>
        <h3>Disclosure to authorities</h3>
        <p>
          We will disclose personal data to a public authority only when required by Italian or EU
          law, or by a binding order from a competent court. When legally permitted, we will notify
          the affected user first.
        </p>
        <h3>No sale of personal data</h3>
        <p>
          We do not sell, rent, or trade personal data. We do not share personal data with
          advertising networks or data brokers.
        </p>
        <h3>Sub-subprocessors and updates</h3>
        <p>
          Our processors rely on infrastructure providers of their own (for example, Supabase and
          Vercel build on Amazon Web Services and Cloudflare). Each of our processors maintains its
          own public list of subprocessors, which forms part of the chain we are accountable for
          under GDPR Art. 28 and EDPB Opinion 22/2024 on processors and sub-processors. We review
          those lists at least annually. If we add or change a processor that meaningfully affects
          what we do with your data &mdash; in particular if it expands transfers outside the EEA
          &mdash; we will update this page and email registered users at least 30 days in advance,
          as described in §10.
        </p>
        <h3>EU Data Act assessment</h3>
        <p>
          We have assessed the EU Data Act (Regulation (EU) 2023/2854, applicable from 12 September
          2025) and determined that its provisions on connected products and IoT data sharing do not
          apply to Sparks, which is a software-as-a-service offering and not a connected product.
          The Data Act&rsquo;s cloud-switching provisions in Chapter VIII apply to our
          infrastructure providers; we will document their portability and termination-assistance
          commitments in our processor due-diligence file.
        </p>
      </>
    ),
  },
  {
    id: "international-transfers",
    number: "05",
    title: "International transfers",
    plain:
      "Some processors are in the US or UK. The European Commission has signed off on the legal mechanisms we use for those transfers.",
    body: (
      <>
        <p>
          Personal data is stored in the European Economic Area where we can, but several
          subprocessors (Vercel, Supabase, Resend, and Upstash) operate from the United States. For
          those transfers we rely on:
        </p>
        <ul>
          <li>
            the European Commission&rsquo;s{" "}
            <strong>adequacy decision for the EU&ndash;US Data Privacy Framework</strong> (10 July
            2023), where the provider is DPF-certified; and
          </li>
          <li>
            <strong>Standard Contractual Clauses</strong> (Implementing Decision (EU) 2021/914)
            together with any supplementary technical measures we determine are appropriate, as a
            fallback and for non-DPF recipients.
          </li>
        </ul>
        <p>
          When paid subscriptions launch, for transfers to Paddle in the United Kingdom we will rely
          on the European Commission&rsquo;s <strong>UK adequacy decision</strong> (28 June 2021).
          Paddle&rsquo;s own onward-transfer mechanisms to its US and EU subprocessors (DPF and
          SCCs) and its full subprocessor list are published at{" "}
          <a href="https://www.paddle.com/legal/dpa" rel="noreferrer noopener" target="_blank">
            paddle.com/legal/dpa
          </a>
          .
        </p>
        <p>
          We verify the DPF certification status of each US recipient at least annually via the
          official US Department of Commerce list at{" "}
          <a
            href="https://www.dataprivacyframework.gov/list"
            rel="noreferrer noopener"
            target="_blank"
          >
            dataprivacyframework.gov/list
          </a>
          . If a recipient&rsquo;s certification lapses, we fall back to SCCs with supplementary
          measures while we evaluate alternatives. A copy of the SCCs or DPA for any recipient is
          available on request to <a href="mailto:privacy@sparksesl.com">privacy@sparksesl.com</a>.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    number: "06",
    title: "How long we keep your data",
    plain:
      "Account data goes when you delete your account. When paid subscriptions launch, invoices will stay ten years because Italian tax law says so.",
    body: (
      <>
        <p>
          We apply the storage-limitation principle (GDPR Art. 5(1)(e)): personal data is kept in
          identifiable form only for as long as necessary for the purpose for which it was
          collected, or as required by Italian or EU law. The table below sets the maximum retention
          for each category.
        </p>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Retention</th>
              <th>Why</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Account data, saved lessons, group labels, preferences (excluding open support
                tickets and items below)
              </td>
              <td>While your account is active, plus 30 days after deletion request</td>
              <td>Allow recovery of an accidentally deleted account</td>
            </tr>
            <tr>
              <td>Browser-side UI preferences (theme)</td>
              <td>Until you change it or clear browser storage</td>
              <td>Remember your light/dark selection</td>
            </tr>
            <tr>
              <td>Technical and security logs (salted IP hash, user agent, request URL)</td>
              <td>
                30 days under normal operation; up to 6 months if needed for a live security
                investigation
              </td>
              <td>Abuse detection and incident response</td>
            </tr>
            <tr>
              <td>Billing metadata and invoices (when paid subscriptions launch)</td>
              <td>10 years from the end of the fiscal year</td>
              <td>Italian civil code art. 2220 and DPR 600/1973</td>
            </tr>
            <tr>
              <td>Support correspondence</td>
              <td>24 months from last reply</td>
              <td>Quality, dispute-handling, and improving our support knowledge base</td>
            </tr>
            <tr>
              <td>Cookie consent record</td>
              <td>Up to 6 months, or until you withdraw it</td>
              <td>Prove consent and avoid re-prompting (Garante 2021 guidelines)</td>
            </tr>
            <tr>
              <td>Performance &amp; error telemetry (Core Web Vitals, error traces)</td>
              <td>
                Not retained &mdash; our telemetry endpoint processes these reports in memory and
                does not currently store them
              </td>
              <td>Diagnose faults and keep the Service reliable and secure</td>
            </tr>
          </tbody>
        </table>
        <p>
          When a retention period expires, we delete or irreversibly anonymise the data. Backups
          containing personal data roll over within 35 days.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    number: "07",
    title: "Your rights",
    plain:
      "You can see, correct, delete, export, restrict, or object. Email us and we act within a month — no runaround.",
    body: (
      <>
        <p>
          Under GDPR Articles 15 to 22 and Italian D.Lgs. 196/2003 as amended, you have the right
          to:
        </p>
        <ul>
          <li>
            <strong>Access</strong> the personal data we hold about you, and receive a copy in a
            commonly used format;
          </li>
          <li>
            <strong>Rectify</strong> inaccurate or incomplete data;
          </li>
          <li>
            <strong>Erase</strong> your data (&ldquo;right to be forgotten&rdquo;), subject to the
            retention periods in §6 where we are legally required to keep records;
          </li>
          <li>
            <strong>Restrict</strong> our processing while a request is being handled;
          </li>
          <li>
            <strong>Be told who we told</strong> &mdash; have any rectification, erasure, or
            restriction communicated to each recipient your data was disclosed to, unless that
            proves impossible or disproportionate (GDPR Art. 19);
          </li>
          <li>
            <strong>Object</strong> to processing based on our legitimate interests, including for
            direct marketing;
          </li>
          <li>
            <strong>Port</strong> data you have provided to us to another service, where processing
            is based on consent or contract and carried out by automated means;
          </li>
          <li>
            <strong>Withdraw consent</strong> at any time (without affecting the lawfulness of
            processing carried out before withdrawal);
          </li>
          <li>
            <strong>Not be subject</strong> to a decision based solely on automated processing that
            produces legal effects &mdash; we do not carry out such processing today.
          </li>
        </ul>
        <h3>How to exercise them</h3>
        <p>
          Email <a href="mailto:privacy@sparksesl.com">privacy@sparksesl.com</a> from the address on
          your account. For formal communications, you may also write by registered post to the
          address in §1. Standard email is sufficient for rights requests and is treated by us as an
          equivalent channel under GDPR Art. 12. We may ask for reasonable proof of identity if
          there is doubt about who is making the request. We answer within <strong>30 days</strong>{" "}
          (extendable by up to two further months for complex requests, with written notice and
          reasons). Requests are free. We may refuse or charge a reasonable fee only if requests are
          manifestly unfounded or excessive, and we will explain why in writing (GDPR Art. 12(5)).
        </p>
        <h3>Data portability mechanism</h3>
        <p>
          For portability requests, we provide an export of your account data, saved lessons, group
          labels, and preferences in a machine-readable JSON archive within 30 days. When paid
          subscriptions launch, the Paddle billing metadata will be exportable directly from
          Paddle&rsquo;s customer portal.
        </p>
        <h3>Right to lodge a complaint</h3>
        <p>
          You can complain to the Italian supervisory authority,{" "}
          <strong>Garante per la protezione dei dati personali</strong> &mdash; Piazza Venezia 11,
          00187 Roma; email <a href="mailto:protocollo@gpdp.it">protocollo@gpdp.it</a>; PEC{" "}
          <a href="mailto:protocollo@pec.gpdp.it">protocollo@pec.gpdp.it</a>; complaint form at{" "}
          <a
            href="https://www.garanteprivacy.it/modulistica/reclamo"
            rel="noreferrer noopener"
            target="_blank"
          >
            garanteprivacy.it/modulistica/reclamo
          </a>
          . You may also complain to the supervisory authority in your EU country of habitual
          residence, place of work, or place of the alleged infringement (GDPR Art. 77). You do not
          have to contact us first.
        </p>
        <h3>Right to a judicial remedy (GDPR Art. 79)</h3>
        <p>
          Separately from the right to complain to the Garante, you have the right to an{" "}
          <strong>effective judicial remedy</strong> against us or against any of our processors
          before the Italian ordinary courts (GDPR Art. 79; D.Lgs. 196/2003 art. 152). You can also
          bring proceedings in the courts of your EU country of habitual residence. Choosing to
          complain to the Garante does not prevent you from also bringing court proceedings.
        </p>
      </>
    ),
  },
  {
    id: "us-privacy-rights",
    number: "08",
    title: "Your US privacy rights (California & other states)",
    plain:
      "If you're in California or another US state with a privacy law, you can see, delete, correct, and export your info. We don't sell or share it, so there's nothing to opt out of — but if that ever changed we'd honor your Global Privacy Control signal.",
    body: (
      <>
        <p>
          We offer the Service in the United States. Depending on your state of residence (for
          example California under the CCPA/CPRA, and the comparable laws of Virginia, Colorado,
          Connecticut, Utah, and other states), you may have the right to:
        </p>
        <ul>
          <li>
            <strong>Know and access</strong> the personal information we have collected about you;
          </li>
          <li>
            <strong>Delete</strong> the personal information we hold about you;
          </li>
          <li>
            <strong>Correct</strong> inaccurate personal information;
          </li>
          <li>
            <strong>Port</strong> a copy of your personal information in a portable,
            machine-readable format;
          </li>
          <li>
            <strong>Opt out</strong> of the sale or sharing of your personal information, of
            targeted (cross-context behavioural) advertising, and of profiling for decisions that
            produce legal or similarly significant effects;
          </li>
          <li>
            <strong>Appeal</strong> a refused request, in states that grant an appeal right; and
          </li>
          <li>
            Use an <strong>authorized agent</strong> to submit a request on your behalf.
          </li>
        </ul>
        <p>
          <strong>We do not sell or share your personal information</strong>, and we do not use it
          for cross-context behavioural advertising or for profiling. There is therefore nothing for
          you to opt out of today, and we have no &ldquo;Do Not Sell or Share My Personal
          Information&rdquo; obligation.{" "}
          <strong>If that ever changes, we will honour Global Privacy Control (GPC) signals</strong>{" "}
          and add the required opt-out link. We do not discriminate against you for exercising any
          of these rights.
        </p>
        <h3>Categories we collect (CCPA)</h3>
        <p>
          In the terms of the CCPA, the categories of personal information we collect are:{" "}
          <strong>identifiers</strong> (email address, display name, hashed IP),{" "}
          <strong>internet or other network activity</strong> (technical and security logs,
          performance and error telemetry), and the <strong>content you save</strong> (the lessons
          you save, download, or create, and the student group labels you define). The business and
          commercial purposes for which we collect each category, and how long we keep it, are set
          out in §3 and §6. We disclose these categories only to the service providers listed in §4,
          and only so they can perform services for us.
        </p>
        <h3>How to exercise your US rights</h3>
        <p>
          Email <a href="mailto:privacy@sparksesl.com">privacy@sparksesl.com</a>. We will verify
          your identity in a manner proportionate to the sensitivity of the request and the risk of
          harm, respond within the timeframe your state law requires, and will not discriminate
          against you for asking.
        </p>
      </>
    ),
  },
  {
    id: "children",
    number: "09",
    title: "Children",
    plain: "Sparks is for teachers, not kids. You must be 18 to sign up.",
    body: (
      <>
        <p>
          The Service is intended exclusively for adult ESL teachers. It is not directed at
          children. You must be at least 18 years old to create an account. We do not knowingly
          collect personal data from children. If you believe a child has created an account, please
          write to <a href="mailto:privacy@sparksesl.com">privacy@sparksesl.com</a> and we will
          delete the account and the associated data promptly.
        </p>
        <p>
          Italian law sets the minimum age for valid consent to information-society services at 14
          (D.Lgs. 196/2003 art. 2-quinquies). Our 18+ requirement is contractual and stricter, since
          the Service is intended for professional adult ESL teachers.
        </p>
      </>
    ),
  },
  {
    id: "security",
    number: "10",
    title: "Security",
    plain:
      "Encryption in transit and at rest, hashed passwords, least-privilege access, and a 72-hour breach notice.",
    body: (
      <>
        <p>
          We take technical and organisational measures appropriate to the risk (GDPR Art. 32),
          including:
        </p>
        <ul>
          <li>
            TLS 1.2+ for all traffic between you and us, and between us and our subprocessors;
          </li>
          <li>encryption at rest for databases and backups;</li>
          <li>
            authentication is handled by our processor Supabase: your password is sent over TLS to
            Supabase, which stores it as a salted hash &mdash; Sparks does not store your password;
          </li>
          <li>
            least-privilege access controls for the one-person operations team, with
            hardware-key-based 2FA;
          </li>
          <li>audit logging on administrative actions;</li>
          <li>
            dependency and vulnerability review at least quarterly, plus continuous automated
            scanning;
          </li>
          <li>
            email correspondence is delivered over TLS-encrypted SMTP between our mail provider and
            most major email hosts; the body of email is not end-to-end encrypted &mdash; if you
            need to send sensitive information, write to us first and we will agree a secure channel
            (ePrivacy confidentiality of communications, D.Lgs. 196/2003 artt. 122&ndash;123).
          </li>
        </ul>
        <p>
          No system is perfectly secure. If we ever detect a personal data breach likely to result
          in a risk to your rights and freedoms, we will notify the Garante within{" "}
          <strong>72 hours</strong> and, where the risk is high, notify you directly{" "}
          <strong>through the email address on file for your account</strong> without undue delay
          (GDPR Art. 33&ndash;34).
        </p>
      </>
    ),
  },
  {
    id: "changes",
    number: "11",
    title: "Changes to this policy",
    plain:
      "If anything material changes, we email you before it kicks in and re-ask for cookie consent if needed.",
    body: (
      <>
        <p>
          We may update this policy from time to time. The &ldquo;Last updated&rdquo; date at the
          top of the page always reflects the current version. For <strong>material</strong> changes
          &mdash; a new purpose, a new subprocessor that expands international transfers, a change
          of legal basis &mdash; we will notify registered users by email at least{" "}
          <strong>30 days</strong> before the change takes effect, and re-surface the cookie banner
          where the change affects non-essential processing. Continued use of the Service after the
          effective date means you accept the updated policy; if you do not, you can cancel and
          request erasure per §7.
        </p>
        <p>
          The version in force on the date you signed up governs our handling of your data unless
          and until we notify you of a material change and the change takes effect as described
          above. Prior versions are archived and can be requested from{" "}
          <a href="mailto:privacy@sparksesl.com">privacy@sparksesl.com</a>.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    number: "12",
    title: "Contact",
    plain: "Write to privacy@sparksesl.com. We answer there.",
    body: (
      <>
        <p>
          Privacy questions, rights requests, and complaints:{" "}
          <a href="mailto:privacy@sparksesl.com">privacy@sparksesl.com</a>.
        </p>
        <p>Postal mail: Soldato Matthew James &mdash; Via Torino 2, 20831 Seregno (MB), Italy.</p>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      kicker="Legal · Privacy"
      title="Privacy policy."
      subtitle="The boring-but-important page about the data we collect, why we collect it, and the rights you have over it. We wrote the plain-English gloss so you can skim in sixty seconds."
      effectiveDate="22 April 2026"
      lastUpdated="19 May 2026"
      sections={SECTIONS}
      footerNote={
        <p>
          This policy is governed by Italian law and the EU General Data Protection Regulation
          (Regulation (EU) 2016/679). It is currently provided in English only; an Italian
          translation will be added when available and, where one exists, the Italian version will
          prevail for Italian consumers as required by D.Lgs. 206/2005 art. 35. A copy of this
          policy as it read on any prior effective date is available on request to{" "}
          <a href="mailto:privacy@sparksesl.com">privacy@sparksesl.com</a>.
        </p>
      }
    />
  );
}
