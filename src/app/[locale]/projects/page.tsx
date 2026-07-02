import Image from "next/image";
import Link from "next/link";

import { BreadcrumbSchema } from "@/components/schema";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { buildMetadata, localizePath, projects, t, type Locale } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return buildMetadata(
    locale,
    locale === "en" ? "Project Portfolio" : "প্রকল্প পোর্টফোলিও",
    locale === "en"
      ? "See featured residential, commercial, and industrial electrical projects delivered by SN Electrical Services."
      : "SN Electrical Services এর সম্পন্ন আবাসিক, কমার্শিয়াল এবং ইন্ডাস্ট্রিয়াল ইলেকট্রিক্যাল প্রকল্পগুলো দেখুন।",
    "/projects",
  );
}

export default async function ProjectsPage({
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
          { name: locale === "en" ? "Projects" : "প্রকল্প", href: "/projects" },
        ]}
      />
      <PageHero
        eyebrow={locale === "en" ? "Projects" : "প্রকল্প"}
        title={locale === "en" ? "Selected project work with clear outcomes and refined execution." : "স্পষ্ট ফলাফল এবং পরিশীলিত এক্সিকিউশনসহ নির্বাচিত প্রকল্পসমূহ।"}
        description={locale === "en" ? "From high-end apartments to production facilities, our project portfolio reflects a safety-led process and premium finish." : "হাই-এন্ড অ্যাপার্টমেন্ট থেকে প্রোডাকশন ফ্যাসিলিটি পর্যন্ত, আমাদের প্রকল্প পোর্টফোলিও সেফটি-নির্ভর প্রক্রিয়া এবং প্রিমিয়াম ফিনিশের প্রতিফলন।"}
      />
      <section className="section-space">
        <div className="container grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.05}>
              <Link
                href={localizePath(locale, `/projects/${project.slug}`)}
                className="group glass-panel block overflow-hidden p-4"
              >
                <div className="relative h-[360px] overflow-hidden rounded-[28px]">
                  <Image
                    src={project.cover}
                    alt={t(locale, project.title)}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-3 px-2 pb-2 pt-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--color-primary)]">
                    {project.category}
                  </div>
                  <h2 className="text-3xl font-semibold tracking-[-0.05em]">
                    {t(locale, project.title)}
                  </h2>
                  <p className="text-sm leading-7 text-[var(--muted-foreground)]">
                    {t(locale, project.summary)}
                  </p>
                  <div className="flex items-center justify-between text-sm text-[var(--muted-foreground)]">
                    <span>{t(locale, project.location)}</span>
                    <span>{project.completionDate}</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}

