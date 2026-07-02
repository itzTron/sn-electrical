import { notFound } from "next/navigation";

import { BreadcrumbSchema } from "@/components/schema";
import { PageHero } from "@/components/page-hero";
import { buildMetadata, blogPosts, t, type Locale } from "@/lib/site";

export function generateStaticParams() {
  return blogPosts.flatMap((post) => [
    { locale: "en", slug: post.slug },
    { locale: "bn", slug: post.slug },
  ]);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    return {};
  }

  return buildMetadata(
    locale,
    t(locale, post.title),
    t(locale, post.excerpt),
    `/blog/${post.slug}`,
  );
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <BreadcrumbSchema
        locale={locale}
        items={[
          { name: locale === "en" ? "Home" : "হোম", href: "" },
          { name: locale === "en" ? "Blog" : "ব্লগ", href: "/blog" },
          { name: t(locale, post.title), href: `/blog/${post.slug}` },
        ]}
      />
      <PageHero
        eyebrow={t(locale, post.category)}
        title={t(locale, post.title)}
        description={t(locale, post.excerpt)}
      />
      <article className="section-space">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="space-y-4">
            <div className="glass-panel px-6 py-6">
              <div className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--color-primary)]">
                {locale === "en" ? "Article Info" : "আর্টিকেল তথ্য"}
              </div>
              <div className="mt-4 space-y-3 text-sm text-[var(--muted-foreground)]">
                <div>{post.author}</div>
                <div>{post.date}</div>
                <div>{t(locale, post.category)}</div>
              </div>
            </div>
          </aside>
          <div className="glass-panel px-6 py-8 sm:px-10">
            <div className="space-y-6 text-base leading-8 text-[var(--muted-foreground)]">
              {post.body.map((paragraph, index) => (
                <p key={index}>{t(locale, paragraph)}</p>
              ))}
            </div>
            {post.faqs?.length ? (
              <div className="mt-10 space-y-4">
                <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">
                  FAQ
                </h2>
                {post.faqs.map((faq) => (
                  <details key={faq.question.en} className="rounded-[24px] bg-[var(--surface-secondary)] px-5 py-5">
                    <summary className="cursor-pointer font-semibold text-[var(--foreground)]">
                      {t(locale, faq.question)}
                    </summary>
                    <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">
                      {t(locale, faq.answer)}
                    </p>
                  </details>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </article>
    </main>
  );
}

