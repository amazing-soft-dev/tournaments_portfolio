import { SectionRail } from "@/components/section-rail";
import { steps } from "@/content/process";

export function Process() {
  return (
    <section id="process">
      <SectionRail index="04" total="08" label="Process" />
      <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-8">
        <h2 className="display max-w-[14ch] text-[60px] tracking-[-2px] md:text-[72px] xl:text-[88px] xl:tracking-[-4.4px]">
          A clear process from the first conversation to launch.
        </h2>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.id} className="border border-line p-6">
              <p className="micro text-muted">{step.id}</p>
              <h3 className="display mt-10 text-[32px] tracking-[-1px] md:text-[40px]">{step.title}</h3>
              <p className="mt-4 text-lg leading-7 text-body">{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
