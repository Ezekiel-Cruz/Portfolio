import type { Project } from "../../../types/project";

export const projects: Project[] = [
  {
    title: "DaBreeder",
    subtitle: "Dog Breeding & Traits Matching Platform",
    description:
      "A full-stack platform connecting dog owners and breeders with a custom trait-matching algorithm, real-time chat, and community forum. Built with veterinarian-assisted validation for ethical breeding.",
    image: "/DogPlatform.png",
    tech: ["React", "Supabase", "PostgreSQL", "Real-time Chat", "Authentication"],
    featured: true,
    github: "https://github.com/Ezekiel-Cruz",
    demo: "https://dabreeder.vercel.app/",
  },
  {
    title: "Personal Portfolio",
    subtitle: "Responsive Portfolio Website",
    description:
      "A modern, fast-loading portfolio built with React, Vite, and Tailwind CSS. Features secure contact form with hCaptcha verification and optimized performance.",
    image: "/portfolio.png",
    tech: ["React", "Vite", "Tailwind CSS", "DaisyUI", "TypeScript"],
    github: "https://github.com/Ezekiel-Cruz/Portfolio",
    demo: "https://ezekiel-cruz.vercel.app/",
  },
  {
    title: "Cooking Recipe Website",
    subtitle: "Recipe Sharing Platform",
    description:
      "An interactive recipe platform featuring user-submitted dishes, step-by-step cooking guides, ingredient search, and a personalized favorites dashboard.",
    image: "/CookingWebsite.png",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/Ezekiel-Cruz",
  },
  {
    title: "Event Management Platform",
    subtitle: "Event Planning Tool",
    description:
      "Comprehensive event planning tool with scheduling, guest management, and real-time collaboration features.",
    image: "/EventWebsite.png",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/Ezekiel-Cruz",
  },
];
