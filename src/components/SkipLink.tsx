"use client";

import { useI18n } from "@/lib/i18n";

export function SkipLink() {
  const { dict } = useI18n();
  return (
    <a
      href="#main"
      className="sr-only z-[100] rounded-full bg-gold px-5 py-3 text-sm font-semibold text-navy focus:not-sr-only focus:fixed focus:start-4 focus:top-4"
    >
      {dict.a11y.skip}
    </a>
  );
}
