"use client";

import { cn } from "@/lib/utils";
import { getLocaleFromPath } from "@/utils/getLocalFromPath";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavMenu = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);

  const withLocale = (path: string) => `/${locale}${path}`;

  return (
    <div className={cn("flex gap-6 font-normal ps-3", className)}>
      <Link href={withLocale("/about")}>
        <div
          className={cn(
            "cursor-pointer hover:underline text-md text-white hover:text-tomato transition duration-200",
            pathname === `/${locale}/about` && "text-tomato font-semibold",
          )}
        >
          About
        </div>
      </Link>

      <Link href={withLocale("/contact")}>
        <div
          className={cn(
            "cursor-pointer hover:underline text-md text-white hover:text-tomato transition duration-200",
            pathname === `/${locale}/contact` && "text-tomato font-semibold",
          )}
        >
          Contact
        </div>
      </Link>

      <Link href={withLocale("/login")}>
        <div
          className={cn(
            "cursor-pointer hover:underline text-md text-white hover:text-tomato transition duration-200",
            pathname === `/${locale}/login` && "text-tomato font-semibold",
          )}
        >
          Login
        </div>
      </Link>
    </div>
  );
};

export default NavMenu;
