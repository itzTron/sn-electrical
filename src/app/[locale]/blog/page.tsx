import Image from "next/image";
import Link from "next/link";

import { BreadcrumbSchema } from "@/components/schema";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { blogPosts, buildMetadata, localizePath, t, type Locale } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return buildMetadata(
    locale,
    locale === "en" ? "Electrical Blog" : "ইলেকট্রিক্যাল ব্লগ",
    locale === "en"
      ? "Browse electrical safety, energy saving, and maintenance advice from SN Electrical Services."
      : "SN Electrical Services এর ইলেকট্রিক্যাল সেফটি, এনার্জি সেভিং এবং মেইনটেন্যান্স পরামর্শ দেখুন।",
    "/blog",
  );
}

export default async function BlogPage({
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
          { name: locale === "en" ? "Blog" : "ব্লগ", href: "/blog" },
        ]}
      />
      <PageHero
        eyebrow={locale === "en" ? "Blog" : "ব্লগ"}
        title={locale === "en" ? "Editorial guidance that helps clients make safer electrical decisions." : "এমন সম্পাদকীয় নির্দেশনা যা ক্লায়েন্টকে আরও নিরাপদ ইলেকট্রিক্যাল সিদ্ধান্ত নিতে সাহায্য করে।"}
        description={locale === "en" ? "Search-focused, practical articles designed to educate before the quote and add value long after the project is complete." : "সার্চ-কেন্দ্রিক, ব্যবহারিক আর্টিকেল যা কোটের আগে শিক্ষিত করে এবং প্রকল্প শেষ হওয়ার অনেক পরেও মূল্য যোগ করে।"}
      />
      <section className="section-space">
        <div className="container grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.05}>
              <Link
                href={localizePath(locale, `/blog/${post.slug}`)}
                className="group glass-panel block overflow-hidden p-4"
              >
                <div className="relative h-60 overflow-hidden rounded-[26px]">
                  <Image
                    src={post.image}
                    alt={t(locale, post.title)}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-3 px-2 pb-2 pt-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)]">
                    {t(locale, post.category)}
                  </div>
                  <h2 className="text-2xl font-semibold tracking-[-0.04em]">
                    {t(locale, post.title)}
                  </h2>
                  <p className="text-sm leading-7 text-[var(--muted-foreground)]">
                    {t(locale, post.excerpt)}
                  </p>
                  <div className="text-sm text-[var(--muted-foreground)]">
                    {post.author} · {post.date}
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

