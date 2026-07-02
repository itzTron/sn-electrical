"use client";

import { Search } from "lucide-react";
import { useDeferredValue, useMemo, useState } from "react";

import { t, type Locale, type LocalizedText } from "@/lib/site";

type Item = {
  category: LocalizedText;
  question: LocalizedText;
  answer: LocalizedText;
};

export function FaqSearch({
  locale,
  items,
}: {
  locale: Locale;
  items: Item[];
}) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const filtered = useMemo(() => {
    const needle = deferredQuery.trim().toLowerCase();

    if (!needle) {
      return items;
    }

    return items.filter((item) => {
      const haystack = `${t(locale, item.question)} ${t(locale, item.answer)} ${t(locale, item.category)}`.toLowerCase();
      return haystack.includes(needle);
    });
  }, [deferredQuery, items, locale]);

  return (
    <div className="space-y-6">
      <label className="flex items-center gap-3 rounded-[24px] border border-white/20 bg-white/74 px-5 py-4 shadow-[0_20px_40px_rgba(0,0,0,0.06)] backdrop-blur-xl dark:bg-white/8">
        <Search className="h-5 w-5 text-[var(--muted-foreground)]" />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={locale === "en" ? "Search a question..." : "একটি প্রশ্ন খুঁজুন..."}
          className="w-full bg-transparent text-sm outline-none placeholder:text-[var(--muted-foreground)]"
        />
      </label>
      <div className="grid gap-4">
        {filtered.map((item) => (
          <details
            key={`${t(locale, item.category)}-${t(locale, item.question)}`}
            className="glass-panel px-6 py-5"
          >
            <summary className="cursor-pointer list-none space-y-3">
              <div className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--color-primary)]">
                {t(locale, item.category)}
              </div>
              <div className="text-lg font-semibold text-[var(--foreground)]">
                {t(locale, item.question)}
              </div>
            </summary>
            <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">
              {t(locale, item.answer)}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}

