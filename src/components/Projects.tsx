"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { localePath, useI18n } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import { projects } from "@/data/projects";
import { ArrowIcon } from "./Icons";
import { ImageSlot } from "./ImageSlot";
import { Reveal } from "./Reveal";
import { Container, Section } from "./Section";
import { SectionTitle } from "./SectionTitle";

export function Projects() {
  const { dict, lang } = useI18n();
  const p = dict.projects;
  const [selectedCategory, setSelectedCategory] = useState<string>("__all__");

  // Unique categories found in projects.ts for the current language
  const categories = useMemo(() => {
    const seen = new Set<string>();
    const list: string[] = [];
    for (const proj of projects) {
      const cat = proj.type[lang];
      if (!seen.has(cat)) {
        seen.add(cat);
        list.push(cat);
      }
    }
    return list;
  }, [lang]);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "__all__") return projects;
    return projects.filter((proj) => proj.type[lang] === selectedCategory);
  }, [selectedCategory, lang]);

  return (
    <Section id="projects" tone="cream" labelledBy="projects-heading">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionTitle id="projects-heading" eyebrow={p.title} title={p.heading} />
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-base leading-relaxed text-navy/80 sm:text-[17px]">{p.text}</p>
          </Reveal>
        </div>

        {/* Category filter chips */}
        <Reveal delay={0.1}>
          <div
            role="group"
            aria-label={p.filterLabel}
            className="mt-12 flex flex-wrap items-center gap-2.5"
          >
            <button
              type="button"
              aria-pressed={selectedCategory === "__all__"}
              onClick={() => setSelectedCategory("__all__")}
              className={cn(
                "rounded-full px-5 py-2.5 text-sm font-semibold transition-all",
                selectedCategory === "__all__"
                  ? "bg-navy text-gold shadow-card"
                  : "border border-navy/20 bg-white text-navy/80 hover:border-gold hover:text-navy",
              )}
            >
              {p.allCategories}
            </button>
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    "rounded-full px-5 py-2.5 text-sm font-semibold transition-all",
                    active
                      ? "bg-navy text-gold shadow-card"
                      : "border border-navy/20 bg-white text-navy/80 hover:border-gold hover:text-navy",
                  )}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Responsive grid of project cards */}
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, i) => (
            <li key={project.id}>
              <Reveal delay={(i % 3) * 0.06} className="h-full">
                <Link
                  href={localePath(lang, `/projects/${project.slug}`)}
                  className="lift group flex h-full flex-col overflow-hidden rounded-[24px] border border-stone-gray bg-white shadow-card"
                >
                  <ImageSlot
                    src={project.image}
                    alt={project.alt[lang]}
                    tone={project.tone}
                    overlay
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="aspect-[4/3] w-full transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <span aria-hidden="true" className="mb-3 block h-0.5 w-12 bg-gold" />
                      <h2 className="display text-xl text-navy">{project.name[lang]}</h2>
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
