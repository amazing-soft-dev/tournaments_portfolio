import { ProjectCard } from "@/components/project-card";
import { SectionRail } from "@/components/section-rail";
import { projects } from "@/content/projects";

export function WorkPreview() {
  return (
    <section id="projects" className="bg-slate text-white">
      <div className="border-white/20 [&_span]:text-white">
        <SectionRail index="02" total="08" label="Projects" />
      </div>
      <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-8">
        <h2 className="display max-w-[16ch] text-[60px] tracking-[-2px] text-white md:text-[72px] xl:text-[88px] xl:tracking-[-4.4px]">
          Work shaped around goals and real users
        </h2>
        <div className="mt-12 grid items-start gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} tone="light" />
          ))}
        </div>
      </div>
    </section>
  );
}
