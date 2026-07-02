"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useEffect, useEffectEvent, useState } from "react";

import { t, type Locale, type Testimonial } from "@/lib/site";
import { cn } from "@/lib/utils";

export function TestimonialCarousel({
  locale,
  items,
}: {
  locale: Locale;
  items: Testimonial[];
}) {
  const [index, setIndex] = useState(0);

  const advance = useEffectEvent(() => {
    setIndex((current) => (current + 1) % items.length);
  });

  useEffect(() => {
    const timer = window.setInterval(() => advance(), 5600);

    return () => window.clearInterval(timer);
  }, [items.length]);

  const current = items[index];

  return (
    <div className="glass-panel overflow-hidden p-6 sm:p-8">
      <motion.div
        key={current.name}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-6"
      >
        <div className="flex items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--surface-secondary)] px-4 py-2 text-sm text-[var(--foreground)]">
            <Quote className="h-4 w-4 text-[var(--color-primary)]" />
            Google Reviews
          </div>
          <div className="flex items-center gap-1 text-[var(--color-accent)]">
            {Array.from({ length: current.rating }).map((_, itemIndex) => (
              <Star key={itemIndex} className="h-4 w-4 fill-current" />
            ))}
          </div>
        </div>
        <p className="max-w-3xl text-2xl leading-10 tracking-[-0.03em] text-[var(--foreground)] sm:text-3xl">
          “{t(locale, current.quote)}”
        </p>
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-base font-semibold text-[var(--foreground)]">
              {current.name}
            </div>
            <div className="mt-1 text-sm text-[var(--muted-foreground)]">
              {t(locale, current.location)} · {t(locale, current.project)}
            </div>
          </div>
          <div className="flex gap-2">
            {items.map((item, itemIndex) => (
              <button
                key={item.name}
                type="button"
                aria-label={`Show testimonial ${itemIndex + 1}`}
                onClick={() => setIndex(itemIndex)}
                className={cn(
                  "h-2.5 rounded-full transition",
                  itemIndex === index
                    ? "w-10 bg-[var(--color-primary)]"
                    : "w-2.5 bg-[var(--foreground)]/16 hover:bg-[var(--foreground)]/26",
                )}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
