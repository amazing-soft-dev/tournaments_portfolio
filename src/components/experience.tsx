import { SectionRail } from "@/components/section-rail";
import { roles } from "@/content/process";

export function Experience() {
  return (
    <section id="experience" className="bg-slate text-white">
      <div className="[&_span]:text-white">
        <SectionRail index="05" total="08" label="Experience" />
      </div>
      <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-8">
        <h2 className="display text-[60px] tracking-[-2px] text-white md:text-[72px] xl:text-[88px]">
          Experience
        </h2>
        <div className="mt-10 border-t border-white/25">
          {roles.map((role) => (
            <article
              key={role.id}
              className="grid gap-2 border-b border-white/25 py-5 md:grid-cols-[auto_1.3fr_1.4fr_0.8fr_0.9fr] md:items-baseline md:gap-6"
            >
              <p className="micro text-white/70">{role.id}</p>
              <h3 className="label text-white">{role.company}</h3>
              <p className="text-lg text-white">{role.title}</p>
              <p className="micro text-white/80">{role.years}</p>
              <p className="micro text-white/80 md:text-right">{role.place}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
