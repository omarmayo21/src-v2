"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import { Container, Section } from "./Section";
import { SectionTitle } from "./SectionTitle";
import { FlowingVeins } from "./FlowingVeins";

export function Story() {
  const { dict } = useI18n();
  const s = dict.story;

  return (
    <Section id="story" className="scroll-mt-36" labelledBy="story-title">
      <FlowingVeins tone="cream" className="opacity-70" />
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <SectionTitle id="story-title" title={s.title} />
          </Reveal>
        </div>

        <ol className="relative border-s border-gold/70">
          {s.steps.map((step, i) => (
            <li key={step.n} className="relative ps-8 sm:ps-12 [&:not(:last-child)]:pb-12 sm:[&:not(:last-child)]:pb-14">
              <span
                aria-hidden="true"
                className="absolute -start-[7px] top-3 h-3.5 w-3.5 rounded-full border-2 border-gold bg-white"
              />
              <Reveal delay={i * 0.05}>
                <span className="display block text-5xl text-gold sm:text-6xl" aria-hidden="true">
                  {step.n}
                </span>
                <h3 className="display mt-2 text-2xl text-navy sm:text-3xl">{step.title}</h3>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy/80 sm:text-[17px]">{step.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
