import Link from "next/link";
import { Photo } from "@/components/photo";
import type { Project } from "@/content/projects";

export function ProjectCard({
  project,
  tone = "dark",
}: {
  project: Project;
  tone?: "dark" | "light";
}) {
  const text = tone === "light" ? "text-white" : "text-ink";
  const muted = tone === "light" ? "text-white/75" : "text-muted";

  return (
    <Link href={`/projects/${project.slug}`} className={`group block ${text}`}>
      <Photo src={project.image} alt="" className={`w-full ${project.frame}`} />
      <div className="mt-4 flex items-baseline justify-between">
        <span className="label">{project.name}</span>
        <span className="micro">{project.index}</span>
      </div>
      <p className={`micro mt-1 ${muted}`}>{project.category}</p>
    </Link>
  );
}
