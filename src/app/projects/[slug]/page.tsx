import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectCard } from "@/components/project-card";
import { projectBySlug, projects } from "@/content/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) return {};
  return { title: `${project.outcome} - Hammet` };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) notFound();
  const recent = projects.filter((item) => item.slug !== project.slug);

  return (
    <main>
      <section className="bg-ink px-5 py-16 text-white md:px-8">
        <div className="mx-auto max-w-[1200px]">
          <p className="micro text-white/70">{project.index}</p>
          <h1 className="display mt-4 text-[72px] tracking-[-3px] md:text-[104px] xl:text-[156px] xl:tracking-[-12.48px]">
            {project.name}
          </h1>
        </div>
      </section>
      <section className="mx-auto grid max-w-[1200px] gap-10 px-5 py-14 md:px-8 xl:grid-cols-[1.4fr_0.6fr]">
        <div>
          <h2 className="display text-[40px] tracking-[-1.6px] md:text-[52px] xl:text-[64px]">
            {project.outcome}
          </h2>
          <p className="mt-6 max-w-2xl text-xl leading-[27.5px] text-body">{project.summary}</p>
        </div>
        <dl className="space-y-4 border-t border-line pt-4">
          {[
            ["Type", project.kind],
            ["Industry", project.industry],
            ["Year", project.year],
            ["Live", project.liveUrl.replace("https://", "")],
          ].map(([label, value]) => (
            <div key={label} className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
              <dt className="micro text-muted">{label}</dt>
              <dd className="label text-right text-ink">{value}</dd>
            </div>
          ))}
        </dl>
      </section>
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <img src={project.studyImage} alt="" className="w-full object-cover" />
      </div>
      <section className="mx-auto max-w-[1200px] px-5 py-16 md:px-8">
        <h2 className="label text-muted">Recent projects</h2>
        <div className="mt-8 grid items-start gap-8 md:grid-cols-2">
          {recent.map((item) => (
            <ProjectCard key={item.slug} project={item} />
          ))}
        </div>
      </section>
    </main>
  );
}
