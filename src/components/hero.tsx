"use client";

import { motion, useReducedMotion } from "motion/react";
import { Photo } from "@/components/photo";

const ease = [0.37, 0.02, 0.31, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="hero" className="mx-auto grid max-w-[1200px] items-end gap-10 px-5 py-8 md:px-8 xl:grid-cols-2 xl:py-12">
      <div>
        <div className="mb-8 flex items-center justify-between gap-4">
          <span className="micro text-muted">Based in Poland</span>
          <span className="micro text-right text-muted">Web Designer & Framer Developer</span>
        </div>
        <motion.h1
          className="display text-[96px] tracking-[-4px] text-ink md:text-[104px] xl:text-[156px] xl:tracking-[-12.48px]"
          initial={reduce ? false : { y: 32, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: reduce ? 0 : 0.7, ease }}
        >
          Smart ideas. Real impact.
        </motion.h1>
        <p className="mt-8 max-w-[34rem] text-2xl leading-[32.4px] text-body">
          Designing thoughtful websites and digital products focused on clarity, usability, and conversion.
        </p>
      </div>
      <motion.div
        initial={reduce ? false : { y: 320, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: reduce ? 0 : 0.9, ease }}
      >
        <Photo
          src="/images/portrait-hero-960.webp"
          alt="Portrait of Hammet"
          className="aspect-[4/5] w-full object-cover"
        />
      </motion.div>
    </section>
  );
}
