export type Project = {
  slug: string;
  name: string;
  index: string;
  category: string;
  image: string;
  frame: string;
  outcome: string;
  year: string;
  industry: string;
  kind: string;
  liveUrl: string;
  summary: string;
  studyImage: string;
};

export const projects: Project[] = [
  {
    slug: "flowline",
    name: "NovaFlow",
    index: "01",
    category: "SaaS / Productivity",
    image: "/images/novaflow-card-960.webp",
    frame: "h-[420px] object-cover md:h-[460px] xl:h-[620px]",
    outcome: "Conversion-focused redesign for a workflow SaaS platform",
    year: "2024",
    industry: "SaaS / Productivity",
    kind: "Website Redesign",
    liveUrl: "https://www.flowline.com",
    summary:
      "NovaFlow needed a clearer story for a product people already used every day. The redesign puts the workflow first, shortens the path to a trial, and gives the marketing site the same structure as the product.",
    studyImage: "/images/novaflow-study-960.webp",
  },
  {
    slug: "vaultpay",
    name: "VaultPay",
    index: "02",
    category: "Fintech",
    image: "/images/vaultpay-card-960.webp",
    frame: "h-[320px] object-cover md:h-[380px] xl:h-[460px]",
    outcome: "A calmer marketing site for a payments product",
    year: "2024",
    industry: "Fintech",
    kind: "Website Design",
    liveUrl: "https://www.vaultpay.com",
    summary:
      "VaultPay’s old page explained features before it explained trust. The new site leads with who the product is for, then the controls, then the proof.",
    studyImage: "/images/vaultpay-study-960.webp",
  },
  {
    slug: "brightlane",
    name: "Brightlane",
    index: "03",
    category: "Technology / Startup",
    image: "/images/brightlane-card-960.webp",
    frame: "h-[360px] object-cover md:h-[420px] xl:h-[540px]",
    outcome: "A launch site that explains a new product in one pass",
    year: "2023",
    industry: "Technology / Startup",
    kind: "Website Design",
    liveUrl: "https://www.brightlane.com",
    summary:
      "Brightlane was preparing a first public launch. The site gives the product a name, a job, and a single next step, without burying the story under a feature grid.",
    studyImage: "/images/brightlane-study-960.webp",
  },
];

export function projectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
