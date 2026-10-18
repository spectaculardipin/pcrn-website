"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

function getInitialIsDark(): boolean {
  if (typeof window === "undefined") return false;
  const stored = localStorage.getItem("theme");
  if (stored) return stored === "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export default function ThemeToggle({
  className = "",
  showLabel = false,
}: ThemeToggleProps) {
  const [isDark, setIsDark] = useState(getInitialIsDark);

  useEffect(() => {
    const updateThemeState = () => {
      const hasDark = document.documentElement.classList.contains("dark");
      setIsDark(hasDark);
    };

    const handleCustomChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ isDark: boolean }>;
      if (customEvent.detail && typeof customEvent.detail.isDark === "boolean") {
        setIsDark(customEvent.detail.isDark);
      } else {
        updateThemeState();
      }
    };

    window.addEventListener("theme-change", handleCustomChange);
    window.addEventListener("storage", updateThemeState);

    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const handleMediaChange = (e: MediaQueryListEvent) => {
      const stored = localStorage.getItem("theme");
      if (!stored) {
        if (e.matches) {
          document.documentElement.classList.add("dark");
          document.body?.classList.add("dark");
          setIsDark(true);
        } else {
          document.documentElement.classList.remove("dark");
          document.body?.classList.remove("dark");
          setIsDark(false);
        }
      }
    };
    mql.addEventListener("change", handleMediaChange);

    return () => {
      window.removeEventListener("theme-change", handleCustomChange);
      window.removeEventListener("storage", updateThemeState);
      mql.removeEventListener("change", handleMediaChange);
    };
  }, []);

  const toggleTheme = () => {
    const nextIsDark = !isDark;
    setIsDark(nextIsDark);

    if (nextIsDark) {
      document.documentElement.classList.add("dark");
      document.body?.classList.add("dark");
      try {
        localStorage.setItem("theme", "dark");
      } catch {}
    } else {
      document.documentElement.classList.remove("dark");
      document.body?.classList.remove("dark");
      try {
        localStorage.setItem("theme", "light");
      } catch {}
    }

    try {
      window.dispatchEvent(
        new CustomEvent("theme-change", { detail: { isDark: nextIsDark } })
      );
    } catch {}
  };

  return (
    <button
      type="button"
      data-testid="theme-toggle"
      onClick={toggleTheme}
      suppressHydrationWarning
      className={`relative inline-flex items-center justify-center p-3 rounded-lg text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-transparent dark:border-slate-800 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#9E1B28] cursor-pointer group ${className}`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {/* Sun Icon for Dark Mode (indicating switch to light) */}
        <Sun
          className={`w-5 h-5 text-amber-400 transition-all duration-300 absolute inset-0 ${
            isDark
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 -rotate-90 scale-50 pointer-events-none"
          }`}
        />
        {/* Moon Icon for Light Mode (indicating switch to dark) */}
        <Moon
          className={`w-5 h-5 text-slate-700 transition-all duration-300 absolute inset-0 group-hover:text-[#9E1B28] ${
            isDark
              ? "opacity-0 rotate-90 scale-50 pointer-events-none"
              : "opacity-100 rotate-0 scale-100"
          }`}
        />
      </div>
      {showLabel && (
        <span className="text-xs font-medium ml-2 text-slate-700 dark:text-slate-200">
          {isDark ? "Light Mode" : "Dark Mode"}
        </span>
      )}
    </button>
  );
}