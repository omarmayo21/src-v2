import type { Metadata, Viewport } from "next";
import { Cairo, Noto_Naskh_Arabic, Playfair_Display, Poppins } from "next/font/google";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTransition } from "@/components/PageTransition";
import { SkipLink } from "@/components/SkipLink";
import { siteConfig } from "@/data/site-config";
import { I18nProvider } from "@/lib/i18n";
import { getDict, getDir, isValidLang, locales } from "@/lib/locale";
import "../globals.css";

/* Typography: Playfair Display (display) + Poppins (body) for Latin;
   Noto Naskh Arabic (headings) + Cairo (body/UI) for Arabic.
   The font stacks in globals.css list Latin first, so Arabic glyphs fall through to the Arabic fonts. */
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
  display: "swap",
  variable: "--font-playfair",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-poppins",
});
const naskh = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-naskh",
});
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-cairo",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  themeColor: "#192D4C",
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = isValidLang(rawLang) ? rawLang : "ar";
  const dict = getDict(lang);

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: dict.meta.title,
      template: `%s | ${dict.brand.company}`,
    },
    description: dict.meta.description,
    applicationName: siteConfig.name,
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "32x32" },
        { url: "/brand/icon.png", sizes: "512x512", type: "image/png" },
        { url: "/brand/srfec-symbol.svg", type: "image/svg+xml" },
      ],
      apple: [{ url: "/brand/apple-icon.png", sizes: "180x180", type: "image/png" }],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  if (!isValidLang(rawLang)) {
    notFound();
  }

  const lang = rawLang;
  const dir = getDir(lang);

  return (
    <html
      lang={lang}
      dir={dir}
      suppressHydrationWarning
      className={`${playfair.variable} ${poppins.variable} ${naskh.variable} ${cairo.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-white font-sans text-navy antialiased">
        <I18nProvider lang={lang}>
          <SkipLink />
          <Header />
          <main id="main" className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}

