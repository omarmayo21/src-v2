import Link from "next/link";
import { Cairo, Noto_Naskh_Arabic, Playfair_Display, Poppins } from "next/font/google";
import { ar } from "@/content/ar";
import { en } from "@/content/en";
import { BrandPattern } from "@/components/BrandPattern";
import { FlowingVeins } from "@/components/FlowingVeins";
import { Logo } from "@/components/Logo";
import "./globals.css";

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

export default function RootNotFound() {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${playfair.variable} ${poppins.variable} ${naskh.variable} ${cairo.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-navy font-sans text-white antialiased">
        <main id="main" className="relative flex flex-1 items-center justify-center overflow-hidden py-16">
          <FlowingVeins tone="navy" />
          <BrandPattern tone="dark" fade="end" />

          <div className="relative mx-auto flex w-full max-w-xl flex-col items-center px-6 text-center">
            <Logo variant="symbol" tone="white" width={84} />

            <span className="display mt-6 text-7xl font-extrabold text-gold" dir="ltr">
              404
            </span>

            <h1 className="display mt-4 text-3xl font-bold text-white sm:text-4xl">
              {ar.notFound.title}
            </h1>
            <p className="mt-2 text-base text-gold/90 font-medium">
              {en.notFound.title}
            </p>

            <span aria-hidden="true" className="my-5 block h-0.5 w-24 bg-gold" />

            <p className="max-w-md text-base leading-relaxed text-white/80">
              {ar.notFound.description}
            </p>
            <p className="mt-1 max-w-md text-sm text-white/60">
              {en.notFound.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/ar"
                className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-3 text-sm font-bold text-navy transition-all duration-300 hover:bg-gold/90 shadow-card"
              >
                {ar.notFound.backHome}
              </Link>
              <Link
                href="/en"
                className="inline-flex items-center justify-center rounded-full border border-gold/60 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-gold hover:text-navy"
              >
                {en.notFound.backHome}
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
