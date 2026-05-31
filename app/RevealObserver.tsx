"use client";

// ─────────────────────────────────────────────────────────────────────────────
// RevealObserver — adds `.in` to every `.reveal` element when it scrolls into
// view, driving the fade-up section animations. Mirrors the design's
// IntersectionObserver script. Renders nothing.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect } from "react";

export function RevealObserver() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal"));
    if (els.length === 0) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.14 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
