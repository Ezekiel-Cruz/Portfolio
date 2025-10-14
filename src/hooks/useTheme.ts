import { useState, useEffect } from "react";

type Theme = "light" | "dark";

// Global theme state
let globalTheme: Theme = "dark";
const listeners = new Set<(theme: Theme) => void>();

const applyTheme = (theme: Theme) => {
  globalTheme = theme;
  localStorage.setItem("theme", theme);
  document.documentElement.setAttribute("data-theme", theme);
  listeners.forEach((listener) => listener(theme));
};

const initializeTheme = () => {
  if (listeners.size === 0) {
    const savedTheme = (localStorage.getItem("theme") as Theme) || "dark";
    globalTheme = savedTheme;
    document.documentElement.setAttribute("data-theme", savedTheme);
  }
};

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(globalTheme);

  useEffect(() => {
    initializeTheme();

    const updateTheme = (newTheme: Theme) => setTheme(newTheme);
    listeners.add(updateTheme);
    setTheme(globalTheme);

    return () => {
      listeners.delete(updateTheme);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = globalTheme === "light" ? "dark" : "light";
    applyTheme(newTheme);
  };

  return { theme, toggleTheme };
};
