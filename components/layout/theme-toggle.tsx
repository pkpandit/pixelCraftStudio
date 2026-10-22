"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

const emptySubscribe = () => () => {};

export interface ThemeToggleProps {
  className?: string;
}

/**
 * Accessible theme toggle switch for light and dark modes.
 * Uses useSyncExternalStore to prevent server/client hydration mismatch.
 */
export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDarkInitial = storedTheme === "dark" || (!storedTheme && systemPrefersDark);

    if (isDarkInitial) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    requestAnimationFrame(() => {
      setIsDark(isDarkInitial);
    });
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  if (!isClient) {
    return (
      <div
        className={`w-9 h-9 rounded-full border border-border/50 bg-secondary/50 ${className}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative flex items-center justify-center w-9 h-9 rounded-full border border-border/60 bg-background/80 hover:bg-muted text-foreground transition-all duration-200 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring dark:border-white/10 dark:bg-gradient-to-b dark:from-[#181822] dark:to-[#121218] dark:hover:from-[#20202E] dark:hover:to-[#161620] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] ${className}`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300" />
      ) : (
        <Moon className="w-4 h-4 text-[#0A0A0A] transition-transform duration-300" />
      )}
    </button>
  );
}

export default ThemeToggle;
