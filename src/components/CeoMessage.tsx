"use client";

import { useI18n } from "@/lib/i18n";
import { BrandPattern } from "./BrandPattern";
import { FlowingVeins } from "./FlowingVeins";
import { ImageSlot } from "./ImageSlot";
import { Reveal } from "./Reveal";
import { Container, Section } from "./Section";
import { SectionTitle } from "./SectionTitle";

/* TODO: the CEO name, title, message and portrait have not been provided yet.
   Replace the bracketed placeholders in src/content/ar.ts and en.ts (ceo.*)
   and drop the portrait at /public/images/ceo.jpg. */
export function CeoMessage() {
  const { dict } = useI18n();
  const c = dict.ceo;

  return (
    <Section id="ceo" tone="navy" className="scroll-mt-36" labelledBy="ceo-title">
      <FlowingVeins tone="navy" />
      <BrandPattern tone="dark" fade="end" />
      <Container className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div aria-hidden="true" className="absolute -start-4 top-4 h-full w-full rounded-[28px] border border-gold sm:-start-6 sm:top-6" />
          <ImageSlot
            src="/images/ceo/placeholder-ceo-portrait.webp"
            alt={c.imageAlt}
            tone="navy"
            sizes="(min-width: 1024px) 35vw, 80vw"
            className="relative aspect-[4/5] w-full rounded-[28px]"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <SectionTitle id="ceo-title" title={c.title} tone="dark" />
          <figure className="mt-10">
            <span aria-hidden="true" className="display block h-16 text-8xl leading-none text-gold">
              &ldquo;
            </span>
            <blockquote className="display mt-2 text-2xl font-normal leading-relaxed text-white sm:text-3xl">
              {c.message}
            </blockquote>
            <figcaption className="mt-8 border-s-2 border-gold ps-5">
              <span className="display block text-xl text-white">{c.name}</span>
              <span className="mt-1 block text-sm font-medium text-gold">{c.role}</span>
            </figcaption>
          </figure>
        </Reveal>
      </Container>
    </Section>
  );
}
