"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const reduce = useReducedMotion();
  const [current, setCurrent] = useState(reduce ? value : 0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (reduce) {
      setCurrent(value);
      return;
    }
    const node = ref.current;
    if (!node) return;
    let frame = 0;
    let started = false;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting || started) return;
        started = true;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / 900);
          setCurrent(Math.round(value * progress));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [reduce, value]);

  return (
    <span ref={ref}>
      {current}
      {suffix}
    </span>
  );
}
