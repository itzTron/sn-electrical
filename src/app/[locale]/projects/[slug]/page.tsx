import Image from "next/image";
import { notFound } from "next/navigation";

import { BreadcrumbSchema } from "@/components/schema";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { buildMetadata, projects, t, type Locale } from "@/lib/site";

export function generateStaticParams() {
  return projects.flatMap((project) => [
    { locale: "en", slug: project.slug },
    { locale: "bn", slug: project.slug },
  ]);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) {
    return {};
  }

  return buildMetadata(
    locale,
    t(locale, project.title),
    t(locale, project.summary),
    `/projects/${project.slug}`,
  );
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <BreadcrumbSchema
        locale={locale}
        items={[
          { name: locale === "en" ? "Home" : "হোম", href: "" },
          { name: locale === "en" ? "Projects" : "প্রকল্প", href: "/projects" },
          { name: t(locale, project.title), href: `/projects/${project.slug}` },
        ]}
      />
      <PageHero
        eyebrow={project.category}
        title={t(locale, project.title)}
        description={t(locale, project.description)}
      />
      <section className="section-space">
        <div className="container space-y-10">
          <Reveal>
            <div className="relative h-[520px] overflow-hidden rounded-[36px]">
              <Image
                src={project.cover}
                alt={t(locale, project.title)}
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal className="space-y-6">
              <div className="glass-panel px-6 py-6">
                <h2 className="text-2xl font-semibold tracking-[-0.04em]">
                  {locale === "en" ? "Project overview" : "প্রকল্প সারসংক্ষেপ"}
                </h2>
                <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">
                  {t(locale, project.description)}
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="glass-panel px-6 py-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--color-primary)]">
                    {locale === "en" ? "Completion Date" : "সমাপ্তির তারিখ"}
                  </div>
                  <div className="mt-3 text-lg font-semibold">{project.completionDate}</div>
                </div>
                <div className="glass-panel px-6 py-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--color-primary)]">
                    {locale === "en" ? "Location" : "লোকেশন"}
                  </div>
                  <div className="mt-3 text-lg font-semibold">{t(locale, project.location)}</div>
                </div>
              </div>
            </Reveal>
            <Reveal className="space-y-6">
              <div className="glass-panel px-6 py-6">
                <h2 className="text-2xl font-semibold tracking-[-0.04em]">
                  {locale === "en" ? "Technologies" : "টেকনোলজি"}
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  {project.technologies.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[var(--surface-secondary)] px-4 py-2 text-sm text-[var(--foreground)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="glass-panel px-6 py-6">
                <h2 className="text-2xl font-semibold tracking-[-0.04em]">
                  {locale === "en" ? "Result" : "ফলাফল"}
                </h2>
                <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">
                  {t(locale, project.result)}
                </p>
              </div>
            </Reveal>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {project.gallery.map((image, index) => (
              <Reveal key={image}>
                <div className="relative h-72 overflow-hidden rounded-[28px]">
                  <Image
                    src={image}
                    alt={`${t(locale, project.title)} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="glass-panel px-6 py-8">
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-primary)]">
                {locale === "en" ? "Client Testimonial" : "ক্লায়েন্ট টেস্টিমোনিয়াল"}
              </div>
              <p className="mt-5 text-2xl leading-10 tracking-[-0.03em]">
                “{t(locale, project.testimonial.quote)}”
              </p>
              <div className="mt-5 text-sm text-[var(--muted-foreground)]">
                {project.testimonial.name} · {t(locale, project.testimonial.location)}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

