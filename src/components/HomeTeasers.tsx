"use client";

import Link from "next/link";
import { useState } from "react";
import { localePath, useI18n } from "@/lib/i18n";
import { projects } from "@/data/projects";
import { clients, type Client } from "@/data/clients";
import { BrandPattern } from "./BrandPattern";
import { ButtonLink } from "./Button";
import { FlowingVeins } from "./FlowingVeins";
import { ArrowIcon, NamedIcon } from "./Icons";
import { ImageSlot } from "./ImageSlot";
import { Reveal } from "./Reveal";
import { Container, Section } from "./Section";
import { SectionTitle } from "./SectionTitle";

/** 1. Short "Our Story" teaser on Home -> /about */
export function StoryTeaser() {
  const { dict, lang } = useI18n();
  const s = dict.story;
  const t = dict.home.storyTeaser;

  return (
    <Section id="story-teaser" labelledBy="story-teaser-title">
      <FlowingVeins tone="cream" className="opacity-70" />
      <Container className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <SectionTitle id="story-teaser-title" eyebrow={t.eyebrow} title={s.title} />
          <div className="mt-8">
            <ButtonLink href={localePath(lang, "/about")} variant="primary">
              {t.readMore}
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-[24px] border border-stone-gray bg-white p-8 shadow-card sm:p-10">
            <span className="display text-4xl text-gold" aria-hidden="true">
              {s.steps[0].n}
            </span>
            <h3 className="display mt-2 text-2xl text-navy">{s.steps[0].title}</h3>
            <span aria-hidden="true" className="my-4 block h-0.5 w-12 bg-gold" />
            <p className="text-base leading-relaxed text-navy/80 sm:text-[17px]">{s.steps[0].text}</p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

/** 2. Three highlights from "Why SRFEC" on Home -> /why-srfec */
export function WhyTeaser() {
  const { dict, lang } = useI18n();
  const w = dict.why;
  const t = dict.home.whyTeaser;
  const highlights = w.items.slice(0, 3);

  return (
    <Section id="why-teaser" tone="cream" labelledBy="why-teaser-title">
      <FlowingVeins tone="white" />
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal>
            <SectionTitle
              id="why-teaser-title"
              eyebrow={t.eyebrow}
              title={w.title}
              description={<p>{w.intro}</p>}
            />
          </Reveal>
          <Reveal delay={0.08} className="shrink-0">
            <ButtonLink href={localePath(lang, "/why-srfec")} variant="outline">
              {t.moreCta}
            </ButtonLink>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {highlights.map((item, i) => (
            <li key={item.n}>
              <Reveal delay={i * 0.07} className="h-full">
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
                  <p
                    className="mt-1 text-sm font-medium text-navy/70"
                    lang={/[A-Za-z]/.test(item.altTitle) ? "en" : "ar"}
                  >
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

/** 3. Factory teaser (image + short paragraph) linking to /factory */
export function FactoryTeaser() {
  const { dict, lang } = useI18n();
  const f = dict.factory;
  const t = dict.home.factoryTeaser;

  return (
    <Section id="factory-teaser" tone="navy" labelledBy="factory-teaser-title">
      <FlowingVeins tone="navy" />
      <BrandPattern tone="dark" fade="start" className="opacity-60" />
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <SectionTitle id="factory-teaser-title" eyebrow={t.eyebrow} title={f.title} tone="dark" />
          <h3 className="display mt-8 text-2xl text-white sm:text-3xl">{f.heading}</h3>
          <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">{f.paragraphs[0]}</p>
          <ul className="mt-7 flex flex-wrap gap-3">
            {f.chips.map((c) => (
              <li
                key={c.label}
                className="inline-flex items-center gap-2.5 rounded-full border border-gold px-5 py-2.5 text-sm font-semibold text-white"
              >
                <NamedIcon name={c.icon} width={20} height={20} className="text-gold" />
                {c.label}
              </li>
            ))}
          </ul>
          <div className="mt-9">
            <ButtonLink href={localePath(lang, "/factory")} variant="gold">
              {t.moreCta}
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="relative">
          <div
            aria-hidden="true"
            className="absolute -end-4 top-4 h-full w-full rounded-[28px] border border-gold sm:-end-6 sm:top-6"
          />
          <ImageSlot
            src="/images/factory/placeholder-factory-cnc-cutting.webp"
            alt={f.gallery.cutting}
            tone="navy"
            sizes="(min-width: 1024px) 45vw, 100vw"
            overlay
            className="relative aspect-[4/3] w-full rounded-[28px] shadow-lift"
          />
        </Reveal>
      </Container>
    </Section>
  );
}

/** 4. Featured projects (3 cards) linking to /projects */
export function FeaturedProjectsTeaser() {
  const { dict, lang } = useI18n();
  const p = dict.projects;
  const t = dict.home.projectsTeaser;
  const featured = projects.slice(0, 3);

  return (
    <Section id="projects-teaser" tone="cream" labelledBy="projects-teaser-title">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal>
            <SectionTitle id="projects-teaser-title" eyebrow={t.eyebrow} title={p.title} />
            <h3 className="display mt-6 text-2xl text-navy sm:text-3xl">{p.heading}</h3>
          </Reveal>
          <Reveal delay={0.08} className="shrink-0">
            <ButtonLink href={localePath(lang, "/projects")} variant="primary">
              {t.moreCta}
            </ButtonLink>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((project, i) => (
            <li key={project.id}>
              <Reveal delay={i * 0.07} className="h-full">
                <Link
                  href={localePath(lang, `/projects/${project.slug}`)}
                  className="lift group flex h-full flex-col overflow-hidden rounded-[24px] border border-stone-gray bg-white shadow-card"
                >
                  <ImageSlot
                    src={project.image}
                    alt={project.alt[lang]}
                    tone={project.tone}
                    overlay
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="aspect-[4/3] w-full transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <span aria-hidden="true" className="mb-3 block h-0.5 w-12 bg-gold" />
                      <h4 className="display text-xl text-navy">{project.name[lang]}</h4>
                      <p className="mt-1.5 text-sm text-navy/75">
                        {project.type[lang]} · {project.location[lang]}
                      </p>
                    </div>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy group-hover:text-gold">
                      <span>{p.view}</span>
                      <ArrowIcon
                        width={16}
                        height={16}
                        className="transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

function StripLogo({ client }: { client: Client }) {
  const { dict, lang } = useI18n();
  const [missing, setMissing] = useState(false);
  const name = client.name[lang];

  return (
    <div className="group flex h-24 items-center justify-center rounded-[20px] border border-stone-gray bg-white p-4 transition-all duration-300 hover:border-gold hover:shadow-card">
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

/** 5. Clients logo strip linking to /clients */
export function ClientsStripTeaser() {
  const { dict, lang } = useI18n();
  const t = dict.home.clientsTeaser;
  const subset = clients.slice(0, 6);

  return (
    <Section id="clients-teaser" labelledBy="clients-teaser-title">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <SectionTitle id="clients-teaser-title" eyebrow={t.eyebrow} title={dict.clients.title} />
          </Reveal>
          <Reveal delay={0.08} className="shrink-0">
            <ButtonLink href={localePath(lang, "/clients")} variant="outline">
              {t.moreCta}
            </ButtonLink>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {subset.map((c) => (
              <li key={c.id}>
                <Link href={localePath(lang, "/clients")} className="block" aria-label={c.name[lang]}>
                  <StripLogo client={c} />
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}

