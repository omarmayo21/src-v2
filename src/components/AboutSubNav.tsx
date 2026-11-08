"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import { Container } from "./Section";

/**
 * Sticky in-page sub-navigation on /about (Story / CEO / Vision / Mission / Values).
 * Scrolls smoothly to each section and highlights the active one on scroll.
 */
export function AboutSubNav() {
  const { dict } = useI18n();
  const items = dict.aboutPage.subNav;
  const [active, setActive] = useState<string>(items[0]?.id ?? "story");

  useEffect(() => {
    const elements = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => !!el);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  const scrollToSection = (id: string) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="sticky top-20 z-40 border-b border-stone-gray bg-cream/90 backdrop-blur-md">
      <Container className="py-3">
        <nav aria-label={dict.a11y.subNav} className="overflow-x-auto">
          <ul className="flex min-w-max items-center gap-2 sm:gap-3">
            {items.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                    className={cn(
                      "inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold transition-all sm:text-sm",
                      isActive
                        ? "bg-navy text-gold shadow-card"
                        : "border border-navy/15 bg-white text-navy/80 hover:border-gold hover:text-navy",
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </Container>
    </div>
  );
}

