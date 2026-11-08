"use client";

import { useI18n } from "@/lib/i18n";
import { FlowingVeins } from "./FlowingVeins";
import { NamedIcon } from "./Icons";
import { Reveal } from "./Reveal";
import { Container, Section } from "./Section";
import { SectionTitle } from "./SectionTitle";

export function WhySrfec() {
  const { dict } = useI18n();
  const w = dict.why;

  return (
    <Section id="why" tone="cream" labelledBy="why-title">
      <FlowingVeins tone="white" />
      <Container>
        <Reveal>
          <SectionTitle id="why-title" title={w.title} description={<p>{w.intro}</p>} />
        </Reveal>
        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {w.items.map((item, i) => (
            <li key={item.n}>
              <Reveal delay={(i % 3) * 0.07} className="h-full">
                <article className="lift h-full rounded-[24px] border border-stone-gray bg-white p-8 shadow-card">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-gold">
                      <NamedIcon name={item.icon} width={28} height={28} />
                    </span>
                    <span className="display text-4xl text-gold" aria-hidden="true">
                      {item.n}
                    </span>
                  </div>
                  <h3 className="display mt-6 text-2xl text-navy">{item.title}</h3>
                  <p className="mt-1 text-sm font-medium text-navy/70" lang={/[A-Za-z]/.test(item.altTitle) ? "en" : "ar"}>
                    {item.altTitle}
                  </p>
                  <span aria-hidden="true" className="my-4 block h-0.5 w-12 bg-gold" />
                  <p className="text-[15px] leading-relaxed text-navy/80">{item.text}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
