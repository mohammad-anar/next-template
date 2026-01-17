const locales = ["en", "bd"] as const;
type Locale = (typeof locales)[number];

export function getLocaleFromPath(pathname: string): Locale {
  const segment = pathname.split("/")[1];
  return locales.includes(segment as Locale) ? (segment as Locale) : "en";
}
