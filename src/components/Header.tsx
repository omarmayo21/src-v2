"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { localePath, useI18n } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ButtonLink } from "./Button";
import { CloseIcon, MenuIcon } from "./Icons";

export function Header() {
  const { dict, lang, dir } = useI18n();
  const pathname = usePathname() || `/${lang}`;
  const [openForPath, setOpenForPath] = useState<string | null>(null);
  const open = openForPath === pathname;
  const setOpen = (next: boolean) => setOpenForPath(next ? pathname : null);
  const [scrolled, setScrolled] = useState(false);

  // Shadow once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Drawer: lock scroll + close on Escape
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenForPath(null);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isRouteActive = (itemHref: string) => {
    const fullHref = localePath(lang, itemHref);
    if (!itemHref || itemHref === "/") {
      return pathname === fullHref || pathname === `${fullHref}/`;
    }
    return pathname === fullHref || pathname.startsWith(`${fullHref}/`);
  };

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b bg-white/85 backdrop-blur-md transition-shadow duration-300",
          scrolled ? "border-stone-gray shadow-card" : "border-transparent",
        )}
      >
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
          <Link href={localePath(lang)} aria-label={dict.brand.company} className="shrink-0">
            <Logo variant="horizontal" width={170} clearSpace={false} />
          </Link>

          <nav aria-label={dict.a11y.mainNav} className="hidden xl:block">
            <ul className="flex items-center gap-7">
              {dict.nav.items.map((item) => {
                const fullHref = localePath(lang, item.href);
                const active = isRouteActive(item.href);
                return (
                  <li key={item.id}>
                    <Link
                      href={fullHref}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "link-underline whitespace-nowrap text-[14px] font-medium transition-colors",
                        active ? "text-navy font-semibold" : "text-navy/75 hover:text-navy",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <div className="hidden xl:block">
              <ButtonLink href={localePath(lang, "/contact")} className="!px-5 !py-2.5">
                {dict.nav.cta}
              </ButtonLink>
            </div>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/20 text-navy xl:hidden"
              aria-label={dict.a11y.openMenu}
              aria-expanded={open}
              aria-controls="mobile-drawer"
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <div
            id="mobile-drawer"
            className="fixed inset-0 z-[60] xl:hidden"
            role="dialog"
            aria-modal="true"
            aria-label={dict.a11y.mainNav}
          >
            <motion.div
              className="absolute inset-0 bg-navy/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="absolute inset-y-0 end-0 flex w-[min(88vw,380px)] flex-col bg-white p-6 shadow-lift"
              initial={{ x: dir === "rtl" ? "-100%" : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: dir === "rtl" ? "-100%" : "100%" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between">
                <Link href={localePath(lang)} onClick={() => setOpen(false)} aria-label={dict.brand.company}>
                  <Logo variant="horizontal" width={140} clearSpace={false} />
                </Link>
                <button
                  type="button"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/20 text-navy"
                  aria-label={dict.a11y.closeMenu}
                  onClick={() => setOpen(false)}
                  autoFocus
                >
                  <CloseIcon />
                </button>
              </div>
              <span aria-hidden="true" className="mt-5 block h-0.5 w-[120px] bg-gold" />
              <nav aria-label={dict.a11y.mainNav} className="mt-6 flex-1 overflow-y-auto">
                <ul className="flex flex-col">
                  {dict.nav.items.map((item) => {
                    const fullHref = localePath(lang, item.href);
                    const active = isRouteActive(item.href);
                    return (
                      <li key={item.id} className="border-b border-stone-gray">
                        <Link
                          href={fullHref}
                          onClick={() => setOpen(false)}
                          aria-current={active ? "page" : undefined}
                          className={cn(
                            "display flex items-center justify-between py-3.5 text-xl transition-colors",
                            active ? "text-navy font-bold" : "text-navy/80 hover:text-navy",
                          )}
                        >
                          <span>{item.label}</span>
                          {active && <span aria-hidden="true" className="h-2 w-2 rounded-full bg-gold" />}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
              <ButtonLink
                href={localePath(lang, "/contact")}
                onClick={() => setOpen(false)}
                className="mt-6 w-full"
                variant="primary"
              >
                {dict.nav.cta}
              </ButtonLink>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
