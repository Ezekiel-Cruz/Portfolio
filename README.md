# Ezekiel Cruz - Portfolio

A modern, minimalist, and mobile-first portfolio website built with React, TypeScript, and Tailwind CSS.

## 🌐 Live Demo

[View Portfolio](https://ezekiel-cruz.vercel.app)

## ✨ Features

- **Mobile-First Design**: Optimized for all devices with responsive breakpoints
- **Dark/Light Theme**: Night and Winter DaisyUI themes with smooth toggle
- **Smooth Animations**: Powered by Motion.dev for fluid transitions
- **Interactive Tech Stack**: Clickable technology cards with animated modal popups
- **Tech Marquee**: Animated logo loop showcasing skills with brand colors
- **Two-Column Project Cards**: Modern project layout with demo/source links
- **Contact Form**: Integrated with Web3Forms and hCaptcha verification
- **Theme-Aware Images**: Hero image switches based on light/dark mode

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + DaisyUI
- **Animations**: Motion.dev
- **Build Tool**: Vite
- **Icons**: React Icons (with brand colors)
- **Forms**: React Hook Form + Web3Forms
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel

## 📂 Project Structure

```
src/
├── app/                    # App configuration & providers
│   └── providers/          # ThemeProvider
├── features/               # Feature-based modules
│   ├── home/              # Hero section with theme-aware image
│   ├── about/             # About section with CodeMockup
│   ├── skills/            # Tech stack with marquee & modals
│   ├── projects/          # Two-column project cards
│   └── contact/           # Contact form with hCaptcha
├── components/            # Shared components
│   ├── layout/            # Header, Footer, Layout
│   ├── navigation/        # Navigation, Logo
│   ├── ui/                # Button, ProgressBar
│   ├── animations/        # TypingText, TextType, Cursor
│   └── theme/             # ThemeToggle
├── hooks/                 # Custom React hooks
├── constants/             # Personal info, config
├── styles/                # Global CSS with DaisyUI themes
├── lib/                   # Analytics, hCaptcha
└── types/                 # TypeScript types
```

## 🎨 Themes

- **Dark Mode (Night)**: Deep blue-tinted dark theme with cyan primary
- **Light Mode (Winter)**: Clean white/blue theme with vibrant accents

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Ezekiel-Cruz/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
npm run preview
```

### Linting

```bash
npm run lint
```

## 📧 Contact

- **Email**: ezekielcruz019@gmail.com
- **LinkedIn**: [Ezekiel Cruz](https://www.linkedin.com/in/ezekiel-cruz-685975399/)
- **GitHub**: [Ezekiel-Cruz](https://github.com/Ezekiel-Cruz)
- **Discord**: [meclose](https://discord.com/users/meclose)
- **Location**: Malolos, Bulacan, Philippines

## 📄 License

© 2025 Ezekiel Cruz. All rights reserved.
