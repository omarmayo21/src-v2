"use client";

import { localePath, useI18n } from "@/lib/i18n";
import { BrandPattern } from "./BrandPattern";
import { ButtonLink } from "./Button";
import { FlowingVeins } from "./FlowingVeins";
import { Logo } from "./Logo";
import { Reveal } from "./Reveal";
import { Container } from "./Section";

export function NotFoundView() {
  const { dict, lang } = useI18n();
  const nf = dict.notFound;

  return (
    <section
      aria-labelledby="not-found-title"
      className="relative flex min-h-[70vh] items-center overflow-hidden bg-navy py-20 text-white sm:py-28"
    >
      <FlowingVeins tone="navy" />
      <BrandPattern tone="dark" fade="end" />
      <Container className="flex flex-col items-center text-center">
        <Reveal className="flex max-w-xl flex-col items-center">
          <Logo variant="symbol" tone="white" width={90} />
          <p className="display mt-6 text-6xl text-gold sm:text-7xl" dir="ltr">
            {nf.code}
          </p>
          <h1 id="not-found-title" className="display mt-4 text-3xl text-white sm:text-4xl lg:text-5xl">
            {nf.title}
          </h1>
          <span aria-hidden="true" className="mt-5 block h-0.5 w-[120px] bg-gold" />
          <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">{nf.description}</p>
          <div className="mt-10">
            <ButtonLink href={localePath(lang)} variant="gold">
              {nf.backHome}
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

