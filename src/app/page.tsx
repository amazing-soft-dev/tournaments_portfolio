import { About } from "@/components/about";
import { Hero } from "@/components/hero";
import { WorkPreview } from "@/components/work-preview";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <WorkPreview />
    </main>
  );
}
