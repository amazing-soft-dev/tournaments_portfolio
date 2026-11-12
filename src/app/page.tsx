import { About } from "@/components/about";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { WorkPreview } from "@/components/work-preview";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <WorkPreview />
      <Services />
    </main>
  );
}
