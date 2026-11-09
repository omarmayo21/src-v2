import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isValidLang, locales } from "@/lib/locale";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip internal Next.js paths, API routes, and static files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/brand") ||
    pathname.startsWith("/images") ||
    pathname === "/sitemap.xml" ||
    pathname === "/robots.txt" ||
    pathname === "/favicon.ico" ||
    /\.[^/]+$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  // 1. Root redirect: "/" -> "/ar" (or detect Accept-Language)
  if (pathname === "/") {
    const acceptLang = request.headers.get("accept-language") || "";
    // If English is explicitly preferred and Arabic is not, redirect to /en, otherwise default to Arabic (/ar)
    const prefersEn = acceptLang.startsWith("en") || (acceptLang.includes("en") && !acceptLang.includes("ar"));
    const targetLocale = prefersEn ? "en" : defaultLocale;
    return NextResponse.redirect(new URL(`/${targetLocale}`, request.url), 307);
  }

  // 2. Check if the path already starts with a supported locale (/ar or /en)
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];

  if (isValidLang(firstSegment)) {
    return NextResponse.next();
  }

  // 3. If an inner route is requested without locale prefix (e.g. /about, /factory), redirect to /ar/...
  const knownInnerRoutes = ["about", "factory", "why-srfec", "projects", "clients", "contact", "stones"];
  if (knownInnerRoutes.includes(firstSegment)) {
    return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url), 307);
  }

  // Allow unrecognized paths through so the branded 404 page handles them
  return NextResponse.next();
}

// Backwards compatibility export
export const middleware = proxy;
export default proxy;

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|api|brand|images|favicon\\.ico|sitemap\\.xml|robots\\.txt|.*\\.[\\w]+$).*)",
  ],
};
