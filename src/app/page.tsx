import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { Proof } from "@/components/proof";
import { Services } from "@/components/services";
import { WorkPreview } from "@/components/work-preview";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <WorkPreview />
      <Services />
      <Process />
      <Experience />
      <Proof />
      <Faq />
    </main>
  );
}
