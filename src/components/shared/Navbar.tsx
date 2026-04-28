"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type JSX } from "react";

import { useTheme } from "@/context/ThemeContext";
import { theme as themeStyles } from "@/styles/theme";

const navItems = [
  { href: "/", label: "Home", match: "/" },
  { href: "/projects", label: "Projects", match: "/projects" },
  { href: "/resume", label: "Resume", match: "/resume" },
  { href: "/blog", label: "Blog", match: "/blog" },
  { href: "/about", label: "About", match: "/about" },
];

function isActive(pathname: string, match: string): boolean {
  if (match === "/") {
    return pathname === "/";
  }

  if (match.startsWith("#")) {
    return false;
  }

  return pathname === match || pathname.startsWith(`${match}/`);
}

export default function Navbar(): JSX.Element {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 border-b border-zinc-200/70 backdrop-blur-md dark:border-cyan-900/40 ${themeStyles.effects.glass}`}
      aria-label="Primary navigation"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className={`text-2xl font-bold ${themeStyles.colors.text.primary}`}
          onClick={() => setIsOpen(false)}
        >
          SR
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const active = isActive(pathname, item.match);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-cyan-100 text-cyan-900 ring-1 ring-cyan-200 dark:bg-cyan-400/15 dark:text-cyan-100 dark:ring-cyan-400/30"
                    : `${themeStyles.colors.text.secondary} hover:bg-zinc-100 hover:text-cyan-800 dark:hover:bg-zinc-900 dark:hover:text-cyan-200`
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <button
            type="button"
            onClick={toggleTheme}
            className="ml-2 rounded-md border border-zinc-300 bg-white/80 px-3 py-2 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-100 dark:hover:bg-zinc-800"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-md border border-zinc-300 bg-white/80 px-3 py-2 text-sm font-medium text-zinc-800 dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-100"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-zinc-300 bg-white/80 text-zinc-800 dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-100"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
          >
            <span aria-hidden="true" className="grid gap-1">
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
            </span>
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-zinc-200 bg-zinc-50 px-6 py-4 dark:border-zinc-800 dark:bg-black md:hidden"
        >
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => {
              const active = isActive(pathname, item.match);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "bg-cyan-100 text-cyan-900 dark:bg-cyan-400/15 dark:text-cyan-100"
                      : `${themeStyles.colors.text.secondary} hover:bg-zinc-100 dark:hover:bg-zinc-900`
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
