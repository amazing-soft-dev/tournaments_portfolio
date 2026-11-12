import { ArrowLink } from "@/components/arrow-link";

const links = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/projects", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-paper px-5 pt-16 md:px-8">
      <div className="mx-auto grid max-w-[1200px] gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
        <div>
          <p className="micro text-muted">Digital product designer</p>
          <nav className="mt-6 flex flex-col items-start gap-3" aria-label="Footer">
            {links.map((link) => (
              <ArrowLink key={link.href} href={link.href}>
                {link.label}
              </ArrowLink>
            ))}
          </nav>
        </div>
        <div className="md:text-right">
          <ArrowLink href="/#hero">Back top</ArrowLink>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-[1200px] micro text-muted">Copyright © Mark Hammet 2005–2026</p>
      <div className="mx-auto mt-6 max-w-[1200px] overflow-hidden">
        <p className="display text-[28vw] leading-[0.72] text-ink xl:text-[220px]">Hammet</p>
      </div>
    </footer>
  );
}
