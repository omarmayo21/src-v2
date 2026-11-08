import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageBanner } from "@/components/PageBanner";
import { Stones } from "@/components/Stones";
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
    path: "/stones",
    title: dict.meta.pages.stones.title,
    description: dict.meta.pages.stones.description,
  });
}

export default async function StonesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = isValidLang(rawLang) ? rawLang : "ar";
  const dict = getDict(lang);

  return (
    <>
      <PageBanner title={dict.stones.title} breadcrumb={dict.stones.title} />
      <Stones />
      <CtaBand />
    </>
  );
}

