"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLink } from "@/components/arrow-link";

const links = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/projects", label: "Work" },
];

export function Header() {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 62 && y > last);
      if (y < 8) setHidden(false);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-10 h-[62px] bg-paper transition-transform duration-500 ease-[cubic-bezier(0.37,0.02,0.31,1)] ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-5 md:px-8">
        <Link href="/" className="label inline-flex items-center gap-2 text-ink">
          <span className="inline-block size-2 rotate-45 bg-ink" aria-hidden="true" />
          Hammet
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <ArrowLink key={link.href} href={link.href}>
              {link.label}
            </ArrowLink>
          ))}
          <ArrowLink href="/contact">Start a project</ArrowLink>
        </nav>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className={`h-0.5 w-3 bg-ink transition-transform ${open ? "translate-y-1" : ""}`} />
          <span className={`h-0.5 w-3 bg-ink transition-transform ${open ? "-translate-y-1" : ""}`} />
        </button>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          className="flex flex-col gap-5 border-t border-line bg-paper px-5 py-6 md:hidden"
          aria-label="Mobile"
        >
          {links.map((link) => (
            <ArrowLink key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </ArrowLink>
          ))}
          <ArrowLink href="/contact" onClick={() => setOpen(false)}>
            Start a project
          </ArrowLink>
        </nav>
      ) : null}
    </header>
  );
}
