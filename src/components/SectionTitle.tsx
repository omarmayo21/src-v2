import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  tone?: "light" | "dark";
  align?: "start" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
};

/** Section title followed by the brand's signature thin gold line (~120px). */
export function SectionTitle({
  id,
  eyebrow,
  title,
  description,
  tone = "light",
  align = "start",
  as: Tag = "h2",
  className,
}: Props) {
  const dark = tone === "dark";
  const center = align === "center";
  return (
    <div className={cn(center && "mx-auto text-center", "max-w-3xl", className)}>
      {eyebrow && <p className={cn("eyebrow mb-4", dark ? "text-gold" : "text-navy/70")}>{eyebrow}</p>}
      <Tag id={id} className={cn("display text-3xl sm:text-4xl lg:text-5xl", dark ? "text-white" : "text-navy")}>
        {title}
      </Tag>
      <span aria-hidden="true" className={cn("mt-5 block h-0.5 w-[120px] bg-gold", center && "mx-auto")} />
      {description && (
        <div className={cn("mt-6 text-base leading-relaxed sm:text-lg", dark ? "text-white/80" : "text-navy/80")}>
          {description}
        </div>
      )}
    </div>
  );
}
