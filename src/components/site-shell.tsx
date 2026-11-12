import type { ReactNode } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <div className="pt-[62px]">{children}</div>
      <Footer />
    </>
  );
}
