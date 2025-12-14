import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiTailwindcss,
  SiReact,
  SiSupabase,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiVercel,
  SiAnthropic,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

// Technology information
export interface Technology {
  name: string;
  icon?: React.ReactNode;
  description: string;
  usage: string;
  experience: string;
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

// Tech stack categories with icons
export const TECH_STACKS: TechCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages for web development",
    technologies: [
      {
        name: "HTML",
        icon: <SiHtml5 size={24} className="text-orange-500" />,
        description:
          "HyperText Markup Language - the standard markup language for web pages",
        usage:
          "Where I use it:\nI use HTML at the very start of every project to build the structure of my web pages.\n\nWhen I use it:\nWhenever I need to set up the foundation of a website like landing pages, forms, or any UI layout.\n\nHow I use it:\nI create clean and semantic elements like headers, sections, buttons, and input fields to make the page easy to style and maintain.",
        experience: "1 year+",
      },
      {
        name: "CSS",
        icon: <SiCss3 size={24} className="text-blue-500" />,
        description:
          "Cascading Style Sheets - used for styling and layout of web pages",
        usage:
          "Where I use it:\nI apply CSS on top of my HTML structure to make the website look polished and responsive.\n\nWhen I use it:\nAfter finishing the layout to adjust spacing, colors, typography, and responsiveness for different devices.\n\nHow I use it:\nI work with flexbox, grid, and responsive units to align elements properly and ensure a consistent design across pages.",
        experience: "1 year+",
      },
      {
        name: "JavaScript",
        icon: <SiJavascript size={24} className="text-yellow-500" />,
        description:
          "Dynamic programming language for web interactivity and functionality",
        usage:
          "Where I use it:\nI use JavaScript in the front end to add behavior and interactivity to my pages.\n\nWhen I use it:\nWhen I need to handle form validation, dynamic content updates, or user actions like button clicks and navigation.\n\nHow I use it:\nI manipulate the DOM, use event listeners, and apply conditional logic to make pages more dynamic and functional.",
        experience: "1 year+",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript size={24} className="text-blue-600" />,
        description:
          "Typed superset of JavaScript that compiles to plain JavaScript",
        usage:
          "Where I use it:\nI use TypeScript in modern web applications to add type safety and better developer experience.\n\nWhen I use it:\nWhen building scalable applications that require strong typing and better code maintainability.\n\nHow I use it:\nI define interfaces and types for props, state, and function parameters to catch errors during development and improve code quality.",
        experience: "6 months",
      },
      {
        name: "PHP",
        icon: <SiPhp size={24} className="text-indigo-500" />,
        description:
          "Server-side scripting language designed for web development",
        usage:
          "Where I use it:\nI use PHP for server-side logic and dynamic content generation.\n\nWhen I use it:\nWhen building traditional web applications or working with content management systems.\n\nHow I use it:\nI write server-side scripts to handle form submissions, database operations, and session management.",
        experience: "1 year+",
      },
    ],
  },
  {
    title: "Frameworks",
    description: "Modern frameworks for efficient development",
    technologies: [
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss size={24} className="text-teal-500" />,
        description: "Utility-first CSS framework for rapid UI development",
        usage:
          "Where I use it:\nI use Tailwind directly in my components as a faster alternative to writing long CSS files.\n\nWhen I use it:\nWhen I need to build a clean and responsive UI quickly.\n\nHow I use it:\nI use utility classes like flex, p-4, text-center, and bg-gray-100 directly in the JSX to speed up styling and maintain consistency.",
        experience: "3 months",
      },
      {
        name: "React.js",
        icon: <SiReact size={24} className="text-cyan-500" />,
        description:
          "Popular JavaScript library for building user interfaces with components",
        usage:
          "Where I use it:\nI use React when building more dynamic and component-based front-end applications.\n\nWhen I use it:\nWhen I need to create reusable components or when the project requires real-time updates without refreshing the page.\n\nHow I use it:\nI build modular components, manage state using hooks, and pass data through props to make the UI efficient and organized.",
        experience: "3 months",
      },
    ],
  },
  {
    title: "Database and Backend",
    description: "Backend services and database management systems",
    technologies: [
      {
        name: "Supabase",
        icon: <SiSupabase size={24} className="text-emerald-500" />,
        description:
          "Open-source Firebase alternative with PostgreSQL database",
        usage:
          "Where I use it:\nI use Supabase as a complete backend solution for modern web applications.\n\nWhen I use it:\nWhen I need authentication, real-time subscriptions, storage, and a PostgreSQL database all in one platform.\n\nHow I use it:\nI integrate Supabase client SDK, set up authentication flows, create database tables, and implement real-time features efficiently.",
        experience: "3 months",
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql size={24} className="text-blue-700" />,
        description:
          "Advanced open-source relational database with extensive features",
        usage:
          "Where I use it:\nI use PostgreSQL for projects that need more flexible or advanced database handling.\n\nWhen I use it:\nWhen I need to manage complex relationships or perform more advanced queries.\n\nHow I use it:\nI set up the database, create schemas, and connect it to the backend using an ORM or SQL queries for efficient data management.",
        experience: "3 months",
      },
      {
        name: "MySQL",
        icon: <SiMysql size={24} className="text-blue-600" />,
        description:
          "Popular open-source relational database management system",
        usage:
          "Where I use it:\nI use MySQL as my main relational database for structured data.\n\nWhen I use it:\nWhen the project needs to store and retrieve organized data like user accounts or product listings.\n\nHow I use it:\nI design tables, write queries, and connect it to my backend to store and fetch data securely.",
        experience: "1 year+",
      },
    ],
  },
  {
    title: "Tools",
    description: "Development tools and platforms",
    technologies: [
      {
        name: "Git",
        icon: <SiGit size={24} className="text-orange-600" />,
        description:
          "Distributed version control system for tracking code changes",
        usage:
          "Where I use it:\nI use Git for version control in all my development projects.\n\nWhen I use it:\nThroughout the entire development process to track changes, create branches, and collaborate with others.\n\nHow I use it:\nI commit changes regularly, create feature branches, merge code, and manage project history effectively.",
        experience: "1 year+",
      },
      {
        name: "GitHub",
        icon: <SiGithub size={24} className="text-gray-400" />,
        description:
          "Platform for version control and collaboration using Git",
        usage:
          "Where I use it:\nI use GitHub to host my repositories and collaborate on projects.\n\nWhen I use it:\nWhen I need to share code, contribute to open source, or manage project repositories.\n\nHow I use it:\nI push code to remote repositories, create pull requests, manage issues, and deploy projects through GitHub Pages or Actions.",
        experience: "1 year+",
      },
      {
        name: "Vercel",
        icon: <SiVercel size={24} className="text-base-content" />,
        description:
          "Cloud platform for deploying and hosting modern web applications",
        usage:
          "Where I use it:\nI use Vercel to deploy and host my React and Next.js applications.\n\nWhen I use it:\nWhen I need fast, automated deployments with continuous integration from GitHub.\n\nHow I use it:\nI connect my GitHub repository to Vercel for automatic deployments on every push, with instant previews for pull requests.",
        experience: "6 months",
      },
      {
        name: "VS Code",
        icon: <VscCode size={24} className="text-blue-500" />,
        description:
          "Popular code editor with extensive extension support",
        usage:
          "Where I use it:\nI use VS Code as my primary code editor for all development work.\n\nWhen I use it:\nDaily, for writing, debugging, and managing code across all projects.\n\nHow I use it:\nI leverage extensions, integrated terminal, Git integration, and IntelliSense for efficient coding and debugging.",
        experience: "1 year+",
      },
      {
        name: "WindSurf",
        icon: <div className="text-sky-500 font-bold text-2xl">WS</div>,
        description:
          "AI-powered development tool for enhanced productivity",
        usage:
          "Where I use it:\nI use WindSurf to accelerate my development workflow with AI assistance.\n\nWhen I use it:\nWhen I need intelligent code suggestions and automation.\n\nHow I use it:\nI integrate WindSurf into my development process for smarter code completion and refactoring suggestions.",
        experience: "3 months",
      },
      {
        name: "Claude AI",
        icon: <SiAnthropic size={24} className="text-amber-600" />,
        description:
          "Advanced AI assistant for coding and problem-solving",
        usage:
          "Where I use it:\nI use Claude AI to help with complex coding challenges and learning new technologies.\n\nWhen I use it:\nWhen I need explanations, debugging help, or guidance on best practices.\n\nHow I use it:\nI ask questions, get code reviews, learn new concepts, and solve challenging problems with AI assistance.",
        experience: "6 months",
      },
      {
        name: "n8n",
        icon: <div className="text-pink-500 font-bold text-2xl">n8n</div>,
        description:
          "Workflow automation tool for connecting apps and services",
        usage:
          "Where I use it:\nI use n8n to automate workflows and integrate different services.\n\nWhen I use it:\nWhen I need to connect APIs, automate repetitive tasks, or build integration workflows.\n\nHow I use it:\nI create visual workflows to connect various services, automate data processing, and streamline business processes.",
        experience: "3 months",
      },
    ],
  },
];

