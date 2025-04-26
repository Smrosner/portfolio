"use client";
import { MouseEvent, useState, type JSX } from "react";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Resume from "@/components/Resume";
import { theme as themeStyles } from "@/styles/theme";

export default function Home(): JSX.Element {
  const [activeSection, setActiveSection] = useState("about");

  const handleNavClick =
    (section: string) =>
    (e: MouseEvent): void => {
      e.preventDefault();
      setActiveSection(section);
    };

  return (
    <div className={`min-h-screen ${themeStyles.gradients.primary}`}>
      <main className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl py-32">
          <section className="mb-20">
            <h1
              className={`text-6xl font-bold tracking-tight mb-8 ${themeStyles.colors.text.primary}`}
            >
              I&apos;M SHAY ROSNER
            </h1>
            <p
              className={`text-xl leading-relaxed max-w-3xl ${themeStyles.colors.text.secondary}`}
            >
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
            <section id="about" className="mb-20">
              <About />
            </section>
          )}

          {activeSection === "contact" && (
            <section id="contact" className="mb-20">
              <Contact />
            </section>
          )}

          {activeSection === "resume" && (
            <section id="resume" className="mb-20">
              <Resume />
            </section>
          )}

          <footer className="py-8">
            <div
              className={`${themeStyles.components.card} ${themeStyles.gradients.card}`}
            >
              <div className="flex gap-8">
                <a
                  href="https://twitter.com/yourusername"
                  className={`${themeStyles.colors.text.secondary} hover:text-white transition-colors`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
                <a
                  href="https://linkedin.com/in/shayrosner"
                  className={`${themeStyles.colors.text.secondary} hover:text-white transition-colors`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/smrosner"
                  className={`${themeStyles.colors.text.secondary} hover:text-white transition-colors`}
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
