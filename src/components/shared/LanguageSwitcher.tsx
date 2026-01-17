"use client";

import { Select } from "antd";
import { usePathname, useRouter } from "next/navigation";

const locales = ["en", "bd"] as const;
type Locale = (typeof locales)[number];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  if (!pathname) return null;

  const segments = pathname.split("/").filter(Boolean);

  // Detect current locale from URL
  const currentLocale: Locale = locales.includes(segments[0] as Locale)
    ? (segments[0] as Locale)
    : "en";

  // Remove locale from path
  const restPath = locales.includes(segments[0] as Locale)
    ? `/${segments.slice(1).join("/")}`
    : pathname;

  const handleChange = (locale: Locale) => {
    const newPath = `/${locale}${restPath === "/" ? "" : restPath}`;
    router.push(newPath);
  };

  return (
    <Select
      value={currentLocale}
      onChange={handleChange}
      style={{ width: 120 }}
      options={[
        { value: "en", label: "English" },
        { value: "bd", label: "Bangla" },
      ]}
    />
  );
}
