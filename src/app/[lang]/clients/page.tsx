import type { Metadata } from "next";
import { Clients } from "@/components/Clients";
import { CtaBand } from "@/components/CtaBand";
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
    path: "/clients",
    title: dict.meta.pages.clients.title,
    description: dict.meta.pages.clients.description,
  });
}

export default async function ClientsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = isValidLang(rawLang) ? rawLang : "ar";
  const dict = getDict(lang);

  return (
    <>
      <PageBanner title={dict.clients.title} breadcrumb={dict.clients.title} />
      <Clients />
      <CtaBand />
    </>
  );
}

