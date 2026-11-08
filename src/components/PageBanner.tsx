"use client";

import Link from "next/link";
import { localePath, useI18n } from "@/lib/i18n";
import { BrandPattern } from "./BrandPattern";
import { FlowingVeins } from "./FlowingVeins";
import { Reveal } from "./Reveal";
import { Container } from "./Section";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type Props = {
  title: string;
  /** Either the current page label (string) or a trail of items after "Home". */
  breadcrumb: string | BreadcrumbItem[];
  subtitle?: string;
};

/**
 * Reusable inner-page banner:
 * Navy background, serif title in white, gold thin underline, breadcrumb (Home / Page), faded brand pattern.
 */
export function PageBanner({ title, breadcrumb, subtitle }: Props) {
  const { dict, lang } = useI18n();
  const trail: BreadcrumbItem[] =
    typeof breadcrumb === "string" ? [{ label: breadcrumb }] : breadcrumb;

  return (
    <section className="relative overflow-hidden bg-navy py-16 text-white sm:py-20 lg:py-24">
      <FlowingVeins tone="navy" />
      <BrandPattern tone="dark" fade="end" />
      <Container>
        <Reveal y={14}>
          <nav aria-label={dict.a11y.breadcrumb} className="mb-5">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-medium text-white/75 sm:text-sm">
              <li>
                <Link
                  href={localePath(lang)}
                  className="link-underline text-white/80 transition-colors hover:text-gold"
                >
                  {dict.breadcrumb.home}
                </Link>
              </li>
              {trail.map((item, idx) => {
                const isLast = idx === trail.length - 1;
                return (
                  <li key={`${item.label}-${idx}`} className="flex items-center gap-2">
                    <span aria-hidden="true" className="text-gold">
                      /
                    </span>
                    {item.href && !isLast ? (
                      <Link
                        href={item.href}
                        className="link-underline text-white/80 transition-colors hover:text-gold"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span aria-current="page" className="font-semibold text-gold">
                        {item.label}
                      </span>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>

          <h1 className="display text-3xl text-white sm:text-5xl lg:text-6xl">{title}</h1>
          <span aria-hidden="true" className="mt-5 block h-0.5 w-[120px] bg-gold" />
          {subtitle && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              {subtitle}
            </p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}

