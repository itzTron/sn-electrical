import { CareerForm } from "@/components/forms";
import { BreadcrumbSchema } from "@/components/schema";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { buildMetadata, careerOpenings, t, type Locale } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return buildMetadata(
    locale,
    locale === "en" ? "Careers" : "ক্যারিয়ার",
    locale === "en"
      ? "Join the SN Electrical Services team and apply for open electrical and project coordination roles."
      : "SN Electrical Services টিমে যোগ দিন এবং খোলা ইলেকট্রিক্যাল ও প্রজেক্ট কো-অর্ডিনেশন পদের জন্য আবেদন করুন।",
    "/career",
  );
}

export default async function CareerPage({
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
          { name: locale === "en" ? "Career" : "ক্যারিয়ার", href: "/career" },
        ]}
      />
      <PageHero
        eyebrow={locale === "en" ? "Career" : "ক্যারিয়ার"}
        title={locale === "en" ? "Build your career with a team that values discipline, safety, and craft." : "শৃঙ্খলা, সেফটি এবং দক্ষতাকে মূল্য দেয় এমন টিমের সাথে ক্যারিয়ার গড়ুন।"}
        description={locale === "en" ? "We are building a service culture where electricians and coordinators can do precise work with pride and long-term growth." : "আমরা এমন একটি সার্ভিস কালচার তৈরি করছি যেখানে ইলেকট্রিশিয়ান এবং কো-অর্ডিনেটররা গর্বের সাথে নিখুঁত কাজ করতে পারে এবং দীর্ঘমেয়াদি উন্নতি করতে পারে।"}
      />
      <section className="section-space">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="space-y-6">
            <div className="glass-panel px-6 py-6">
              <h2 className="text-2xl font-semibold tracking-[-0.04em]">
                {locale === "en" ? "Company culture" : "কোম্পানি কালচার"}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">
                {locale === "en"
                  ? "We value clean workmanship, respectful site behavior, accurate reporting, and a safety-first mindset."
                  : "আমরা পরিষ্কার কাজের মান, সম্মানজনক সাইট আচরণ, সঠিক রিপোর্টিং এবং সেফটি-ফার্স্ট মানসিকতাকে মূল্য দিই।"}
              </p>
            </div>
            <div className="grid gap-4">
              {careerOpenings.map((opening) => (
                <div key={opening.title.en} className="glass-panel px-5 py-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-lg font-semibold">{t(locale, opening.title)}</div>
                      <div className="mt-2 text-sm text-[var(--muted-foreground)]">
                        {t(locale, opening.location)}
                      </div>
                    </div>
                    <span className="rounded-full bg-[var(--surface-secondary)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]">
                      {t(locale, opening.type)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <CareerForm locale={locale} />
          </Reveal>
        </div>
      </section>
    </main>
  );
}

