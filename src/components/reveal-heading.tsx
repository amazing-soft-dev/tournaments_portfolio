"use client";

import { motion, useReducedMotion } from "motion/react";

export function RevealHeading({ text, className }: { text: string; className?: string }) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  return (
    <h2 className={className} aria-label={text}>
      {words.map((word, wordIndex) => (
        <span key={`${word}-${wordIndex}`} className="inline-block whitespace-nowrap">
          {word.split("").map((letter, letterIndex) => (
            <motion.span
              key={`${wordIndex}-${letterIndex}`}
              className="inline-block"
              initial={reduce ? false : { y: 10, opacity: 0.001 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: reduce ? 0 : 0.45,
                delay: reduce ? 0 : (wordIndex * 4 + letterIndex) * 0.012,
              }}
            >
              {letter}
            </motion.span>
          ))}
          {wordIndex < words.length - 1 ? <span className="inline-block">&nbsp;</span> : null}
        </span>
      ))}
    </h2>
  );
}
