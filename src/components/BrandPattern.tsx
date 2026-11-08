import { cn } from "@/lib/cn";

type Props = {
  /** "light" = navy-tinted pattern for white/cream backgrounds; "dark" = white pattern for navy backgrounds. */
  tone?: "light" | "dark";
  /** Side where the pattern is fully visible. It fades out towards the opposite side (mirrors in RTL). */
  fade?: "start" | "end";
  /** Tile size in px. */
  size?: number;
  className?: string;
};

/**
 * Brand pattern: the symbol tile repeated at very low opacity with a horizontal fade.
 * Place inside a `relative overflow-hidden` parent. Decorative only.
 */
export function BrandPattern({ tone = "light", fade = "start", size = 120, className }: Props) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0",
        fade === "start" ? "pattern-fade-start" : "pattern-fade-end",
        className,
      )}
    >
      <div
        className={cn("brand-pattern-tile", tone === "light" ? "bg-navy opacity-[0.07]" : "bg-white opacity-[0.08]")}
        style={{ ["--pattern-size" as string]: `${size}px` }}
      />
    </div>
  );
}
