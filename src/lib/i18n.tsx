"use client";

import { createContext, useContext, useEffect, useMemo, type ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import type { Dict } from "@/content/types";
import { getDict, getDir, localePath, pick, switchLocalePath, type Dir, type Lang } from "./locale";

export type { Lang, Dir };
export { localePath, pick, switchLocalePath };

type I18nValue = {
  lang: Lang;
  dir: Dir;
  dict: Dict;
  setLang: (l: Lang) => void;
};

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ lang = "ar", children }: { lang?: Lang; children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname() || `/${lang}`;
  const dir: Dir = getDir(lang);
  const dict = getDict(lang);

  // Keep <html lang> and <html dir> synchronized during client-side locale switches.
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  const value = useMemo<I18nValue>(
    () => ({
      lang,
      dir,
      dict,
      setLang: (next: Lang) => {
        if (next === lang) return;
        router.push(switchLocalePath(pathname, next));
      },
    }),
    [lang, dir, dict, pathname, router],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside <I18nProvider>");
  return ctx;
}
