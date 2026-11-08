import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageBanner } from "@/components/PageBanner";
import { Stats } from "@/components/Stats";
import { WhySrfec } from "@/components/WhySrfec";
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
    path: "/why-srfec",
    title: dict.meta.pages.whySrfec.title,
    description: dict.meta.pages.whySrfec.description,
  });
}

export default async function WhySrfecPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = isValidLang(rawLang) ? rawLang : "ar";
  const dict = getDict(lang);

  return (
    <>
      <PageBanner title={dict.why.bannerTitle} breadcrumb={dict.why.bannerTitle} />
      <WhySrfec />
      <Stats />
      <CtaBand />
    </>
  );
}

