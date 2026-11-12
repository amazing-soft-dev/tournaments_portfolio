import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Latest portfolio - Hammet",
  description: "Selected websites shaped around the product, the audience, and the job the page has to do.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-[1200px] px-5 py-16 md:px-8">
      <p className="micro text-muted">Work</p>
      <h1 className="display mt-4 text-[96px] tracking-[-4px] md:text-[104px] xl:text-[156px] xl:tracking-[-12.48px]">
        Latest portfolio
      </h1>
      <p className="mt-6 max-w-xl text-xl leading-[27.5px] text-body">
        Selected websites shaped around the product, the audience, and the job the page has to do.
      </p>
      <div className="mt-14 grid items-start gap-10 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}
