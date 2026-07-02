import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { BreadcrumbSchema } from "@/components/schema";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { buildMetadata, localizePath, services, t, type Locale } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return buildMetadata(
    locale,
    locale === "en" ? "Electrical Services" : "ইলেকট্রিক্যাল সেবাসমূহ",
    locale === "en"
      ? "Explore residential, commercial, and industrial electrical services from wiring to maintenance and fault finding."
      : "ওয়্যারিং থেকে মেইনটেন্যান্স ও ফল্ট ফাইন্ডিং পর্যন্ত আবাসিক, কমার্শিয়াল ও ইন্ডাস্ট্রিয়াল সেবাসমূহ দেখুন।",
    "/services",
  );
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return (
    <main>
      <BreadcrumbSchema
        locale={locale}
        items={[
          { name: locale === "en" ? "Home" : "হোম", href: "" },
          { name: locale === "en" ? "Services" : "সেবাসমূহ", href: "/services" },
        ]}
      />
      <PageHero
        eyebrow={locale === "en" ? "Services" : "সেবাসমূহ"}
        title={locale === "en" ? "Premium electrical services for modern properties and complex sites." : "আধুনিক সম্পত্তি এবং জটিল সাইটের জন্য প্রিমিয়াম ইলেকট্রিক্যাল সেবা।"}
        description={locale === "en" ? "Each service is built around better safety, better finish quality, and better long-term reliability." : "প্রতিটি সেবা উন্নত সেফটি, উন্নত ফিনিশ কোয়ালিটি এবং দীর্ঘমেয়াদি নির্ভরযোগ্যতাকে কেন্দ্র করে তৈরি।"}
      />
      <section className="section-space">
        <div className="container grid gap-6 lg:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.04}>
              <Link
                href={localizePath(locale, `/services/${service.slug}`)}
                className="group glass-panel block overflow-hidden p-4"
              >
                <div className="relative h-72 overflow-hidden rounded-[26px]">
                  <Image
                    src={service.banner}
                    alt={t(locale, service.title)}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-4 px-2 pb-2 pt-6">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-3xl font-semibold tracking-[-0.05em]">
                      {t(locale, service.title)}
                    </h2>
                    <ArrowRight className="mt-2 h-5 w-5 text-[var(--color-primary)] transition group-hover:translate-x-1" />
                  </div>
                  <p className="text-sm leading-7 text-[var(--muted-foreground)]">
                    {t(locale, service.description)}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}

