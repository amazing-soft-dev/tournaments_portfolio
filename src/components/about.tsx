import { Photo } from "@/components/photo";
import { RevealHeading } from "@/components/reveal-heading";
import { SectionRail } from "@/components/section-rail";

const statement =
  "Good design should feel obvious. Websites go beyond visuals — they bring structure, reduce friction, and help users move forward.";

export function About() {
  return (
    <section id="about">
      <SectionRail index="01" total="08" label="About me" />
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-12 md:px-8 xl:grid-cols-[0.8fr_1.2fr] xl:items-start">
        <div>
          <h2 className="display text-[60px] tracking-[-2px] md:text-[72px] xl:text-[88px] xl:tracking-[-4.4px]">
            About me
          </h2>
          <Photo
            src="/images/portrait-about-960.webp"
            alt="Hammet in profile"
            className="mt-8 aspect-[4/5] w-full object-cover"
          />
        </div>
        <div>
          <RevealHeading
            text={statement}
            className="display text-[40px] tracking-[-1.5px] md:text-[52px] xl:text-[64px] xl:tracking-[-2.56px]"
          />
          <div className="mt-8 max-w-[40rem] space-y-5 text-xl leading-[27.5px] text-body">
            <p>
              I’m a web designer and Framer developer focused on building websites that are clear, usable, and built to perform. My work combines design and hands-on development to help startups and growing teams launch, improve, and scale with confidence.
            </p>
            <p>
              Whether I’m designing from scratch, refining an existing product, or turning UI into a polished Framer build — I focus on structure, consistency, and execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
