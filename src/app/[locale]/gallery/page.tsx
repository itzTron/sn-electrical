import Image from "next/image";

import { BreadcrumbSchema } from "@/components/schema";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { buildMetadata, projects, t, type Locale } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return buildMetadata(
    locale,
    locale === "en" ? "Gallery" : "গ্যালারি",
    locale === "en"
      ? "Browse project photography and installation visuals from residential, commercial, and industrial work."
      : "আবাসিক, কমার্শিয়াল ও ইন্ডাস্ট্রিয়াল কাজের প্রজেক্ট ফটো এবং ইনস্টলেশন ভিজ্যুয়াল দেখুন।",
    "/gallery",
  );
}

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const images = projects.flatMap((project) =>
    project.gallery.map((image, index) => ({
      src: image,
      title: `${t(locale, project.title)} ${index + 1}`,
      category: project.category,
    })),
  );

  return (
    <main>
      <BreadcrumbSchema
        locale={locale}
        items={[
          { name: locale === "en" ? "Home" : "হোম", href: "" },
          { name: locale === "en" ? "Gallery" : "গ্যালারি", href: "/gallery" },
        ]}
      />
      <PageHero
        eyebrow={locale === "en" ? "Gallery" : "গ্যালারি"}
        title={locale === "en" ? "Project imagery curated to showcase detail, finish, and execution quality." : "ডিটেইল, ফিনিশ এবং এক্সিকিউশন কোয়ালিটি প্রদর্শনের জন্য নির্বাচিত প্রজেক্ট ইমেজারি।"}
        description={locale === "en" ? "A visual archive of work completed across homes, retail environments, offices, and industrial facilities." : "ঘর, রিটেইল পরিবেশ, অফিস এবং ইন্ডাস্ট্রিয়াল ফ্যাসিলিটিতে সম্পন্ন কাজের একটি ভিজ্যুয়াল আর্কাইভ।"}
      />
      <section className="section-space">
        <div className="container columns-1 gap-6 sm:columns-2 xl:columns-3">
          {images.map((image, index) => (
            <Reveal key={`${image.title}-${index}`} className="mb-6 break-inside-avoid">
              <div className="glass-panel overflow-hidden p-3">
                <div className="relative h-[320px] overflow-hidden rounded-[26px]">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
                <div className="px-3 pb-2 pt-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)]">
                    {image.category}
                  </div>
                  <div className="mt-2 text-sm text-[var(--muted-foreground)]">
                    {image.title}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}

