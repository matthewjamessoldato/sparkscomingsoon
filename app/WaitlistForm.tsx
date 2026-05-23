"use client";

// ─────────────────────────────────────────────────────────────────────────────
// WaitlistForm — email capture wired to Resend.
//
// Client island: validates email, calls the `joinWaitlist` server action
// (which adds the contact to a Resend audience), shows success on completion.
// ─────────────────────────────────────────────────────────────────────────────

import { useActionState } from "react";
import { joinWaitlist, type WaitlistState } from "./actions";

const initial: WaitlistState = { ok: false, error: null, email: null };

export function WaitlistForm() {
  const [state, formAction, pending] = useActionState(joinWaitlist, initial);

  if (state.ok) {
    return (
      <div className="soon-success">
        <span className="soon-success-title">You're on the list.</span>
        <span className="soon-success-body">
          We'll reach out to <strong>{state.email}</strong> the moment Sparks
          launches. Keep an eye on your inbox.
        </span>
      </div>
    );
  }

  return (
    <form className="soon-form" action={formAction}>
      <input
        type="email"
        name="email"
        required
        placeholder="you@example.com"
        className="soon-input"
        autoComplete="email"
        aria-label="Email address"
      />
      <button type="submit" className="soon-cta" disabled={pending}>
        {pending ? "Joining…" : "Join Waitlist"}
      </button>
      {state.error && <p className="soon-error">{state.error}</p>}
    </form>
  );
}
