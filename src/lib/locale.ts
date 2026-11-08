import type { Metadata } from "next";
import { ar } from "@/content/ar";
import { en } from "@/content/en";
import type { Dict } from "@/content/types";
import { siteConfig } from "@/data/site-config";

export const locales = ["ar", "en"] as const;
export type Lang = (typeof locales)[number];
export type Dir = "rtl" | "ltr";

export const defaultLocale: Lang = "ar";

const dictionaries: Record<Lang, Dict> = { ar, en };

export function isValidLang(value: string): value is Lang {
  return value === "ar" || value === "en";
}

export function getDir(lang: Lang): Dir {
  return lang === "ar" ? "rtl" : "ltr";
}

export function getDict(lang: Lang): Dict {
  return dictionaries[lang] ?? dictionaries.ar;
}

/** Build a locale-prefixed internal route, e.g. localePath("ar", "/about") -> "/ar/about", localePath("ar", "") -> "/ar". */
export function localePath(lang: Lang, path = ""): string {
  if (!path || path === "/") return `/${lang}`;
  return `/${lang}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Switch the locale segment of a pathname while keeping the user on the exact same route. */
export function switchLocalePath(pathname: string, targetLang: Lang): string {
  const cleaned = pathname.replace(/^\/(ar|en)(?=\/|$)/, "");
  if (!cleaned || cleaned === "/") return `/${targetLang}`;
  return `/${targetLang}${cleaned.startsWith("/") ? cleaned : `/${cleaned}`}`;
}

/** Pick the right side of a { ar, en } pair (used by data files). */
export function pick<T>(pair: { ar: T; en: T }, lang: Lang): T {
  return pair[lang];
}

/** Generate per-page, per-locale SEO metadata with canonical URL, hreflang alternates, and Open Graph. */
export function buildPageMetadata({
  lang,
  path = "",
  title,
  description,
  image = "/brand/og-image.png",
}: {
  lang: Lang;
  path?: string;
  title: string;
  description: string;
  image?: string;
}): Metadata {
  const dict = getDict(lang);
  const normalizedPath = !path || path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  const canonical = `${siteConfig.url}/${lang}${normalizedPath}`;
  const arUrl = `${siteConfig.url}/ar${normalizedPath}`;
  const enUrl = `${siteConfig.url}/en${normalizedPath}`;

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical,
      languages: {
        ar: arUrl,
        en: enUrl,
        "x-default": arUrl,
      },
    },
    openGraph: {
      type: "website",
      siteName: dict.brand.company,
      title,
      description,
      url: canonical,
      locale: lang === "ar" ? "ar_SA" : "en_US",
      alternateLocale: lang === "ar" ? ["en_US"] : ["ar_SA"],
      images: [{ url: image, alt: dict.hero.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

