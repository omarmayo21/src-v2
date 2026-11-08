import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { Hero } from "@/components/Hero";
import {
  ClientsStripTeaser,
  FactoryTeaser,
  FeaturedProjectsTeaser,
  StoryTeaser,
  WhyTeaser,
} from "@/components/HomeTeasers";
import { ar } from "@/content/ar";
import { siteConfig } from "@/data/site-config";
import { buildPageMetadata, getDict, isValidLang, locales } from "@/lib/locale";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = isValidLang(rawLang) ? rawLang : "ar";
  const dict = getDict(lang);

  return buildPageMetadata({
    lang,
    path: "",
    title: dict.meta.pages.home.title,
    description: dict.meta.pages.home.description,
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = isValidLang(rawLang) ? rawLang : "ar";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    alternateName: ar.brand.company,
    url: `${siteConfig.url}/${lang}`,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    areaServed: "SA",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <StoryTeaser />
      <WhyTeaser />
      <FactoryTeaser />
      <FeaturedProjectsTeaser />
      <ClientsStripTeaser />
      <CtaBand />
    </>
  );
}

