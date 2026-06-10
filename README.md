# Sparks — Coming Soon

The pre-launch landing page for [Sparks](https://sparksesl.com): source-led
English conversation lessons for adult classes. A static Next.js App Router
page with three small client islands (rotating hero word, scroll reveal,
waitlist form) and a Resend-backed waitlist.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Environment

Copy `.env.example` to `.env.local` (never commit it) and set:

| Variable             | Purpose                                                  |
| -------------------- | -------------------------------------------------------- |
| `RESEND_API_KEY`     | Resend API key — without it the form succeeds silently   |
| `SEND_FROM`          | Verified sender, e.g. `Sparks <hello@sparksesl.com>`     |
| `RESEND_AUDIENCE_ID` | Audience that collects every signup                      |
| `ALLOWED_ORIGINS`    | Optional extra origins allowed to call the server action |

## Syncing imagery from the main Spark repo

All lesson artwork is generated from the main repo's canonical thumbnails
(`../spark/web/public/illustrations/specials/`). When lessons change upstream:

```bash
bash scripts/sync-assets.sh   # requires cwebp, ffmpeg, sips (macOS)
```

This regenerates `public/illustrations/mosaic/` (480px hero tiles),
`public/illustrations/cards/` (1920px gallery cards) and
`app/opengraph-image.jpg`, and fails if a slug listed in the script no longer
exists upstream. If canon moved (lessons added/retired, levels changed), also
update the hardcoded lists and copy in `app/page.tsx` and the slug arrays in
`scripts/sync-assets.sh`.

## Safety posture

- Strict security headers + CSP in `next.config.ts` (no third-party origins).
- The waitlist server action (`app/actions.ts`) validates and throttles
  server-side: origin check, honeypot, email validation, per-IP and per-email
  rate limits (in-memory, best-effort on serverless), 8kb action body limit.
- No analytics, no cookies, no client-side data collection.

## Deploy

Vercel project, domain `sparksesl.com`. Legal pages live at `/legal/privacy`
and `/legal/terms` (with `/privacy` and `/terms` redirecting).
