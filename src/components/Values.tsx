"use client";

import { useI18n } from "@/lib/i18n";
import { NamedIcon } from "./Icons";
import { Reveal } from "./Reveal";
import { Container, Section } from "./Section";
import { SectionTitle } from "./SectionTitle";
import { BrandPattern } from "./BrandPattern";

export function Values() {
  const { dict } = useI18n();
  const v = dict.values;

  return (
    <Section id="values" className="scroll-mt-36" labelledBy="values-title">
      <BrandPattern tone="light" fade="end" className="opacity-60" />
      <Container>
        <Reveal>
          <SectionTitle id="values-title" title={v.title} />
        </Reveal>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {v.items.map((item, i) => (
            <li key={item.n}>
              <Reveal delay={i * 0.06} className="h-full">
                <article className="lift flex h-full flex-col rounded-[24px] border border-stone-gray bg-white p-7 shadow-card">
                  <div className="flex items-start justify-between">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-gold">
                      <NamedIcon name={item.icon} width={28} height={28} />
                    </span>
                    <span className="display text-3xl text-gold" aria-hidden="true">
                      {item.n}
                    </span>
                  </div>
                  <h3 className="display mt-6 text-2xl text-navy">{item.title}</h3>
                  <p className="mt-1 text-sm font-medium text-navy/70" lang={item.altTitle.match(/[A-Za-z]/) ? "en" : "ar"}>
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
