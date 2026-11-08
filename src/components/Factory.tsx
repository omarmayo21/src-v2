"use client";

import { useI18n } from "@/lib/i18n";
import { BrandPattern } from "./BrandPattern";
import { FlowingVeins } from "./FlowingVeins";
import { NamedIcon } from "./Icons";
import { ImageSlot } from "./ImageSlot";
import { Reveal } from "./Reveal";
import { Container, Section } from "./Section";
import { SectionTitle } from "./SectionTitle";

export function Factory() {
  const { dict } = useI18n();
  const f = dict.factory;

  return (
    <>
      {/* Intro heading + 3 factory paragraphs + image mosaic */}
      <Section id="factory-intro" labelledBy="factory-heading">
        <FlowingVeins tone="cream" className="opacity-70" />
        <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionTitle id="factory-heading" eyebrow={f.title} title={f.heading} />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-navy/80 sm:text-[17px]">
              {f.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <ul className="mt-8 flex flex-wrap gap-3">
              {f.chips.map((c) => (
                <li
                  key={c.label}
                  className="inline-flex items-center gap-2.5 rounded-full border border-gold bg-cream px-5 py-2.5 text-sm font-semibold text-navy"
                >
                  <NamedIcon name={c.icon} width={20} height={20} className="text-gold" />
                  {c.label}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Image mosaic/gallery (placeholders) */}
          <Reveal delay={0.12}>
            <div className="grid grid-cols-2 gap-4">
              <ImageSlot
                src="/images/factory/placeholder-factory-cnc-cutting.webp"
                alt={f.gallery.cutting}
                tone="navy"
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="row-span-2 min-h-[320px] rounded-[24px] shadow-card sm:min-h-[460px]"
              />
              <ImageSlot
                src="/images/factory/placeholder-factory-carving-shaping.webp"
                alt={f.gallery.carving}
                tone="warm"
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="aspect-square rounded-[24px] shadow-card"
              />
              <ImageSlot
                src="/images/factory/placeholder-factory-polishing-line.webp"
                alt={f.gallery.slabs}
                tone="light"
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="aspect-square rounded-[24px] shadow-card"
              />
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Two capability blocks: Cutting & Processing, Carving & Shaping */}
      <Section id="factory-capabilities" tone="cream" labelledBy="capabilities-title">
        <FlowingVeins tone="white" />
        <BrandPattern tone="light" fade="end" className="opacity-50" />
        <Container>
          <Reveal>
            <SectionTitle id="capabilities-title" title={f.capabilitiesTitle} />
          </Reveal>

          <ul className="mt-12 grid gap-8 lg:grid-cols-2">
            {f.capabilities.map((cap, i) => (
              <li key={cap.n}>
                <Reveal delay={i * 0.1} className="h-full">
                  <article className="lift flex h-full flex-col overflow-hidden rounded-[24px] border border-stone-gray bg-white shadow-card">
                    <ImageSlot
                      src={cap.image}
                      alt={cap.imageAlt}
                      tone={i === 0 ? "navy" : "warm"}
                      overlay
                      sizes="(min-width: 1024px) 45vw, 100vw"
                      className="aspect-[16/9] w-full"
                    />
                    <div className="flex flex-1 flex-col p-8 sm:p-10">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-gold">
                          <NamedIcon name={cap.icon} width={28} height={28} />
                        </span>
                        <span className="display text-4xl text-gold" aria-hidden="true">
                          {cap.n}
                        </span>
                      </div>
                      <h3 className="display mt-6 text-2xl text-navy sm:text-3xl">{cap.title}</h3>
                      <p
                        className="mt-1 text-sm font-medium text-navy/70"
                        lang={/[A-Za-z]/.test(cap.altTitle) ? "en" : "ar"}
                      >
                        {cap.altTitle}
                      </p>
                      <span aria-hidden="true" className="my-4 block h-0.5 w-12 bg-gold" />
                      <p className="text-base leading-relaxed text-navy/80">{cap.text}</p>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
