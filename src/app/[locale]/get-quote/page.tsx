import { QuoteForm } from "@/components/forms";
import { BreadcrumbSchema } from "@/components/schema";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { buildMetadata, type Locale } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return buildMetadata(
    locale,
    locale === "en" ? "Get a Quote" : "কোট নিন",
    locale === "en"
      ? "Request a project quote for residential, commercial, or industrial electrical services."
      : "আবাসিক, কমার্শিয়াল বা ইন্ডাস্ট্রিয়াল ইলেকট্রিক্যাল সেবার জন্য প্রকল্প কোট অনুরোধ করুন।",
    "/get-quote",
  );
}

export default async function GetQuotePage({
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
          { name: locale === "en" ? "Get Quote" : "কোট নিন", href: "/get-quote" },
        ]}
      />
      <PageHero
        eyebrow={locale === "en" ? "Get Quote" : "কোট নিন"}
        title={locale === "en" ? "Tell us about the project and we will shape the right electrical scope." : "প্রকল্প সম্পর্কে বলুন, আমরা সঠিক ইলেকট্রিক্যাল স্কোপ তৈরি করে দেব।"}
        description={locale === "en" ? "Share service type, budget, timeline, and property details. We will respond with a structured recommendation and estimate path." : "সার্ভিস টাইপ, বাজেট, সময়সীমা এবং প্রপার্টির বিবরণ শেয়ার করুন। আমরা একটি স্ট্রাকচার্ড রিকমেন্ডেশন এবং এস্টিমেটের পথ জানাব।"}
      />
      <section className="section-space">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="space-y-5">
            <div className="glass-panel px-6 py-6">
              <h2 className="text-2xl font-semibold tracking-[-0.04em]">
                {locale === "en" ? "What happens next?" : "এরপর কী হবে?"}
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-[var(--muted-foreground)]">
                <p>{locale === "en" ? "1. We review the scope and any reference attachment." : "১. আমরা স্কোপ এবং সংযুক্ত রেফারেন্স পর্যালোচনা করি।"}</p>
                <p>{locale === "en" ? "2. We call for clarification or arrange a site visit." : "২. আমরা প্রয়োজনে ফোন করি অথবা সাইট ভিজিট নির্ধারণ করি।"}</p>
                <p>{locale === "en" ? "3. You receive a clear estimate path and next-step recommendation." : "৩. আপনি পরিষ্কার এস্টিমেট পথ এবং পরবর্তী সুপারিশ পান।"}</p>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <QuoteForm locale={locale} />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
