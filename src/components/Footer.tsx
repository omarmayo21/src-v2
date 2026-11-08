"use client";

import Link from "next/link";
import { localePath, useI18n } from "@/lib/i18n";
import { siteConfig } from "@/data/site-config";
import { BrandPattern } from "./BrandPattern";
import { Container } from "./Section";
import { Logo } from "./Logo";
import { socialIcons } from "./Icons";

export function Footer() {
  const { dict, lang } = useI18n();
  const f = dict.footer;
  const cfg = siteConfig.contact;

  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <BrandPattern tone="dark" fade="start" />
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_auto] lg:gap-16 lg:py-20">
        <div>
          <Link href={localePath(lang)} aria-label={dict.brand.company} className="inline-block">
            <Logo variant="primary" tone="white" width={200} />
          </Link>
          <span aria-hidden="true" className="mt-4 block h-0.5 w-[120px] bg-gold" />
          <p className="display mt-5 text-xl text-white">{dict.brand.line}</p>
        </div>

        <nav aria-label={f.quickLinks}>
          <h2 className="display text-lg text-gold">{f.quickLinks}</h2>
          <ul className="mt-5 space-y-3">
            {dict.nav.items.map((item) => (
              <li key={item.id}>
                <Link
                  href={localePath(lang, item.href)}
                  className="link-underline inline-block text-sm text-white/85 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {siteConfig.showStones && (
              <li>
                <Link
                  href={localePath(lang, "/stones")}
                  className="link-underline inline-block text-sm text-white/85 hover:text-white"
                >
                  {dict.stones.title}
                </Link>
              </li>
            )}
          </ul>
        </nav>

        <div>
          <h2 className="display text-lg text-gold">{f.contact}</h2>
          <ul className="mt-5 space-y-3 text-sm text-white/85">
            <li>{cfg.address[lang]}</li>
            <li>
              <a
                href={`tel:${cfg.phone.replace(/[^\d+]/g, "")}`}
                dir="ltr"
                className="link-underline inline-block hover:text-white"
              >
                {cfg.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${cfg.email}`} className="link-underline inline-block hover:text-white">
                {cfg.email}
              </a>
            </li>
            <li>
              <a href={siteConfig.url} dir="ltr" className="link-underline inline-block hover:text-white">
                {siteConfig.website}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="display text-lg text-gold">{f.follow}</h2>
          <ul className="mt-5 flex gap-3">
            {siteConfig.social.map((s) => {
              const Icon = socialIcons[s.id];
              return (
                <li key={s.id}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-gold hover:bg-gold hover:text-navy"
                  >
                    <Icon width={20} height={20} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>

      <div className="relative border-t border-gold/40">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-sm text-white/80 sm:flex-row">
          <p dir="ltr">{f.copyright}</p>
          <p>{f.rights}</p>
        </Container>
      </div>
    </footer>
  );
}
