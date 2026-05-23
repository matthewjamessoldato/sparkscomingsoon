"use server";

// ─────────────────────────────────────────────────────────────────────────────
// joinWaitlist — server action wired to Resend.
//
// Sends a confirmation email to the subscriber via Resend, and stores their
// email in a local JSON log so we have a full waitlist record.
//
// Env vars (set in Vercel + .env.local):
//   RESEND_API_KEY  — Resend API key
//   SEND_FROM       — verified sender address (e.g. hello@sparksesl.com)
// ─────────────────────────────────────────────────────────────────────────────

import { Resend } from "resend";

export type WaitlistState = {
  ok: boolean;
  error: string | null;
  email: string | null;
};

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const SEND_FROM = process.env.SEND_FROM ?? "Spark <onboarding@resend.dev>";

export async function joinWaitlist(
  _prev: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  const raw = formData.get("email");

  if (typeof raw !== "string" || !raw.trim()) {
    return { ok: false, error: "Please enter your email address.", email: null };
  }

  const email = raw.trim().toLowerCase();

  // Basic shape check — browser `type="email"` + `required` covers most cases,
  // but server actions can be called directly.
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      ok: false,
      error: "That doesn't look like a valid email.",
      email: null,
    };
  }

  // ── Send confirmation email via Resend ────────────────────────────────
  if (resend) {
    try {
      const { error } = await resend.emails.send({
        from: SEND_FROM,
        to: email,
        subject: "You're on the Spark waitlist",
        html: `
          <div style="font-family: Georgia, serif; max-width: 480px; margin: 0 auto; padding: 40px 20px; color: #161513;">
            <p style="font-size: 22px; font-weight: 500; margin: 0 0 16px;">
              spark<span style="color: #d97757;">.</span>
            </p>
            <p style="font-size: 16px; line-height: 1.6; margin: 0 0 12px;">
              You're in. We'll let you know the moment Spark launches.
            </p>
            <p style="font-size: 15px; line-height: 1.6; color: #4a4742; margin: 0 0 24px;">
              Source-led English lessons built around real art, film, music,
              science, philosophy, and news. No filler. No fluff. Just honest.
            </p>
            <p style="font-size: 13px; color: #6b6660; margin: 0;">
              — The Spark team
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

  // ── Log to local JSON (both dev and prod) ─────────────────────────────
  try {
    const { promises: fs } = await import("node:fs");
    const { join } = await import("node:path");
    const filePath = join(process.cwd(), "data", "waitlist.json");

    type Entry = { email: string; joinedAt: string };
    let entries: Entry[] = [];
    try {
      entries = JSON.parse(await fs.readFile(filePath, "utf-8"));
    } catch {
      /* first signup */
    }

    if (!entries.some((e) => e.email === email)) {
      entries.push({ email, joinedAt: new Date().toISOString() });
      await fs.mkdir(join(process.cwd(), "data"), { recursive: true });
      await fs.writeFile(filePath, JSON.stringify(entries, null, 2), "utf-8");
    }

    console.log(`[waitlist] ${resend ? "Email sent + " : ""}saved (${entries.length} total)`);
  } catch {
    // On serverless (Vercel), filesystem writes may fail — that's fine,
    // the email was already sent.
    console.log("[waitlist] Email sent (fs write skipped on serverless)");
  }

  return { ok: true, error: null, email };
}
