"use client";

import { useI18n } from "@/lib/i18n";
import { BrandPattern } from "./BrandPattern";
import { FlowingVeins } from "./FlowingVeins";
import { Reveal } from "./Reveal";
import { Container, Section } from "./Section";
import { SectionTitle } from "./SectionTitle";

export function VisionMission() {
  const { dict } = useI18n();
  const v = dict.vision;
  const m = dict.mission;

  return (
    <Section id="vision-mission" tone="cream" labelledBy="vision-title">
      <FlowingVeins tone="white" />
      <Container>
        {/* Vision: navy panel */}
        <div id="vision" className="scroll-mt-36">
          <Reveal>
            <div className="relative overflow-hidden rounded-[28px] bg-navy p-7 text-white shadow-lift sm:p-12 lg:p-16">
              <BrandPattern tone="dark" fade="end" />
              <div className="relative">
                <SectionTitle id="vision-title" title={v.title} tone="dark" />
                <p className="display mt-8 max-w-4xl text-xl font-normal leading-relaxed text-white sm:text-2xl lg:text-[1.7rem]">
                  {v.statement}
                </p>
                <ul className="mt-12 grid gap-6 md:grid-cols-3">
                  {v.pillars.map((p) => (
                    <li key={p.n} className="rounded-[20px] border border-white/15 bg-white/5 p-6">
                      <span className="display text-4xl text-gold" aria-hidden="true">
                        {p.n}
                      </span>
                      <h3 className="display mt-3 text-xl text-white">{p.title}</h3>
                      <p className="mt-3 text-[15px] leading-relaxed text-white/80">{p.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Mission: two cards */}
        <div id="mission" className="mt-20 scroll-mt-36 lg:mt-24">
          <Reveal>
            <SectionTitle id="mission-title" title={m.title} />
          </Reveal>
          <ul className="mt-10 grid gap-6 lg:grid-cols-2">
            {m.cards.map((c, i) => (
              <li key={c.n}>
                <Reveal delay={i * 0.08} className="h-full">
                  <article className="lift h-full rounded-[24px] border border-stone-gray bg-white p-8 shadow-card sm:p-10">
                    <span className="display text-5xl text-gold" aria-hidden="true">
                      {c.n}
                    </span>
                    <h3 className="display mt-3 text-2xl text-navy sm:text-3xl">{c.title}</h3>
                    <span aria-hidden="true" className="mt-4 block h-0.5 w-12 bg-gold" />
                    <p className="mt-5 text-base leading-relaxed text-navy/80">{c.text}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
