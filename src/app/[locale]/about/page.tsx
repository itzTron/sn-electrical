import { ShieldCheck, Target, Trophy } from "lucide-react";
import Image from "next/image";

import { BreadcrumbSchema } from "@/components/schema";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { buildMetadata, type Locale } from "@/lib/site";

const values = [
  {
    icon: ShieldCheck,
    en: "Safety before speed on every site.",
    bn: "প্রতিটি সাইটে গতির আগে সেফটি।",
  },
  {
    icon: Target,
    en: "Clear scope, disciplined execution.",
    bn: "স্পষ্ট স্কোপ, শৃঙ্খলাপূর্ণ এক্সিকিউশন।",
  },
  {
    icon: Trophy,
    en: "Finish quality that builds referrals.",
    bn: "এমন ফিনিশ কোয়ালিটি যা রেফারেল তৈরি করে।",
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return buildMetadata(
    locale,
    locale === "en" ? "About SN Electrical Services" : "SN Electrical Services সম্পর্কে",
    locale === "en"
      ? "Learn about our mission, vision, values, and safety-led approach to premium electrical services."
      : "আমাদের মিশন, ভিশন, মূল্যবোধ এবং সেফটি-নির্ভর প্রিমিয়াম ইলেকট্রিক্যাল পরিষেবা সম্পর্কে জানুন।",
    "/about",
  );
}

export default async function AboutPage({
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
          { name: locale === "en" ? "About" : "আমাদের সম্পর্কে", href: "/about" },
        ]}
      />
      <PageHero
        eyebrow={locale === "en" ? "About Us" : "আমাদের সম্পর্কে"}
        title={locale === "en" ? "Built to deliver safe power systems with a premium client experience." : "প্রিমিয়াম ক্লায়েন্ট অভিজ্ঞতার সাথে নিরাপদ পাওয়ার সিস্টেম ডেলিভারি দেওয়ার জন্য নির্মিত।"}
        description={locale === "en" ? "SN Electrical Services combines technical discipline, refined workmanship, and transparent communication for modern residential, commercial, and industrial properties." : "SN Electrical Services আধুনিক আবাসিক, কমার্শিয়াল এবং ইন্ডাস্ট্রিয়াল সম্পত্তির জন্য টেকনিক্যাল শৃঙ্খলা, পরিশীলিত কাজের মান এবং স্বচ্ছ যোগাযোগ একত্রিত করে।"}
      />

      <section className="section-space">
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.95fr]">
          <Reveal className="space-y-6">
            <SectionHeading
              eyebrow={locale === "en" ? "Company Story" : "কোম্পানির গল্প"}
              title={locale === "en" ? "From trusted callouts to full-scale project execution." : "বিশ্বস্ত কলআউট থেকে পূর্ণাঙ্গ প্রকল্প বাস্তবায়ন পর্যন্ত।"}
              description={locale === "en" ? "We started by solving urgent electrical problems for homeowners who needed honest workmanship. That trust became the foundation for a broader company serving premium apartments, retail spaces, offices, and factories." : "আমরা শুরু করেছি সেইসব হোমওনারের জরুরি ইলেকট্রিক্যাল সমস্যা সমাধান করে যাদের দরকার ছিল সৎ কাজের মান। সেই আস্থাই পরে প্রিমিয়াম অ্যাপার্টমেন্ট, রিটেইল স্পেস, অফিস এবং ফ্যাক্টরি সেবা প্রদানকারী বৃহত্তর কোম্পানির ভিত্তি হয়েছে।"}
            />
            <div className="grid gap-4 sm:grid-cols-3">
              {values.map((item) => (
                <div key={item.en} className="glass-panel px-5 py-5">
                  <item.icon className="h-5 w-5 text-[var(--color-primary)]" />
                  <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">
                    {locale === "en" ? item.en : item.bn}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <div className="relative overflow-hidden rounded-[34px]">
              <Image
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80"
                alt="Electrical team planning a project"
                width={1200}
                height={900}
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: locale === "en" ? "Mission" : "মিশন",
                text:
                  locale === "en"
                    ? "Deliver dependable, safe electrical systems with premium workmanship and clear accountability."
                    : "প্রিমিয়াম কাজের মান এবং স্পষ্ট দায়বদ্ধতার সাথে নির্ভরযোগ্য, নিরাপদ ইলেকট্রিক্যাল সিস্টেম সরবরাহ করা।",
              },
              {
                title: locale === "en" ? "Vision" : "ভিশন",
                text:
                  locale === "en"
                    ? "Become the most trusted premium electrical partner for modern properties across Bangladesh."
                    : "বাংলাদেশজুড়ে আধুনিক সম্পত্তির জন্য সবচেয়ে বিশ্বস্ত প্রিমিয়াম ইলেকট্রিক্যাল পার্টনার হওয়া।",
              },
              {
                title: locale === "en" ? "Safety Commitment" : "সেফটি কমিটমেন্ট",
                text:
                  locale === "en"
                    ? "Every project begins with hazard review, protective planning, and disciplined testing before handover."
                    : "প্রতিটি প্রকল্প হ্যান্ডওভারের আগে হ্যাজার্ড রিভিউ, প্রোটেক্টিভ পরিকল্পনা এবং শৃঙ্খলাপূর্ণ টেস্টিং দিয়ে শুরু হয়।",
              },
            ].map((item) => (
              <Reveal key={item.title}>
                <div className="glass-panel h-full px-6 py-7">
                  <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container space-y-10">
          <SectionHeading
            eyebrow={locale === "en" ? "Our Journey" : "আমাদের যাত্রা"}
            title={locale === "en" ? "A timeline defined by trust and repeat business." : "আস্থা এবং রিপিট ব্যবসা দ্বারা সংজ্ঞায়িত একটি টাইমলাইন।"}
            description={locale === "en" ? "The company grew by delivering safe work, showing up on time, and leaving every client with cleaner systems and better documentation." : "নিরাপদ কাজ, সময়মতো উপস্থিতি এবং প্রতিটি ক্লায়েন্টকে আরও পরিষ্কার সিস্টেম ও উন্নত ডকুমেন্টেশন দিয়ে কোম্পানিটি বেড়েছে।"}
          />
          <div className="grid gap-6 lg:grid-cols-4">
            {[
              { year: "2016", textEn: "Started with residential troubleshooting and rewiring.", textBn: "আবাসিক ট্রাবলশুটিং এবং রিওয়্যারিং দিয়ে শুরু।" },
              { year: "2019", textEn: "Expanded into premium apartment and retail fit-outs.", textBn: "প্রিমিয়াম অ্যাপার্টমেন্ট এবং রিটেইল ফিট-আউটে সম্প্রসারণ।" },
              { year: "2023", textEn: "Added structured maintenance and project documentation standards.", textBn: "স্ট্রাকচার্ড মেইনটেন্যান্স এবং প্রজেক্ট ডকুমেন্টেশন স্ট্যান্ডার্ড যুক্ত।" },
              { year: "2026", textEn: "Serving residential, commercial, and industrial clients with a premium-first brand.", textBn: "প্রিমিয়াম-ফার্স্ট ব্র্যান্ড নিয়ে আবাসিক, কমার্শিয়াল এবং ইন্ডাস্ট্রিয়াল ক্লায়েন্টদের সেবা।" },
            ].map((item) => (
              <Reveal key={item.year}>
                <div className="glass-panel h-full px-6 py-7">
                  <div className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">
                    {item.year}
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">
                    {locale === "en" ? item.textEn : item.textBn}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

