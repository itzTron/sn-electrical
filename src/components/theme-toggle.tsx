"use client";

import { MoonStar, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      aria-label="Toggle theme"
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/75 text-[var(--foreground)] shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.1)] backdrop-blur-xl dark:bg-white/8"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      type="button"
    >
      {isDark ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
    </button>
  );
}
