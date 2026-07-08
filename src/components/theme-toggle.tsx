"use client";

import { motion } from "framer-motion";
import { MoonStar, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

function useIsHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}

export function ThemeToggle() {
  const hydrated = useIsHydrated();
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      aria-label="Toggle theme"
      className="relative flex h-9 w-[72px] items-center rounded-full border border-white/20 bg-white/75 p-1 shadow-[0_12px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.1)] dark:bg-white/8"
      onClick={() => {
        if (!hydrated) {
          return;
        }

        setTheme(isDark ? "light" : "dark");
      }}
      type="button"
    >
      <div className="flex w-full justify-between px-1 text-[var(--muted-foreground)]">
        <SunMedium className="h-4 w-4" />
        <MoonStar className="h-4 w-4" />
      </div>
      {hydrated ? (
        <motion.div
          className="absolute left-1 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-white text-[var(--foreground)] shadow-md dark:bg-white dark:text-zinc-900"
          initial={false}
          animate={{ x: isDark ? 36 : 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          {isDark ? (
            <MoonStar className="h-4 w-4" />
          ) : (
            <SunMedium className="h-4 w-4" />
          )}
        </motion.div>
      ) : (
        <div className="absolute left-1 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-white text-[var(--foreground)] shadow-md dark:bg-white dark:text-zinc-900">
          <SunMedium className="h-4 w-4" />
        </div>
      )}
    </button>
  );
}
