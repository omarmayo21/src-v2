"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { switchLocalePath, useI18n, type Lang } from "@/lib/i18n";
import { cn } from "@/lib/cn";

/** AR | EN switcher. Preserves the current page route when switching (e.g. /ar/about -> /en/about). */
export function LanguageSwitcher({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  const { lang, dict } = useI18n();
  const pathname = usePathname() || `/${lang}`;
  const dark = tone === "dark";

  const item = (code: Lang, label: string, aria: string) => {
    const active = lang === code;
    const href = switchLocalePath(pathname, code);

    return (
      <Link
        href={href}
        lang={code}
        hrefLang={code}
        aria-current={active ? "page" : undefined}
        aria-label={aria}
        className={cn(
          "inline-flex min-w-9 items-center justify-center rounded-full px-2.5 py-1 text-xs font-semibold transition-colors",
          active
            ? dark
              ? "bg-gold text-navy"
              : "bg-navy text-white"
            : dark
              ? "text-white/80 hover:text-white"
              : "text-navy/80 hover:text-navy",
        )}
      >
        {label}
      </Link>
    );
  };

  return (
    <div
      role="group"
      aria-label={dict.a11y.language}
      dir="ltr"
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full border p-0.5",
        dark ? "border-white/30" : "border-navy/20",
        className,
      )}
    >
      {item("ar", "AR", dict.a11y.switchToArabic)}
      {item("en", "EN", dict.a11y.switchToEnglish)}
    </div>
  );
}
