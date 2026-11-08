"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/cn";

type Props = {
  /** "cream" for white sections, "white" for cream sections, "navy" (white veins) for navy sections. */
  tone?: "cream" | "white" | "navy";
  className?: string;
};

const fills = {
  cream: { a: "#F5F0E6", b: "#F5F0E6", oa: 0.9, ob: 0.6 },
  white: { a: "#FFFFFF", b: "#FFFFFF", oa: 0.8, ob: 0.5 },
  navy: { a: "#FFFFFF", b: "#C9A96A", oa: 0.045, ob: 0.07 },
};

/** Large soft "flowing vein" shapes with a very slow parallax drift. Decorative only. */
export function FlowingVeins({ tone = "cream", className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yA = useTransform(scrollYProgress, [0, 1], [-28, 28]);
  const yB = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const f = fills[tone];

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden rtl:-scale-x-100", className)}
    >
      <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
        <motion.path
          style={reduce ? undefined : { y: yA }}
          d="M-120 520 C 140 340 340 700 620 500 S 1020 240 1340 400 L1340 560 C 1040 420 820 720 600 660 S 180 520 -120 700 Z"
          fill={f.a}
          fillOpacity={f.oa}
        />
        <motion.path
          style={reduce ? undefined : { y: yB }}
          d="M-120 160 C 200 60 360 300 640 220 S 980 20 1340 120 L1340 190 C 1000 100 820 330 620 290 S 220 120 -120 230 Z"
          fill={f.b}
          fillOpacity={f.ob}
        />
      </svg>
    </div>
  );
}
