export type Project = {
  slug: string;
  name: string;
  index: string;
  category: string;
  image: string;
  frame: string;
};

export const projects: Project[] = [
  {
    slug: "flowline",
    name: "NovaFlow",
    index: "01",
    category: "SaaS / Productivity",
    image: "/images/novaflow-card.jpg",
    frame: "h-[420px] object-cover md:h-[460px] xl:h-[620px]",
  },
  {
    slug: "vaultpay",
    name: "VaultPay",
    index: "02",
    category: "Fintech",
    image: "/images/vaultpay-card.jpg",
    frame: "h-[320px] object-cover md:h-[380px] xl:h-[460px]",
  },
  {
    slug: "brightlane",
    name: "Brightlane",
    index: "03",
    category: "Technology / Startup",
    image: "/images/brightlane-card.jpg",
    frame: "h-[360px] object-cover md:h-[420px] xl:h-[540px]",
  },
];
