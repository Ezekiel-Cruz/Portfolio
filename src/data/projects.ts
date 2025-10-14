import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "Cooking Recipe Website",
    description:
      "An interactive recipe platform featuring user-submitted dishes, step-by-step cooking guides, ingredient search, and a personalized favorites dashboard.",
    image: "/CookingWebsite.png",
    tech: ["HTML", "CSS", "JS", "PHP", "SQL"],
  },
  {
    title: "Event Management Platform",
    description:
      "Comprehensive event planning tool with scheduling, guest management, and real-time collaboration features.",
    image: "/EventWebsite.png",
    tech: ["HTML", "CSS", "JS", "PHP", "SQL"],
  },
  {
    title: "Hotel Management Platform",
    description:
      "A comprehensive hotel management system designed to streamline room bookings, manage guest information, and generate real-time reports. Includes an intuitive dashboard for both staff and administrators.",
    image: "/HotelManagement.png",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    title: "Dog Matching Platform",
    description:
      "A smart platform that connects responsible breeders and dog owners by matching dogs based on traits, breed compatibility, and health records. Features include genetic compatibility scoring, breeder profiles, and secure record verification.",
    image: "/DogMatching.png",
    tech: ["React", "Tailwind CSS", "Laravel", "MySQL", "Node.js"],
  },
];
