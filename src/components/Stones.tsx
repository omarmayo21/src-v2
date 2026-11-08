"use client";

import { useI18n } from "@/lib/i18n";
import { ImageSlot } from "./ImageSlot";
import { Reveal } from "./Reveal";
import { Container, Section } from "./Section";
import { SectionTitle } from "./SectionTitle";

/* OPTIONAL SECTION: "Our Stones". Hide it with `showStones: false` in
   src/data/site-config.ts, or delete this file and its use in src/app/page.tsx.
   Photos: /public/images/stones/<id>.jpg (marble, granite, travertine, onyx, limestone). */
const tones = ["light", "warm", "navy", "light", "warm"] as const;

export function Stones() {
  const { dict } = useI18n();
  const s = dict.stones;

  return (
    <Section id="stones" labelledBy="stones-title">
      <Container>
        <Reveal>
          <SectionTitle id="stones-title" title={s.title} description={<p>{s.intro}</p>} />
        </Reveal>
        <ul className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
          {s.items.map((item, i) => (
            <li key={item.id} className={i === 4 ? "col-span-2 md:col-span-1" : undefined}>
              <Reveal delay={i * 0.05}>
                <article className="lift group overflow-hidden rounded-[24px] shadow-card">
                  <ImageSlot
                    src={`/images/stones/placeholder-stone-${item.id}.webp`}
                    alt={item.name}
                    tone={tones[i % tones.length]}
                    overlay
                    sizes="(min-width: 1024px) 20vw, 50vw"
                    className="aspect-[4/5] w-full"
                  >
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <h3 className="display text-2xl text-white">{item.name}</h3>
                      <p className="mt-0.5 text-sm text-white/85" lang={/[A-Za-z]/.test(item.altName) ? "en" : "ar"}>
                        {item.altName}
                      </p>
                      <span aria-hidden="true" className="mt-3 block h-0.5 w-10 bg-gold transition-all duration-300 group-hover:w-20" />
                    </div>
                  </ImageSlot>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
