import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/projects", "/contact", ...projects.map((project) => `/projects/${project.slug}`)];
  return paths.map((path) => ({
    url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://tournaments-portfolio.vercel.app"}${path}`,
    lastModified: new Date("2026-11-11"),
  }));
}
