import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { Factory } from "@/components/Factory";
import { PageBanner } from "@/components/PageBanner";
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
    path: "/factory",
    title: dict.meta.pages.factory.title,
    description: dict.meta.pages.factory.description,
  });
}

export default async function FactoryPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = isValidLang(rawLang) ? rawLang : "ar";
  const dict = getDict(lang);

  return (
    <>
      <PageBanner title={dict.factory.title} breadcrumb={dict.factory.title} />
      <Factory />
      <CtaBand />
    </>
  );
}

