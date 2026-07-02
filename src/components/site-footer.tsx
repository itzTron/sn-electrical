import Link from "next/link";
import { Globe, Mail, MapPin, MessageCircle, PhoneCall, Send } from "lucide-react";

import { business, localizePath, navItems, services, t, type Locale } from "@/lib/site";

export function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer className="relative overflow-hidden pb-8 pt-20">
      <div className="absolute inset-x-0 bottom-0 h-48 bg-[radial-gradient(circle_at_bottom,rgba(255,212,0,0.18),transparent_70%)]" />
      <div className="container">
        <div className="glass-panel grid gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[1.2fr_0.8fr_1fr_1fr]">
          <div className="space-y-5">
            <div>
              <div className="font-display text-lg font-semibold tracking-[0.2em]">
                SN ELECTRICAL SERVICES
              </div>
              <p className="mt-3 max-w-sm text-sm leading-7 text-[var(--muted-foreground)]">
                {t(locale, business.tagline)}
              </p>
            </div>
            <div className="space-y-3 text-sm text-[var(--muted-foreground)]">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-[var(--color-primary)]" />
                <span>{t(locale, business.address)}</span>
              </div>
              <div className="flex items-center gap-3">
                <PhoneCall className="h-4 w-4 text-[var(--color-primary)]" />
                <span>{business.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[var(--color-primary)]" />
                <span>{business.email}</span>
              </div>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.26em] text-[var(--foreground)]/58">
              {locale === "en" ? "Quick Links" : "দ্রুত লিংক"}
            </div>
            <div className="mt-4 grid gap-3 text-sm">
              {navItems.map((item) => (
                <Link
                  key={item.href || "footer-home"}
                  href={localizePath(locale, item.href)}
                  className="text-[var(--muted-foreground)] transition hover:text-[var(--foreground)]"
                >
                  {t(locale, item.label)}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.26em] text-[var(--foreground)]/58">
              {locale === "en" ? "Services" : "সেবাসমূহ"}
            </div>
            <div className="mt-4 grid gap-3 text-sm">
              {services.slice(0, 5).map((service) => (
                <Link
                  key={service.slug}
                  href={localizePath(locale, `/services/${service.slug}`)}
                  className="text-[var(--muted-foreground)] transition hover:text-[var(--foreground)]"
                >
                  {t(locale, service.title)}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.26em] text-[var(--foreground)]/58">
                {locale === "en" ? "Stay Connected" : "সংযুক্ত থাকুন"}
              </div>
              <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">
                {locale === "en"
                  ? "Get electrical safety tips, project updates, and seasonal maintenance reminders."
                  : "ইলেকট্রিক্যাল সেফটি টিপস, প্রজেক্ট আপডেট এবং মৌসুমি মেইনটেন্যান্স রিমাইন্ডার পান।"}
              </p>
            </div>
            <form className="grid gap-3">
              <input
                type="email"
                placeholder={locale === "en" ? "Your email address" : "আপনার ইমেইল"}
                className="rounded-2xl border border-white/20 bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:bg-white dark:bg-white/8"
              />
              <button type="submit" className="button-primary justify-center">
                {locale === "en" ? "Join Newsletter" : "নিউজলেটারে যুক্ত হোন"}
              </button>
            </form>
            <div className="flex gap-3 text-[var(--foreground)]/74">
              <a href="#" aria-label="Facebook" className="social-icon">
                <Globe className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Instagram" className="social-icon">
                <MessageCircle className="h-4 w-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="social-icon">
                <Send className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-col items-start justify-between gap-4 px-2 text-sm text-[var(--muted-foreground)] sm:flex-row">
          <p>© 2026 SN Electrical Services. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-5">
            <Link href={localizePath(locale, "/contact")} className="hover:text-[var(--foreground)]">
              {locale === "en" ? "Privacy Policy" : "প্রাইভেসি পলিসি"}
            </Link>
            <Link href={localizePath(locale, "/contact")} className="hover:text-[var(--foreground)]">
              {locale === "en" ? "Terms" : "টার্মস"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
