import { ArrowRight, BadgeCheck, Bolt, Clock3, ShieldCheck, Sparkles, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { FaqSearch } from "@/components/faq-search";
import { HeroSection } from "@/components/hero-section";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { blogPosts, buildMetadata, business, faqItems, localizePath, projects, services, t, testimonials, type Locale } from "@/lib/site";

const trustPoints = [
  { icon: ShieldCheck, label: { en: "Certified Electricians", bn: "সার্টিফায়েড ইলেকট্রিশিয়ান" } },
  { icon: Clock3, label: { en: "24/7 Emergency Service", bn: "২৪/৭ ইমার্জেন্সি সার্ভিস" } },
  { icon: Star, label: { en: "5 Star Reviews", bn: "৫ স্টার রিভিউ" } },
  { icon: BadgeCheck, label: { en: "Safety Guaranteed", bn: "সেফটি গ্যারান্টিযুক্ত" } },
  { icon: Bolt, label: { en: "Fast Response", bn: "দ্রুত রেসপন্স" } },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return buildMetadata(
    locale,
    "Premium Electrical Services",
    "Luxury-grade electrical solutions for homes, retail, offices, and industrial facilities.",
    "",
  );
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return (
    <main>
      <HeroSection locale={locale} />

      <section className="section-space">
        <div className="container">
          <Reveal>
            <div className="glass-panel grid gap-6 px-6 py-8 sm:grid-cols-2 sm:px-8 lg:grid-cols-5">
              {trustPoints.map((item) => (
                <div key={item.label.en} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-secondary)]">
                    <item.icon className="h-5 w-5 text-[var(--color-primary)]" />
                  </div>
                  <div className="text-sm font-medium text-[var(--foreground)]">
                    {t(locale, item.label)}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container space-y-12">
          <SectionHeading
            eyebrow={locale === "en" ? "Services Preview" : "সেবাসমূহ"}
            title={locale === "en" ? "Electrical services designed to feel precise, safe, and premium." : "এমন ইলেকট্রিক্যাল সেবা যা নিখুঁত, নিরাপদ এবং প্রিমিয়াম অনুভূত হয়।"}
            description={locale === "en" ? "From luxury apartment wiring to industrial shutdown upgrades, every service is executed with disciplined planning and refined finishing." : "লাক্সারি অ্যাপার্টমেন্ট ওয়্যারিং থেকে ইন্ডাস্ট্রিয়াল শাটডাউন আপগ্রেড পর্যন্ত, প্রতিটি সেবা শৃঙ্খলাপূর্ণ পরিকল্পনা এবং পরিশীলিত ফিনিশিং দিয়ে সম্পন্ন হয়।"}
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.slice(0, 6).map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.05}>
                <Link
                  href={localizePath(locale, `/services/${service.slug}`)}
                  className="group glass-panel block overflow-hidden p-4"
                >
                  <div className="relative h-60 overflow-hidden rounded-[26px]">
                    <Image
                      src={service.banner}
                      alt={t(locale, service.title)}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,17,23,0.08)_0%,rgba(13,17,23,0.55)_100%)]" />
                    <div className="absolute left-4 top-4 rounded-full bg-white/78 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)] backdrop-blur-xl">
                      {service.category}
                    </div>
                  </div>
                  <div className="space-y-4 px-2 pb-2 pt-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                        {t(locale, service.title)}
                      </h3>
                      <ArrowRight className="mt-1 h-5 w-5 text-[var(--color-primary)] transition group-hover:translate-x-1" />
                    </div>
                    <p className="text-sm leading-7 text-[var(--muted-foreground)]">
                      {t(locale, service.summary)}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="space-y-8">
            <SectionHeading
              eyebrow={locale === "en" ? "Why Choose Us" : "কেন আমাদের বেছে নেবেন"}
              title={locale === "en" ? "Technical rigor, premium presentation, and a trust-first client experience." : "টেকনিক্যাল শৃঙ্খলা, প্রিমিয়াম প্রেজেন্টেশন এবং আস্থাভিত্তিক ক্লায়েন্ট অভিজ্ঞতা।"}
              description={locale === "en" ? "We combine disciplined electrical execution with the finish quality and communication standards clients expect from high-end contractors." : "আমরা শৃঙ্খলাপূর্ণ ইলেকট্রিক্যাল এক্সিকিউশনকে এমন ফিনিশ কোয়ালিটি ও যোগাযোগের মানের সাথে মিলাই যা হাই-এন্ড কন্ট্রাক্টরদের কাছ থেকে প্রত্যাশিত।"}
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { en: "Licensed electricians", bn: "লাইসেন্সপ্রাপ্ত ইলেকট্রিশিয়ান" },
                { en: "Affordable premium pricing", bn: "সাশ্রয়ী প্রিমিয়াম প্রাইসিং" },
                { en: "Latest tools and testing gear", bn: "সর্বাধুনিক টুলস ও টেস্টিং গিয়ার" },
                { en: "Emergency support coverage", bn: "ইমার্জেন্সি সাপোর্ট কভারেজ" },
              ].map((feature) => (
                <div key={feature.en} className="flex items-center gap-3 rounded-[24px] border border-white/18 bg-white/68 px-4 py-4 backdrop-blur-xl dark:bg-white/6">
                  <Sparkles className="h-4 w-4 text-[var(--color-accent)]" />
                  <span className="text-sm font-medium">{t(locale, feature)}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-[34px]">
              <Image
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80"
                alt="Electrical engineer planning service layout"
                width={1200}
                height={900}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="glass-panel absolute bottom-6 left-6 max-w-xs px-5 py-5">
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-primary)]">
                {locale === "en" ? "Execution Standard" : "এক্সিকিউশন স্ট্যান্ডার্ড"}
              </div>
              <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">
                {locale === "en"
                  ? "Detailed load review, clean panel labelling, protected circuits, and a handover process clients can actually understand."
                  : "বিস্তারিত লোড রিভিউ, পরিষ্কার প্যানেল লেবেলিং, সুরক্ষিত সার্কিট এবং এমন হ্যান্ডওভার প্রসেস যা ক্লায়েন্টরা সত্যিই বুঝতে পারে।"}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="container grid items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-[34px]">
              <Image
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80"
                alt="Modern property exterior"
                width={1200}
                height={900}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="glass-panel absolute right-5 top-5 max-w-[220px] px-5 py-4">
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
                {locale === "en" ? "10+ Years" : "১০+ বছর"}
              </div>
              <div className="mt-2 text-sm leading-7 text-[var(--muted-foreground)]">
                {locale === "en" ? "Built on repeat clients, referrals, and safe delivery." : "রিপিট ক্লায়েন্ট, রেফারেল এবং নিরাপদ ডেলিভারির উপর নির্মিত।"}
              </div>
            </div>
          </Reveal>
          <Reveal className="order-1 lg:order-2">
            <SectionHeading
              eyebrow={locale === "en" ? "About Preview" : "আমাদের সম্পর্কে"}
              title={locale === "en" ? "A modern electrical company with old-school reliability." : "আধুনিক ইলেকট্রিক্যাল কোম্পানি, পুরনো দিনের নির্ভরযোগ্যতা নিয়ে।"}
              description={locale === "en" ? "SN Electrical Services was built around one simple belief: electrical work should protect people first, then perform beautifully for years. That principle shapes our process, communication, and finish quality." : "SN Electrical Services এক সহজ বিশ্বাসের উপর নির্মিত: ইলেকট্রিক্যাল কাজ প্রথমে মানুষকে সুরক্ষা দেবে, তারপর বহু বছর সুন্দরভাবে কাজ করবে। এই নীতিই আমাদের প্রক্রিয়া, যোগাযোগ এবং ফিনিশ কোয়ালিটি নির্ধারণ করে।"}
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: locale === "en" ? "Mission" : "মিশন",
                  text: locale === "en" ? "Deliver safer, smarter electrical systems with exceptional workmanship." : "অসাধারণ কাজের মান নিয়ে নিরাপদ ও স্মার্ট ইলেকট্রিক্যাল সিস্টেম সরবরাহ করা।",
                },
                {
                  title: locale === "en" ? "Vision" : "ভিশন",
                  text: locale === "en" ? "Be the most trusted premium electrical brand for modern properties." : "আধুনিক সম্পত্তির জন্য সবচেয়ে বিশ্বস্ত প্রিমিয়াম ইলেকট্রিক্যাল ব্র্যান্ড হওয়া।",
                },
              ].map((item) => (
                <div key={item.title} className="glass-panel px-5 py-5">
                  <div className="text-lg font-semibold">{item.title}</div>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
            <Link href={localizePath(locale, "/about")} className="button-primary mt-8">
              {locale === "en" ? "Learn More" : "আরও জানুন"}
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="container space-y-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow={locale === "en" ? "Completed Projects" : "সম্পন্ন প্রকল্প"}
              title={locale === "en" ? "Selected work across residential, commercial, and industrial spaces." : "আবাসিক, কমার্শিয়াল এবং ইন্ডাস্ট্রিয়াল স্পেসে নির্বাচিত কাজ।"}
              description={locale === "en" ? "Every project is documented, tested, and delivered with a finish standard that reflects the property itself." : "প্রতিটি প্রকল্প ডকুমেন্টেড, টেস্টেড এবং এমন ফিনিশ স্ট্যান্ডার্ডে ডেলিভার করা হয় যা সম্পত্তির মানকে প্রতিফলিত করে।"}
            />
            <Link href={localizePath(locale, "/projects")} className="button-secondary">
              {locale === "en" ? "View all projects" : "সব প্রকল্প দেখুন"}
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.05}>
                <Link
                  href={localizePath(locale, `/projects/${project.slug}`)}
                  className="group glass-panel block overflow-hidden p-4"
                >
                  <div className="relative h-[340px] overflow-hidden rounded-[28px]">
                    <Image
                      src={project.cover}
                      alt={t(locale, project.title)}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,17,23,0.1)_0%,rgba(13,17,23,0.58)_100%)]" />
                    <div className="absolute left-5 top-5 rounded-full bg-white/78 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)] backdrop-blur-xl">
                      {project.category}
                    </div>
                  </div>
                  <div className="space-y-3 px-2 pb-2 pt-6">
                    <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                      {t(locale, project.title)}
                    </h3>
                    <p className="text-sm leading-7 text-[var(--muted-foreground)]">
                      {t(locale, project.summary)}
                    </p>
                    <div className="flex items-center justify-between text-sm text-[var(--muted-foreground)]">
                      <span>{t(locale, project.location)}</span>
                      <span>{project.completionDate}</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container space-y-12">
          <SectionHeading
            eyebrow={locale === "en" ? "Testimonials" : "টেস্টিমোনিয়াল"}
            title={locale === "en" ? "Clients remember the finish quality and the calm execution." : "ক্লায়েন্টরা ফিনিশ কোয়ালিটি এবং শান্ত এক্সিকিউশনকেই বেশি মনে রাখে।"}
            description={locale === "en" ? "The trust we build comes from discipline on site, transparency in communication, and reliable long-term support." : "আমরা যে আস্থা তৈরি করি তা আসে সাইটে শৃঙ্খলা, যোগাযোগে স্বচ্ছতা এবং দীর্ঘমেয়াদি নির্ভরযোগ্য সাপোর্ট থেকে।"}
          />
          <TestimonialCarousel locale={locale} items={testimonials} />
        </div>
      </section>

      <section className="section-space">
        <div className="container grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <SectionHeading
              eyebrow={locale === "en" ? "FAQ" : "প্রশ্নোত্তর"}
              title={locale === "en" ? "Straight answers before the first site visit." : "প্রথম সাইট ভিজিটের আগেই সরাসরি উত্তর।"}
              description={locale === "en" ? "Search the most common questions we receive about pricing, emergency support, maintenance, and project process." : "প্রাইসিং, ইমার্জেন্সি সাপোর্ট, মেইনটেন্যান্স এবং প্রজেক্ট প্রসেস নিয়ে সবচেয়ে বেশি জিজ্ঞাসিত প্রশ্নগুলো খুঁজুন।"}
            />
          </Reveal>
          <Reveal>
            <FaqSearch locale={locale} items={faqItems} />
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="container space-y-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow={locale === "en" ? "Blog" : "ব্লগ"}
              title={locale === "en" ? "Practical electrical guidance for safer, more efficient properties." : "নিরাপদ ও দক্ষ সম্পত্তির জন্য ব্যবহারিক ইলেকট্রিক্যাল নির্দেশনা।"}
              description={locale === "en" ? "Editorial content built to educate clients before they buy and help them maintain what they already own." : "ক্লায়েন্টরা কেনার আগে শিক্ষিত হতে পারে এবং যা আছে তা ভালোভাবে রক্ষণাবেক্ষণ করতে পারে, সেই উদ্দেশ্যে তৈরি সম্পাদকীয় কনটেন্ট।"}
            />
            <Link href={localizePath(locale, "/blog")} className="button-secondary">
              {locale === "en" ? "Read the blog" : "ব্লগ পড়ুন"}
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.05}>
                <Link
                  href={localizePath(locale, `/blog/${post.slug}`)}
                  className="group glass-panel block overflow-hidden p-4"
                >
                  <div className="relative h-56 overflow-hidden rounded-[26px]">
                    <Image
                      src={post.image}
                      alt={t(locale, post.title)}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-3 px-2 pb-2 pt-5">
                    <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">
                      <span>{t(locale, post.category)}</span>
                      <span className="text-[var(--muted-foreground)]">{post.date}</span>
                    </div>
                    <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                      {t(locale, post.title)}
                    </h3>
                    <p className="text-sm leading-7 text-[var(--muted-foreground)]">
                      {t(locale, post.excerpt)}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container">
          <Reveal>
            <div className="glass-panel grid gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-5">
                <SectionHeading
                  eyebrow={locale === "en" ? "Contact Preview" : "যোগাযোগ"}
                  title={locale === "en" ? "Book a trusted electrical partner for your next project." : "আপনার পরবর্তী প্রকল্পের জন্য বিশ্বস্ত ইলেকট্রিক্যাল পার্টনার বুক করুন।"}
                  description={locale === "en" ? "Call for urgent work, message us on WhatsApp, or request a full quote for planned installations and upgrades." : "জরুরি কাজের জন্য কল করুন, WhatsApp-এ মেসেজ করুন, অথবা পরিকল্পিত ইনস্টলেশন ও আপগ্রেডের জন্য পূর্ণ কোট অনুরোধ করুন।"}
                />
                <div className="grid gap-4 text-sm text-[var(--muted-foreground)]">
                  <div>{business.phone}</div>
                  <div>{business.email}</div>
                  <div>{t(locale, business.address)}</div>
                  <div>{t(locale, business.hours)}</div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link href={localizePath(locale, "/contact")} className="button-primary">
                    {locale === "en" ? "Contact Us" : "যোগাযোগ করুন"}
                  </Link>
                  <Link href={localizePath(locale, "/get-quote")} className="button-secondary">
                    {locale === "en" ? "Get a Quote" : "কোট নিন"}
                  </Link>
                </div>
              </div>
              <div className="overflow-hidden rounded-[28px] border border-white/18">
                <iframe
                  src={business.mapEmbed}
                  title="SN Electrical Services location"
                  className="h-[380px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
