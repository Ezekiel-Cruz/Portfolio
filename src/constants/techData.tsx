import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";

// Technology information
export interface Technology {
  name: string;
  icon?: React.ReactNode;
  description: string;
  usage: string;
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
    title: "Front-End",
    description: "Client-side technologies and frameworks",
    technologies: [
      {
        name: "HTML",
        icon: <SiHtml5 size={24} className="text-orange-500" />,
        description:
          "HyperText Markup Language - the standard markup language for web pages",
        usage:
          "I use HTML to structure web content, create semantic layouts, and build accessible user interfaces. Essential for all web projects including forms, navigation, and content organization.",
      },
      {
        name: "CSS",
        icon: <SiCss3 size={24} className="text-blue-500" />,
        description:
          "Cascading Style Sheets - used for styling and layout of web pages",
        usage:
          "I use CSS for responsive design, animations, flexbox/grid layouts, and custom styling. Combined with preprocessors and frameworks for efficient styling workflows.",
      },
      {
        name: "JavaScript",
        icon: <SiJavascript size={24} className="text-yellow-500" />,
        description:
          "Dynamic programming language for web interactivity and functionality",
        usage:
          "I use JavaScript for DOM manipulation, API calls, event handling, and business logic. Core language for both frontend interactions and backend development with Node.js.",
      },
      {
        name: "React.js",
        icon: <SiReact size={24} className="text-cyan-500" />,
        description:
          "Popular JavaScript library for building user interfaces with components",
        usage:
          "I use React to build dynamic, interactive web applications with reusable components, state management, and efficient rendering. Perfect for SPAs and complex UIs.",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss size={24} className="text-teal-500" />,
        description: "Utility-first CSS framework for rapid UI development",
        usage:
          "I use Tailwind for fast prototyping, consistent design systems, and responsive layouts without writing custom CSS. Great for maintaining design consistency across projects.",
      },
      {
        name: "Vite",
        icon: <SiVite size={24} className="text-purple-500" />,
        description:
          "Fast build tool and development server for modern web projects",
        usage:
          "I use Vite for lightning-fast development with hot module replacement, optimized builds, and excellent TypeScript support. My go-to build tool for React projects.",
      },
    ],
  },
  {
    title: "Back-End",
    description: "Server-side development technologies",
    technologies: [
      {
        name: "Node.js",
        icon: <SiNodedotjs size={24} className="text-green-500" />,
        description: "JavaScript runtime for server-side development",
        usage:
          "I use Node.js to build scalable server applications, REST APIs, and handle real-time communications. Enables full-stack JavaScript development with npm ecosystem.",
      },
      {
        name: "Express.js",
        icon: <SiExpress size={24} className="text-gray-400" />,
        description: "Minimal and flexible Node.js web application framework",
        usage:
          "I use Express.js to create RESTful APIs, handle routing, middleware integration, and build robust web servers. Perfect for rapid backend development with Node.js.",
      },
    ],
  },
  {
    title: "Database",
    description: "Database management systems",
    technologies: [
      {
        name: "MySQL",
        icon: <SiMysql size={24} className="text-blue-600" />,
        description:
          "Popular open-source relational database management system",
        usage:
          "I use MySQL for structured data storage, complex queries, transactions, and user management systems. Reliable choice for web applications requiring ACID compliance.",
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql size={24} className="text-blue-700" />,
        description:
          "Advanced open-source relational database with extensive features",
        usage:
          "I use PostgreSQL for complex data relationships, JSON support, full-text search, and advanced querying. Excellent for applications requiring sophisticated data operations.",
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
    node: <SiJavascript size={48} />,
    title: "JavaScript",
  },
  {
    node: <SiReact size={48} />,
    title: "React.js",
  },
  {
    node: <SiTailwindcss size={48} />,
    title: "Tailwind CSS",
  },
  {
    node: <SiVite size={48} />,
    title: "Vite",
  },
  {
    node: <SiNodedotjs size={48} />,
    title: "Node.js",
  },
  {
    node: <SiExpress size={48} />,
    title: "Express.js",
  },
  {
    node: <SiMysql size={48} />,
    title: "MySQL",
  },
  {
    node: <SiPostgresql size={48} />,
    title: "PostgreSQL",
  },
];
