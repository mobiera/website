"use client";

import { usePathname as useNextPathname } from "next/navigation";
import { routing } from "./routing";
import { SITES } from "@/app/lib/entity";

function strip(path: string, segments: readonly string[]): string {
  const first = path.split("/")[1];
  return first && segments.includes(first) ? path.slice(first.length + 1) || "/" : path;
}

/**
 * The pathname as the visitor sees it, without the locale prefix. Pages are
 * prerendered under /<site>/<locale>/..., an internal path the proxy rewrites
 * to; this removes both segments so server and browser render the same value.
 */
export function usePathname(): string {
  return strip(strip(useNextPathname() ?? "/", SITES), routing.locales);
}
