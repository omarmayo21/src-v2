"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { localePath, useI18n } from "@/lib/i18n";
import type { Project, ProjectGalleryItem } from "@/data/projects";
import { BrandPattern } from "./BrandPattern";
import { ChevronIcon, CloseIcon } from "./Icons";
import { ImageSlot } from "./ImageSlot";
import { Reveal } from "./Reveal";
import { Container, Section } from "./Section";
import { SectionTitle } from "./SectionTitle";

type Props = {
  project: Project;
  prevProject: Project;
  nextProject: Project;
};

export function ProjectDetail({ project, prevProject, nextProject }: Props) {
  const { dict, lang } = useI18n();
  const p = dict.projects;
  const d = p.detail;

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);
  const gallery = project.gallery;

  const close = useCallback(() => {
    setOpenIndex(null);
    lastTrigger.current?.focus();
  }, []);

  const step = useCallback(
    (delta: 1 | -1) => {
      setOpenIndex((i) => (i === null ? i : (i + delta + gallery.length) % gallery.length));
    },
    [gallery.length],
  );

  const infoItems = [
    { label: d.type, value: project.type[lang] },
    { label: d.location, value: project.location[lang] },
    { label: d.year, value: project.year[lang] },
    { label: d.stoneType, value: project.stoneType[lang] },
  ];

  return (
    <>
      <Section id="project-detail" tone="cream" labelledBy="project-overview-title">
        <Container>
          {/* Hero image */}
          <Reveal>
            <div className="overflow-hidden rounded-[28px] border border-stone-gray bg-white shadow-lift">
              <ImageSlot
                src={project.image}
                alt={project.alt[lang]}
                tone={project.tone}
                priority
                sizes="100vw"
                className="aspect-[16/9] w-full max-h-[560px]"
              />
            </div>
          </Reveal>

          {/* Info sidebar + Description */}
          <div className="mt-12 grid gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:gap-14">
            <Reveal>
              <aside
                aria-label={d.infoTitle}
                className="relative overflow-hidden rounded-[24px] bg-navy p-8 text-white shadow-card sm:p-10"
              >
                <BrandPattern tone="dark" fade="end" />
                <div className="relative">
                  <h2 className="display text-2xl text-white">{d.infoTitle}</h2>
                  <span aria-hidden="true" className="mt-4 block h-0.5 w-12 bg-gold" />
                  <dl className="mt-8 space-y-6">
                    {infoItems.map((item) => (
                      <div key={item.label} className="border-b border-white/15 pb-5 last:border-0 last:pb-0">
                        <dt className="text-xs font-semibold uppercase text-gold">{item.label}</dt>
                        <dd className="mt-1.5 text-base font-medium text-white">{item.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </aside>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-[24px] border border-stone-gray bg-white p-8 shadow-card sm:p-10">
                <SectionTitle id="project-overview-title" title={d.descriptionTitle} as="h2" />
                <p className="mt-6 text-base leading-relaxed text-navy/85 sm:text-lg">
                  {project.description[lang]}
                </p>
                <p className="mt-6 rounded-2xl border border-gold/50 bg-cream px-5 py-3.5 text-sm font-medium text-navy/80">
                  {d.placeholderNotice}
                </p>
              </div>
            </Reveal>
          </div>

          {/* Image gallery with lightbox */}
          <div className="mt-16 lg:mt-20">
            <Reveal>
              <SectionTitle id="project-gallery-title" title={d.galleryTitle} as="h2" />
            </Reveal>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((item, idx) => (
                <li key={`${item.src}-${idx}`}>
                  <Reveal delay={idx * 0.07}>
                    <button
                      type="button"
                      aria-label={`${d.openImage}: ${item.alt[lang]}`}
                      onClick={(e) => {
                        lastTrigger.current = e.currentTarget;
                        setOpenIndex(idx);
                      }}
                      className="lift group relative block w-full overflow-hidden rounded-[24px] border border-stone-gray bg-white text-start shadow-card"
                    >
                      <ImageSlot
                        src={item.src}
                        alt={item.alt[lang]}
                        tone={item.tone}
                        overlay
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="aspect-[4/3] w-full transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                      <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-navy/50 p-5 opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 group-focus-visible:opacity-100">
                        <span aria-hidden="true" className="mb-2 block h-0.5 w-10 bg-gold" />
                        <span className="text-sm font-medium text-white">{item.alt[lang]}</span>
                      </div>
                    </button>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>

          {/* Next / Previous project links */}
          <Reveal delay={0.1}>
            <nav
              aria-label={p.title}
              className="mt-16 grid gap-4 border-t border-stone-gray pt-10 sm:grid-cols-2"
            >
              <Link
                href={localePath(lang, `/projects/${prevProject.slug}`)}
                className="lift group flex items-center gap-4 rounded-[20px] border border-stone-gray bg-white p-6 shadow-card"
              >
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-navy/20 text-navy transition-colors group-hover:border-gold group-hover:bg-gold">
                  <ChevronIcon flip />
                </span>
                <div>
                  <span className="block text-xs font-semibold text-navy/65">{d.prevProject}</span>
                  <span className="display mt-1 block text-lg text-navy">{prevProject.name[lang]}</span>
                </div>
              </Link>

              <Link
                href={localePath(lang, `/projects/${nextProject.slug}`)}
                className="lift group flex items-center justify-between gap-4 rounded-[20px] border border-stone-gray bg-white p-6 text-end shadow-card"
              >
                <div className="ms-auto">
                  <span className="block text-xs font-semibold text-navy/65">{d.nextProject}</span>
                  <span className="display mt-1 block text-lg text-navy">{nextProject.name[lang]}</span>
                </div>
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-navy/20 text-navy transition-colors group-hover:border-gold group-hover:bg-gold">
                  <ChevronIcon />
                </span>
              </Link>
            </nav>
          </Reveal>
        </Container>
      </Section>

      {openIndex !== null && (
        <GalleryLightbox
          project={project}
          item={gallery[openIndex]}
          index={openIndex}
          total={gallery.length}
          onClose={close}
          onStep={step}
        />
      )}
    </>
  );
}

function GalleryLightbox({
  project,
  item,
  index,
  total,
  onClose,
  onStep,
}: {
  project: Project;
  item: ProjectGalleryItem;
  index: number;
  total: number;
  onClose: () => void;
  onStep: (d: 1 | -1) => void;
}) {
  const { dict, lang, dir } = useI18n();
  const p = dict.projects;
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onStep(dir === "rtl" ? -1 : 1);
      if (e.key === "ArrowLeft") onStep(dir === "rtl" ? 1 : -1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, onStep, dir]);

  const navBtn =
    "inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-gold hover:text-navy";

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-navy/95 p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={p.lightbox}
    >
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        aria-label={p.close}
        tabIndex={-1}
        onClick={onClose}
      />
      <div className="relative flex max-h-full w-full max-w-5xl flex-col gap-4">
        <div className="flex items-center justify-between text-white">
          <p className="text-sm text-white/80" dir="ltr">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </p>
          <button ref={closeRef} type="button" className={navBtn} aria-label={p.close} onClick={onClose}>
            <CloseIcon />
          </button>
        </div>

        <ImageSlot
          src={item.src}
          alt={item.alt[lang]}
          tone={item.tone}
          fit="cover"
          sizes="90vw"
          className="aspect-[4/3] max-h-[70vh] w-full rounded-[24px]"
        />

        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="display text-xl text-white sm:text-2xl">{project.name[lang]}</p>
            <p className="text-sm text-gold">{item.alt[lang]}</p>
          </div>
          <div className="flex gap-3">
            <button type="button" className={navBtn} aria-label={p.prev} onClick={() => onStep(-1)}>
              <ChevronIcon flip />
            </button>
            <button type="button" className={navBtn} aria-label={p.next} onClick={() => onStep(1)}>
              <ChevronIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

