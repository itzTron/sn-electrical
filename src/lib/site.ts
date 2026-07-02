import type { Metadata } from "next";

export const locales = ["en", "bn"] as const;

export type Locale = (typeof locales)[number];

export type LocalizedText = Record<Locale, string>;

export type NavItem = {
  href: string;
  label: LocalizedText;
};

export type Service = {
  slug: string;
  title: LocalizedText;
  summary: LocalizedText;
  description: LocalizedText;
  banner: string;
  category: "residential" | "commercial" | "industrial";
  benefits: LocalizedText[];
  included: LocalizedText[];
  process: LocalizedText[];
  faqs: {
    question: LocalizedText;
    answer: LocalizedText;
  }[];
};

export type Project = {
  slug: string;
  title: LocalizedText;
  category: "residential" | "commercial" | "industrial";
  summary: LocalizedText;
  description: LocalizedText;
  location: LocalizedText;
  completionDate: string;
  cover: string;
  gallery: string[];
  technologies: string[];
  result: LocalizedText;
  testimonial: {
    name: string;
    location: LocalizedText;
    quote: LocalizedText;
  };
};

export type BlogPost = {
  slug: string;
  category: LocalizedText;
  title: LocalizedText;
  excerpt: LocalizedText;
  author: string;
  date: string;
  image: string;
  body: LocalizedText[];
  faqs?: {
    question: LocalizedText;
    answer: LocalizedText;
  }[];
};

export type Testimonial = {
  name: string;
  location: LocalizedText;
  quote: LocalizedText;
  rating: number;
  project: LocalizedText;
};

export const siteUrl = "https://www.snelectricalservices.com";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function t(locale: Locale, value: LocalizedText) {
  return value[locale];
}

export function localizePath(locale: Locale, href = "") {
  return `/${locale}${href}`;
}

