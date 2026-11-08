"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { BrandPattern } from "./BrandPattern";
import { Container, Section } from "./Section";

/** Counts up once, when scrolled into view. Shows the final value with reduced motion. */
function CountUp({ value, prefix = "" }: { value: number; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, value, {
      duration: 2.2,
      ease: "easeOut",
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, value]);

  const shown = reduce ? value : n;
  return (
    <span ref={ref} dir="ltr">
      <span className="sr-only">
        {prefix}
        {value.toLocaleString("en-US")}
      </span>
      <span aria-hidden="true">
        {prefix}
        {shown.toLocaleString("en-US")}
      </span>
    </span>
  );
}

export function Stats() {
  const { dict } = useI18n();
  const s = dict.stats;

  return (
    <Section id="stats" tone="navy" className="!py-16 sm:!py-20" labelledBy="stats-title">
      <BrandPattern tone="dark" fade="start" />
      <Container>
        <h2 id="stats-title" className="sr-only">
          {s.label}
        </h2>
        <ul className="grid gap-10 sm:grid-cols-2 sm:gap-0 sm:[&>li+li]:border-s sm:[&>li+li]:border-gold/60">
          {s.items.map((item) => (
            <li key={item.label} className="flex flex-col items-center px-4 text-center">
              <span className="display text-6xl text-white sm:text-7xl lg:text-8xl">
                <CountUp value={item.value} prefix={item.prefix} />
              </span>
              <span aria-hidden="true" className="my-4 block h-0.5 w-[120px] bg-gold" />
              <span className="display text-xl text-gold sm:text-2xl">{item.label}</span>
              <span
                className="mt-1 text-sm text-white/80"
                lang={/[A-Za-z]/.test(item.altLabel) ? "en" : "ar"}
              >
                {item.altLabel}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
