"use server";

// ─────────────────────────────────────────────────────────────────────────────
// joinWaitlist — server action wired to Resend.
//
// Adds the email to a Resend audience (contact list). When launch day comes,
// send a broadcast from the Resend dashboard to every contact in the audience.
//
// Env vars (set in Vercel + .env.local):
//   RESEND_API_KEY    — Resend API key
//   RESEND_AUDIENCE_ID — the audience to add contacts to
//
// Falls back to a local JSON file if Resend is not configured (dev mode).
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

const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID ?? "";

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

  // ── Resend audience ───────────────────────────────────────────────────
  if (resend && AUDIENCE_ID) {
    try {
      const { error } = await resend.contacts.create({
        email,
        audienceId: AUDIENCE_ID,
        unsubscribed: false,
      });

      // Resend returns an error object (not throw) on failure.
      // "Contact already exists" is fine — idempotent signup.
      if (error && !error.message?.includes("already exists")) {
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

    return { ok: true, error: null, email };
  }

  // ── Dev fallback: write to local JSON ─────────────────────────────────
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

  console.log(
    `[waitlist] Dev mode — saved to data/waitlist.json (${entries.length} contacts)`,
  );
  return { ok: true, error: null, email };
}
