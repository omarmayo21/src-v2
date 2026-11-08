"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { clients, type Client } from "@/data/clients";
import { Reveal } from "./Reveal";
import { Container, Section } from "./Section";
import { SectionTitle } from "./SectionTitle";

function ClientLogo({ client }: { client: Client }) {
  const { dict, lang } = useI18n();
  const [missing, setMissing] = useState(false);
  const name = client.name[lang];

  return (
    <div className="group flex h-24 w-[calc(50%-0.5rem)] items-center justify-center rounded-[20px] border border-stone-gray bg-white p-4 transition-all duration-300 hover:border-gold hover:shadow-card sm:w-48 lg:w-52">
      {missing ? (
        <span className="text-center text-xs font-medium text-navy/60 transition-colors group-hover:text-navy">
          {dict.clients.logoPlaceholder}
          <span className="mt-1 block">{name}</span>
        </span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element -- client-provided logos of unknown size
        <img
          ref={(el) => {
            if (el && el.complete && el.naturalWidth === 0) setMissing(true);
          }}
          src={client.logo}
          alt={name}
          loading="lazy"
          className="max-h-full max-w-full object-contain opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
          onError={() => setMissing(true)}
        />
      )}
    </div>
  );
}

export function Clients() {
  const { dict } = useI18n();

  return (
    <Section id="clients" labelledBy="clients-title">
      <Container>
        <Reveal>
          <SectionTitle
            id="clients-title"
            title={dict.clients.title}
            description={<p>{dict.clients.intro}</p>}
            align="center"
          />
        </Reveal>
        <Reveal delay={0.08}>
          {/* Flex-wrap + centered: handles anywhere from 6 to 20 logos gracefully */}
          <ul className="mt-12 flex flex-wrap justify-center gap-4">
            {clients.map((c) => (
              <li key={c.id} className="contents">
                <ClientLogo client={c} />
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}
