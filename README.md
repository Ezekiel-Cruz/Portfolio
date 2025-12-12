# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Ezekiel Cruz Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Built with DaisyUI components and Tailwind CSS
- **Smooth Navigation**: Sticky header with smooth scrolling to sections
- **Interactive Sections**:
  - Hero section with personal branding
  - About Me with stats and information
  - What I Do services showcase
  - Tech Stack with experience timeline
  - Featured Projects gallery
  - Contact footer

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS + DaisyUI
- **Build Tool**: Vite
- **Development**: Hot reload and fast refresh

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <your-repo-url>
cd react-project
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Project Structure

```
Portfolio/
├── public/                          # Static assets
│   ├── images/
│   ├── fonts/
│   └── favicon.ico
│
├── src/
│   ├── app/                         # App-level configuration
│   │   ├── App.tsx
│   │   └── providers/               # Context providers
│   │       ├── ThemeProvider.tsx
│   │       ├── AdminProvider.tsx
│   │       └── index.ts
│   │
│   ├── features/                    # Feature-based modules
│   │   ├── home/
│   │   │   ├── components/
│   │   │   │   ├── Hero/
│   │   │   │   │   ├── Hero.tsx
│   │   │   │   │   ├── HeroActions.tsx
│   │   │   │   │   ├── HeroContent.tsx
│   │   │   │   │   └── index.ts
│   │   │   │   ├── LogoLoop.tsx
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── about/
│   │   │   ├── components/
│   │   │   │   ├── About.tsx
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── skills/
│   │   │   ├── components/
│   │   │   │   ├── Skills.tsx
│   │   │   │   ├── TechMarquee.tsx
│   │   │   │   ├── TechStackCard.tsx
│   │   │   │   └── index.ts
│   │   │   ├── constants/
│   │   │   │   └── techData.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── services/
│   │   │   ├── components/
│   │   │   │   ├── WhatIDo.tsx
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── projects/
│   │   │   ├── components/
│   │   │   │   ├── Projects.tsx
│   │   │   │   ├── ProjectCard.tsx
│   │   │   │   ├── ProjectModal.tsx
│   │   │   │   └── index.ts
│   │   │   ├── data/
│   │   │   │   └── projects.ts
│   │   │   ├── hooks/
│   │   │   │   └── useProjectSearch.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── contact/
│   │   │   ├── components/
│   │   │   │   ├── ContactForm.tsx
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   │
│   │   └── admin/
│   │       ├── components/
│   │       │   ├── AdminToolbar.tsx
│   │       │   ├── AdminLoginModal.tsx
│   │       │   └── index.ts
│   │       ├── hooks/
│   │       │   └── index.ts
│   │       └── index.ts
│   │
│   ├── components/                  # Shared/common components
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── MainContent.tsx
│   │   │   ├── BackgroundPattern.tsx
│   │   │   ├── Layout.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── navigation/
│   │   │   ├── Navigation.tsx
│   │   │   ├── Logo.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── ui/                      # Reusable UI primitives
│   │   │   ├── Button.tsx
│   │   │   ├── ProgressBar.tsx
│   │   │   ├── Stats.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── animations/              # Reusable animations
│   │   │   ├── Squares.tsx
│   │   │   ├── TextType.tsx
│   │   │   ├── TypingCursor.tsx
│   │   │   ├── TypingText.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── theme/
│   │   │   ├── ThemeToggle.tsx
│   │   │   └── index.ts
│   │   │
│   │   └── index.ts
│   │
│   ├── hooks/                       # Shared custom hooks
│   │   ├── useAnalytics.ts
│   │   ├── useCursorAnimation.ts
│   │   ├── useIntersectionObserver.ts
│   │   ├── useScroll.ts
│   │   ├── useTheme.ts
│   │   ├── useTypingAnimation.ts
│   │   └── index.ts
│   │
│   ├── lib/                         # Third-party integrations
│   │   ├── analytics/
│   │   │   ├── analytics.ts
│   │   │   └── index.ts
│   │   └── hcaptcha/
│   │       └── hcaptcha-react.d.ts
│   │
│   ├── utils/                       # Utility functions
│   │   ├── smoothScroll.ts
│   │   ├── storage.ts
│   │   └── index.ts
│   │
│   ├── types/                       # Global TypeScript types
│   │   ├── project.ts
│   │   ├── vite-env-override.d.ts
│   │   └── index.ts
│   │
│   ├── constants/                   # Global constants
│   │   ├── personalInfo.ts
│   │   └── index.ts
│   │
│   ├── styles/                      # Global styles
│   │   └── index.css
│   │
│   ├── main.tsx                     # Entry point
│   └── vite-env.d.ts
│
├── .env.example                     # Environment variables template
├── eslint.config.js
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

## Architecture

This project follows a **feature-based architecture** for better scalability and maintainability:

- **`features/`**: Each feature is self-contained with its own components, hooks, data, and constants
- **`components/`**: Shared components used across multiple features
- **`app/`**: App-level configuration including providers and routing
- **`lib/`**: Third-party library integrations and configurations
- **`hooks/`**: Global custom hooks shared across features
- **`utils/`**: Pure utility functions
- **`types/`**: Global TypeScript type definitions
- **`constants/`**: Global constants and configuration

This structure makes it easy to:
- Find related code quickly
- Test features in isolation
- Scale the application by adding new features
- Maintain clear boundaries between different parts of the app
```

## Contact

- **Email**: ezekiel.cruz@example.com
- **Location**: Malolos, Bulacan
- **Website**: [Your Portfolio](https://your-domain.com)

## License

© 2025 Ezekiel Cruz. All rights reserved.

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

=======

# Portfolio

My portfolio
