"use client";

import { Menu, PhoneCall, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { LanguageToggle } from "@/components/language-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { business, localizePath, navItems, t, type Locale } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container pt-5">
        <div
          className={cn(
            "rounded-[28px] border px-5 py-4 transition duration-300",
            scrolled
              ? "border-black/10 bg-white/95 shadow-[0_20px_60px_rgba(8,15,33,0.12)] backdrop-blur-2xl dark:border-white/10 dark:bg-zinc-950/90"
              : "border-black/5 bg-white/75 shadow-[0_18px_50px_rgba(8,15,33,0.08)] backdrop-blur-xl dark:border-white/5 dark:bg-zinc-950/70",
          )}
        >
          <div className="flex items-center justify-between gap-4">
            <Link href={localizePath(locale)} className="flex items-center gap-3">
              <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl shadow-sm border border-black/5 dark:border-white/10 dark:bg-white/5">
                <Image src="/bg-remove_logo.png" alt="SN Electrical Logo" fill sizes="44px" className="object-cover" />
              </div>
              <div>
                <div className="font-display text-sm font-semibold tracking-[0.18em] text-black dark:text-white">
                  SN ELECTRICAL
                </div>
                <div className="text-xs text-black dark:text-white">
                  {t(locale, business.tagline)}
                </div>
              </div>
            </Link>

            <nav className="hidden items-center gap-7 lg:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href || "home"}
                  href={localizePath(locale, item.href)}
                  className="text-sm font-medium text-[var(--foreground)]/72 transition hover:text-[var(--foreground)]"
                >
                  {t(locale, item.label)}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <LanguageToggle locale={locale} />
              <ThemeToggle />
              <a
                href={`tel:${business.phone.replace(/\s+/g, "")}`}
                className="button-secondary"
              >
                <PhoneCall className="h-4 w-4" />
                {locale === "en" ? "Call Now" : "এখনই কল করুন"}
              </a>
              <Link href={localizePath(locale, "/get-quote")} className="button-primary">
                {locale === "en" ? "Get Quote" : "কোট নিন"}
              </Link>
            </div>

            <button
              type="button"
              aria-label="Toggle navigation"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/75 lg:hidden dark:bg-white/8"
              onClick={() => setOpen((current) => !current)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open ? (
            <div className="mt-5 space-y-4 border-t border-white/12 pt-5 lg:hidden">
              <nav className="grid gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href || "home-mobile"}
                    href={localizePath(locale, item.href)}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm font-medium text-[var(--foreground)]/80 transition hover:bg-white/55 dark:hover:bg-white/6"
                  >
                    {t(locale, item.label)}
                  </Link>
                ))}
              </nav>
              <div className="flex items-center gap-3">
                <LanguageToggle locale={locale} />
                <ThemeToggle />
              </div>
              <div className="grid gap-3">
                <a
                  href={`tel:${business.phone.replace(/\s+/g, "")}`}
                  className="button-secondary justify-center"
                >
                  <PhoneCall className="h-4 w-4" />
                  {locale === "en" ? "Call Now" : "এখনই কল করুন"}
                </a>
                <Link
                  href={localizePath(locale, "/get-quote")}
                  onClick={() => setOpen(false)}
                  className="button-primary justify-center"
                >
                  {locale === "en" ? "Get Quote" : "কোট নিন"}
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}

