import Link from "next/link";
import type { ReactNode } from "react";

type ArrowLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export function ArrowLink({ href, children, className = "", onClick }: ArrowLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group label inline-flex items-center gap-2 text-ink ${className}`}
    >
      <span className="relative inline-block h-2.5 w-2.5 overflow-hidden" aria-hidden="true">
        <svg
          viewBox="0 0 10 10"
          className="absolute top-0 left-[-10px] h-2.5 w-2.5 transition-all duration-300 ease-[cubic-bezier(0.44,0,0.56,1)] group-hover:left-0"
        >
          <path
            d="M1 5h8M6 2l3 3-3 3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          />
        </svg>
      </span>
      <span className="underline decoration-transparent underline-offset-[5px] transition-colors duration-500 ease-[cubic-bezier(0.44,0,0.56,1)] group-hover:decoration-current">
        {children}
      </span>
    </Link>
  );
}
