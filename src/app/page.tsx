"use client";

import About from "@/components/About";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const handleNavClick = (section: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveSection(section);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 to-slate-900 text-white">
      <nav className="fixed top-0 right-0 p-8 flex items-center gap-8">
        <a
          href="#about"
          onClick={handleNavClick("about")}
          className={`hover:text-gray-300 transition-colors ${
            activeSection === "about" ? "text-blue-400" : ""
          }`}
        >
          About
        </a>
        <a
          href="#projects"
          onClick={handleNavClick("projects")}
          className={`hover:text-gray-300 transition-colors ${
            activeSection === "projects" ? "text-blue-400" : ""
          }`}
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={handleNavClick("contact")}
          className={`hover:text-gray-300 transition-colors ${
            activeSection === "contact" ? "text-blue-400" : ""
          }`}
        >
          Contact
        </a>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-6 h-6 bg-white rounded-full flex items-center justify-center"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>
      </nav>

      <main className="max-w-4xl mx-auto px-8 pt-32">
        <section className="mb-32">
          <h1 className="text-6xl font-bold mb-8 tracking-wider">
            I&apos;M SHAY ROSNER
          </h1>
          <p className="text-xl leading-relaxed opacity-90 max-w-3xl">
            Your friendly neighborhood frontend developer, UX architect, and
            JavaScript engineer. I spend my days (and often nights) painting the
            Internet canvas with{" "}
            <a
              href="#projects"
              onClick={handleNavClick("projects")}
              className="text-blue-400 hover:text-blue-300"
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

        <footer className="py-8">
          <div className="inline-block bg-white/10 rounded-full px-4 py-2">
            <div className="flex gap-4">
              <a
                href="https://twitter.com/yourusername"
                className="opacity-75 hover:opacity-100 transition-opacity"
              >
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://linkedin.com/in/shayrosner"
                className="opacity-75 hover:opacity-100 transition-opacity"
              >
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://github.com/smrosner"
                className="opacity-75 hover:opacity-100 transition-opacity"
              >
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
