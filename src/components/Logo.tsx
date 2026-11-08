"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/cn";

export type LogoVariant = "primary" | "horizontal" | "symbol" | "monogram";
export type LogoTone = "color" | "mono" | "white";

/**
 * Logo files expected in /public/brand/ (provided by the brand team, never redrawn here):
 *   color : srfec-logo-primary.svg, srfec-logo-horizontal.svg, srfec-symbol.svg, srfec-monogram.svg
 *   mono  : same names with the "-mono" suffix  (e.g. srfec-logo-primary-mono.svg)
 *   white : same names with the "-white" suffix (e.g. srfec-logo-primary-white.svg)
 * Adjust the file names here if the delivered files differ.
 */
const BASE: Record<LogoVariant, string> = {
  primary: "srfec-logo-primary",
  horizontal: "srfec-logo-horizontal",
  symbol: "srfec-symbol",
  monogram: "srfec-monogram",
};
const SUFFIX: Record<LogoTone, string> = { color: "", mono: "-mono", white: "-white" };

export function logoSrc(variant: LogoVariant, tone: LogoTone) {
  return `/brand/${BASE[variant]}${SUFFIX[tone]}.svg`;
}

/**
 * Approximate width of the symbol relative to the full logo width, used only to
 * compute the clear space X (= 1/6 of the symbol width) around the logo.
 */
const SYMBOL_RATIO: Record<LogoVariant, number> = { primary: 0.5, horizontal: 0.28, symbol: 1, monogram: 0.2 };

/** Minimum logo width: 70px (about 25mm). */
const MIN_WIDTH = 70;

type Props = {
  variant?: LogoVariant;
  tone?: LogoTone;
  /** Rendered width in px (never below 70). Height follows the artwork's own proportions. */
  width?: number;
  /** Keep the brand clear space (X = 1/6 symbol width) around the logo. */
  clearSpace?: boolean;
  className?: string;
};

export function Logo({ variant = "horizontal", tone = "color", width = 180, clearSpace = true, className }: Props) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const w = Math.max(width, MIN_WIDTH);
  const x = clearSpace ? Math.round((w * SYMBOL_RATIO[variant]) / 6) : 0;
  const src = logoSrc(variant, tone);

  // If the image already failed before hydration, onError would be missed: check on mount.
  const imgRef = useRef<HTMLImageElement | null>(null);
  const setRef = (el: HTMLImageElement | null) => {
    imgRef.current = el;
    if (el && el.complete) {
      if (el.naturalWidth === 0) setFailed(true);
      else setLoaded(true);
    }
  };

  return (
    <span
      className={cn("inline-flex shrink-0 items-center justify-center", className)}
      style={{ padding: x, minWidth: MIN_WIDTH }}
    >
      {failed ? (
        <Placeholder variant={variant} tone={tone} width={w} />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element -- brand SVGs are served as-is
        <img
          ref={setRef}
          src={src}
          alt="SRFEC Stones & Granite"
          width={w}
          style={{ width: w, height: "auto", opacity: loaded ? 1 : 0, transition: "opacity .3s" }}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
        />
      )}
    </span>
  );
}

/** Temporary stand-in shown until the official logo files are added to /public/brand. */
function Placeholder({ variant, tone, width }: { variant: LogoVariant; tone: LogoTone; width: number }) {
  const onDark = tone === "white";
  const wordColor = onDark ? "text-white" : "text-navy";
  const border = onDark ? "border-white/40" : "border-navy/30";
  const scale = width / 180;

  const frame = (
    <span
      className={cn("inline-block shrink-0 border-2", border)}
      style={{ width: 44 * scale, height: 44 * scale }}
      aria-hidden="true"
    />
  );
  const word = (
    <span className={cn("display font-extrabold leading-none", wordColor)} style={{ fontSize: 26 * scale }}>
      SRFEC
    </span>
  );
  const tag = (
    <span className="font-sans font-medium leading-none text-gold" style={{ fontSize: 11 * scale }}>
      Stones &amp; Granite
    </span>
  );

  if (variant === "symbol") return <span role="img" aria-label="SRFEC symbol (placeholder)">{frame}</span>;
  if (variant === "monogram")
    return (
      <span className="flex flex-col items-center gap-1" role="img" aria-label="SRFEC Stones & Granite (placeholder)" dir="ltr">
        {word}
        {tag}
      </span>
    );
  if (variant === "primary")
    return (
      <span className="flex flex-col items-center gap-2" role="img" aria-label="SRFEC Stones & Granite (placeholder)" dir="ltr">
        {frame}
        {word}
        {tag}
      </span>
    );
  return (
    <span className="flex items-center gap-3" role="img" aria-label="SRFEC Stones & Granite (placeholder)" dir="ltr">
      {frame}
      <span className="flex flex-col gap-1.5">
        {word}
        {tag}
      </span>
    </span>
  );
}
