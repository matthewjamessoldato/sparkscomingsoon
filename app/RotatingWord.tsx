"use client";

// ─────────────────────────────────────────────────────────────────────────────
// RotatingWord — the hero's cycling headline noun. Mirrors the Coming Soon
// design's rotWord script. Respects prefers-reduced-motion by holding the first
// word.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef, useState } from "react";

const WORDS = [
  "a painting",
  "a poem",
  "a study",
  "a headline",
  "a big question",
  "something real",
];
const INTERVAL = 2400;

export function RotatingWord() {
  const [word, setWord] = useState(WORDS[0]);
  const [phase, setPhase] = useState<"in" | "out">("in");
  const idx = useRef(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let outTimer: number;
    let swapTimer: number;

    function cycle() {
      const last = idx.current === WORDS.length - 1;
      const hold = last ? INTERVAL * 1.6 : INTERVAL;
      outTimer = window.setTimeout(() => setPhase("out"), hold - 460);
      swapTimer = window.setTimeout(() => {
        idx.current = (idx.current + 1) % WORDS.length;
        setWord(WORDS[idx.current]);
        setPhase("in");
        cycle();
      }, hold);
    }
    cycle();

    return () => {
      window.clearTimeout(outTimer);
      window.clearTimeout(swapTimer);
    };
  }, []);

  return (
    <span className="rot-wrap">
      <span className={"rot-word rot-" + phase}>{word}</span>
      <span className="rot-accent">.</span>
    </span>
  );
}
