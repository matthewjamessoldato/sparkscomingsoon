"use client";

import { useEffect, useState } from "react";

const WORDS = ["film", "music", "art", "science", "philosophy", "news", "honest"];
const INTERVAL = 2400; // ms per word
const LAST = WORDS.length - 1;

export function RotatingWord() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");

  useEffect(() => {
    // Pause longer on "honest" (the final word)
    const hold = index === LAST ? INTERVAL * 1.6 : INTERVAL;

    const exitTimer = setTimeout(() => {
      setPhase("out");
    }, hold - 500); // start exit 500ms before switch

    const switchTimer = setTimeout(() => {
      setIndex((i) => (i + 1) % WORDS.length);
      setPhase("in");
    }, hold);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(switchTimer);
    };
  }, [index]);

  return (
    <span className="rotating-wrap">
      <span
        key={index}
        className={`rotating-word ${phase === "in" ? "rotating-in" : "rotating-out"}`}
      >
        {WORDS[index]}
      </span>
      <span className="soon-accent">.</span>
    </span>
  );
}
