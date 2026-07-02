"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { type Locale, locales } from "@/lib/site";
import { cn } from "@/lib/utils";

export function LanguageToggle({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/75 p-1 shadow-[0_12px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl dark:bg-white/8">
      {locales.map((entry) => {
        const nextPath = pathname.replace(/^\/(en|bn)/, `/${entry}`);

        return (
          <Link
            key={entry}
            href={nextPath}
            className={cn(
              "rounded-full px-3 py-2 text-xs font-semibold tracking-[0.2em] transition",
              entry === locale
                ? "bg-[var(--color-primary)] text-white"
                : "text-[var(--foreground)]/70 hover:text-[var(--foreground)]",
            )}
          >
            {entry === "en" ? "EN" : "বাংলা"}
          </Link>
        );
      })}
    </div>
  );
}

