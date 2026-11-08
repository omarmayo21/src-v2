import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

/** Arrow that points to the reading direction (mirrors automatically in RTL). */
export const ArrowIcon = (p: IconProps) => (
  <Base {...p} className={`rtl:-scale-x-100 ${p.className ?? ""}`}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Base>
);
export const ChevronIcon = ({ flip, ...p }: IconProps & { flip?: boolean }) => (
  <Base {...p} className={`${flip ? "-scale-x-100 rtl:scale-x-100" : "rtl:-scale-x-100"} ${p.className ?? ""}`}>
    <path d="m9 6 6 6-6 6" />
  </Base>
);
export const MenuIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Base>
);
export const CloseIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="m6 6 12 12M18 6 6 18" />
  </Base>
);

/* Values / Why / Factory icons (simple line icons) */
export const QualityIcon = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="9" r="5" />
    <path d="m9 13.5-1.5 7.5 4.5-2.5 4.5 2.5-1.5-7.5M10 9l1.5 1.5L14 8" />
  </Base>
);
export const PrecisionIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 17 17 3l4 4L7 21zM7 13l2 2M10 10l2 2M13 7l2 2" />
  </Base>
);
export const CommitmentIcon = (p: IconProps) => (
  <Base {...p}>
    <rect x="5" y="4" width="14" height="17" rx="2" />
    <path d="M9 4V3h6v1M9 13l2 2 4-4" />
  </Base>
);
export const TrustIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3 4.5 6v5.5c0 4.5 3.2 8 7.5 9.5 4.3-1.5 7.5-5 7.5-9.5V6zM9 12l2 2 4-4" />
  </Base>
);
export const HistoryIcon = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Base>
);
export const MachineIcon = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" />
  </Base>
);
export const CarvingIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="m14 4 6 6-9 9H5v-6zM12 6l6 6" />
  </Base>
);
export const TargetIcon = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1" />
  </Base>
);
export const CheckIcon = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="m8 12 3 3 5-5" />
  </Base>
);
export const LayersIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="m12 3 9 5-9 5-9-5zM3 12.5l9 5 9-5M3 17l9 5 9-5" />
  </Base>
);

export const iconMap = {
  quality: QualityIcon,
  precision: PrecisionIcon,
  commitment: CommitmentIcon,
  trust: TrustIcon,
  history: HistoryIcon,
  machine: MachineIcon,
  carving: CarvingIcon,
  cutting: MachineIcon,
  target: TargetIcon,
  check: CheckIcon,
  layers: LayersIcon,
} as const;

export type IconName = keyof typeof iconMap;

export function NamedIcon({ name, ...p }: IconProps & { name: string }) {
  const Cmp = iconMap[name as IconName] ?? CheckIcon;
  return <Cmp {...p} />;
}

/* Contact + social icons */
export const PinIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </Base>
);
export const PhoneIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </Base>
);
export const MailIcon = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </Base>
);
export const WhatsappIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 21l1.6-4.7A8.5 8.5 0 1 1 8 19.5z" />
    <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .8a3.5 3.5 0 0 1-1.8-1.8l.8-1-1-2z" />
  </Base>
);
export const ClockIcon = HistoryIcon;
export const GlobeIcon = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
  </Base>
);
export const InstagramIcon = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <path d="M17.5 6.5v.01" />
  </Base>
);
export const LinkedinIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 9v11M6 5.5v.01M10 20v-11M10 13a4 4 0 0 1 8 0v7" />
  </Base>
);
export const XIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="m4 4 16 16M20 4 4 20" />
  </Base>
);
export const FacebookIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z" />
  </Base>
);

export const socialIcons = {
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
  x: XIcon,
  facebook: FacebookIcon,
} as const;
