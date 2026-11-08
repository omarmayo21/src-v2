import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  id: string;
  tone?: "white" | "cream" | "navy";
  /** id of the heading inside the section (for aria-labelledby). */
  labelledBy?: string;
  className?: string;
  children: ReactNode;
};

const tones = {
  white: "bg-white text-navy",
  cream: "bg-cream text-navy",
  navy: "bg-navy text-white",
};

/** Section wrapper: relative + clipped so decorative layers (pattern, veins) stay inside. */
export function Section({ id, tone = "white", labelledBy, className, children }: Props) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("relative overflow-hidden py-20 sm:py-24 lg:py-28", tones[tone], className)}
    >
      {children}
    </section>
  );
}

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12", className)}>{children}</div>;
}
