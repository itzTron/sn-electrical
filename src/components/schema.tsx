import { business, localizePath, siteUrl, type Locale } from "@/lib/site";

export function LocalBusinessSchema({ locale }: { locale: Locale }) {
  const payload = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    name: business.name,
    image: `${siteUrl}/og-cover.jpg`,
    url: `${siteUrl}${localizePath(locale)}`,
    telephone: business.phone,
    email: business.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address[locale],
      addressCountry: "BD",
    },
    areaServed: ["Dhaka", "Gazipur", "Bangladesh"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:00",
        closes: "20:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}

export function BreadcrumbSchema({
  locale,
  items,
}: {
  locale: Locale;
  items: { name: string; href: string }[];
}) {
  const payload = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${localizePath(locale, item.href)}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}

