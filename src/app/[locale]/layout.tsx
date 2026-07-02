import type { ReactNode } from "react";
import { notFound } from "next/navigation";

import { LocalBusinessSchema } from "@/components/schema";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { isLocale, locales, type Locale } from "@/lib/site";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <>
      <SiteHeader locale={locale as Locale} />
      <div className="flex-1">
        <LocalBusinessSchema locale={locale as Locale} />
        {children}
      </div>
      <SiteFooter locale={locale as Locale} />
    </>
  );
}

