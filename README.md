# SRFEC Stones & Granite: corporate website (multi-page)

Bilingual (Arabic RTL default + English LTR) multi-page corporate website built with Next.js (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

## Run & Build

```bash
npm install
npm run dev          # http://localhost:3000 (redirects "/" -> "/ar")
npm run lint
npm run typecheck
npm run build && npm run start
```

### Environment Variables (Vercel-ready)

Set `NEXT_PUBLIC_SITE_URL` in your deployment environment (defaults to `https://www.srfec.com` in `src/data/site-config.ts`):

```env
NEXT_PUBLIC_SITE_URL=https://www.srfec.com
NEXT_PUBLIC_CONTACT_ENDPOINT=/api/contact
```

Used for canonical URLs, `hreflang` alternates, Open Graph metadata, JSON-LD `Organization` schema, `sitemap.xml`, and `robots.txt`. See `.env.example` for full reference.

---

## Deploy to Vercel

This repository is pre-configured for standard zero-configuration deployment on Vercel:

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "feat: complete production-ready SRFEC website"
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git branch -M main
   git push -u origin main
   ```
2. **Import into Vercel:**
   * Go to [vercel.com/new](https://vercel.com/new).
   * Import your GitHub repository.
   * Vercel will automatically detect **Next.js** as the framework with standard build presets (`npm run build`).
3. **Configure Environment Variables:**
   * Under **Environment Variables**, add:
     * `NEXT_PUBLIC_SITE_URL`: `https://www.srfec.com` (or your staging/production domain).
     * `NEXT_PUBLIC_CONTACT_ENDPOINT`: `/api/contact` (optional, for form submissions).
4. **Deploy:**
   * Click **Deploy**. Vercel will run the production build and generate all static pages.
5. **Connect Custom Domain:**
   * Under Project Settings → **Domains**, add `srfec.com` and `www.srfec.com`.
   * Configure the provided DNS records (A and CNAME) in your registrar. Vercel automatically provisions SSL certificates.

---

## Site Map & Where to Edit Each Page's Content

All routes live under `src/app/[lang]/...` where `[lang]` is `"ar"` (default, RTL) or `"en"` (LTR).
Visiting `"/"` redirects to `"/ar"` via `src/middleware.ts`.
Switching languages with `<LanguageSwitcher />` keeps the user on the **same page** (e.g. `/ar/about` ↔ `/en/about`, `/ar/projects/project-01` ↔ `/en/projects/project-01`).

| Route | Page | Route File | Components Used | Where to Edit Copy / Data |
| :--- | :--- | :--- | :--- | :--- |
| `/[lang]` | **Home** (Summary) | `src/app/[lang]/page.tsx` | `Hero`, `StoryTeaser`, `WhyTeaser`, `FactoryTeaser`, `FeaturedProjectsTeaser`, `ClientsStripTeaser`, `CtaBand` | `hero`, `home.*`, `story.steps[0]`, `why.items[0..2]`, `factory.paragraphs[0]`, `ctaBand` in `src/content/ar.ts` & `en.ts`; featured projects in `src/data/projects.ts`; clients in `src/data/clients.ts` |
| `/[lang]/about` | **About SRFEC** | `src/app/[lang]/about/page.tsx` | `PageBanner`, `AboutSubNav`, `Story`, `CeoMessage`, `VisionMission`, `Values`, `CtaBand` | `aboutPage`, `story`, `ceo`, `vision`, `mission`, `values` in `src/content/ar.ts` & `en.ts` |
| `/[lang]/factory` | **Our Factory** | `src/app/[lang]/factory/page.tsx` | `PageBanner`, `Factory`, `CtaBand` | `factory` (`heading`, `paragraphs`, `chips`, `capabilities`, `gallery`) in `src/content/ar.ts` & `en.ts` |
| `/[lang]/why-srfec` | **Why SRFEC** | `src/app/[lang]/why-srfec/page.tsx` | `PageBanner`, `WhySrfec`, `Stats`, `CtaBand` | `why` (`bannerTitle`, `title`, `intro`, `items`) and `stats` in `src/content/ar.ts` & `en.ts` |
| `/[lang]/projects` | **Projects Listing** | `src/app/[lang]/projects/page.tsx` | `PageBanner`, `Projects`, `CtaBand` | Section copy under `projects` in `src/content/ar.ts` & `en.ts`; project cards & categories in `src/data/projects.ts` |
| `/[lang]/projects/[slug]` | **Project Detail** | `src/app/[lang]/projects/[slug]/page.tsx` | `PageBanner`, `ProjectDetail`, `CtaBand` | Labels under `projects.detail` in `src/content/ar.ts` & `en.ts`; per-project `name`, `type`, `location`, `year`, `stoneType`, `description`, `gallery` in `src/data/projects.ts` |
| `/[lang]/clients` | **Our Clients** | `src/app/[lang]/clients/page.tsx` | `PageBanner`, `Clients`, `CtaBand` | Intro & labels under `clients` in `src/content/ar.ts` & `en.ts`; client logo list (6–20 logos) in `src/data/clients.ts` |
| `/[lang]/contact` | **Contact Us** | `src/app/[lang]/contact/page.tsx` | `PageBanner`, `Contact` | Labels & validation messages under `contact` in `src/content/ar.ts` & `en.ts`; address, phone, email, WhatsApp, working hours, socials, `mapEmbedUrl`, `contactEndpoint` in `src/data/site-config.ts` |
| `/[lang]/stones` | **Our Stones** *(optional)* | `src/app/[lang]/stones/page.tsx` | `PageBanner`, `Stones`, `CtaBand` | `stones` in `src/content/ar.ts` & `en.ts`. Toggle footer link & sitemap inclusion via `showStones` in `src/data/site-config.ts`, or delete `src/app/[lang]/stones/` |
| `/[lang]/not-found` | **Branded 404** | `src/app/[lang]/not-found.tsx` & `src/app/[lang]/not-found/page.tsx` | `NotFoundView` | `notFound` in `src/content/ar.ts` & `en.ts` |
| `/sitemap.xml` | **Sitemap** | `src/app/sitemap.ts` | — | Automatically lists all locales and all project slugs from `src/data/projects.ts` |
| `/robots.txt` | **Robots** | `src/app/robots.ts` | — | References `${siteConfig.url}/sitemap.xml` |

### Shared Layout & Reusable Components

* **Header (`src/components/Header.tsx`):** Sticky top navigation (`Home`, `About`, `Factory`, `Why SRFEC`, `Projects`, `Clients`, `Contact`), active route indicator, `<LanguageSwitcher />` (preserves current route), `"Contact Us"` CTA button, and mobile hamburger drawer. Uses `next/link` everywhere.
* **Footer (`src/components/Footer.tsx`):** Navy footer with white primary logo, brand tagline, quick links to all pages, contact details, social links, copyright, and faded brand pattern.
* **PageBanner (`src/components/PageBanner.tsx`):** Reusable `<PageBanner title breadcrumb />` for inner pages with navy background, white serif heading, gold thin underline, breadcrumb trail (`Home / Page`), and faded brand pattern.
* **CtaBand (`src/components/CtaBand.tsx`):** Reusable navy CTA band with gold button and fading brand pattern at the bottom of pages.
* **PageTransition (`src/components/PageTransition.tsx`):** Scrolls to the top on route change and runs a subtle Framer Motion page transition (respecting `prefers-reduced-motion`).

---

## Official Brand Assets & Logo Files

All official vector logo assets have been extracted from the brand guidelines (`SRFEC BRICKS BRANDBOOK.pdf`) into `public/brand/`:

| Variant | Colour (`#192D4C` + `#C9A96A`) | Mono (`#BFC0C1`) | White (`#FFFFFF`) |
| :--- | :--- | :--- | :--- |
| Primary (stack) | `srfec-logo-primary.svg` | `srfec-logo-primary-mono.svg` | `srfec-logo-primary-white.svg` |
| Horizontal | `srfec-logo-horizontal.svg` | `srfec-logo-horizontal-mono.svg` | `srfec-logo-horizontal-white.svg` |
| Symbol | `srfec-symbol.svg` | `srfec-symbol-mono.svg` | `srfec-symbol-white.svg` |
| Monogram | `srfec-monogram.svg` | `srfec-monogram-mono.svg` | `srfec-monogram-white.svg` |

* **Brand Pattern:** `public/brand/pattern.svg`, `pattern-light.svg`, and `pattern-dark.svg` are seamless tiles generated from the official symbol.
* **Flowing Veins:** `public/brand/flowing-veins.svg` is the vector decorative organic vein shape extracted from the brand book cover.
* **Icons & Social Share:** `public/favicon.ico` (multi-resolution), `public/brand/icon.png` (512×512), `public/brand/apple-icon.png` (180×180), and `public/brand/og-image.png` (1200×630).

---

## Images, Placeholders & Photographic Prompts

All image slots are organized into subfolders under `/public/images/`. A full asset record is maintained in [`public/images/manifest.json`](public/images/manifest.json), and photography generation prompts are documented in [`public/images/IMAGE-PROMPTS.md`](public/images/IMAGE-PROMPTS.md):

| Category | Active Path / Placeholder | Notes |
| :--- | :--- | :--- |
| Hero | `public/images/hero/placeholder-hero-architectural-stone.webp` | 1600×1000 architectural limestone/granite showcase |
| Factory Mosaic | `public/images/factory/placeholder-factory-*.webp` | 4 high-res slots: CNC cutting, carving, polishing, inspection |
| Projects | `public/images/projects/placeholder-project-01.webp` .. `09.webp` | 9 projects with gallery views; marked `isPlaceholder: true` in `projects.ts` |
| Stones | `public/images/stones/placeholder-stone-*.webp` | Marble, granite, travertine, onyx, and limestone |
| CEO Portrait | `public/images/ceo/placeholder-ceo-portrait.webp` | 800×1000 placeholder portrait |
| Client Logos | `public/images/clients/placeholder-client-01.svg` .. `10.svg` | 320×120 SVGs with dashed frames |
| Brand Mockups | `public/images/misc/brand-applications-*.webp` | Extracted from Brand Book Pages 12–14 (reference only) |
| Slide Texture | `public/images/misc/company-profile-slide-texture.webp` | Extracted from Company Profile Pages 3–9 |

---

## Brand Rules Implemented

* **Colours:** Granite Navy `#192D4C` (dominant), Soft Champagne Gold `#C9A96A` (accent only), cream `#F5F0E6`, white `#FFFFFF`, and light stone gray `#E9EAEE`. **No black anywhere**; all shadows are navy-tinted.
* **Typography:** Playfair Display + Poppins (Latin) and Noto Naskh Arabic + Cairo (Arabic) loaded via `next/font/google`.
* **Bilingual & Directionality:** Server-rendered `<html lang="ar" dir="rtl">` and `<html lang="en" dir="ltr">` per route, logical CSS properties (`ms-`, `ps-`, `start-`, `end-`), per-page canonical URLs, and `hreflang` alternates.
