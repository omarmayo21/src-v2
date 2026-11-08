import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site-config";
import { locales } from "@/lib/locale";

const staticRoutes = [
  "",
  "/about",
  "/factory",
  "/why-srfec",
  "/projects",
  "/clients",
  "/contact",
  ...(siteConfig.showStones ? ["/stones"] : []),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const lastModified = new Date();

  for (const route of staticRoutes) {
    for (const lang of locales) {
      entries.push({
        url: `${siteConfig.url}/${lang}${route}`,
        lastModified,
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : 0.8,
        alternates: {
          languages: {
            ar: `${siteConfig.url}/ar${route}`,
            en: `${siteConfig.url}/en${route}`,
          },
        },
      });
    }
  }

  for (const project of projects) {
    const route = `/projects/${project.slug}`;
    for (const lang of locales) {
      entries.push({
        url: `${siteConfig.url}/${lang}${route}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: {
            ar: `${siteConfig.url}/ar${route}`,
            en: `${siteConfig.url}/en${route}`,
          },
        },
      });
    }
  }

  return entries;
}

