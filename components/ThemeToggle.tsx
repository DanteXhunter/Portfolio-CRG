"use client";

import { useTheme } from "next-themes";
import { useMounted } from "@/lib/use-mounted";

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden>
      <path d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 0 1-1.88.13 8.4 8.4 0 0 1-5.91-2.82 8.5 8.5 0 0 1-.7-10.14c.62-.94.29-1.44.14-1.65-.15-.2-.55-.53-1.54-.13a10.16 10.16 0 0 0-6.16 10.6 10.24 10.24 0 0 0 7.82 8.68 9 9 0 0 0 2.17.27 10 10 0 0 0 5.51-1.66c.9-.6.8-1.1.65-1.37Z" />
      {/* cráteres */}
      <circle cx="9.5" cy="8" r="1.1" opacity="0.35" />
      <circle cx="8" cy="13.5" r="1.6" opacity="0.35" />
      <circle cx="13" cy="16.5" r="1" opacity="0.35" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      className="size-5"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const hasMounted = useMounted();

  if (!hasMounted) {
    return (
      <span className="block size-9 animate-pulse rounded-full border border-border bg-surface" />
    );
  }

  const isLight = resolvedTheme === "light";

  return (
    <button
      type="button"
      onClick={() => setTheme(isLight ? "dark" : "light")}
      aria-label={isLight ? "Activar tema oscuro" : "Activar tema claro"}
      className={`rounded-full border border-border bg-surface p-2 text-accent transition-transform duration-300 ${
        isLight ? "-rotate-180" : "rotate-0"
      }`}
    >
      {isLight ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
