"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/data/site-config";
import { Button } from "./Button";
import { ClockIcon, GlobeIcon, MailIcon, PhoneIcon, PinIcon, WhatsappIcon, socialIcons } from "./Icons";
import { ImageSlot } from "./ImageSlot";
import { FlowingVeins } from "./FlowingVeins";
import { BrandPattern } from "./BrandPattern";
import { Reveal } from "./Reveal";
import { Container, Section } from "./Section";
import { SectionTitle } from "./SectionTitle";

type Values = { name: string; phone: string; email: string; subject: string; message: string };
type Errors = Partial<Record<"name" | "phone" | "email" | "message", string>>;

const empty: Values = { name: "", phone: "", email: "", subject: "", message: "" };

export function Contact() {
  const { dict, lang } = useI18n();
  const c = dict.contact;
  const f = c.form;
  const cfg = siteConfig.contact;

  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const validate = (v: Values): Errors => {
    const e: Errors = {};
    if (v.name.trim().length < 2) e.name = f.errors.name;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = f.errors.email;
    if (v.phone.trim() && !/^[+\d][\d\s()-]{6,19}$/.test(v.phone.trim())) e.phone = f.errors.phone;
    if (v.message.trim().length < 10) e.message = f.errors.message;
    return e;
  };

  const set = (key: keyof Values) => (ev: { target: { value: string } }) => {
    setValues((prev) => ({ ...prev, [key]: ev.target.value }));
    if (key in errors) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  async function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      // Move focus to the first invalid field
      const first = (["name", "email", "phone", "message"] as const).find((k) => found[k]);
      if (first) document.getElementById(`contact-${first}`)?.focus();
      return;
    }
    setStatus("sending");

    try {
      if (siteConfig.contactEndpoint) {
        const res = await fetch(siteConfig.contactEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        if (!res.ok) {
          throw new Error("Submission failed");
        }
      } else {
        // Front-end simulation delay if no external endpoint is configured
        await new Promise((resolve) => setTimeout(resolve, 600));
      }

      setStatus("success");
      setValues(empty);
    } catch {
      setStatus("idle");
      // Keep entered values so user doesn't lose text
      setErrors((prev) => ({
        ...prev,
        message: lang === "ar" ? "تعذر إرسال الرسالة، يرجى المحاولة مرة أخرى." : "Could not send message. Please try again.",
      }));
    }
  }

  const phoneHref = `tel:${cfg.phone.replace(/[^\d+]/g, "")}`;

  const infoRows: Array<{ icon: ReactNode; label: string; value: ReactNode }> = [
    {
      icon: <PinIcon />,
      label: c.info.address,
      value: <span>{cfg.address[lang]}</span>,
    },
    {
      icon: <PhoneIcon />,
      label: c.info.phone,
      value: (
        <a href={phoneHref} dir="ltr" className="link-underline inline-block">
          {cfg.phone}
        </a>
      ),
    },
    {
      icon: <MailIcon />,
      label: c.info.email,
      value: (
        <a href={`mailto:${cfg.email}`} className="link-underline inline-block break-all">
          {cfg.email}
        </a>
      ),
    },
    {
      icon: <WhatsappIcon />,
      label: c.info.whatsapp,
      value: (
        <a href={cfg.whatsappLink} target="_blank" rel="noopener noreferrer" dir="ltr" className="link-underline inline-block">
          {cfg.whatsapp}
        </a>
      ),
    },
    { icon: <ClockIcon />, label: c.info.hours, value: <span>{cfg.hours[lang]}</span> },
    {
      icon: <GlobeIcon />,
      label: c.info.website,
      value: (
        <a href={siteConfig.url} dir="ltr" className="link-underline inline-block">
          {siteConfig.website}
        </a>
      ),
    },
  ];

  return (
    <Section id="contact" tone="cream" labelledBy="contact-title">
      <FlowingVeins tone="white" />
      <Container>
        <Reveal>
          <SectionTitle id="contact-title" title={c.title} />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Contact info */}
          <Reveal className="h-full">
            <div className="relative h-full overflow-hidden rounded-[24px] bg-navy p-8 text-white shadow-lift sm:p-10">
              <BrandPattern tone="dark" fade="end" />
              <div className="relative">
                <h3 className="display text-2xl text-white">{c.info.title}</h3>
                <span aria-hidden="true" className="mt-4 block h-0.5 w-12 bg-gold" />
                <dl className="mt-8 space-y-6">
                  {infoRows.map((row) => (
                    <div key={row.label} className="flex items-start gap-4">
                      <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/60 text-gold">
                        {row.icon}
                      </span>
                      <div>
                        <dt className="text-sm text-white/75">{row.label}</dt>
                        <dd className="mt-0.5 text-base font-medium text-white">{row.value}</dd>
                      </div>
                    </div>
                  ))}
                </dl>

                <div className="mt-10">
                  <p className="text-sm text-white/75">{c.info.social}</p>
                  <ul className="mt-3 flex gap-3">
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
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.08} className="h-full">
            <div className="h-full rounded-[24px] border border-stone-gray bg-white p-8 shadow-card sm:p-10">
              <h3 className="display text-2xl text-navy">{f.title}</h3>
              <span aria-hidden="true" className="mt-4 block h-0.5 w-12 bg-gold" />

              {status === "success" ? (
                <div role="status" className="mt-8 rounded-[20px] border border-gold bg-cream p-8 text-center">
                  <span className="display text-5xl text-gold" aria-hidden="true">
                    ✓
                  </span>
                  <p className="display mt-3 text-2xl text-navy">{f.success.title}</p>
                  <p className="mt-2 text-navy/80">{f.success.text}</p>
                  <Button type="button" variant="outline" arrow={false} className="mt-6" onClick={() => setStatus("idle")}>
                    {f.success.again}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="mt-8 grid gap-5 sm:grid-cols-2">
                  <Field id="contact-name" label={f.name} required reqLabel={f.required} error={errors.name}>
                    <input
                      id="contact-name"
                      name="name"
                      autoComplete="name"
                      value={values.name}
                      onChange={set("name")}
                      className={inputClass(!!errors.name)}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "contact-name-error" : undefined}
                    />
                  </Field>
                  <Field id="contact-phone" label={f.phone} reqLabel={f.optional} error={errors.phone}>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      dir="ltr"
                      autoComplete="tel"
                      value={values.phone}
                      onChange={set("phone")}
                      className={cn(inputClass(!!errors.phone), "text-start")}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                    />
                  </Field>
                  <Field id="contact-email" label={f.email} required reqLabel={f.required} error={errors.email}>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      dir="ltr"
                      autoComplete="email"
                      value={values.email}
                      onChange={set("email")}
                      className={cn(inputClass(!!errors.email), "text-start")}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "contact-email-error" : undefined}
                    />
                  </Field>
                  <Field id="contact-subject" label={f.subject} reqLabel={f.optional}>
                    <input
                      id="contact-subject"
                      name="subject"
                      value={values.subject}
                      onChange={set("subject")}
                      className={inputClass(false)}
                    />
                  </Field>
                  <div className="sm:col-span-2">
                    <Field id="contact-message" label={f.message} required reqLabel={f.required} error={errors.message}>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        value={values.message}
                        onChange={set("message")}
                        className={inputClass(!!errors.message)}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "contact-message-error" : undefined}
                      />
                    </Field>
                  </div>
                  <div className="sm:col-span-2">
                    <Button type="submit" variant="primary" disabled={status === "sending"} className="disabled:opacity-70">
                      {status === "sending" ? f.sending : f.submit}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>

        {/* Map placeholder */}
        <Reveal className="mt-8">
          <div className="overflow-hidden rounded-[24px] border border-stone-gray bg-white shadow-card">
            {siteConfig.mapEmbedUrl ? (
              <iframe
                title={c.map.title}
                src={siteConfig.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[360px] w-full border-0"
              />
            ) : (
              <ImageSlot src="/images/map.jpg" alt={c.map.title} tone="light" className="h-[300px] w-full sm:h-[360px]">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-navy">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-navy text-gold">
                    <PinIcon width={28} height={28} />
                  </span>
                  <p className="display text-xl">{c.map.title}</p>
                  <p className="text-sm font-medium text-navy/80">{c.map.placeholder}</p>
                </div>
              </ImageSlot>
            )}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

const inputClass = (invalid: boolean) =>
  cn(
    "w-full rounded-2xl border bg-white px-4 py-3 text-base text-navy transition-colors placeholder:text-navy/50",
    "focus:border-gold",
    invalid ? "border-navy ring-1 ring-navy" : "border-navy/25 hover:border-navy/50",
  );

function Field({
  id,
  label,
  required,
  reqLabel,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  reqLabel: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 flex items-baseline justify-between gap-2 text-sm font-semibold text-navy">
        <span>{label}</span>
        <span className="text-xs font-normal text-navy/70">{required ? `${reqLabel} *` : reqLabel}</span>
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-2 text-sm font-medium text-navy">
          <span aria-hidden="true" className="me-1.5 inline-block h-2 w-2 rounded-full bg-gold" />
          {error}
        </p>
      )}
    </div>
  );
}
