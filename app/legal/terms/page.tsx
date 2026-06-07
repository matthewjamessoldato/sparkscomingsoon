// ─────────────────────────────────────────────────────────────────────────────
// TERMS OF SERVICE — /legal/terms
//
// TWO-STATE STRUCTURE. The live Service is a free beta; the paid product and the
// checkout that supports it are not built yet. These Terms are therefore split:
//
//   • Part A — Terms for the CURRENT (free) Service. Effective now. Acceptance,
//     eligibility, account, the licence, acceptable use, your content, fees
//     (FREE), AI disclosure, disclaimers, liability, availability, termination,
//     changes, governing law + disputes, accessibility, general, contact.
//
//   • Part B — Subscription Terms. NOT YET ACTIVE. They take effect ONLY when
//     paid plans and the checkout launch. ALL present-tense Paddle / checkout /
//     auto-renewal / withdrawal / invoice / refund content lives here and is
//     marked not-yet-binding. Do not let Part B bind anyone before the checkout,
//     the auto-renewal consent UX, click-to-cancel, and the EU Withdrawal Button
//     are actually built.
//
// The load-bearing ideas a future editor must preserve:
//
//   1. Two states, not one. Part A is the contract we can stand behind today.
//      Part B is forward-looking and switches on at paid launch. Never collapse
//      them back into a single set of present-tense subscription terms while the
//      checkout does not exist.
//   2. Two contracts (Part B). Service delivery = Sparks. Purchase transaction =
//      Paddle. The TOS cannot quietly absorb the payment leg — Paddle is the
//      seller on the invoice and the counterparty for refunds and chargebacks.
//   3. Italian Consumer Code (D.Lgs. 206/2005) overrides anything in these terms
//      that would take away a consumer protection. We say that out loud, and we
//      never cap consumer liability or pre-empt mandatory rights.
//   4. The 14-day EU withdrawal right (Part B). Digital services lose it only
//      when the user EXPRESSLY consents to immediate performance AND acknowledges
//      they lose the right. That consent is collected at checkout — not here. The
//      14-day clock runs from the conclusion of the contract per Art. 52(2)(a)
//      Codice del Consumo (NOT from receipt of a confirmation email). A permanent
//      EU "Withdraw from contract here" Button is mandatory from 19 June 2026.
//   5. AI disclosure (AI Act Reg. (EU) 2024/1689 Art. 50, applicable 2 Aug 2026).
//      Sparks lessons are LLM-assisted at the drafting stage with a human
//      curation step. Part A says so. Support replies and account decisions are
//      human.
//   6. DSA (Reg. (EU) 2022/2065). Sparks is a micro-enterprise but Articles 11,
//      12, 14, 17, and 20 still apply. Part A carries the statement of reasons +
//      internal complaint system and names the single point of contact.
//   7. The EU ODR Platform was discontinued on 20 July 2025 by Reg. (EU)
//      2024/3228. Never restore a link to ec.europa.eu/consumers/odr.
//
// If the pricing model changes (one-time purchases, credits, team plans) Part B
// needs a rewrite, not a patch.
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import { LegalPage, type LegalSectionNode } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service · Sparks",
  description:
    "The contract between you and Sparks. Written in plain English alongside the legal text. Part A covers the free Service today; Part B is the subscription terms that switch on when paid plans launch.",
};

