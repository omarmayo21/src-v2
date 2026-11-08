import type { Metadata } from "next";
import { AboutSubNav } from "@/components/AboutSubNav";
import { CeoMessage } from "@/components/CeoMessage";
import { CtaBand } from "@/components/CtaBand";
import { PageBanner } from "@/components/PageBanner";
import { Story } from "@/components/Story";
import { Values } from "@/components/Values";
import { VisionMission } from "@/components/VisionMission";
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
    path: "/about",
    title: dict.meta.pages.about.title,
    description: dict.meta.pages.about.description,
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = isValidLang(rawLang) ? rawLang : "ar";
  const dict = getDict(lang);

  return (
    <>
      <PageBanner title={dict.aboutPage.title} breadcrumb={dict.aboutPage.title} />
      <AboutSubNav />
      <Story />
      <CeoMessage />
      <VisionMission />
      <Values />
      <CtaBand />
    </>
  );
}

