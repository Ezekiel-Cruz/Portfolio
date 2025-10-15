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
    title: "Front-End",
    description: "Client-side technologies and frameworks",
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
        name: "React.js",
        icon: <SiReact size={24} className="text-cyan-500" />,
        description:
          "Popular JavaScript library for building user interfaces with components",
        usage:
          "Where I use it:\nI use React when building more dynamic and component-based front-end applications.\n\nWhen I use it:\nWhen I need to create reusable components or when the project requires real-time updates without refreshing the page.\n\nHow I use it:\nI build modular components, manage state using hooks, and pass data through props to make the UI efficient and organized.",
        experience: "3 months",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss size={24} className="text-teal-500" />,
        description: "Utility-first CSS framework for rapid UI development",
        usage:
          "Where I use it:\nI use Tailwind directly in my components as a faster alternative to writing long CSS files.\n\nWhen I use it:\nWhen I need to build a clean and responsive UI quickly.\n\nHow I use it:\nI use utility classes like flex, p-4, text-center, and bg-gray-100 directly in the JSX to speed up styling and maintain consistency.",
        experience: "3 months",
      },
      {
        name: "Vite",
        icon: <SiVite size={24} className="text-purple-500" />,
        description:
          "Fast build tool and development server for modern web projects",
        usage:
          "Where I use it:\nI use Vite as my development environment for React projects.\n\nWhen I use it:\nAt the beginning of a project to set up a fast and modern build tool.\n\nHow I use it:\nI initialize projects using Vite, run the development server, and take advantage of its fast refresh to speed up development.",
        experience: "3 months",
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
          "Where I use it:\nI use Node.js on the server side to build APIs and handle backend logic.\n\nWhen I use it:\nWhen the project needs data processing, server-side operations, or user authentication.\n\nHow I use it:\nI set up a server using Node, handle routes, and manage data flow between the frontend and the database.",
        experience: "3 months",
      },
      {
        name: "Express.js",
        icon: <SiExpress size={24} className="text-gray-400" />,
        description: "Minimal and flexible Node.js web application framework",
        usage:
          "Where I use it:\nI use Express.js along with Node.js to simplify backend development.\n\nWhen I use it:\nWhen I need to handle multiple routes or create RESTful APIs.\n\nHow I use it:\nI set up middleware, define routes for GET and POST requests, and manage responses efficiently.",
        experience: "3 months",
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
          "Where I use it:\nI use MySQL as my main relational database for structured data.\n\nWhen I use it:\nWhen the project needs to store and retrieve organized data like user accounts or product listings.\n\nHow I use it:\nI design tables, write queries, and connect it to my backend to store and fetch data securely.",
        experience: "1 year+",
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