export function buildMetadata(
  locale: Locale,
  title: string,
  description: string,
  path: string,
): Metadata {
  const url = `${siteUrl}${localizePath(locale, path)}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: `${siteUrl}${localizePath("en", path)}`,
        bn: `${siteUrl}${localizePath("bn", path)}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "SN Electrical Services",
      type: "website",
      images: [
        {
          url: `${siteUrl}/og-cover.svg`,
          width: 1200,
          height: 630,
          alt: "SN Electrical Services",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}/og-cover.svg`],
    },
  };
}

export const navItems: NavItem[] = [
  { href: "", label: { en: "Home", bn: "হোম" } },
  { href: "/about", label: { en: "About", bn: "আমাদের সম্পর্কে" } },
  { href: "/services", label: { en: "Services", bn: "সেবাসমূহ" } },
  { href: "/projects", label: { en: "Projects", bn: "প্রকল্প" } },
  { href: "/gallery", label: { en: "Gallery", bn: "গ্যালারি" } },
  { href: "/blog", label: { en: "Blog", bn: "ব্লগ" } },
  { href: "/contact", label: { en: "Contact", bn: "যোগাযোগ" } },
];

export const services: Service[] = [
  {
    slug: "house-wiring",
    title: { en: "House Wiring", bn: "হাউস ওয়্যারিং" },
    summary: {
      en: "Neat, code-compliant wiring plans for homes that need safe power flow and room-by-room reliability.",
      bn: "নিরাপদ বিদ্যুৎ প্রবাহ এবং রুমভিত্তিক নির্ভরযোগ্যতার জন্য ঘরের কোড-সম্মত ওয়্যারিং পরিকল্পনা।",
    },
    description: {
      en: "We design and install premium residential wiring systems with clean routing, load balancing, surge protection planning, and future-ready expansion points.",
      bn: "আমরা পরিষ্কার রাউটিং, লোড ব্যালান্সিং, সার্জ প্রোটেকশন পরিকল্পনা এবং ভবিষ্যৎ সম্প্রসারণ সুবিধাসহ প্রিমিয়াম আবাসিক ওয়্যারিং সিস্টেম ডিজাইন ও ইনস্টল করি।",
    },
    banner:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
    category: "residential",
    benefits: [
      {
        en: "Hidden cable management for a cleaner finish",
        bn: "পরিষ্কার ফিনিশের জন্য লুকানো কেবল ম্যানেজমেন্ট",
      },
      {
        en: "Voltage drop planning for high-load appliances",
        bn: "উচ্চ লোড যন্ত্রের জন্য ভোল্টেজ ড্রপ পরিকল্পনা",
      },
      {
        en: "Labelled circuits for easier maintenance",
        bn: "সহজ রক্ষণাবেক্ষণের জন্য লেবেলযুক্ত সার্কিট",
      },
    ],
    included: [
      { en: "Circuit planning", bn: "সার্কিট পরিকল্পনা" },
      { en: "Conduit installation", bn: "কনডুইট ইনস্টলেশন" },
      { en: "Switch and socket fit-off", bn: "সুইচ ও সকেট ফিট-অফ" },
      { en: "Final safety testing", bn: "চূড়ান্ত নিরাপত্তা পরীক্ষা" },
    ],
    process: [
      { en: "Site survey and load study", bn: "সাইট সার্ভে ও লোড স্টাডি" },
      { en: "Material and routing plan", bn: "উপকরণ ও রাউটিং পরিকল্পনা" },
      { en: "Installation and labelling", bn: "ইনস্টলেশন ও লেবেলিং" },
      { en: "Testing and client handover", bn: "টেস্টিং ও ক্লায়েন্ট হস্তান্তর" },
    ],
    faqs: [
      {
        question: {
          en: "Can you rewire an occupied home?",
          bn: "বাস করা অবস্থায় কি ঘর রিওয়্যার করা যায়?",
        },
        answer: {
          en: "Yes. We phase the work room by room to keep disruption controlled and the property safe.",
          bn: "হ্যাঁ। আমরা রুমভিত্তিক ধাপে কাজ করি যাতে ব্যাঘাত কম হয় এবং সম্পত্তি নিরাপদ থাকে।",
        },
      },
    ],
  },
  {
    slug: "building-wiring",
    title: { en: "Building Wiring", bn: "বিল্ডিং ওয়্যারিং" },
    summary: {
      en: "Structured electrical systems for apartments, mixed-use buildings, and premium multi-floor developments.",
      bn: "অ্যাপার্টমেন্ট, মিক্সড-ইউজ বিল্ডিং এবং মাল্টি-ফ্লোর ডেভেলপমেন্টের জন্য সুগঠিত ইলেকট্রিক্যাল সিস্টেম।",
    },
    description: {
      en: "From riser planning to unit distribution, we deliver efficient wiring systems with clear coordination across contractors and timelines.",
      bn: "রাইজার পরিকল্পনা থেকে ইউনিট ডিস্ট্রিবিউশন পর্যন্ত, আমরা কন্ট্রাক্টর এবং টাইমলাইনের সাথে সমন্বিত দক্ষ ওয়্যারিং সিস্টেম সরবরাহ করি।",
    },
    banner:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    category: "commercial",
    benefits: [
      { en: "Scalable floor-by-floor layouts", bn: "স্কেলযোগ্য ফ্লোর-ভিত্তিক লেআউট" },
      { en: "Contractor coordination", bn: "কন্ট্রাক্টর সমন্বয়" },
      { en: "Documentation for future upgrades", bn: "ভবিষ্যৎ আপগ্রেডের জন্য ডকুমেন্টেশন" },
    ],
    included: [
      { en: "Riser coordination", bn: "রাইজার সমন্বয়" },
      { en: "Panel planning", bn: "প্যানেল পরিকল্পনা" },
      { en: "Lighting circuits", bn: "লাইটিং সার্কিট" },
      { en: "Commissioning", bn: "কমিশনিং" },
    ],
    process: [
      { en: "Consultation", bn: "পরামর্শ" },
      { en: "Drawings and load split", bn: "ড্রইং ও লোড বণ্টন" },
      { en: "Execution oversight", bn: "এক্সিকিউশন তদারকি" },
      { en: "Testing report", bn: "টেস্টিং রিপোর্ট" },
    ],
    faqs: [
      {
        question: {
          en: "Do you work with architects and site engineers?",
          bn: "আপনারা কি আর্কিটেক্ট এবং সাইট ইঞ্জিনিয়ারদের সাথে কাজ করেন?",
        },
        answer: {
          en: "Yes. Coordination meetings are part of our workflow for larger buildings.",
          bn: "হ্যাঁ। বড় প্রকল্পে সমন্বয় সভা আমাদের কাজের অংশ।",
        },
      },
    ],
  },
  {
    slug: "commercial-electrical-work",
    title: {
      en: "Commercial Electrical Work",
      bn: "কমার্শিয়াল ইলেকট্রিক্যাল ওয়ার্ক",
    },
    summary: {
      en: "Retail, office, and hospitality power systems focused on uptime, finish quality, and operational safety.",
      bn: "রিটেইল, অফিস এবং হসপিটালিটি পাওয়ার সিস্টেম যা আপটাইম, ফিনিশ কোয়ালিটি এবং অপারেশনাল সেফটির উপর ভিত্তি করে।",
    },
    description: {
      en: "We handle power, lighting, backup systems, and fit-out coordination for businesses that cannot afford electrical downtime.",
      bn: "যেসব ব্যবসা ইলেকট্রিক্যাল ডাউনটাইম সহ্য করতে পারে না, তাদের জন্য আমরা পাওয়ার, লাইটিং, ব্যাকআপ সিস্টেম এবং ফিট-আউট সমন্বয় করি।",
    },
    banner:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    category: "commercial",
    benefits: [
      { en: "Minimal business disruption", bn: "ব্যবসায়িক ব্যাঘাত কম" },
      { en: "Elegant fixture alignment", bn: "এলিগ্যান্ট ফিক্সচার অ্যালাইনমেন্ট" },
      { en: "Back-up power readiness", bn: "ব্যাকআপ পাওয়ার প্রস্তুতি" },
    ],
    included: [
      { en: "Power distribution", bn: "পাওয়ার ডিস্ট্রিবিউশন" },
      { en: "Lighting design support", bn: "লাইটিং ডিজাইন সাপোর্ট" },
      { en: "UPS/generator interface", bn: "ইউপিএস/জেনারেটর ইন্টারফেস" },
      { en: "Testing and handover", bn: "টেস্টিং ও হস্তান্তর" },
    ],
    process: [
      { en: "Business needs review", bn: "ব্যবসায়িক চাহিদা পর্যালোচনা" },
      { en: "Fit-out coordination", bn: "ফিট-আউট সমন্বয়" },
      { en: "Install and finish", bn: "ইনস্টল ও ফিনিশ" },
      { en: "Operational testing", bn: "অপারেশনাল টেস্টিং" },
    ],
    faqs: [
      {
        question: {
          en: "Do you support night-shift work for live businesses?",
          bn: "চলমান ব্যবসার জন্য কি নাইট-শিফটে কাজ করেন?",
        },
        answer: {
          en: "Yes. We schedule after-hours works to reduce impact on staff and customers.",
          bn: "হ্যাঁ। কর্মী ও গ্রাহকদের প্রভাব কমাতে আমরা আফটার-আওয়ার কাজ নির্ধারণ করি।",
        },
      },
    ],
  },
  {
    slug: "industrial-electrical-work",
    title: {
      en: "Industrial Electrical Work",
      bn: "ইন্ডাস্ট্রিয়াল ইলেকট্রিক্যাল ওয়ার্ক",
    },
    summary: {
      en: "Heavy-duty installations for factories and plants where safety, uptime, and load management matter most.",
      bn: "কারখানা ও প্ল্যান্টের জন্য হেভি-ডিউটি ইন্সটলেশন যেখানে সেফটি, আপটাইম এবং লোড ম্যানেজমেন্ট সবচেয়ে গুরুত্বপূর্ণ।",
    },
    description: {
      en: "Our industrial team delivers machine feeds, MCC distribution, earthing, and maintenance planning with strict safety protocol.",
      bn: "আমাদের ইন্ডাস্ট্রিয়াল টিম কঠোর সেফটি প্রোটোকল মেনে মেশিন ফিড, MCC ডিস্ট্রিবিউশন, আর্থিং এবং মেইনটেন্যান্স পরিকল্পনা করে।",
    },
    banner:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    category: "industrial",
    benefits: [
      { en: "Load-balanced machine circuits", bn: "লোড-ব্যালান্সড মেশিন সার্কিট" },
      { en: "Shutdown planning", bn: "শাটডাউন পরিকল্পনা" },
      { en: "Maintenance-first documentation", bn: "মেইনটেন্যান্স-কেন্দ্রিক ডকুমেন্টেশন" },
    ],
    included: [
      { en: "Machine feeder lines", bn: "মেশিন ফিডার লাইন" },
      { en: "MCC and DB integration", bn: "MCC ও DB ইন্টিগ্রেশন" },
      { en: "Industrial lighting", bn: "ইন্ডাস্ট্রিয়াল লাইটিং" },
      { en: "Commissioning", bn: "কমিশনিং" },
    ],
    process: [
      { en: "Site safety review", bn: "সাইট সেফটি পর্যালোচনা" },
      { en: "Load and risk mapping", bn: "লোড ও রিস্ক ম্যাপিং" },
      { en: "Execution in controlled phases", bn: "নিয়ন্ত্রিত ধাপে এক্সিকিউশন" },
      { en: "Testing with maintenance notes", bn: "মেইনটেন্যান্স নোটসহ টেস্টিং" },
    ],
    faqs: [
      {
        question: {
          en: "Can you work during planned factory shutdowns?",
          bn: "নির্ধারিত ফ্যাক্টরি শাটডাউনের সময় কি কাজ করতে পারেন?",
        },
        answer: {
          en: "Yes. We align manpower and materials around shutdown windows to keep restart risk low.",
          bn: "হ্যাঁ। রিস্টার্ট রিস্ক কম রাখতে আমরা শাটডাউন উইন্ডোর সাথে ম্যানপাওয়ার ও ম্যাটেরিয়াল সমন্বয় করি।",
        },
      },
    ],
  },
  {
    slug: "db-and-mcb-installation",
    title: { en: "DB & MCB Installation", bn: "DB ও MCB ইনস্টলেশন" },
    summary: {
      en: "Clean panel builds and reliable protective switching for homes, offices, and industrial spaces.",
      bn: "ঘর, অফিস ও ইন্ডাস্ট্রিয়াল স্পেসের জন্য পরিষ্কার প্যানেল বিল্ড ও নির্ভরযোগ্য প্রোটেক্টিভ সুইচিং।",
    },
    description: {
      en: "We size and install DBs, MCBs, RCCBs, and labelling systems that improve isolation, fault response, and serviceability.",
      bn: "আমরা এমন DB, MCB, RCCB এবং লেবেলিং সিস্টেম ইনস্টল করি যা আইসোলেশন, ফল্ট রেসপন্স ও সার্ভিসযোগ্যতা বাড়ায়।",
    },
    banner:
      "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=1200&q=80",
    category: "residential",
    benefits: [
      { en: "Neat panel architecture", bn: "পরিষ্কার প্যানেল আর্কিটেকচার" },
      { en: "Safer fault isolation", bn: "নিরাপদ ফল্ট আইসোলেশন" },
      { en: "Clear circuit identification", bn: "স্পষ্ট সার্কিট শনাক্তকরণ" },
    ],
    included: [
      { en: "DB sizing", bn: "DB সাইজিং" },
      { en: "MCB and RCCB fitment", bn: "MCB ও RCCB ফিটমেন্ট" },
      { en: "Panel labelling", bn: "প্যানেল লেবেলিং" },
      { en: "Load test", bn: "লোড টেস্ট" },
    ],
    process: [
      { en: "Load review", bn: "লোড পর্যালোচনা" },
      { en: "Component selection", bn: "কম্পোনেন্ট নির্বাচন" },
      { en: "Installation", bn: "ইনস্টলেশন" },
      { en: "Safety verification", bn: "সেফটি ভেরিফিকেশন" },
    ],
    faqs: [
      {
        question: {
          en: "When should I upgrade my distribution board?",
          bn: "কখন ডিস্ট্রিবিউশন বোর্ড আপগ্রেড করা উচিত?",
        },
        answer: {
          en: "If your current board is overloaded, poorly labelled, or lacks RCCB protection, it is time to assess an upgrade.",
          bn: "যদি আপনার বর্তমান বোর্ডে অতিরিক্ত লোড, খারাপ লেবেলিং বা RCCB সুরক্ষা না থাকে, তবে আপগ্রেড বিবেচনা করা উচিত।",
        },
      },
    ],
  },
  {
    slug: "earthing",
    title: { en: "Earthing", bn: "আর্থিং" },
    summary: {
      en: "Dependable earthing systems that reduce shock risk and stabilize electrical performance.",
      bn: "নির্ভরযোগ্য আর্থিং সিস্টেম যা শক রিস্ক কমায় এবং ইলেকট্রিক্যাল পারফরম্যান্স স্থিতিশীল করে।",
    },
    description: {
      en: "We install and test earthing for residential, commercial, and industrial facilities with measurable safety targets.",
      bn: "আমরা পরিমাপযোগ্য সেফটি টার্গেটসহ আবাসিক, কমার্শিয়াল ও ইন্ডাস্ট্রিয়াল ফ্যাসিলিটির জন্য আর্থিং ইনস্টল ও টেস্ট করি।",
    },
    banner:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80",
    category: "industrial",
    benefits: [
      { en: "Lower fault risk", bn: "কম ফল্ট রিস্ক" },
      { en: "Safer equipment operation", bn: "নিরাপদ ইকুইপমেন্ট অপারেশন" },
      { en: "Measured resistance testing", bn: "পরিমাপযোগ্য রেজিস্ট্যান্স টেস্টিং" },
    ],
    included: [
      { en: "Site assessment", bn: "সাইট অ্যাসেসমেন্ট" },
      { en: "Electrode installation", bn: "ইলেক্ট্রোড ইনস্টলেশন" },
      { en: "Bonding checks", bn: "বন্ডিং চেক" },
      { en: "Resistance report", bn: "রেজিস্ট্যান্স রিপোর্ট" },
    ],
    process: [
      { en: "Ground condition review", bn: "গ্রাউন্ড কন্ডিশন পর্যালোচনা" },
      { en: "System installation", bn: "সিস্টেম ইনস্টলেশন" },
      { en: "Resistance testing", bn: "রেজিস্ট্যান্স টেস্টিং" },
      { en: "Documentation", bn: "ডকুমেন্টেশন" },
    ],
    faqs: [
      {
        question: {
          en: "How often should earthing be tested?",
          bn: "কত ঘনঘন আর্থিং টেস্ট করা উচিত?",
        },
        answer: {
          en: "High-use sites should inspect and test on a recurring maintenance schedule, especially before monsoon seasons.",
          bn: "উচ্চ ব্যবহারযুক্ত সাইটে নিয়মিত মেইনটেন্যান্স সূচি অনুযায়ী, বিশেষ করে বর্ষার আগে, ইনস্পেকশন ও টেস্ট করা উচিত।",
        },
      },
    ],
  },
  {
    slug: "electrical-maintenance",
    title: { en: "Electrical Maintenance", bn: "ইলেকট্রিক্যাল মেইনটেন্যান্স" },
    summary: {
      en: "Preventive and corrective maintenance plans that keep systems stable and downtime predictable.",
      bn: "প্রিভেন্টিভ এবং কারেক্টিভ মেইনটেন্যান্স পরিকল্পনা যা সিস্টেম স্থিতিশীল রাখে এবং ডাউনটাইম পূর্বানুমানযোগ্য করে।",
    },
    description: {
      en: "Routine inspections, load checks, panel cleaning, and targeted fixes built around the pace of your property or facility.",
      bn: "রুটিন ইনস্পেকশন, লোড চেক, প্যানেল ক্লিনিং এবং টার্গেটেড ফিক্স যা আপনার সম্পত্তি বা ফ্যাসিলিটির গতি অনুযায়ী পরিকল্পিত।",
    },
    banner:
      "https://images.unsplash.com/photo-1565608438257-fac3c27beb36?auto=format&fit=crop&w=1200&q=80",
    category: "commercial",
    benefits: [
      { en: "Reduced surprise failures", bn: "আকস্মিক ব্যর্থতা কমে" },
      { en: "Cleaner maintenance records", bn: "পরিষ্কার মেইনটেন্যান্স রেকর্ড" },
      { en: "Improved asset life", bn: "অ্যাসেট লাইফ উন্নত" },
    ],
    included: [
      { en: "Routine inspection", bn: "রুটিন ইনস্পেকশন" },
      { en: "Thermal/load checks", bn: "থার্মাল/লোড চেক" },
      { en: "Panel service", bn: "প্যানেল সার্ভিস" },
      { en: "Issue log and action plan", bn: "ইস্যু লগ ও অ্যাকশন প্ল্যান" },
    ],
    process: [
      { en: "Audit", bn: "অডিট" },
      { en: "Priority fixes", bn: "প্রায়োরিটি ফিক্স" },
      { en: "Scheduled visits", bn: "নির্ধারিত ভিজিট" },
      { en: "Reporting", bn: "রিপোর্টিং" },
    ],
    faqs: [
      {
        question: {
          en: "Do you offer annual maintenance contracts?",
          bn: "আপনারা কি বার্ষিক মেইনটেন্যান্স কন্ট্রাক্ট দেন?",
        },
        answer: {
          en: "Yes. We can tailor AMC coverage around homes, offices, retail, and industrial sites.",
          bn: "হ্যাঁ। আমরা ঘর, অফিস, রিটেইল এবং ইন্ডাস্ট্রিয়াল সাইট অনুযায়ী AMC কভারেজ কাস্টমাইজ করি।",
        },
      },
    ],
  },
  {
    slug: "fault-finding",
    title: { en: "Fault Finding", bn: "ফল্ট ফাইন্ডিং" },
    summary: {
      en: "Fast diagnosis for tripping, voltage issues, burnt wiring, and unexplained downtime.",
      bn: "ট্রিপিং, ভোল্টেজ সমস্যা, বার্ন্ট ওয়্যারিং এবং অজানা ডাউনটাইমের দ্রুত ডায়াগনসিস।",
    },
    description: {
      en: "We isolate root causes quickly using disciplined troubleshooting, test instruments, and repair-first reporting.",
      bn: "আমরা শৃঙ্খলাবদ্ধ ট্রাবলশুটিং, টেস্ট ইন্সট্রুমেন্ট এবং রিপেয়ার-ফার্স্ট রিপোর্টিং দিয়ে দ্রুত মূল কারণ নির্ণয় করি।",
    },
    banner:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    category: "residential",
    benefits: [
      { en: "Shorter downtime", bn: "কম ডাউনটাইম" },
      { en: "Clear fault reporting", bn: "স্পষ্ট ফল্ট রিপোর্টিং" },
      { en: "Safer repair planning", bn: "নিরাপদ রিপেয়ার পরিকল্পনা" },
    ],
    included: [
      { en: "Visual inspection", bn: "ভিজ্যুয়াল ইনস্পেকশন" },
      { en: "Instrument testing", bn: "ইন্সট্রুমেন্ট টেস্টিং" },
      { en: "Cause isolation", bn: "কারণ বিচ্ছিন্নকরণ" },
      { en: "Repair recommendations", bn: "রিপেয়ার রিকমেন্ডেশন" },
    ],
    process: [
      { en: "Emergency call review", bn: "ইমার্জেন্সি কল পর্যালোচনা" },
      { en: "Fault isolation", bn: "ফল্ট আইসোলেশন" },
      { en: "Repair and verify", bn: "রিপেয়ার ও ভেরিফাই" },
      { en: "Future prevention notes", bn: "ভবিষ্যৎ প্রতিরোধ নোট" },
    ],
    faqs: [
      {
        question: {
          en: "Do you provide same-day fault visits?",
          bn: "আপনারা কি একই দিনে ফল্ট ভিজিট দেন?",
        },
        answer: {
          en: "For urgent callouts, we prioritize fast dispatch subject to site location and safety requirements.",
          bn: "জরুরি কলআউটের ক্ষেত্রে, সাইট লোকেশন ও সেফটি প্রয়োজন অনুসারে আমরা দ্রুত ডিসপ্যাচকে অগ্রাধিকার দিই।",
        },
      },
    ],
  },
  {
    slug: "led-lighting-and-ac-wiring",
    title: {
      en: "LED Lighting, Ceiling Fan & AC Wiring",
      bn: "এলইডি লাইটিং, সিলিং ফ্যান ও AC ওয়্যারিং",
    },
    summary: {
      en: "Refined lighting and appliance wiring that improves comfort, efficiency, and finish quality.",
      bn: "আরাম, দক্ষতা এবং ফিনিশ কোয়ালিটি উন্নত করে এমন পরিশীলিত লাইটিং ও অ্যাপ্লায়েন্স ওয়্যারিং।",
    },
    description: {
      en: "From mood lighting to dedicated AC lines, we install elegant, efficient electrical points that feel finished, not improvised.",
      bn: "মুড লাইটিং থেকে ডেডিকেটেড AC লাইন পর্যন্ত, আমরা এমন এলিগ্যান্ট ও দক্ষ ইলেকট্রিক্যাল পয়েন্ট ইনস্টল করি যা সম্পূর্ণ ফিনিশড মনে হয়।",
    },
    banner:
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1200&q=80",
    category: "residential",
    benefits: [
      { en: "Cleaner ceiling finish", bn: "পরিষ্কার সিলিং ফিনিশ" },
      { en: "Dedicated appliance protection", bn: "ডেডিকেটেড অ্যাপ্লায়েন্স সুরক্ষা" },
      { en: "Energy-conscious lighting layouts", bn: "এনার্জি-সচেতন লাইটিং লেআউট" },
    ],
    included: [
      { en: "Fixture planning", bn: "ফিক্সচার পরিকল্পনা" },
      { en: "Fan and AC point setup", bn: "ফ্যান ও AC পয়েন্ট সেটআপ" },
      { en: "Switching configuration", bn: "সুইচিং কনফিগারেশন" },
      { en: "Testing", bn: "টেস্টিং" },
    ],
    process: [
      { en: "Room lighting plan", bn: "রুম লাইটিং পরিকল্পনা" },
      { en: "Point marking", bn: "পয়েন্ট মার্কিং" },
      { en: "Install and align", bn: "ইনস্টল ও অ্যালাইন" },
      { en: "Final checks", bn: "চূড়ান্ত পরীক্ষা" },
    ],
    faqs: [
      {
        question: {
          en: "Can you improve existing lighting without full rewiring?",
          bn: "সম্পূর্ণ রিওয়্যার ছাড়াই কি বিদ্যমান লাইটিং উন্নত করা যায়?",
        },
        answer: {
          en: "Often yes. We assess load, fixture compatibility, and switching options before recommending selective upgrades.",
          bn: "প্রায়ই যায়। আমরা লোড, ফিক্সচার সামঞ্জস্য এবং সুইচিং অপশন মূল্যায়ন করে সিলেক্টিভ আপগ্রেড সুপারিশ করি।",
        },
      },
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "gulshan-smart-home-retrofit",
    title: {
      en: "Gulshan Smart Home Retrofit",
      bn: "গুলশান স্মার্ট হোম রেট্রোফিট",
    },
    category: "residential",
    summary: {
      en: "A luxury apartment upgrade with new DB architecture, layered lighting, and silent AC power planning.",
      bn: "নতুন DB আর্কিটেকচার, স্তরভিত্তিক লাইটিং এবং নীরব AC পাওয়ার পরিকল্পনাসহ একটি লাক্সারি অ্যাপার্টমেন্ট আপগ্রেড।",
    },
    description: {
      en: "The client needed a cleaner, safer power system without disturbing the premium interior finish. We phased the work, introduced labelled circuits, and upgraded protection with a refined concealed routing strategy.",
      bn: "ক্লায়েন্ট প্রিমিয়াম ইন্টেরিয়র নষ্ট না করে আরও পরিষ্কার ও নিরাপদ পাওয়ার সিস্টেম চেয়েছিলেন। আমরা ধাপে কাজ করেছি, লেবেলযুক্ত সার্কিট যুক্ত করেছি এবং লুকানো রাউটিং কৌশলে সুরক্ষা আপগ্রেড করেছি।",
    },
    location: { en: "Gulshan, Dhaka", bn: "গুলশান, ঢাকা" },
    completionDate: "2026-03-18",
    cover:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    ],
    technologies: ["RCCB protection", "LED zoning", "Copper rewiring", "Surge planning"],
    result: {
      en: "Downtime was eliminated and the apartment gained safer isolation, better lighting control, and a neater service layout.",
      bn: "ডাউনটাইম দূর হয়েছে এবং অ্যাপার্টমেন্টে নিরাপদ আইসোলেশন, উন্নত লাইটিং কন্ট্রোল ও আরও পরিষ্কার সার্ভিস লেআউট এসেছে।",
    },
    testimonial: {
      name: "Nafisa Rahman",
      location: { en: "Apartment Owner", bn: "অ্যাপার্টমেন্ট মালিক" },
      quote: {
        en: "The finish quality felt premium and the team handled the work with unusual discipline.",
        bn: "ফিনিশ কোয়ালিটি প্রিমিয়াম লেগেছে এবং টিমটি অসাধারণ শৃঙ্খলার সাথে কাজ করেছে।",
      },
    },
  },
  {
    slug: "banani-retail-fit-out",
    title: {
      en: "Banani Retail Fit-Out",
      bn: "বনানী রিটেইল ফিট-আউট",
    },
    category: "commercial",
    summary: {
      en: "Lighting-focused retail power execution built for ambience, uptime, and opening-day confidence.",
      bn: "অ্যাম্বিয়েন্স, আপটাইম এবং উদ্বোধনী দিনের নির্ভরতার জন্য নির্মিত লাইটিং-কেন্দ্রিক রিটেইল পাওয়ার এক্সিকিউশন।",
    },
    description: {
      en: "We coordinated power, signage feeds, layered lighting, and back-of-house electrical zones for a premium fashion store launch.",
      bn: "একটি প্রিমিয়াম ফ্যাশন স্টোর চালুর জন্য আমরা পাওয়ার, সাইনেজ ফিড, স্তরভিত্তিক লাইটিং এবং ব্যাক-অফ-হাউস ইলেকট্রিক্যাল জোন সমন্বয় করেছি।",
    },
    location: { en: "Banani, Dhaka", bn: "বনানী, ঢাকা" },
    completionDate: "2025-11-04",
    cover:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    ],
    technologies: ["Track lighting", "Dedicated POS circuits", "Back-up power interface"],
    result: {
      en: "The store opened on schedule with balanced lighting scenes and stable equipment power under customer traffic.",
      bn: "স্টোরটি সময়মতো চালু হয়েছে, গ্রাহক উপস্থিতিতেও ব্যালান্সড লাইটিং সিন এবং স্থিতিশীল ইকুইপমেন্ট পাওয়ার নিশ্চিত হয়েছে।",
    },
    testimonial: {
      name: "Adnan Haque",
      location: { en: "Retail Founder", bn: "রিটেইল প্রতিষ্ঠাতা" },
      quote: {
        en: "They understood presentation as well as technical performance.",
        bn: "তারা প্রেজেন্টেশন এবং টেকনিক্যাল পারফরম্যান্স দুটোই বুঝেছে।",
      },
    },
  },
  {
    slug: "gazipur-factory-distribution-upgrade",
    title: {
      en: "Gazipur Factory Distribution Upgrade",
      bn: "গাজীপুর ফ্যাক্টরি ডিস্ট্রিবিউশন আপগ্রেড",
    },
    category: "industrial",
    summary: {
      en: "A controlled MCC and feeder upgrade completed within a planned production shutdown window.",
      bn: "পরিকল্পিত প্রোডাকশন শাটডাউন উইন্ডোর মধ্যে সম্পন্ন একটি নিয়ন্ত্রিত MCC এবং ফিডার আপগ্রেড।",
    },
    description: {
      en: "The facility needed safer machine distribution, improved fault isolation, and clearer maintenance documentation without extending downtime.",
      bn: "ফ্যাসিলিটির নিরাপদ মেশিন ডিস্ট্রিবিউশন, উন্নত ফল্ট আইসোলেশন এবং ডাউনটাইম না বাড়িয়ে আরও পরিষ্কার মেইনটেন্যান্স ডকুমেন্টেশন প্রয়োজন ছিল।",
    },
    location: { en: "Gazipur, Bangladesh", bn: "গাজীপুর, বাংলাদেশ" },
    completionDate: "2026-01-26",
    cover:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1565608438257-fac3c27beb36?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80",
    ],
    technologies: ["MCC upgrade", "Earthing checks", "Feeder balancing", "Maintenance labelling"],
    result: {
      en: "The plant restarted on time with cleaner panel architecture and faster fault traceability.",
      bn: "প্ল্যান্টটি সময়মতো পুনরায় চালু হয়েছে, আরও পরিষ্কার প্যানেল আর্কিটেকচার ও দ্রুত ফল্ট ট্রেসেবিলিটি সহ।",
    },
    testimonial: {
      name: "Mahmudul Karim",
      location: { en: "Operations Manager", bn: "অপারেশনস ম্যানেজার" },
      quote: {
        en: "Their shutdown planning was precise, and the handover documents were unusually strong.",
        bn: "তাদের শাটডাউন পরিকল্পনা ছিল অত্যন্ত নির্ভুল, এবং হ্যান্ডওভার ডকুমেন্ট ছিল অসাধারণ।",
      },
    },
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Tanjim Ahmed",
    location: { en: "Dhanmondi, Dhaka", bn: "ধানমন্ডি, ঢাকা" },
    quote: {
      en: "Clear communication, premium finish, and zero shortcuts. The safest electrical team we have hired.",
      bn: "পরিষ্কার যোগাযোগ, প্রিমিয়াম ফিনিশ এবং কোনো শর্টকাট নয়। আমরা যে ইলেকট্রিক্যাল টিম নিয়োগ করেছি তার মধ্যে সবচেয়ে নিরাপদ।",
    },
    rating: 5,
    project: { en: "Residential rewiring", bn: "আবাসিক রিওয়্যারিং" },
  },
  {
    name: "Ayesha Sultana",
    location: { en: "Banani, Dhaka", bn: "বনানী, ঢাকা" },
    quote: {
      en: "Their team balanced aesthetics and technical discipline better than larger contractors.",
      bn: "বড় কন্ট্রাক্টরদের চেয়েও তারা অ্যাস্থেটিকস এবং টেকনিক্যাল শৃঙ্খলা ভালোভাবে ব্যালান্স করেছে।",
    },
    rating: 5,
    project: { en: "Retail power fit-out", bn: "রিটেইল পাওয়ার ফিট-আউট" },
  },
  {
    name: "Rashed Chowdhury",
    location: { en: "Gazipur", bn: "গাজীপুর" },
    quote: {
      en: "The response time was excellent and their maintenance reporting made future planning easier.",
      bn: "রেসপন্স টাইম অসাধারণ ছিল এবং তাদের মেইনটেন্যান্স রিপোর্টিং ভবিষ্যৎ পরিকল্পনাকে সহজ করেছে।",
    },
    rating: 5,
    project: { en: "Industrial maintenance", bn: "ইন্ডাস্ট্রিয়াল মেইনটেন্যান্স" },
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "electrical-safety-checklist-for-modern-homes",
    category: { en: "Electrical Safety", bn: "ইলেকট্রিক্যাল সেফটি" },
    title: {
      en: "Electrical Safety Checklist for Modern Homes",
      bn: "আধুনিক ঘরের জন্য ইলেকট্রিক্যাল সেফটি চেকলিস্ট",
    },
    excerpt: {
      en: "A concise homeowner checklist to reduce electrical risks before they become expensive faults.",
      bn: "ব্যয়বহুল ফল্ট হওয়ার আগে ইলেকট্রিক্যাল ঝুঁকি কমাতে একটি সংক্ষিপ্ত হোমওনার চেকলিস্ট।",
    },
    author: "SN Electrical Editorial",
    date: "2026-06-08",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    body: [
      {
        en: "Start with the basics: confirm that your distribution board is clearly labelled, accessible, and free from overheating signs. Breakers should not trip under routine usage.",
        bn: "বেসিক থেকে শুরু করুন: আপনার ডিস্ট্রিবিউশন বোর্ড স্পষ্টভাবে লেবেল করা, সহজে অ্যাক্সেসযোগ্য এবং অতিরিক্ত গরমের চিহ্নমুক্ত কি না নিশ্চিত করুন। দৈনন্দিন ব্যবহারে ব্রেকার ট্রিপ করা উচিত নয়।",
      },
      {
        en: "Check high-load points like air conditioners, ovens, geysers, and irons. If sockets discolor or heat up, the line may be overloaded or poorly terminated.",
        bn: "উচ্চ-লোড পয়েন্ট যেমন এয়ার কন্ডিশনার, ওভেন, গিজার এবং আয়রন পরীক্ষা করুন। সকেটের রঙ পরিবর্তন হলে বা গরম হলে লাইন অতিরিক্ত লোডেড বা খারাপভাবে টার্মিনেটেড হতে পারে।",
      },
      {
        en: "Schedule a professional test if your home was wired many years ago or if you have added major appliances without reviewing the original load plan.",
        bn: "যদি আপনার ঘর বহু বছর আগে ওয়্যার করা হয়ে থাকে বা লোড পরিকল্পনা রিভিউ ছাড়া বড় অ্যাপ্লায়েন্স যুক্ত করে থাকেন, তবে পেশাদার টেস্ট নির্ধারণ করুন।",
      },
    ],
    faqs: [
      {
        question: {
          en: "How often should a home electrical system be inspected?",
          bn: "একটি ঘরের ইলেকট্রিক্যাল সিস্টেম কত ঘনঘন ইনস্পেকশন করা উচিত?",
        },
        answer: {
          en: "A professional inspection is wise before major renovations, after repeated tripping, or on a periodic schedule for older properties.",
          bn: "বড় রেনোভেশনের আগে, বারবার ট্রিপিং হলে, বা পুরনো সম্পত্তির জন্য নির্দিষ্ট সময় অন্তর পেশাদার ইনস্পেকশন করা বুদ্ধিমানের কাজ।",
        },
      },
    ],
  },
  {
    slug: "how-to-plan-energy-efficient-lighting",
    category: { en: "Energy Saving", bn: "এনার্জি সেভিং" },
    title: {
      en: "How to Plan Energy-Efficient Lighting",
      bn: "এনার্জি-এফিশিয়েন্ট লাইটিং কীভাবে পরিকল্পনা করবেন",
    },
    excerpt: {
      en: "Layering ambient, task, and accent light creates a premium look while controlling running cost.",
      bn: "অ্যাম্বিয়েন্ট, টাস্ক এবং অ্যাকসেন্ট লাইট স্তরভিত্তিক ব্যবহার প্রিমিয়াম লুক তৈরি করে এবং চলমান খরচ নিয়ন্ত্রণ করে।",
    },
    author: "SN Electrical Editorial",
    date: "2026-05-22",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    body: [
      {
        en: "Good lighting begins with intent. Define what each room needs first: mood, utility, focus, or visual drama. Then size fixtures and switching around that goal.",
        bn: "ভালো লাইটিং শুরু হয় উদ্দেশ্য দিয়ে। প্রতিটি রুমে কী প্রয়োজন তা আগে নির্ধারণ করুন: মুড, ইউটিলিটি, ফোকাস নাকি ভিজ্যুয়াল ড্রামা। তারপর সেই লক্ষ্য অনুযায়ী ফিক্সচার ও সুইচিং নির্ধারণ করুন।",
      },
      {
        en: "LED efficiency matters, but placement matters more. Poorly positioned downlights can waste output and make a premium space feel flat.",
        bn: "এলইডির দক্ষতা গুরুত্বপূর্ণ, কিন্তু প্লেসমেন্ট আরও গুরুত্বপূর্ণ। খারাপভাবে বসানো ডাউনলাইট আউটপুট নষ্ট করতে পারে এবং প্রিমিয়াম স্পেসকে ফ্ল্যাট অনুভব করাতে পারে।",
      },
    ],
  },
  {
    slug: "signs-your-distribution-board-needs-an-upgrade",
    category: { en: "Maintenance Tips", bn: "মেইনটেন্যান্স টিপস" },
    title: {
      en: "Signs Your Distribution Board Needs an Upgrade",
      bn: "আপনার ডিস্ট্রিবিউশন বোর্ড আপগ্রেডের প্রয়োজনের লক্ষণ",
    },
    excerpt: {
      en: "Repeated tripping, poor labelling, or missing RCCB protection are signs your panel deserves attention.",
      bn: "বারবার ট্রিপিং, খারাপ লেবেলিং বা RCCB সুরক্ষা না থাকা প্যানেলের দিকে নজর দেওয়ার স্পষ্ট লক্ষণ।",
    },
    author: "SN Electrical Editorial",
    date: "2026-04-30",
    image:
      "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=1200&q=80",
    body: [
      {
        en: "A distribution board should support safe isolation, predictable maintenance, and growth in appliance demand. If it does not, your risk grows quietly over time.",
        bn: "একটি ডিস্ট্রিবিউশন বোর্ড নিরাপদ আইসোলেশন, পূর্বানুমানযোগ্য মেইনটেন্যান্স এবং অ্যাপ্লায়েন্সের বাড়তি চাহিদা সামলাতে সক্ষম হওয়া উচিত। না হলে সময়ের সাথে ঝুঁকি নীরবে বাড়ে।",
      },
      {
        en: "Upgrade decisions should consider total load, protection devices, enclosure quality, and whether the circuits are documented for future service work.",
        bn: "আপগ্রেড সিদ্ধান্তে মোট লোড, প্রোটেকশন ডিভাইস, এনক্লোজার কোয়ালিটি এবং ভবিষ্যৎ সার্ভিস ওয়ার্কের জন্য সার্কিট ডকুমেন্টেড কি না তা বিবেচনা করা উচিত।",
      },
    ],
  },
];

export const faqItems = [
  {
    category: { en: "Residential", bn: "আবাসিক" },
    question: {
      en: "Do you offer emergency electrical support?",
      bn: "আপনারা কি ইমার্জেন্সি ইলেকট্রিক্যাল সাপোর্ট দেন?",
    },
    answer: {
      en: "Yes. We provide rapid-response support for urgent electrical failures, subject to site safety and service area.",
      bn: "হ্যাঁ। সাইট সেফটি এবং সার্ভিস এরিয়ার ভিত্তিতে আমরা জরুরি ইলেকট্রিক্যাল সমস্যার দ্রুত সাপোর্ট দিই।",
    },
  },
  {
    category: { en: "Commercial", bn: "কমার্শিয়াল" },
    question: {
      en: "Can you work after business hours?",
      bn: "আপনারা কি ব্যবসার সময়ের পর কাজ করতে পারেন?",
    },
    answer: {
      en: "Yes. We often schedule night or low-traffic windows for retail and office electrical work.",
      bn: "হ্যাঁ। রিটেইল এবং অফিস ইলেকট্রিক্যাল কাজের জন্য আমরা প্রায়ই রাত বা কম ট্রাফিক সময় নির্ধারণ করি।",
    },
  },
  {
    category: { en: "Industrial", bn: "ইন্ডাস্ট্রিয়াল" },
    question: {
      en: "Do you handle annual maintenance contracts?",
      bn: "আপনারা কি বার্ষিক মেইনটেন্যান্স কন্ট্রাক্ট পরিচালনা করেন?",
    },
    answer: {
      en: "Yes. We can structure AMC plans with inspection frequency, reporting format, and shutdown coordination.",
      bn: "হ্যাঁ। আমরা ইনস্পেকশন ফ্রিকোয়েন্সি, রিপোর্টিং ফরম্যাট এবং শাটডাউন সমন্বয়সহ AMC পরিকল্পনা তৈরি করতে পারি।",
    },
  },
  {
    category: { en: "Pricing", bn: "প্রাইসিং" },
    question: {
      en: "How do you estimate project pricing?",
      bn: "প্রকল্পের মূল্য কীভাবে নির্ধারণ করেন?",
    },
    answer: {
      en: "We review scope, load, material quality, site access, and schedule before providing a clear estimate.",
      bn: "আমরা স্কোপ, লোড, ম্যাটেরিয়াল কোয়ালিটি, সাইট অ্যাক্সেস এবং সময়সূচি পর্যালোচনা করে পরিষ্কার এস্টিমেট দিই।",
    },
  },
];

export const careerOpenings = [
  {
    title: { en: "Senior Site Electrician", bn: "সিনিয়র সাইট ইলেকট্রিশিয়ান" },
    type: { en: "Full Time", bn: "ফুল টাইম" },
    location: { en: "Dhaka", bn: "ঢাকা" },
  },
  {
    title: { en: "Electrical Project Coordinator", bn: "ইলেকট্রিক্যাল প্রজেক্ট কো-অর্ডিনেটর" },
    type: { en: "Full Time", bn: "ফুল টাইম" },
    location: { en: "Dhaka", bn: "ঢাকা" },
  },
  {
    title: { en: "Maintenance Technician", bn: "মেইনটেন্যান্স টেকনিশিয়ান" },
    type: { en: "Contract", bn: "কন্ট্রাক্ট" },
    location: { en: "Gazipur", bn: "গাজীপুর" },
  },
];

export const business = {
  name: "SN Electrical Services",
  tagline: {
    en: "Powering Your Home with Safety & Trust",
    bn: "নিরাপত্তা ও আস্থার সাথে আপনার ঘরকে শক্তি দিচ্ছি",
  },
  phone: "+880 1712-345678",
  emergency: "+880 1811-112233",
  email: "hello@snelectricalservices.com",
  whatsapp: "https://wa.me/8801712345678",
  address: {
    en: "House 18, Road 7, Mirpur DOHS, Dhaka 1216",
    bn: "হাউস ১৮, রোড ৭, মিরপুর DOHS, ঢাকা ১২১৬",
  },
  hours: {
    en: "Sat - Thu, 8:00 AM - 8:00 PM",
    bn: "শনি - বৃহস্পতিবার, সকাল ৮:০০ - রাত ৮:০০",
  },
  mapEmbed:
    "https://www.google.com/maps?q=Mirpur%20DOHS%20Dhaka&output=embed",
};
