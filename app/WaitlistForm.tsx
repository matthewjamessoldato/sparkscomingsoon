"use client";

// ─────────────────────────────────────────────────────────────────────────────
// WaitlistForm — email capture wired to Resend.
//
// Client island: validates email, calls the `joinWaitlist` server action
// (which adds the contact to a Resend audience), shows success on completion.
// Styled with the Coming Soon design's `wl-*` classes. `buttonLabel` lets the
// hero ("Join the waitlist") and CTA ("Notify me") forms differ.
// ─────────────────────────────────────────────────────────────────────────────

import { useActionState } from "react";
import { joinWaitlist, type WaitlistState } from "./actions";

const initial: WaitlistState = { ok: false, error: null, email: null };

export function WaitlistForm({
  buttonLabel = "Join the waitlist",
  micro = "No spam, ever — just one email the day we open to teachers.",
}: {
  buttonLabel?: string;
  micro?: string;
}) {
  const [state, formAction, pending] = useActionState(joinWaitlist, initial);

  if (state.ok) {
    return (
      <div className="wl-success">
        <b>You&apos;re on the list.</b>
        <span>
          We&apos;ll email <strong>{state.email}</strong> the day Sparks opens —
          nothing before then.
        </span>
      </div>
    );
  }

  return (
    <>
      <form className="wl-form" action={formAction}>
        <input
          type="email"
          name="email"
          required
          placeholder="your@email.com"
          className="wl-input"
          autoComplete="email"
          aria-label="Email address"
        />
        <button type="submit" className="wl-btn" disabled={pending}>
          {pending ? "Joining…" : buttonLabel}
        </button>
        {state.error && <p className="wl-error">{state.error}</p>}
      </form>
      <p className="wl-micro">{micro}</p>
    </>
  );
}
