import { Star } from "lucide-react";

import { BreadcrumbSchema } from "@/components/schema";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { buildMetadata, t, testimonials, type Locale } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return buildMetadata(
    locale,
    locale === "en" ? "Client Testimonials" : "ক্লায়েন্ট টেস্টিমোনিয়াল",
    locale === "en"
      ? "Read customer stories and premium service feedback from SN Electrical Services clients."
      : "SN Electrical Services এর ক্লায়েন্টদের অভিজ্ঞতা এবং সেবার মূল্যায়ন পড়ুন।",
    "/testimonials",
  );
}

export default async function TestimonialsPage({
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
          { name: locale === "en" ? "Testimonials" : "টেস্টিমোনিয়াল", href: "/testimonials" },
        ]}
      />
      <PageHero
        eyebrow={locale === "en" ? "Testimonials" : "টেস্টিমোনিয়াল"}
        title={locale === "en" ? "Client confidence built through calm execution and long-term trust." : "শান্ত এক্সিকিউশন এবং দীর্ঘমেয়াদি আস্থায় গড়া ক্লায়েন্টের আত্মবিশ্বাস।"}
        description={locale === "en" ? "Reviews matter because they reflect what happens after the contract is signed: discipline, communication, and reliable support." : "রিভিউ গুরুত্বপূর্ণ কারণ চুক্তির পর কী ঘটে তা এগুলোই দেখায়: শৃঙ্খলা, যোগাযোগ এবং নির্ভরযোগ্য সাপোর্ট।"}
      />
      <section className="section-space">
        <div className="container space-y-10">
          <div className="glass-panel grid gap-6 px-6 py-8 sm:grid-cols-3 sm:px-8">
            <div>
              <div className="text-4xl font-semibold tracking-[-0.06em]">4.9/5</div>
              <div className="mt-2 text-sm text-[var(--muted-foreground)]">
                {locale === "en" ? "Average customer rating" : "গড় কাস্টমার রেটিং"}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1 text-[var(--color-accent)]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <div className="mt-2 text-sm text-[var(--muted-foreground)]">
                {locale === "en" ? "Google review quality badge" : "গুগল রিভিউ কোয়ালিটি ব্যাজ"}
              </div>
            </div>
            <div>
              <div className="text-4xl font-semibold tracking-[-0.06em]">98%</div>
              <div className="mt-2 text-sm text-[var(--muted-foreground)]">
                {locale === "en" ? "Repeat and referral-led business" : "রিপিট এবং রেফারেলভিত্তিক ব্যবসা"}
              </div>
            </div>
          </div>
          <TestimonialCarousel locale={locale} items={testimonials} />
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Reveal key={testimonial.name}>
                <div className="glass-panel h-full px-6 py-6">
                  <div className="flex items-center gap-1 text-[var(--color-accent)]">
                    {Array.from({ length: testimonial.rating }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-5 text-sm leading-7 text-[var(--muted-foreground)]">
                    “{t(locale, testimonial.quote)}”
                  </p>
                  <div className="mt-6">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="mt-1 text-sm text-[var(--muted-foreground)]">
                      {t(locale, testimonial.location)}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

