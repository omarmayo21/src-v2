"use client";

import { localePath, useI18n } from "@/lib/i18n";
import { BrandPattern } from "./BrandPattern";
import { ButtonLink } from "./Button";
import { FlowingVeins } from "./FlowingVeins";
import { Reveal } from "./Reveal";
import { Container } from "./Section";

/**
 * Reusable navy CTA band with gold button and fading brand pattern.
 * Used at the bottom of inner pages and on Home.
 */
export function CtaBand() {
  const { dict, lang } = useI18n();
  const c = dict.ctaBand;

  return (
    <section
      aria-labelledby="cta-band-title"
      className="relative overflow-hidden border-b border-gold/25 bg-navy py-20 text-white sm:py-24"
    >
      <FlowingVeins tone="navy" />
      <BrandPattern tone="dark" fade="end" />
      <Container className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center lg:gap-16">
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-4 text-gold">{c.eyebrow}</p>
          <h2 id="cta-band-title" className="display text-3xl text-white sm:text-4xl lg:text-5xl">
            {c.title}
          </h2>
          <span aria-hidden="true" className="mt-5 block h-0.5 w-[120px] bg-gold" />
          <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">{c.subtitle}</p>
        </Reveal>

        <Reveal delay={0.1} className="shrink-0">
          <ButtonLink href={localePath(lang, "/contact")} variant="gold">
            {c.button}
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}

