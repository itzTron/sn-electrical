import { BreadcrumbSchema } from "@/components/schema";
import { FaqSearch } from "@/components/faq-search";
import { PageHero } from "@/components/page-hero";
import { buildMetadata, faqItems, type Locale } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return buildMetadata(
    locale,
    locale === "en" ? "Frequently Asked Questions" : "প্রায়শই জিজ্ঞাসিত প্রশ্ন",
    locale === "en"
      ? "Search answers about pricing, maintenance, electrical safety, and emergency service."
      : "প্রাইসিং, মেইনটেন্যান্স, ইলেকট্রিক্যাল সেফটি এবং ইমার্জেন্সি সার্ভিস সম্পর্কে উত্তর খুঁজুন।",
    "/faq",
  );
}

export default async function FaqPage({
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
          { name: locale === "en" ? "FAQ" : "প্রশ্নোত্তর", href: "/faq" },
        ]}
      />
      <PageHero
        eyebrow="FAQ"
        title={locale === "en" ? "Find clear answers before you schedule a visit." : "ভিজিট নির্ধারণের আগেই পরিষ্কার উত্তর খুঁজে নিন।"}
        description={locale === "en" ? "Use the searchable FAQ to understand our response process, service coverage, pricing approach, and maintenance options." : "আমাদের রেসপন্স প্রসেস, সার্ভিস কভারেজ, প্রাইসিং পদ্ধতি এবং মেইনটেন্যান্স অপশন বুঝতে সার্চযোগ্য FAQ ব্যবহার করুন।"}
      />
      <section className="section-space">
        <div className="container">
          <FaqSearch locale={locale} items={faqItems} />
        </div>
      </section>
    </main>
  );
}

