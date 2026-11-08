"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  /** Public path, e.g. "/images/hero-stone.jpg". If the file is missing the stone placeholder shows. */
  src: string;
  /** TODO: replace with a real description of the photo. */
  alt: string;
  tone?: "light" | "warm" | "navy";
  /** Adds a subtle navy gradient (use where text sits on top of the photo). */
  overlay?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
  fit?: "cover" | "contain";
  children?: ReactNode;
};

/**
 * Every image slot in the site. Drop a file at `src` and it replaces the placeholder
 * automatically; no code change needed.
 */
export function ImageSlot({
  src,
  alt,
  tone = "light",
  overlay = false,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className,
  fit = "cover",
  children,
}: Props) {
  const [missing, setMissing] = useState(false);

  return (
    <div
      className={cn(
        "stone-ph relative overflow-hidden",
        tone === "warm" && "stone-ph-warm",
        tone === "navy" && "stone-ph-navy",
        className,
      )}
    >
      {!missing && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          unoptimized
          className={fit === "cover" ? "object-cover" : "object-contain"}
          ref={(el) => {
            // onError can fire before hydration: re-check on mount.
            if (el && el.complete && el.naturalWidth === 0) setMissing(true);
          }}
          onError={() => setMissing(true)}
        />
      )}
      {missing && <span className="sr-only">{alt}</span>}
      {overlay && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/75 via-navy/15 to-transparent"
        />
      )}
      {children}
    </div>
  );
}
