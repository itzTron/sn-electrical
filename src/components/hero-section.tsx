"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, MessageCircle, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

import { AnimatedCounter } from "@/components/animated-counter";
import { Reveal } from "@/components/reveal";
import { business, localizePath, t, type Locale } from "@/lib/site";

const stats = [
  { value: 1000, suffix: "+", label: { en: "Projects Delivered", bn: "সম্পন্ন প্রকল্প" } },
  { value: 10, suffix: "+", label: { en: "Years Experience", bn: "বছরের অভিজ্ঞতা" } },
  { value: 24, suffix: "/7", label: { en: "Emergency Support", bn: "ইমার্জেন্সি সাপোর্ট" } },
  { value: 5, suffix: "★", label: { en: "Google Rated", bn: "গুগল রেটিং" } },
];

export function HeroSection({ locale }: { locale: Locale }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 90, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 90, damping: 18 });
  const transform = useMotionTemplate`translate3d(${springX}px, ${springY}px, 0)`;

  const floatingLines = useMemo(() => Array.from({ length: 8 }), []);

  return (
    <section
      className="relative overflow-hidden pt-32 sm:pt-36"
      onMouseMove={(event) => {
        const x = (event.clientX / window.innerWidth - 0.5) * 20;
        const y = (event.clientY / window.innerHeight - 0.5) * 20;
        mouseX.set(x);
        mouseY.set(y);
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,102,255,0.18),transparent_45%),radial-gradient(circle_at_20%_80%,rgba(255,212,0,0.18),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.9)_100%)] dark:bg-[radial-gradient(circle_at_top,rgba(0,102,255,0.25),transparent_40%),radial-gradient(circle_at_20%_80%,rgba(255,212,0,0.14),transparent_28%),linear-gradient(180deg,rgba(13,17,23,0.2)_0%,rgba(13,17,23,0.98)_100%)]" />
      <motion.div
        style={{ transform }}
        className="pointer-events-none absolute inset-0 opacity-60"
      >
        <div className="absolute left-[10%] top-16 h-72 w-72 rounded-full bg-[rgba(0,102,255,0.18)] blur-3xl" />
        <div className="absolute bottom-0 right-[12%] h-64 w-64 rounded-full bg-[rgba(255,212,0,0.18)] blur-3xl" />
      </motion.div>
      {floatingLines.map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0.2, y: index * -10 }}
          animate={{ opacity: [0.16, 0.32, 0.16], y: [index * -10, index * -10 - 22, index * -10] }}
          transition={{ duration: 6 + index, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.75),transparent)]"
          style={{
            top: `${14 + index * 8}%`,
            left: `${index % 2 === 0 ? 0 : 42}%`,
            width: `${30 + index * 5}%`,
          }}
        />
      ))}
      <div className="container relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <Reveal>
              <span className="inline-flex rounded-full border border-white/20 bg-white/72 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)] shadow-[0_16px_40px_rgba(0,102,255,0.1)] backdrop-blur-xl dark:bg-white/8">
                {locale === "en" ? "Certified Electrical Excellence" : "সার্টিফায়েড ইলেকট্রিক্যাল এক্সেলেন্স"}
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.94] tracking-[-0.07em] text-[var(--foreground)] sm:text-6xl lg:text-7xl">
                {t(locale, business.tagline)}
              </h1>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="max-w-2xl rounded-[28px] bg-[rgba(13,17,23,0.5)] px-5 py-4 text-lg leading-8 text-white shadow-[0_16px_40px_rgba(0,0,0,0.18)] backdrop-blur-md sm:text-xl">
                {locale === "en"
                  ? "Professional residential, commercial, and industrial electrical solutions with certified electricians, premium finish standards, and rapid response support."
                  : "সার্টিফায়েড ইলেকট্রিশিয়ান, প্রিমিয়াম ফিনিশ স্ট্যান্ডার্ড এবং দ্রুত রেসপন্স সাপোর্টসহ আবাসিক, কমার্শিয়াল ও ইন্ডাস্ট্রিয়াল ইলেকট্রিক্যাল সলিউশন।"}
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="flex flex-wrap gap-4">
                <Link href={localizePath(locale, "/get-quote")} className="button-primary">
                  {locale === "en" ? "Get Free Quote" : "ফ্রি কোট নিন"}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={`tel:${business.phone.replace(/\s+/g, "")}`}
                  className="button-secondary"
                >
                  <PhoneCall className="h-4 w-4" />
                  {locale === "en" ? "Call Now" : "এখনই কল করুন"}
                </a>
                <a href={business.whatsapp} className="button-secondary">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label.en} className="glass-panel px-5 py-4">
                    <div className="text-3xl font-semibold tracking-[-0.06em] text-[var(--foreground)]">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="mt-2 text-sm text-[var(--muted-foreground)]">
                      {t(locale, stat.label)}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="relative">
            <div className="relative overflow-hidden rounded-[34px] border border-white/20 bg-white/58 p-3 shadow-[0_32px_80px_rgba(8,15,33,0.14)] backdrop-blur-2xl dark:bg-white/8">
              <div className="relative h-[540px] overflow-hidden rounded-[28px]">
                <Image
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80"
                  alt="Professional electrician inspecting control panel"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,17,23,0.05)_0%,rgba(13,17,23,0.45)_100%)]" />
                <div className="absolute inset-x-6 bottom-6">
                  <div className="glass-panel flex items-center justify-between gap-4 px-5 py-4">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)] dark:text-[var(--color-accent)]">
                        {locale === "en" ? "24/7 Emergency Service" : "২৪/৭ ইমার্জেন্সি সার্ভিস"}
                      </div>
                      <div className="mt-2 text-lg font-semibold text-[var(--foreground)] dark:text-white">
                        {locale === "en" ? "Safety-first callouts within Dhaka city." : "ঢাকা শহরের ভেতরে সেফটি-ফার্স্ট কলআউট।"}
                      </div>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(0,102,255,0.12)] dark:bg-white/16">
                      <PhoneCall className="h-5 w-5 text-[var(--color-primary)] dark:text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 3.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-4 hidden max-w-xs rounded-[26px] border border-white/20 bg-white/85 p-5 shadow-[0_24px_50px_rgba(8,15,33,0.12)] backdrop-blur-xl md:block dark:bg-[rgba(13,17,23,0.72)]"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-primary)]">
                {locale === "en" ? "Trust Indicators" : "ট্রাস্ট ইন্ডিকেটর"}
              </div>
              <div className="mt-3 text-sm leading-7 text-[var(--foreground)]/72 dark:text-[var(--muted-foreground)]">
                {locale === "en"
                  ? "Licensed electricians, fast response, safety-led execution, and premium project documentation."
                  : "লাইসেন্সপ্রাপ্ত ইলেকট্রিশিয়ান, দ্রুত রেসপন্স, সেফটি-নির্ভর এক্সিকিউশন এবং প্রিমিয়াম প্রজেক্ট ডকুমেন্টেশন।"}
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
