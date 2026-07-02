import type { MetadataRoute } from "next";

import { blogPosts, locales, projects, services, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/projects",
    "/gallery",
    "/testimonials",
    "/faq",
    "/blog",
    "/career",
    "/contact",
    "/get-quote",
  ];

  return [
    ...locales.flatMap((locale) =>
      staticRoutes.map((route) => ({
        url: `${siteUrl}/${locale}${route}`,
        lastModified: new Date(),
      })),
    ),
    ...locales.flatMap((locale) =>
      services.map((service) => ({
        url: `${siteUrl}/${locale}/services/${service.slug}`,
        lastModified: new Date(),
      })),
    ),
    ...locales.flatMap((locale) =>
      projects.map((project) => ({
        url: `${siteUrl}/${locale}/projects/${project.slug}`,
        lastModified: new Date(project.completionDate),
      })),
    ),
    ...locales.flatMap((locale) =>
      blogPosts.map((post) => ({
        url: `${siteUrl}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.date),
      })),
    ),
  ];
}

