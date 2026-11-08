import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { ArrowIcon } from "./Icons";

export type ButtonVariant = "primary" | "gold" | "outline" | "outline-light";

const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card active:translate-y-0";

const variants: Record<ButtonVariant, string> = {
  /** navy bg + white text (on white/cream sections) */
  primary: "bg-navy text-white hover:bg-navy/90",
  /** gold bg + navy text (on navy sections) */
  gold: "bg-gold text-navy hover:bg-gold/90",
  outline: "border border-navy text-navy hover:bg-navy hover:text-white",
  "outline-light": "border border-white/60 text-white hover:bg-white hover:text-navy",
};

export const buttonClass = (variant: ButtonVariant, className?: string) => cn(base, variants[variant], className);

type LinkProps = {
  href: string;
  variant?: ButtonVariant;
  arrow?: boolean;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
};

export function ButtonLink({ href, variant = "primary", arrow = true, className, onClick, children }: LinkProps) {
  return (
    <Link href={href} onClick={onClick} className={buttonClass(variant, className)}>
      {children}
      {arrow && (
        <ArrowIcon
          width={18}
          height={18}
          className="transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
        />
      )}
    </Link>
  );
}

type BtnProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant; arrow?: boolean };

export function Button({ variant = "primary", arrow = true, className, children, ...rest }: BtnProps) {
  return (
    <button className={buttonClass(variant, className)} {...rest}>
      {children}
      {arrow && <ArrowIcon width={18} height={18} />}
    </button>
  );
}