// Technology logos for marquee
export const getTechLogos = (): TechLogo[] => [
  {
    node: <SiHtml5 size={48} className="text-orange-500" />,
    title: "HTML",
  },
  {
    node: <SiCss3 size={48} className="text-blue-500" />,
    title: "CSS",
  },
  {
    node: <SiJavascript size={48} className="text-yellow-400" />,
    title: "JavaScript",
  },
  {
    node: <SiTypescript size={48} className="text-blue-600" />,
    title: "TypeScript",
  },
  {
    node: <SiPhp size={48} className="text-indigo-400" />,
    title: "PHP",
  },
  {
    node: <SiTailwindcss size={48} className="text-cyan-400" />,
    title: "Tailwind CSS",
  },
  {
    node: <SiReact size={48} className="text-cyan-500" />,
    title: "React.js",
  },
  {
    node: <SiSupabase size={48} className="text-emerald-500" />,
    title: "Supabase",
  },
  {
    node: <SiPostgresql size={48} className="text-blue-400" />,
    title: "PostgreSQL",
  },
  {
    node: <SiMysql size={48} className="text-sky-500" />,
    title: "MySQL",
  },
  {
    node: <SiGit size={48} className="text-orange-600" />,
    title: "Git",
  },
  {
    node: <SiGithub size={48} className="text-gray-300" />,
    title: "GitHub",
  },
  {
    node: <SiVercel size={48} className="text-white" />,
    title: "Vercel",
  },
  {
    node: <VscCode size={48} className="text-blue-500" />,
    title: "VS Code",
  },
];
