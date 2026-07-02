import { ContactForm } from "@/components/forms";
import { BreadcrumbSchema } from "@/components/schema";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { buildMetadata, business, t, type Locale } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return buildMetadata(
    locale,
    locale === "en" ? "Contact" : "যোগাযোগ",
    locale === "en"
      ? "Contact SN Electrical Services for project inquiries, urgent support, and electrical consultations."
      : "প্রকল্প, জরুরি সাপোর্ট এবং ইলেকট্রিক্যাল কনসালটেশনের জন্য SN Electrical Services এর সাথে যোগাযোগ করুন।",
    "/contact",
  );
}

export default async function ContactPage({
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
          { name: locale === "en" ? "Contact" : "যোগাযোগ", href: "/contact" },
        ]}
      />
      <PageHero
        eyebrow={locale === "en" ? "Contact" : "যোগাযোগ"}
        title={locale === "en" ? "Start a conversation with a team that values safety and clarity." : "সেফটি এবং স্বচ্ছতাকে মূল্য দেয় এমন টিমের সাথে আলাপ শুরু করুন।"}
        description={locale === "en" ? "For urgent service, planned upgrades, or maintenance support, use the form below or call our team directly." : "জরুরি সেবা, পরিকল্পিত আপগ্রেড বা মেইনটেন্যান্স সাপোর্টের জন্য নিচের ফর্ম ব্যবহার করুন বা সরাসরি আমাদের টিমকে কল করুন।"}
      />
      <section className="section-space">
        <div className="container grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          <Reveal className="space-y-6">
            <div className="glass-panel px-6 py-6">
              <div className="text-sm font-semibold uppercase tracking-[0.26em] text-[var(--color-primary)]">
                {locale === "en" ? "Reach us" : "আমাদের সাথে যোগাযোগ"}
              </div>
              <div className="mt-5 space-y-4 text-sm leading-7 text-[var(--muted-foreground)]">
                <div>{business.phone}</div>
                <div>{business.emergency}</div>
                <div>{business.email}</div>
                <div>{t(locale, business.address)}</div>
                <div>{t(locale, business.hours)}</div>
              </div>
            </div>
            <div className="overflow-hidden rounded-[28px] border border-white/18">
              <iframe
                src={business.mapEmbed}
                title="SN Electrical Services map"
                className="h-[380px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
          <Reveal>
            <ContactForm locale={locale} />
          </Reveal>
        </div>
      </section>
    </main>
  );
}

