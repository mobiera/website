import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Locale-aware replacements for next/link and next/navigation. Every internal
// link in the app goes through these so /es stays /es across navigation.
// usePathname lives in ./use-pathname: it also strips the site segment.
export const { Link, redirect, useRouter, getPathname } = createNavigation(routing);
