"use client";
import Link from "next/link";
import { MouseEvent, useState, type JSX } from "react";

import { useTheme } from "@/context/ThemeContext";
import { theme as themeStyles } from "@/styles/theme";

export default function Navbar(): JSX.Element {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("about");

  const handleNavClick =
    (section: string) =>
    (e: MouseEvent): void => {
      e.preventDefault();
      setActiveSection(section);
    };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md ${themeStyles.effects.glass} border-b border-white/10`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link
          href="/"
          className={`text-2xl font-bold tracking-tight ${themeStyles.colors.text.primary}`}
        >
          SR
        </Link>
        <div className="flex items-center gap-8">
          <a
            href="#about"
            onClick={handleNavClick("about")}
            className={`${
              themeStyles.colors.text.secondary
            } hover:text-blue-400 transition-colors ${
              activeSection === "about" ? "text-blue-400" : ""
            }`}
          >
            About
          </a>
          <a
            href="#projects"
            onClick={handleNavClick("projects")}
            className={`${
              themeStyles.colors.text.secondary
            } hover:text-blue-400 transition-colors ${
              activeSection === "projects" ? "text-blue-400" : ""
            }`}
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={handleNavClick("contact")}
            className={`${
              themeStyles.colors.text.secondary
            } hover:text-blue-400 transition-colors ${
              activeSection === "contact" ? "text-blue-400" : ""
            }`}
          >
            Contact
          </a>
          <button
            onClick={toggleTheme}
            className={`w-10 h-10 rounded-full ${
              theme === "dark" ? "bg-white/5" : "bg-black/5"
            } flex items-center justify-center hover:bg-white/10 transition-colors`}
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </nav>
  );
}
