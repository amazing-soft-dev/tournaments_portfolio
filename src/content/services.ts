export type Service = {
  id: string;
  title: string;
  body: string;
  image: string;
  alt: string;
  pills: string[];
};

export const services: Service[] = [
  {
    id: "01",
    title: "Web design",
    body: "I design websites with a strong focus on structure, usability, and communication. The goal is to create layouts that feel intuitive, deliver the right message, and guide users from the first interaction.",
    image: "/images/service-web.jpg",
    alt: "Phone showing a website layout on fabric",
    pills: [
      "UX & UI design",
      "Website structure & layout",
      "Responsive design",
      "Content hierarchy",
      "Visual clarity & consistency",
    ],
  },
  {
    id: "02",
    title: "Framer dev.",
    body: "I turn designs into fully functional Framer websites that are fast, responsive, and easy to manage. Each build is clean, scalable, and ready to evolve.",
    image: "/images/service-framer.jpg",
    alt: "Laptop with a wireframe on screen",
    pills: ["Framer builds", "Responsive implementation", "Animations & interactions", "CMS setup"],
  },
  {
    id: "03",
    title: "Website redesign",
    body: "I improve existing websites that feel outdated or unclear. By simplifying structure and refining the experience, I make them more usable, focused, and aligned with their goals.",
    image: "/images/service-redesign.jpg",
    alt: "Two phones resting on ice",
    pills: ["Content simplification", "Layout and structure updates", "UX review & improvements", "Visual refresh"],
  },
  {
    id: "04",
    title: "UX & content structure",
    body: "I organize content and navigation so users can move through a website naturally. This focuses on hierarchy, flow, and making complex content easier to understand.",
    image: "/images/service-ux.jpg",
    alt: "A phone on a metal surface",
    pills: ["Information architecture", "User flows & journeys", "Content structure", "Navigation clarity", "Page hierarchy"],
  },
];
