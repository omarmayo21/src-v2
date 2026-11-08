import type { Metadata } from "next";
import { NotFoundView } from "@/components/NotFoundView";
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
    path: "/not-found",
    title: dict.meta.pages.notFound.title,
    description: dict.meta.pages.notFound.description,
  });
}

export default function NotFoundRoutePage() {
  return <NotFoundView />;
}

