"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/about", label: "Sobre mí" },
  { href: "/projects", label: "Proyectos" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="z-30 mb-10 border-b border-border px-6 py-6 text-sm md:px-16">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link href="/" aria-label="Inicio">
          <Image src="/logo.svg" width={35} height={35} alt="Logotipo" priority />
        </Link>

        <nav>
          <ul className="flex items-center gap-x-8">
            {links.map(({ href, label }) => {
              const isActive = pathname === href || pathname.startsWith(`${href}/`);

              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={isActive ? "page" : undefined}
                    className={`font-display text-base duration-300 hover:text-accent ${
                      isActive ? "text-accent" : "text-text"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