const SECTIONS: LegalSectionNode[] = [
  // ───────────────────────────────────────────────────────────────────────────
  // PART A — the free Service, effective now
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "part-a",
    number: "A",
    title: "Part A — Terms for the current (free) Service",
    plain:
      "This part is in force now. It covers the free Service you can use today. The paid subscription terms are in Part B and are not active yet.",
    body: (
      <>
        <p>
          <strong>Part A is effective now.</strong> It governs your use of the Service as it exists
          today: a free beta. The Service has no paid plans and no checkout at the moment, so there
          are no charges, no auto-renewals, and no payment obligations under Part A.
        </p>
        <p>
          The subscription terms in <strong>Part B</strong> (Paddle, billing, auto-renewal, the
          right of withdrawal, refunds) are <strong>forward-looking and not yet active</strong>.
          They take effect only when we launch paid plans and the checkout that supports them, on
          notice. Until then they bind no one.
        </p>
      </>
    ),
  },
  {
    id: "agreement",
    number: "A1",
    title: "The agreement you're making",
    plain:
      "By creating an account you agree to these terms and our Privacy Policy. You must be 18+. Don't use the Service if you don't agree.",
    body: (
      <>
        <p>
          These Terms of Service (the &ldquo;Terms&rdquo;) form a legally binding agreement between
          you and <strong>Soldato Matthew James</strong>, an Italian sole trader (ditta individuale)
          acting under the trading name &ldquo;<strong>Sparks</strong>&rdquo; (&ldquo;we&rdquo;,
          &ldquo;us&rdquo;). The Terms govern your access to and use of sparksesl.com and every
          feature of the Service.
        </p>
        <p>
          Our identification details, published in accordance with Art. 7 of D.Lgs. 70/2003 (Italian
          implementation of the eCommerce Directive 2000/31/EC) and Art. 2250 of the Italian Civil
          Code:
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
            <strong>General contact:</strong>{" "}
            <a href="mailto:hello@sparksesl.com">hello@sparksesl.com</a>
          </li>
          <li>
            <strong>Privacy contact:</strong>{" "}
            <a href="mailto:privacy@sparksesl.com">privacy@sparksesl.com</a>
          </li>
        </ul>
        <p>
          By creating an account, you confirm that you are <strong>at least 18 years old</strong>,
          that you have legal capacity to enter into this contract, and that you accept these Terms
          and our <a href="/legal/privacy">Privacy Policy</a>.
        </p>
        <h3>How your acceptance is captured</h3>
        <p>
          Binding clickwrap assent is collected <strong>at signup</strong>: the create-account form
          requires you to affirmatively agree to these Terms and the Privacy Policy (with both
          documents linked) before you can submit, and the timestamp and the version you accepted
          are logged. If you do not accept these Terms, do not create an account and do not use the
          Service.
        </p>
      </>
    ),
  },
  {
    id: "service-description",
    number: "A2",
    title: "What the Service is, and what you need to use it",
    plain:
      "Sparks is an online library of adult ESL conversation lessons. You run it in a modern browser, no app to install.",
    body: (
      <>
        <h3>The Service</h3>
        <p>
          Sparks is an online library and presentation tool for adult ESL (English as a Second
          Language) conversation lessons. Each lesson (&ldquo;a Spark&rdquo;) is a structured plan
          built around a real cultural or intellectual source. The Service is delivered through a
          web browser at sparksesl.com.
        </p>
        <h3>Technical requirements (functionality and interoperability)</h3>
        <p>
          To use the Service you need a recent version of a modern web browser (Chrome, Firefox,
          Safari, or Edge &mdash; current and previous major versions) and a stable internet
          connection. The Service runs in your browser without a separate desktop or mobile app.
          Some interactive features may not work on browsers older than two years. Print and
          projection of lesson materials use standard browser printing. There is no DRM applied to
          the lesson materials inside the Service.
        </p>
        <h3>Compatibility</h3>
        <p>
          The Service is compatible with operating systems that run the supported browser versions
          above. Screen readers are supported for text-based content; visual elements include
          alternative text where available. See §A15 for our accessibility commitment.
        </p>
        <h3>Third-party services and links</h3>
        <p>
          The Service relies on third-party infrastructure (for example hosting, authentication,
          and, once paid plans launch, the Paddle checkout described in Part B) and may contain
          links to third-party websites, such as the ADR list at mimit.gov.it. We do not control and
          are not responsible for the content, products, or practices of third-party services or
          linked sites, and a link is not an endorsement. Your use of a third-party service is
          governed by that third party&rsquo;s own terms and privacy notice, not these Terms. This
          does not affect our own responsibility for the Service itself or your statutory rights as
          a consumer.
        </p>
      </>
    ),
  },
  {
    id: "account",
    number: "A3",
    title: "Your account",
    plain:
      "One account per teacher. Keep the password to yourself. You're responsible for what happens under it.",
    body: (
      <>
        <p>You need an account to use most of the Service. You agree to:</p>
        <ul>
          <li>provide accurate, current information when you sign up and keep it up to date;</li>
          <li>maintain the security of your password and not share it;</li>
          <li>
            be responsible for everything done through your account, unless you have told us that
            your credentials were compromised;
          </li>
          <li>
            notify us immediately of any unauthorised access at{" "}
            <a href="mailto:hello@sparksesl.com">hello@sparksesl.com</a>.
          </li>
        </ul>
        <p>
          Accounts are personal and non-transferable. A single account covers one teacher using the
          Service with their own students. If you need multiple seats for colleagues, contact us.
        </p>
        <h3>Transactional vs. marketing emails</h3>
        <p>
          Creating an account means we may send you <strong>transactional</strong> emails needed to
          operate the Service (sign-up confirmation, password reset, and important service notices).
          These are part of the contract and you cannot opt out of them while you have an account.
          Our <strong>newsletter and other marketing emails</strong> are a{" "}
          <strong>separate opt-in</strong>: you only receive them if you subscribe, confirm via
          double opt-in, and stay subscribed. You can unsubscribe from marketing emails at any time
          through the one-click link in every email, without affecting your account.
        </p>
      </>
    ),
  },
  {
    id: "our-content",
    number: "A4",
    title: "Our content and the licence to you",
    plain:
      "We own the lessons. While the Service is available to you, you can use them with your students. You can't repackage or sell them.",
    body: (
      <>
        <p>
          All lesson content, prompts, slide layouts, typography, software, and brand assets in the
          Service are owned by Sparks or our licensors and protected by Italian and international
          copyright and trademark law.
        </p>
        <p>
          We grant you a{" "}
          <strong>
            limited, personal, non-exclusive, non-transferable, non-sublicensable, revocable licence
          </strong>{" "}
          to use the Service for its intended purpose. While you have access you may:
        </p>
        <ul>
          <li>view and use lesson materials inside the Service;</li>
          <li>
            print or project lesson materials to teach your own students, including online over
            video;
          </li>
          <li>make a reasonable number of copies for your own classroom use.</li>
        </ul>
        <p>You may not:</p>
        <ul>
          <li>redistribute lesson materials outside your own classes;</li>
          <li>remove or obscure copyright, credit, or watermark marks;</li>
          <li>
            offer paid tutoring programs whose core deliverable is unmodified Sparks lesson
            materials bundled as a standalone product.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "acceptable-use",
    number: "A5",
    title: "How you may use Sparks",
    plain:
      "Use it to teach adult ESL. Don't resell the lessons, scrape the site, or use it to do anything illegal.",
    body: (
      <>
        <p>
          You may use the Service to prepare and teach adult ESL lessons to your own students. You
          agree not to:
        </p>
        <ul>
          <li>
            resell, sublicense, publish, or redistribute Sparks lesson materials, in whole or in
            part, except to the extent required to teach your own classes;
          </li>
          <li>
            scrape, crawl, or systematically extract content from the Service, including through
            automated means or AI agents, except through any API we make officially available;
          </li>
          <li>reverse engineer, decompile, or attempt to derive the source code of the Service;</li>
          <li>
            use the Service to build a competing product, to train a generative model, or to
            populate a third-party content library;
          </li>
          <li>
            attempt to gain unauthorised access to the Service, probe or scan its security, or
            interfere with its operation;
          </li>
          <li>
            use the Service in any way that is unlawful, infringing, defamatory, harassing, or that
            violates the rights of others;
          </li>
          <li>impersonate another person or misrepresent your affiliation;</li>
          <li>
            use the Service in jurisdictions subject to EU or UN sanctions, or in breach of Italian
            or EU export controls.
          </li>
        </ul>
        <p>We may suspend or terminate your account if you materially breach these rules (§A12).</p>
        <h3>Non-discrimination of EU consumers (Geo-blocking)</h3>
        <p>
          In accordance with Regulation (EU) 2018/302 we do not restrict EU consumers from accessing
          the Service on the basis of nationality, place of residence, or place of establishment
          within the EU. The sanctions and export-control restriction above applies only to
          jurisdictions outside the EU that are subject to mandatory restrictive measures under
          Italian or EU law.
        </p>
        <h3>Reporting illegal content</h3>
        <p>
          If you become aware of illegal content stored or transmitted through the Service, please
          notify us at <a href="mailto:hello@sparksesl.com">hello@sparksesl.com</a> with the subject
          line &ldquo;Illegal content notice&rdquo;. Once we have actual knowledge of illegal
          content we will act expeditiously to remove or disable access to it, in accordance with
          Articles 14&ndash;17 of D.Lgs. 70/2003 and Articles 16 and 17 of the EU Digital Services
          Act (Regulation (EU) 2022/2065).
        </p>
      </>
    ),
  },
  {
    id: "your-content",
    number: "A6",
    title: "Your content",
    plain:
      "Anything you put into Sparks stays yours. You give us just enough permission to actually host and display it to you.",
    body: (
      <>
        <p>
          &ldquo;Your Content&rdquo; is anything you submit to the Service: student group labels,
          notes, customised lesson metadata, support messages, and anything else you add. You retain
          all ownership and intellectual property rights in Your Content.
        </p>
        <p>
          You grant us a <strong>limited, worldwide, royalty-free, non-exclusive licence</strong> to
          host, store, reproduce, and display Your Content solely to operate, secure, and deliver
          the Service to you, and to make backups. The licence ends when you delete Your Content,
          subject to our backup rotation cycle (up to 35 days) and any legal retention obligations
          (§6 of the Privacy Policy).
        </p>
        <p>
          You are responsible for Your Content and warrant that you have the right to submit it. Do
          not upload personal data of your students beyond the minimum necessary for organising your
          teaching (first names, group labels); do not upload sensitive-category data (GDPR Art. 9).
        </p>
        <h3>No training on Your Content</h3>
        <p>
          We do <strong>not</strong> use Your Content to train, fine-tune, or evaluate any
          generative AI model, ours or a third party&rsquo;s. Your Content stays inside the
          operational data plane of the Service. If we ever propose to change this, we will give you
          advance notice and require your opt-in consent.
        </p>
        <h3>Moderation</h3>
        <p>
          We may remove or disable access to Your Content if it breaches §A5 or is illegal, in
          accordance with Article 17 of the EU Digital Services Act. Where we do, we will give you a
          statement of reasons as described in §A12.
        </p>
      </>
    ),
  },
  {
    id: "fees",
    number: "A7",
    title: "Fees — the Service is currently free",
    plain:
      "Right now Sparks is free. There are no paid plans and no checkout yet. The subscription terms in Part B only switch on once paid plans and the checkout launch.",
    body: (
      <>
        <p>
          <strong>The Service is currently free.</strong> We may change, limit, or discontinue
          free beta features.
        </p>
        <p>
          <strong>Paid subscriptions are not yet available.</strong> There is no checkout, so no
          charges, auto-renewals, or payment obligations apply to you today.
        </p>
        <p>
          The subscription terms in <strong>Part B</strong> &mdash; pricing, Paddle as Merchant of
          Record, billing, auto-renewal, the right of withdrawal, and refunds &mdash;{" "}
          <strong>
            take effect only when we launch paid plans and the checkout that supports them
          </strong>
          , on notice. Until that launch, Part B is not binding and nothing in it can charge you.
        </p>
      </>
    ),
  },
  {
    id: "ai",
    number: "A8",
    title: "AI in the Service",
    plain:
      "We use AI to help draft lesson content. A human approves every lesson before it ships. We tell you upfront.",
    body: (
      <>
        <p>
          Sparks lesson content is produced with a structured pipeline that uses a large language
          model (LLM) to draft each lesson from a verified real-world source, followed by a
          model-driven check pass and a <strong>human curation step that decides what ships</strong>
          . Slide layouts, the teaching method, software, brand, and the choice of source for each
          lesson are designed and selected by a human. The visual chrome of every Spark is not
          AI-generated.
        </p>
        <p>
          Under <strong>Article 50 of the EU AI Act (Regulation (EU) 2024/1689)</strong>, applicable
          from 2 August 2026, we make this disclosure so you can make an informed choice. We do{" "}
          <strong>not</strong> use AI to make automated decisions about your account, your access,
          or your support requests. Customer-support replies are written by a human.
        </p>
        <p>
          We do not train any third-party AI model on Your Content (§A6), and §A5 prohibits using
          the Service to train a generative model.
        </p>
      </>
    ),
  },
  {
    id: "warranty",
    number: "A9",
    title: "Warranty disclaimer",
    plain:
      "The Service comes as-is. Consumer protections under Italian law still apply — nothing here overrides them.",
    body: (
      <>
        <p>
          Subject to mandatory consumer protections under Italian and EU law, the Service is
          provided <strong>&ldquo;as is&rdquo; and &ldquo;as available&rdquo;</strong>. To the
          maximum extent permitted by law, we disclaim all implied warranties including
          merchantability, fitness for a particular purpose, and non-infringement. We do not warrant
          that the Service will be uninterrupted or error-free. This does not affect your
          non-excludable statutory or consumer rights.
        </p>
        <h3>Conformity of the digital service</h3>
        <p>
          Under Articles 135-octies and following of the Italian Consumer Code (D.Lgs. 206/2005),
          transposing Directive (EU) 2019/770 on contracts for the supply of digital content and
          digital services, we are required to supply a digital service that conforms to the
          contract, including any description we publish, the purpose you reasonably expect it for,
          and ordinary quality standards. We must also provide updates necessary to keep the Service
          in conformity, including security updates, throughout the period of supply (Art.
          135-duodecies).
        </p>
        <h3>If the Service is not in conformity</h3>
        <ol>
          <li>
            You can ask us to bring the Service into conformity (free of charge, within a reasonable
            time, and without significant inconvenience to you) by writing to{" "}
            <a href="mailto:hello@sparksesl.com">hello@sparksesl.com</a>.
          </li>
          <li>
            If we cannot or refuse to bring it into conformity, if the non-conformity persists
            despite our attempt, or if the problem is serious enough to justify it immediately, you
            are entitled to a <strong>proportionate price reduction</strong> (where you have paid)
            or, where the non-conformity is not minor, to <strong>terminate the contract</strong>{" "}
            (Art. 135-quinquiesdecies and 135-septies decies).
          </li>
        </ol>
        <p>
          The burden of proving conformity at the time of supply lies with us for any non-conformity
          that becomes apparent <strong>within one year</strong> of supply, in line with Art.
          135-quaterdecies(3) Codice del Consumo.
        </p>
        <p>
          <strong>Consumer rights:</strong> if you are a consumer,{" "}
          <strong>nothing in these Terms limits or excludes your statutory rights</strong> under the
          Italian Consumer Code (D.Lgs. 206/2005), including the conformity-of-digital-service
          rights under Articles 135-octies through 135-vicies ter. Those rights apply in addition to
          anything written here.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    number: "A10",
    title: "Liability",
    plain:
      "If you're a consumer, Italian law sets the rules and we don't cap them. If you use Sparks as a business, our liability is limited and you cover claims caused by your own breach. Consumers are never asked to indemnify us.",
    body: (
      <>
        <p>
          <strong>If you are a consumer</strong> within the meaning of the Italian Consumer Code,
          our liability for damages arising out of or in connection with the Service or these Terms
          is governed by Italian law, including the Italian Civil Code (Art. 1218, 1223, 1227, 1229)
          and the conformity-of-digital-service regime in Art. 135-octies and following of the
          Consumer Code.{" "}
          <strong>
            Nothing in these Terms limits or excludes our liability to a consumer beyond what
            Italian law permits.
          </strong>
        </p>
        <p>
          <strong>If you are acting in the course of a business or profession</strong> and are not a
          consumer, our liability to you for any claim arising out of or in connection with the
          Service or these Terms is limited to the maximum extent permitted by applicable law. In a
          business context we are not liable for indirect, incidental, special, or
          consequential damages, loss of profit, loss of business opportunity, or loss of data, save
          where such exclusion is not permitted by law.
        </p>
        <p>
          <strong>In every case</strong>, nothing in these Terms limits or excludes our liability
          for: (i) fraud or fraudulent misrepresentation; (ii) gross negligence or wilful misconduct
          (colpa grave o dolo, Art. 1229 c.c.); (iii) death or personal injury caused by our
          negligence; or (iv) any liability that cannot be limited or excluded under applicable
          mandatory law, including the Italian Consumer Code.
        </p>
        <h3>Your responsibility for your own breach</h3>
        <p>
          If you use the Service <strong>in the course of a business or profession</strong> and are
          not a consumer, you will reimburse us for third-party claims, and our reasonable directly
          related costs, that arise specifically from <strong>your own</strong> breach of these
          Terms, your misuse of the Service, Your Content, or your violation of law. We will notify
          you of any such claim, not settle it without your consent (not to be unreasonably
          withheld), and let you participate in the defence. This is limited to loss actually caused
          by your own fault.
        </p>
        <p>
          <strong>If you are a consumer, this paragraph does not apply.</strong> We do not ask
          consumers to indemnify us; your liability to us is limited to what mandatory Italian and
          EU consumer law provides, and nothing here shifts our own risk onto you.
        </p>
      </>
    ),
  },
  {
    id: "availability",
    number: "A11",
    title: "Availability and changes to the Service",
    plain:
      "We aim to keep the Service up. We also keep improving it, and that sometimes means changes — but only for stated reasons, with notice, and you can leave if a change harms you.",
    body: (
      <>
        <p>
          We will use reasonable efforts to keep the Service available. We do not guarantee specific
          uptime levels and are not liable for downtime due to maintenance or third-party
          infrastructure failure beyond our reasonable control. Italian Consumer Code Art.
          135-duodecies requires us to provide updates, including security updates, necessary to
          keep the Service in conformity throughout the period of supply; we do.
        </p>
        <h3>When and why we may modify the Service</h3>
        <p>
          Beyond what is necessary to keep the Service in conformity, we may modify the Service only
          for the following <strong>specified valid reasons</strong>, in accordance with Art.
          135-vicies of the Italian Consumer Code (transposing Digital Content Directive 2019/770
          Art. 19):
        </p>
        <ul>
          <li>to add, improve, or update features and content;</li>
          <li>to address security, fraud, or abuse risks;</li>
          <li>
            to maintain compatibility with third-party platforms, browsers, devices, or operating
            systems we rely on;
          </li>
          <li>to comply with applicable law, a regulatory order, or a court decision;</li>
          <li>
            to retire a feature that has been replaced or is no longer technically supportable.
          </li>
        </ul>
        <p>
          Any such modification will be made <strong>at no additional cost</strong> to you and we
          will inform you in advance by email or in-product notice where the change is more than
          minor.
        </p>
        <h3>Your right to terminate if the change harms you</h3>
        <p>
          Where a modification <strong>negatively impacts</strong> your access to or use of the
          Service in more than a minor way, you can{" "}
          <strong>terminate this contract free of charge within 30 days</strong> of receiving notice
          of the change or of the change being made, whichever is later. Where you have paid for a
          period, we will refund the unused portion in proportion (Art. 135-vicies(3) Codice del
          Consumo).
        </p>
        <h3>Events beyond our reasonable control</h3>
        <p>
          Neither party is liable for failure or delay in performing obligations under these Terms
          (other than payment) that is caused by events beyond reasonable control: natural
          disasters, acts of public authorities, internet or third-party infrastructure outages,
          war, civil disturbance, pandemic, or large-scale cyber-attack. We will use reasonable
          efforts to restore service as soon as practicable and to keep you informed. This clause
          does not limit your statutory rights under the Italian Consumer Code in respect of
          non-conformity of the Service.
        </p>
      </>
    ),
  },
  {
    id: "termination",
    number: "A12",
    title: "Suspension and termination",
    plain:
      "You can leave any time. If we have to suspend or close your account, we'll explain why in writing, and you can challenge it through our complaint process.",
    body: (
      <>
        <p>
          <strong>You</strong> can stop using Sparks at any time and delete your account from your
          account settings or by writing to{" "}
          <a href="mailto:hello@sparksesl.com">hello@sparksesl.com</a>.
        </p>
        <h3>When we may suspend or terminate</h3>
        <p>
          <strong>We</strong> may suspend or terminate your account, or restrict the visibility or
          use of content you have submitted, only for one of the following reasons: material breach
          of these Terms, a suspected fraud, a serious security or abuse incident, or a legal or
          regulatory requirement. Except where immediate action is necessary to prevent harm, we
          will give you at least <strong>14 days&rsquo; notice</strong> and a reasonable opportunity
          to cure.
        </p>
        <h3>Statement of reasons (DSA Article 17)</h3>
        <p>
          Where we impose a restriction on your account or your content, we will give you a{" "}
          <strong>clear, specific, and individualised statement of reasons</strong>, in accordance
          with Article 17 of the EU Digital Services Act (Regulation (EU) 2022/2065). The statement
          will identify: (a) the facts and circumstances that led to the decision; (b) the specific
          provision of these Terms or applicable law that was breached; (c) whether automated means
          were used to detect or decide on the restriction (today: no &mdash; every restriction is
          decided by a human); (d) the territorial scope; and (e) your right to challenge the
          decision through our internal complaint system, through an ADR body, or through the
          courts.
        </p>
        <h3>Internal complaint-handling system (DSA Article 20)</h3>
        <p>
          If you disagree with a decision to suspend, terminate, or otherwise restrict your account
          or content, you can submit a complaint <strong>free of charge</strong> by writing to{" "}
          <a href="mailto:hello@sparksesl.com">hello@sparksesl.com</a> with the subject line
          &ldquo;DSA complaint&rdquo; within <strong>6 months</strong> of the decision. A human
          reviewer will examine the complaint and respond with a reasoned decision in writing within
          a reasonable time. If we made a mistake we will reverse the decision and restore access
          without delay. The internal complaint route is in addition to your right to use an ADR
          body or the courts (§A14).
        </p>
        <h3>Effect of termination</h3>
        <p>
          On termination, your right to use the Service ends. We will retain and delete data as
          described in §6 of the Privacy Policy.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    number: "A13",
    title: "Changes to these Terms",
    plain:
      "We can update these terms, but only for real reasons, with advance notice, and you get 30 days to leave free of charge if a change is bad for you.",
    body: (
      <>
        <p>
          We may update these Terms for specified, legitimate legal, technical, or commercial
          reasons. We will notify registered users by email at least <strong>30 days</strong> before
          a material change takes effect, and we give you a{" "}
          <strong>30-day right to terminate free of charge</strong> if a change is to your
          detriment. Changes apply prospectively. If you do not accept a change, you can stop using
          the Service before it takes effect.
        </p>
        <p>
          We will not make these Terms one-sided or illusory: any reason we rely on must be a real,
          stated reason of the kind listed above, and a change that materially reduces your rights
          triggers the termination right in the previous paragraph.
        </p>
      </>
    ),
  },
  {
    id: "governing-law",
    number: "A14",
    title: "Governing law and disputes",
    plain:
      "Italian law. If you're an EU or UK consumer you keep your home-country protections and courts — no arbitration or class-action waiver is imposed on you.",
    body: (
      <>
        <p>
          These Terms are governed by <strong>Italian law</strong>, excluding its conflict-of-laws
          rules.
        </p>
        <p>
          If you are an <strong>EU or UK consumer</strong>, you keep the mandatory protections and
          the courts of the country where you live: you may bring proceedings against us in the
          courts of the Member State in which you are domiciled (Art. 18(1) Regulation (EU)
          1215/2012 &mdash; Brussels I bis), and the choice of Italian law here does not deprive you
          of the protection of mandatory provisions of the law of your habitual residence (Art. 6
          Regulation (EC) 593/2008 &mdash; Rome I). Italian Art. 66-bis Codice del Consumo confirms
          this.{" "}
          <strong>
            We do not impose arbitration, a class-action waiver, or an exclusive foreign venue on
            consumers.
          </strong>{" "}
        </p>
        <p>
          If you are acting in the course of a business, the <strong>Tribunale di Monza</strong>,
          Italy, has exclusive jurisdiction.
        </p>
        <h3>Alternative dispute resolution (ADR)</h3>
        <p>
          If you have a complaint that we have not been able to resolve in writing, you have the
          right to refer the dispute to an alternative dispute resolution body recognised by the
          Italian authorities under Title II-bis of the Consumer Code (D.Lgs. 130/2015 transposing
          Directive 2013/11/EU). The list of recognised ADR bodies in Italy is maintained by the
          Ministero delle Imprese e del Made in Italy at{" "}
          <a
            href="https://www.mimit.gov.it/it/mercato-e-consumatori/tutela-del-consumatore/elenco-organismi-adr"
            rel="noreferrer noopener"
            target="_blank"
          >
            mimit.gov.it
          </a>
          . Sparks has not committed to using a specific ADR body and is not obliged by law to do
          so, but we will engage constructively with any recognised body you choose.
        </p>
        <p>
          The EU Online Dispute Resolution Platform previously available at
          ec.europa.eu/consumers/odr was discontinued on 20 July 2025 pursuant to Regulation (EU)
          2024/3228 and is no longer a route for new complaints.
        </p>
      </>
    ),
  },
  {
    id: "accessibility",
    number: "A15",
    title: "Accessibility",
    plain:
      "We're working towards WCAG 2.2 AA and publish accessibility information. Tell us if you hit a barrier.",
    body: (
      <>
        <p>
          We work towards <strong>WCAG 2.2 AA</strong> conformance under the European Accessibility
          Act (Directive (EU) 2019/882) and publish accessibility information. Screen readers are
          supported for text-based content, and visual elements include alternative text where
          available. The conformance claim is matched to our accessibility audit and not asserted
          beyond it.
        </p>
        <p>
          If you hit an accessibility barrier, tell us at{" "}
          <a href="mailto:hello@sparksesl.com">hello@sparksesl.com</a> and we will work with you on
          an accessible alternative.
        </p>
      </>
    ),
  },
  {
    id: "misc",
    number: "A16",
    title: "General",
    plain:
      "Standard plumbing: parts that fail don't sink the rest, you can't hand your account off without asking, we reach you by email so keep yours current, and the English version controls for business users.",
    body: (
      <>
        <p>
          <strong>Severability.</strong> If any clause of these Terms is held unenforceable, the
          remaining clauses remain in full force. The unenforceable clause will be modified only to
          the minimum extent necessary to make it enforceable.
        </p>
        <p>
          <strong>Force majeure.</strong> See §A11 — neither party is liable for failures caused by
          events beyond reasonable control.
        </p>
        <p>
          <strong>Assignment.</strong> You may not assign these Terms without our prior written
          consent. We may assign these Terms in connection with a reorganisation, merger, or sale of
          our business, provided we give you at least{" "}
          <strong>30 days&rsquo; notice by email</strong> before the assignment takes effect and the
          assignment does not reduce your rights under these Terms. If you do not accept the
          assignment, you can stop using the Service before it takes effect.
        </p>
        <p>
          <strong>Entire agreement.</strong> These Terms, together with the Privacy Policy, form the
          entire agreement between you and Sparks regarding the Service.
        </p>
        <p>
          <strong>No waiver.</strong> A failure to enforce any right under these Terms is not a
          waiver of that right.
        </p>
        <p>
          <strong>Notices.</strong> We give you notice by email to the address on your account or by
          an in-product message; it is treated as received when sent, unless we know it failed.
          Service-status and legal-change notices may also be posted on the Service. You give us
          formal notice by email to <a href="mailto:hello@sparksesl.com">hello@sparksesl.com</a> or
          by post to the registered address in §A1. It is your responsibility to keep your account
          email current (§A3).
        </p>
        <p>
          <strong>No third-party beneficiaries.</strong> These Terms are between you and us, and
          create no enforceable rights for any other person, except that Paddle benefits from the
          Part B terms that describe its role.
        </p>
        <p>
          <strong>Headings.</strong> Section numbers and headings are for convenience only and do
          not affect interpretation.
        </p>
        <p>
          <strong>Language.</strong> These Terms are currently provided in English only. An Italian
          translation will be added when available; where one exists,{" "}
          <strong>for Italian consumers the Italian version prevails</strong> in the event of any
          conflict between the two (D.Lgs. 206/2005 art. 35). For consumers in other EU Member
          States you may receive these Terms in English or Italian and benefit from the mandatory
          consumer-protection provisions of the law of your habitual residence (Art. 6 Regulation
          (EC) 593/2008). For business users not acting as consumers, the English version controls.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    number: "A17",
    title: "Contact",
    plain: "Write to hello@sparksesl.com. Privacy and postal routes are below.",
    body: (
      <>
        <p>
          <strong>General contact, support, and complaints:</strong>{" "}
          <a href="mailto:hello@sparksesl.com">hello@sparksesl.com</a>.
        </p>
        <p>
          <strong>Privacy contact:</strong>{" "}
          <a href="mailto:privacy@sparksesl.com">privacy@sparksesl.com</a>.
        </p>
        <p>
          <strong>Postal mail:</strong> Soldato Matthew James &mdash; Via Torino 2, 20831 Seregno
          (MB), Italy.
        </p>
        <h3>Single point of contact (DSA Articles 11&ndash;12)</h3>
        <p>
          For the purposes of Articles 11 and 12 of the Digital Services Act (Regulation (EU)
          2022/2065), our single electronic point of contact for users and for authorities of EU
          Member States, the European Commission, and the European Board for Digital Services is{" "}
          <a href="mailto:hello@sparksesl.com">hello@sparksesl.com</a>. We accept communications in
          English and Italian. We will acknowledge messages from authorities without undue delay and
          respond as the matter requires.
        </p>
      </>
    ),
  },

  // ───────────────────────────────────────────────────────────────────────────
  // PART B — subscription terms, NOT YET ACTIVE
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "part-b",
    number: "B",
    title: "Part B — Subscription Terms (not yet active)",
    plain:
      "This part is NOT in force. It is the paid-subscription contract that switches on only when we launch paid plans and the checkout. Until then nothing here binds you.",
    body: (
      <>
        <p>
          <strong>Part B is not yet active.</strong> It is forward-looking. It becomes binding only
          once paid plans and the supporting infrastructure are actually built and launched, on
          notice &mdash; specifically once <strong>all</strong> of the following exist:
        </p>
        <ul>
          <li>
            a <strong>checkout</strong> that captures the auto-renewal consent in §B3 (ROSCA /
            state-ARL style consent) before payment details are entered;
          </li>
          <li>
            <strong>click-to-cancel</strong> online self-service that is at least as easy as signing
            up;
          </li>
          <li>
            the <strong>EU 14-day withdrawal</strong> flow with immediate-performance consent and
            the mandatory <strong>EU Withdrawal Button</strong>;
          </li>
          <li>the US auto-renewal reminder regime and the UK CCRs/DMCC cadence.</li>
        </ul>
        <p>
          Until that launch, <strong>do not treat any clause in Part B as in effect.</strong> There
          are no charges, no auto-renewals, and no payment obligations under the current free
          Service (see §A7).
        </p>
      </>
    ),
  },
  {
    id: "b-plans",
    number: "B1",
    title: "Plans and price (at launch)",
    plain:
      "When paid plans launch there'll be a monthly and an annual price plus a free tier. The exact figures are confirmed at launch — don't rely on the numbers in the code.",
    body: (
      <>
        <p>
          When paid plans launch, the Service will be offered on a recurring subscription basis
          (monthly or annual). The total price (including any VAT or sales tax applicable in your
          country of residence) will be shown at the checkout before you confirm.
        </p>
        <p>
          Final pricing, free-tier limits, and any free-trial terms will be shown clearly before
          checkout. No price shown in pre-launch product materials creates a payment obligation.
        </p>
      </>
    ),
  },
  {
    id: "b-two-contracts",
    number: "B2",
    title: "Two contracts: Sparks and Paddle",
    plain:
      "When you subscribe, Sparks delivers the lessons and Paddle takes the money. You'll have a contract with both, and they cover different things.",
    body: (
      <>
        <p>
          When you subscribe (once paid plans launch) you enter into <strong>two</strong> separate
          agreements:
        </p>
        <ol>
          <li>
            <strong>A service agreement with Sparks</strong> &mdash; Part A of these Terms. Sparks
            is responsible for providing the Service, the accuracy of product descriptions, content
            quality, uptime, and your experience inside the product.
          </li>
          <li>
            <strong>A purchase agreement with Paddle.com Market Ltd</strong> (&ldquo;
            <strong>Paddle</strong>&rdquo;), our <strong>Merchant of Record</strong>. Paddle is the
            seller and legal counterparty for the payment transaction: it charges your payment
            method, issues the invoice, collects and remits VAT or sales tax, and handles refund and
            chargeback processing. Paddle&rsquo;s own terms apply at checkout and are available at{" "}
            <a
              href="https://www.paddle.com/legal/checkout-buyer-terms"
              rel="noreferrer noopener"
              target="_blank"
            >
              paddle.com/legal/checkout-buyer-terms
            </a>
            .
          </li>
        </ol>
        <p>
          Paddle.com Market Ltd is registered in England and Wales with registered address at Judd
          House, 18&ndash;29 Mora Street, London EC1V 8BT, United Kingdom. For VAT purposes Paddle
          is the supplier of record for your purchase. VAT or sales tax is added (or, for inclusive
          jurisdictions, included) at the rate applicable to your country of residence and is
          collected and remitted by Paddle. Invoices issued by Paddle are VAT-compliant in the EU
          under Council Directive 2006/112/EC and the e-commerce VAT regime in Council Directive
          (EU) 2017/2455.
        </p>
        <p>
          Any invoice you receive will be issued by Paddle. Any charge on your card or bank
          statement will appear as a Paddle descriptor. This does not affect your service
          relationship with us: if something is wrong with the Service, write to us; if something is
          wrong with a charge or invoice, Paddle is the first port of call.
        </p>
      </>
    ),
  },
  {
    id: "b-renewal",
    number: "B3",
    title: "Auto-renewal, billing and consent",
    plain:
      "Subscriptions will auto-renew until cancelled. Before you enter payment details the checkout will spell out the price, the cycle, that it renews, and how to cancel — and you'll give clear, un-bundled consent (no pre-ticked box).",
    body: (
      <>
        <p>
          The Service will be provided on a <strong>recurring subscription</strong> basis (monthly
          or annual, as selected at checkout). The price displayed at checkout is the price you pay
          for the current billing period. Applicable VAT and sales tax are added or included
          according to your country of residence and are collected and remitted by Paddle as
          Merchant of Record.
        </p>
        <h3>Affirmative consent before payment (US ROSCA + state ARLs; EU/UK)</h3>
        <p>
          Subscriptions <strong>auto-renew</strong> at the end of each billing period at the
          then-current price until cancelled. <strong>Before you enter payment details</strong>, the
          checkout will disclose &mdash; clearly and at least as prominently as the pay button
          &mdash; the price, the billing cycle, that the subscription auto-renews, and how to
          cancel, and you will give <strong>affirmative, un-bundled consent</strong> (no pre-ticked
          box). You then receive a retainable confirmation. These steps satisfy the US ROSCA / state
          automatic renewal laws and the EU/UK subscription-transparency rules, and are part of why
          Part B cannot take effect until the checkout that captures this consent exists.
        </p>
        <h3>Renewal reminders</h3>
        <p>
          For annual subscriptions we send a reminder by email before the renewal date. For monthly
          subscriptions we send the renewal receipt on the day of the charge. Both messages include
          a one-click link to cancel before the next renewal.
        </p>
        <h3>Failed payments</h3>
        <p>
          If a renewal charge fails, Paddle will retry for a short period. If we cannot collect
          payment, we may suspend or terminate your subscription and access to the Service. We will
          notify you by email before suspension.
        </p>
      </>
    ),
  },
  {
    id: "b-cancellation",
    number: "B4",
    title: "Cancellation (click-to-cancel)",
    plain:
      "You'll be able to cancel online, in as few steps as it took to sign up. Cancellation takes effect at the end of the period you've paid for.",
    body: (
      <>
        <p>
          You will be able to cancel at any time through{" "}
          <strong>online self-service that is at least as easy as signing up</strong>{" "}
          (click-to-cancel) &mdash; the &ldquo;Cancel my subscription&rdquo; control reachable from
          the same place where you signed up, in line with EU Directive (EU) 2023/2673 on the
          cancellation of subscription contracts &mdash; or by writing to{" "}
          <a href="mailto:hello@sparksesl.com">hello@sparksesl.com</a>. Cancellation takes effect at
          the <strong>end of the current billing period</strong> and you keep access until then. We
          do not pro-rate refunds for the unused portion of a period, except where required by
          mandatory law or §B5 (right of withdrawal).
        </p>
        <h3>Switching and termination (EU Data Act)</h3>
        <p>
          Independently of the right of withdrawal, you may terminate the Service at any time with
          up to a two-month notice period (Reg. (EU) 2023/2854 art. 25, applicable to
          data-processing services from 12 September 2025). On request and within 30 days of
          termination we will provide an export of your account data, saved lessons, and group
          labels in a structured machine-readable format (JSON) so you can move to a different
          provider.
        </p>
      </>
    ),
  },
  {
    id: "b-withdrawal",
    number: "B5",
    title: "EU/UK 14-day right of withdrawal",
    plain:
      "EU and UK consumers will get 14 days to change their mind. To start the service immediately you'll consent and acknowledge the right is lost (or you owe a pro-rata amount). The EU also requires a permanent Withdrawal Button.",
    body: (
      <>
        <p>
          If you are a consumer in the EU or the United Kingdom, you will have the right to withdraw
          from your purchase within <strong>14 days from the day the contract is concluded</strong>{" "}
          &mdash; for Sparks, the day Paddle confirms your subscription has been activated &mdash;
          without giving any reason, under Articles 52&ndash;59 of the Italian Consumer Code (D.Lgs.
          206/2005) transposing Directive 2011/83/EU. <strong>UK:</strong> the Consumer Contracts
          Regulations (CCRs) cooling-off applies now; ahead of autumn 2026 we will build the DMCC
          reminder cadence and per-renewal cooling-off.
        </p>
        <h3>Immediate performance and when the right is lost</h3>
        <p>
          The Service is a <strong>digital service</strong> provided without a tangible medium.
          Under Art. 59(1)(o) of the Italian Consumer Code, the right of withdrawal is{" "}
          <strong>lost</strong>, or a <strong>pro-rata amount</strong> may be owed, only if:
        </p>
        <ul>
          <li>
            performance of the service has begun with your <strong>express prior consent</strong>;
            and
          </li>
          <li>
            you acknowledged at checkout that you{" "}
            <strong>lose the withdrawal right (or owe a pro-rata amount)</strong> once performance
            has started.
          </li>
        </ul>
        <p>
          Both steps are captured on a <strong>non-pre-ticked control at checkout</strong> and
          confirmed on a durable medium. If you did not give both, or if you are within 14 days and
          performance has not begun, you can withdraw and receive a{" "}
          <strong>refund within 14 days of our receiving notice of your withdrawal</strong>, using
          the same means of payment used for the original transaction unless you expressly agree
          otherwise (Art. 56(1)&ndash;(3) Codice del Consumo).{" "}
          <strong>
            [Design note: in light of AG Opinion C-234/25, design for pro-rata refund exposure
            rather than a total waiver of the right.]
          </strong>
        </p>
        <h3>The EU Withdrawal Button (mandatory from 19 June 2026)</h3>
        <p>
          For EU consumers, a permanent <strong>&ldquo;Withdraw from contract here&rdquo;</strong>{" "}
          Withdrawal Button is <strong>mandatory from 19 June 2026</strong> and must be built into
          the subscriber account before Part B binds EU consumers.
        </p>
        <h3>How to withdraw</h3>
        <p>
          Send a clear statement of your decision to withdraw to{" "}
          <a href="mailto:hello@sparksesl.com">hello@sparksesl.com</a> (or in writing to Soldato
          Matthew James &mdash; Via Torino 2, 20831 Seregno (MB), Italy), or use the EU Withdrawal
          Button. You may, but are not required to, use the model withdrawal form set out in Annex
          I-B of D.Lgs. 206/2005 reproduced below.
        </p>
        <h3>Model withdrawal form (Annex I-B, D.Lgs. 206/2005)</h3>
        <p>Complete and return this form only if you wish to withdraw from the contract:</p>
        <blockquote>
          <p>
            To: Soldato Matthew James &mdash; Via Torino 2, 20831 Seregno (MB), Italy &mdash;{" "}
            <a href="mailto:hello@sparksesl.com">hello@sparksesl.com</a>
          </p>
          <p>
            I/We (*) hereby give notice that I/We (*) withdraw from my/our (*) contract of sale of
            the following goods (*)/for the provision of the following service (*):
          </p>
          <p>Ordered on (*)/received on (*):</p>
          <p>Name of consumer(s):</p>
          <p>Address of consumer(s):</p>
          <p>Signature of consumer(s) (only if this form is notified on paper):</p>
          <p>Date:</p>
          <p>(*) Delete as appropriate.</p>
        </blockquote>
        <p>
          Paddle, as Merchant of Record, processes the refund to your original payment method within
          the statutory 14-day period. This does not affect any other refund rights under applicable
          law.
        </p>
      </>
    ),
  },
  {
    id: "b-us-renewal",
    number: "B6",
    title: "US auto-renewal regime",
    plain:
      "For US customers we'll run the renewal reminders, pre-charge notices, and easy online cancellation that ROSCA and the state laws (California and others) require.",
    body: (
      <>
        <p>
          For US customers, the renewal reminders, pre-charge notices, and easy online cancellation
          required by <strong>ROSCA</strong> and the state automatic renewal laws (California and
          others) will apply. We will maintain a per-state reminder-window matrix so each customer
          receives the notices their state mandates, and the cancellation path will meet the
          click-to-cancel standard in §B4.
        </p>
      </>
    ),
  },
  {
    id: "b-refunds",
    number: "B7",
    title: "Price changes, refunds and invoices",
    plain:
      "We'll give notice before any price change, with a chance to cancel first. Refunds follow your statutory rights; otherwise pre-paid fees aren't refunded. Paddle issues the invoice.",
    body: (
      <>
        <h3>Price changes</h3>
        <p>
          We may change subscription prices from time to time. We will notify you at least{" "}
          <strong>30 days</strong> before a price change takes effect on your subscription. If you do not accept the new
          price, you can cancel before the change takes effect and continue to pay the old price
          until the end of the current period.
        </p>
        <h3>Refunds</h3>
        <p>
          Refunds follow your statutory withdrawal and conformity rights (see §B5 and §A9). Pre-paid
          fees are otherwise non-refundable except where mandatory law requires, or where §A11 (a
          modification that harms you) or termination for our breach applies. If we terminate for a
          material breach attributable to you, pre-paid fees are non-refundable except where
          mandatory law requires otherwise.
        </p>
        <h3>Confirmation of contract on a durable medium</h3>
        <p>
          Within a reasonable time after the contract is concluded, Paddle (as Merchant of Record)
          sends you the invoice and a confirmation email that includes the essential terms of your
          subscription. We deliver these Terms and the Privacy Policy on a
          durable medium by making them available at fixed URLs you can save or print from your
          browser at any time. You can also request a current copy by email at any time.
        </p>
      </>
    ),
  },
  {
    id: "b-launch-decisions",
    number: "B8",
    title: "Build-before-effective checklist",
    plain:
      "Before any of Part B can bind a customer, the checkout and cancellation flows have to exist.",
    body: (
      <>
        <p>
          Part B does not take effect until the following are built and available to subscribers:
        </p>
        <ol>
          <li>
            <strong>The checkout</strong> capturing the §B3 affirmative auto-renewal consent before
            payment details are entered.
          </li>
          <li>
            <strong>Click-to-cancel</strong> online self-service at least as easy as signing up
            (§B4).
          </li>
          <li>
            The <strong>EU Withdrawal Button</strong> and the immediate-performance consent control
            (§B5).
          </li>
          <li>
            The <strong>US</strong> ROSCA / state-ARL reminder matrix (§B6) and the{" "}
            <strong>UK</strong> CCRs/DMCC cadence (§B5).
          </li>
          <li>Final monthly and annual prices, free-tier limits, and any free-trial terms.</li>
        </ol>
      </>
    ),
  },
];

export default function TermsOfServicePage() {
  return (
    <LegalPage
      kicker="Legal · Terms"
      title="Terms of service."
      subtitle="The contract between you and Sparks. Part A covers the free Service in use today. Part B is the subscription contract that switches on only when paid plans and the checkout launch. Legal text on the left, plain English on the right so you can skim."
      effectiveDate="3 June 2026"
      lastUpdated="3 June 2026"
      sections={SECTIONS}
      footerNote={
        <p>
          These Terms are governed by Italian law. Nothing in them limits mandatory consumer
          protections under the Italian Consumer Code (D.Lgs. 206/2005), the EU General Data
          Protection Regulation, or any other mandatory provision of Italian or EU law.{" "}
          <strong>Part A</strong> (the free Service) is effective now. <strong>Part B</strong> (the
          subscription terms) is not yet active and takes effect only when paid plans and the
          supporting checkout, consent UX, click-to-cancel, and EU Withdrawal Button launch, on
          notice with the §A13 notice window. Prior versions of the Terms are available on request to{" "}
          <a href="mailto:hello@sparksesl.com">hello@sparksesl.com</a>.
        </p>
      }
    />
  );
}
