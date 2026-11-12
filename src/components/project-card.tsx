import Link from "next/link";
import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block text-white">
      <img src={project.image} alt="" className={`w-full ${project.frame}`} />
      <div className="mt-4 flex items-baseline justify-between">
        <span className="label">{project.name}</span>
        <span className="micro">{project.index}</span>
      </div>
      <p className="micro mt-1 text-white/75">{project.category}</p>
    </Link>
  );
}
