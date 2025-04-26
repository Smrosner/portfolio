"use client";
import { MouseEvent, useState, type JSX } from "react";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Resume from "@/components/Resume";
import { theme } from "@/styles/theme";

export default function Home(): JSX.Element {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const handleNavClick =
    (section: string) =>
    (e: MouseEvent): void => {
      e.preventDefault();
      setActiveSection(section);
    };

  return (
    <div className={`min-h-screen ${theme.gradients.primary}`}>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#" className="text-2xl font-bold tracking-tight">
            SR
          </a>
          <div className="flex items-center gap-8">
            <a
              href="#about"
              onClick={handleNavClick("about")}
              className={`hover:text-blue-400 transition-colors ${
                activeSection === "about" ? "text-blue-400" : ""
              }`}
            >
              About
            </a>
            <a
              href="#projects"
              onClick={handleNavClick("projects")}
              className={`hover:text-blue-400 transition-colors ${
                activeSection === "projects" ? "text-blue-400" : ""
              }`}
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={handleNavClick("contact")}
              className={`hover:text-blue-400 transition-colors ${
                activeSection === "contact" ? "text-blue-400" : ""
              }`}
            >
              Contact
            </a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              {darkMode ? "🌙" : "☀️"}
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl py-32">
          <section className="mb-20">
            <h1 className="text-6xl font-bold tracking-tight mb-8">
              I&apos;M SHAY ROSNER
            </h1>
            <p className="text-xl leading-relaxed max-w-3xl">
              Your friendly neighborhood frontend developer, UX architect, and
              JavaScript engineer. I spend my days (and often nights) painting
              the Internet canvas with{" "}
              <a
                href="#projects"
                onClick={handleNavClick("projects")}
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                projects
              </a>{" "}
              and lines of code, turning zeroes and ones into immersive,
              interactive experiences.
            </p>
          </section>

          {activeSection === "about" && (
            <section id="about" className="mb-32">
              <About />
            </section>
          )}

          {activeSection === "contact" && (
            <section id="contact" className="mb-32">
              <Contact />
            </section>
          )}

          {activeSection === "resume" && (
            <section id="resume" className="mb-32">
              <Resume />
            </section>
          )}

          <footer className="py-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/10">
              <div className="flex gap-8">
                <a
                  href="https://twitter.com/yourusername"
                  className="text-white/75 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
                <a
                  href="https://linkedin.com/in/shayrosner"
                  className="text-white/75 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/smrosner"
                  className="text-white/75 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
