import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

import { BreadcrumbSchema } from "@/components/schema";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { buildMetadata, localizePath, services, t, type Locale } from "@/lib/site";

export function generateStaticParams() {
  return services.flatMap((service) => [
    { locale: "en", slug: service.slug },
    { locale: "bn", slug: service.slug },
  ]);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const service = services.find((entry) => entry.slug === slug);

  if (!service) {
    return {};
  }

  return buildMetadata(
    locale,
    t(locale, service.title),
    t(locale, service.summary),
    `/services/${service.slug}`,
  );
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const service = services.find((entry) => entry.slug === slug);

  if (!service) {
    notFound();
  }

  const related = services.filter((entry) => entry.slug !== service.slug).slice(0, 3);

  return (
    <main>
      <BreadcrumbSchema
        locale={locale}
        items={[
          { name: locale === "en" ? "Home" : "হোম", href: "" },
          { name: locale === "en" ? "Services" : "সেবাসমূহ", href: "/services" },
          { name: t(locale, service.title), href: `/services/${service.slug}` },
        ]}
      />
      <PageHero
        eyebrow={locale === "en" ? "Service Detail" : "সার্ভিস বিস্তারিত"}
        title={t(locale, service.title)}
        description={t(locale, service.description)}
        actions={
          <Link href={localizePath(locale, "/get-quote")} className="button-primary">
            {locale === "en" ? "Pricing Inquiry" : "প্রাইসিং জানতে চান"}
          </Link>
        }
      />

      <section className="section-space">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="space-y-8">
            <div className="relative overflow-hidden rounded-[34px]">
              <Image
                src={service.banner}
                alt={t(locale, service.title)}
                width={1400}
                height={1000}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="glass-panel px-6 py-6">
                <h2 className="text-2xl font-semibold tracking-[-0.04em]">
                  {locale === "en" ? "Benefits" : "সুবিধাসমূহ"}
                </h2>
                <div className="mt-4 grid gap-3">
                  {service.benefits.map((item) => (
                    <div key={item.en} className="rounded-[22px] bg-[var(--surface-secondary)] px-4 py-4 text-sm leading-7 text-[var(--muted-foreground)]">
                      {t(locale, item)}
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass-panel px-6 py-6">
                <h2 className="text-2xl font-semibold tracking-[-0.04em]">
                  {locale === "en" ? "Included" : "অন্তর্ভুক্ত"}
                </h2>
                <div className="mt-4 grid gap-3">
                  {service.included.map((item) => (
                    <div key={item.en} className="rounded-[22px] bg-[var(--surface-secondary)] px-4 py-4 text-sm leading-7 text-[var(--muted-foreground)]">
                      {t(locale, item)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal className="space-y-6">
            <div className="glass-panel px-6 py-6">
              <h2 className="text-2xl font-semibold tracking-[-0.04em]">
                {locale === "en" ? "Process" : "প্রসেস"}
              </h2>
              <div className="mt-5 space-y-4">
                {service.process.map((item, index) => (
                  <div key={item.en} className="rounded-[24px] border border-white/16 bg-[var(--surface-secondary)] px-5 py-5">
                    <div className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--color-primary)]">
                      {index + 1}
                    </div>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">
                      {t(locale, item)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-panel px-6 py-6">
              <h2 className="text-2xl font-semibold tracking-[-0.04em]">
                FAQ
              </h2>
              <div className="mt-5 space-y-4">
                {service.faqs.map((item) => (
                  <details key={item.question.en} className="rounded-[22px] bg-[var(--surface-secondary)] px-5 py-5">
                    <summary className="cursor-pointer font-semibold text-[var(--foreground)]">
                      {t(locale, item.question)}
                    </summary>
                    <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">
                      {t(locale, item.answer)}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container space-y-8">
          <div className="text-3xl font-semibold tracking-[-0.05em]">
            {locale === "en" ? "Related services" : "সম্পর্কিত সেবা"}
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={localizePath(locale, `/services/${item.slug}`)}
                className="glass-panel px-6 py-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold tracking-[-0.04em]">
                    {t(locale, item.title)}
                  </h3>
                  <ArrowRight className="h-5 w-5 text-[var(--color-primary)]" />
                </div>
                <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">
                  {t(locale, item.summary)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

