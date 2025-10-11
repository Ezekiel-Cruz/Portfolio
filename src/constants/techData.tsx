import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiOpenjdk,
  SiPython,
  SiPhp,
  SiNodedotjs,
  SiTypescript,
  SiFlutter,
  SiMysql,
} from "react-icons/si";

// Technology skill levels and experience
export interface Technology {
  name: string;
  experience: string;
  level: number;
  color: string;
}

export interface TechCategory {
  title: string;
  description: string;
  technologies: Technology[];
}

export interface TechLogo {
  node: React.ReactNode;
  title: string;
}

// Tech stack categories
export const TECH_STACKS: TechCategory[] = [
  {
    title: "Frontend",
    description: "Creating beautiful user interfaces",
    technologies: [
      {
        name: "HTML/CSS",
        experience: "1 year",
        level: 85,
        color: "progress-primary",
      },
      {
        name: "JavaScript",
        experience: "5 months",
        level: 70,
        color: "progress-secondary",
      },
      {
        name: "React",
        experience: "2 weeks (ongoing)",
        level: 35,
        color: "progress-accent",
      },
      {
        name: "Tailwind CSS",
        experience: "1 day",
        level: 25,
        color: "progress-info",
      },
    ],
  },
  {
    title: "Backend",
    description: "Building robust server-side solutions",
    technologies: [
      {
        name: "Java",
        experience: "1 year",
        level: 80,
        color: "progress-primary",
      },
      {
        name: "Python",
        experience: "5 months",
        level: 65,
        color: "progress-secondary",
      },
      {
        name: "Node.js",
        experience: "3 weeks",
        level: 40,
        color: "progress-accent",
      },
      {
        name: "PHP",
        experience: "1 month",
        level: 45,
        color: "progress-warning",
      },
    ],
  },
  {
    title: "Database",
    description: "Data management and storage solutions",
    technologies: [
      {
        name: "MySQL",
        experience: "1 year",
        level: 75,
        color: "progress-primary",
      },
      {
        name: "PostgreSQL",
        experience: "Learning",
        level: 20,
        color: "progress-secondary",
      },
      {
        name: "MongoDB",
        experience: "Learning",
        level: 15,
        color: "progress-accent",
      },
    ],
  },
  {
    title: "Mobile",
    description: "Cross-platform mobile development",
    technologies: [
      {
        name: "Flutter",
        experience: "1 month",
        level: 40,
        color: "progress-primary",
      },
      {
        name: "Dart",
        experience: "1 month",
        level: 35,
        color: "progress-secondary",
      },
      {
        name: "React Native",
        experience: "Learning",
        level: 10,
        color: "progress-accent",
      },
    ],
  },
];

// Technology logos for marquee
export const getTechLogos = (): TechLogo[] => [
  {
    node: <SiHtml5 size={48} />,
    title: "HTML",
  },
  {
    node: <SiCss3 size={48} />,
    title: "CSS",
  },
  {
    node: <SiOpenjdk size={48} />,
    title: "Java",
  },
  {
    node: <SiPython size={48} />,
    title: "Python",
  },
  {
    node: <SiPhp size={48} />,
    title: "PHP",
  },
  {
    node: <SiNodedotjs size={48} />,
    title: "Node.js",
  },
  {
    node: <SiTypescript size={48} />,
    title: "TypeScript",
  },
  {
    node: <SiFlutter size={48} />,
    title: "Flutter",
  },
  {
    node: <SiMysql size={48} />,
    title: "MySQL",
  },
];
