"use client";

import { localePath, useI18n } from "@/lib/i18n";
import { BrandPattern } from "./BrandPattern";
import { FlowingVeins } from "./FlowingVeins";
import { ImageSlot } from "./ImageSlot";
import { ButtonLink } from "./Button";
import { Reveal } from "./Reveal";
import { Container } from "./Section";

export function Hero() {
  const { dict, lang } = useI18n();
  const h = dict.hero;

  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden bg-gradient-to-b from-white via-white to-cream">
      <FlowingVeins tone="cream" />
      <BrandPattern tone="light" fade="start" />

      <Container className="grid items-center gap-12 pb-24 pt-12 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-32 lg:pt-20">
        <div>
          <Reveal>
            <p className="eyebrow mb-5 text-navy/70">{h.eyebrow}</p>
            <h1 id="hero-title" className="display text-4xl text-navy sm:text-5xl lg:text-6xl xl:text-7xl">
              {h.title}
            </h1>
            <span aria-hidden="true" className="mt-6 block h-0.5 w-[120px] bg-gold" />
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-navy/80">{h.subtitle}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href={localePath(lang, "/projects")} variant="primary">
                {h.ctaPrimary}
              </ButtonLink>
              <ButtonLink href={localePath(lang, "/contact")} variant="outline" arrow={false}>
                {h.ctaSecondary}
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="relative">
          {/* Square frame motif (rigid structure) offset behind the photo */}
          <div aria-hidden="true" className="absolute -end-4 top-4 h-full w-full rounded-[28px] border border-gold sm:-end-6 sm:top-6" />
          <ImageSlot
            src="/images/hero/placeholder-hero-architectural-stone.webp"
            alt={h.imageAlt}
            tone="warm"
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            overlay
            className="relative aspect-[4/5] w-full rounded-[28px] shadow-lift sm:aspect-[5/4] lg:aspect-[4/5]"
          />
        </Reveal>
      </Container>

      {/* Stats strip */}
      <Container className="-mt-12 pb-16 sm:-mt-16 lg:-mt-20">
        <Reveal>
          <ul className="grid grid-cols-2 rounded-[24px] border border-stone-gray bg-white px-2 py-6 shadow-card sm:px-6 sm:py-8 [&>li+li]:border-s [&>li+li]:border-gold/60">
            {h.stats.map((s) => (
              <li key={s.label} className="flex flex-col items-center gap-1 px-3 text-center">
                <span className="display text-3xl text-navy sm:text-5xl" dir="ltr">
                  {s.prefix}
                  {s.value.toLocaleString("en-US")}
                </span>
                <span className="text-sm font-medium text-navy/80 sm:text-base">{s.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
