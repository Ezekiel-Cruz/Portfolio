# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Dev.Sigma Portfolio

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
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Landing section
│   ├── About.tsx       # About me section
│   ├── WhatIDo.tsx     # Services section
│   ├── Skills.tsx      # Tech stack section
│   ├── Projects.tsx    # Projects showcase
│   └── Footer.tsx      # Contact footer
├── assets/             # Images and static files
└── App.tsx            # Main app component
```

## Contact

- **Email**: dev.sigma@example.com
- **Location**: Malolos, Bulacan
- **Website**: [Your Portfolio](https://your-domain.com)

## License

© 2025 Dev.Sigma. All rights reserved.

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
