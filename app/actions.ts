"use server";

// ─────────────────────────────────────────────────────────────────────────────
// joinWaitlist — server action wired to Resend.
//
// Sends a confirmation email to the subscriber via Resend and adds them to the
// configured Resend audience. The action validates and throttles on the server
// before touching the email API.
//
// Env vars (set in Vercel + .env.local):
//   RESEND_API_KEY  — Resend API key
//   SEND_FROM       — verified sender address (e.g. hello@sparksesl.com)
// ─────────────────────────────────────────────────────────────────────────────

import { createHash } from "node:crypto";
import { headers } from "next/headers";
import { Resend } from "resend";

export type WaitlistState = {
  ok: boolean;
  error: string | null;
  email: string | null;
};

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const SEND_FROM = process.env.SEND_FROM ?? "Sparks <onboarding@resend.dev>";
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID ?? "";
const ALLOWED_ORIGINS = new Set(
  (process.env.ALLOWED_ORIGINS ?? "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean),
);

const MAX_EMAIL_LENGTH = 254;
const IP_WINDOW_MS = 60 * 60 * 1000;
const EMAIL_WINDOW_MS = 24 * 60 * 60 * 1000;
const MAX_IP_SUBMISSIONS = 5;
const MAX_EMAIL_SUBMISSIONS = 3;
// In-memory buckets: per-instance on serverless, so a best-effort throttle
// rather than a hard global limit. MAX_BUCKETS caps memory if a botnet cycles
// keys; expired entries are swept before anything new is inserted at the cap.
const MAX_BUCKETS = 10_000;
const rateBuckets = new Map<string, { count: number; resetAt: number }>();

function hashValue(value: string) {
  return createHash("sha256").update(value).digest("hex");
}

function pruneRateBuckets(now: number) {
  for (const [key, bucket] of rateBuckets) {
    if (bucket.resetAt <= now) rateBuckets.delete(key);
  }
  // Still over the cap after sweeping: drop oldest-inserted entries. Refusing
  // new entries instead would let an attacker lock out fresh visitors.
  if (rateBuckets.size >= MAX_BUCKETS) {
    for (const key of rateBuckets.keys()) {
      if (rateBuckets.size < MAX_BUCKETS) break;
      rateBuckets.delete(key);
    }
  }
}

function consumeRateLimit(key: string, limit: number, windowMs: number) {
  const now = Date.now();
  if (rateBuckets.size >= MAX_BUCKETS && !rateBuckets.has(key)) {
    pruneRateBuckets(now);
  }
  const bucket = rateBuckets.get(key);

  if (!bucket || bucket.resetAt <= now) {
    rateBuckets.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (bucket.count >= limit) return false;

  bucket.count += 1;
  return true;
}

function firstForwardedValue(value: string | null) {
  return value?.split(",")[0]?.trim() || null;
}

function isSameOrigin(origin: string | null, host: string | null) {
  if (!origin || !host) return false;

  try {
    const originUrl = new URL(origin);
    return originUrl.host === host || ALLOWED_ORIGINS.has(originUrl.origin);
  } catch {
    return false;
  }
}

export async function joinWaitlist(
  _prev: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  const requestHeaders = await headers();
  const host =
    firstForwardedValue(requestHeaders.get("x-forwarded-host")) ??
    requestHeaders.get("host");
  const origin = requestHeaders.get("origin");

  if (!isSameOrigin(origin, host)) {
    return {
      ok: false,
      error: "Something went wrong. Please try again.",
      email: null,
    };
  }

  const honeypot = formData.get("company");
  if (typeof honeypot === "string" && honeypot.trim()) {
    return {
      ok: false,
      error: "Something went wrong. Please try again.",
      email: null,
    };
  }

  const raw = formData.get("email");

  if (typeof raw !== "string" || !raw.trim()) {
    return { ok: false, error: "Please enter your email address.", email: null };
  }

  const email = raw.trim().toLowerCase();

  // Browser `type="email"` + `required` helps honest users. The server action
  // still treats the request as attacker-controlled.
  if (
    email.length > MAX_EMAIL_LENGTH ||
    !/^[^\s@]{1,64}@[^\s@]{1,253}\.[^\s@]{2,63}$/.test(email)
  ) {
    return {
      ok: false,
      error: "That doesn't look like a valid email.",
      email: null,
    };
  }

  const ip =
    firstForwardedValue(requestHeaders.get("x-forwarded-for")) ??
    requestHeaders.get("x-real-ip") ??
    "unknown";
  const emailKey = hashValue(email);

  if (
    !consumeRateLimit(`ip:${ip}`, MAX_IP_SUBMISSIONS, IP_WINDOW_MS) ||
    !consumeRateLimit(`email:${emailKey}`, MAX_EMAIL_SUBMISSIONS, EMAIL_WINDOW_MS)
  ) {
    return {
      ok: false,
      error: "Too many attempts. Please try again later.",
      email: null,
    };
  }

  // ── Send confirmation email via Resend ────────────────────────────────
  if (resend) {
    try {
      const { error } = await resend.emails.send({
        from: SEND_FROM,
        to: email,
        subject: "You're on the Sparks waitlist",
        html: `
          <div style="font-family: Georgia, serif; max-width: 480px; margin: 0 auto; padding: 40px 20px; color: #161513;">
            <p style="font-size: 22px; font-weight: 500; margin: 0 0 16px;">
              Sparks<span style="color: #ff6a35;">.</span>
            </p>
            <p style="font-size: 16px; line-height: 1.6; margin: 0 0 12px;">
              You're in. We'll let you know the moment Sparks launches.
            </p>
            <p style="font-size: 15px; line-height: 1.6; color: #4a4742; margin: 0 0 24px;">
              Source-led English lessons built on real art, science,
              philosophy, literature, culture, and news. No filler — every
              lesson starts from a real source.
            </p>
            <p style="font-size: 13px; color: #6b6660; margin: 0;">
              — The Sparks team
            </p>
          </div>
        `,
      });

      if (error) {
        console.error("[waitlist] Resend error:", error);
        return {
          ok: false,
          error: "Something went wrong. Please try again.",
          email: null,
        };
      }
    } catch (err) {
      console.error("[waitlist] Resend exception:", err);
      return {
        ok: false,
        error: "Something went wrong. Please try again.",
        email: null,
      };
    }
  }

  // ── Add to Resend Audience (persistent, visible at resend.com/audiences) ──
  if (resend && AUDIENCE_ID) {
    try {
      await resend.contacts.create({
        audienceId: AUDIENCE_ID,
        email,
      });
      console.log(`[waitlist] Contact added to audience`);
    } catch (err) {
      // Duplicate contacts are silently accepted by Resend — this only
      // fires on real API errors. Non-fatal: the confirmation email
      // already went out.
      console.error("[waitlist] Audience write failed:", err);
    }
  }

  return { ok: true, error: null, email };
}
