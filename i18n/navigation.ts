import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Locale-aware replacements for next/link and next/navigation. Every internal
// link in the app goes through these so /es stays /es across navigation.
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
