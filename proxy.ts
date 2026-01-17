/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";

const locales = ["en", "bd"];

// Get the preferred locale, from lang query param or Accept-Language header, fallback to 'en-US'
function getLocale(request: Request): string {
  const url = new URL(request.url);

  // 1. Check lang query parameter
  const langParam = url.searchParams.get("lang");
  if (langParam && locales.includes(langParam)) {
    return langParam;
  }

  // 2. Parse Accept-Language header
  const acceptLanguage = request.headers.get("accept-language");
  if (acceptLanguage) {
    const accepted = acceptLanguage
      .split(",")
      .map((lang) => {
        const [locale, q] = lang.trim().split(";q=");
        return { locale, quality: q ? parseFloat(q) : 1 };
      })
      .sort((a, b) => b.quality - a.quality);

    for (const lang of accepted) {
      // Direct match
      if (locales.includes(lang.locale)) {
        return lang.locale;
      }
      // Match language only, e.g. 'nl' from 'nl-NL'
      const langOnly = lang.locale.split("-")[0];
      if (locales.includes(langOnly)) {
        return langOnly;
      }
    }
  }

  // 3. Default fallback
  return "en";
}

export function proxy(request: any) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    "/((?!_next).*)",
    // '/'
  ],
};
