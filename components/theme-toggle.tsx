"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [clicking, setClicking] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  // Wait for mount so resolvedTheme is correct
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(next);
    // Click-pop animation
    setClicking(true);
    setTimeout(() => setClicking(false), 300);
  };

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      ref={btnRef}
      id="theme-toggle-btn"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      onClick={toggle}
      className={[
        "relative inline-flex items-center justify-center w-10 h-10 rounded-full",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary",
        "transition-transform duration-150",
        clicking ? "scale-90" : "scale-100",
      ].join(" ")}
    >
      {/* Background circle */}
      <span className="absolute inset-0 rounded-full bg-white dark:bg-zinc-900 border border-border/40 shadow-sm transition-colors duration-300" />

      {/* Sun — visible in light mode */}
      <svg
        className={[
          "relative z-10 w-5 h-5 text-yellow-500 transition-all duration-300",
          isDark ? "opacity-0 scale-75 rotate-90" : "opacity-100 scale-100 rotate-0",
        ].join(" ")}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="M4.93 4.93l1.41 1.41" />
        <path d="M17.66 17.66l1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="M4.93 19.07l1.41-1.41" />
        <path d="M17.66 6.34l1.41-1.41" />
      </svg>

      {/* Moon — visible in dark mode */}
      <svg
        className={[
          "absolute z-10 w-5 h-5 text-foreground transition-all duration-300",
          isDark ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 -rotate-90",
        ].join(" ")}
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="none"
      >
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
    </button>
  );
}

