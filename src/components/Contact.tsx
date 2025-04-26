import { JSX } from "react";

import { theme } from "@/styles/theme";

export default function Contact(): JSX.Element {
  return (
    <section className={theme.layout.section.lg}>
      <h2 className={theme.typography.h2}>Get in Touch</h2>
      <div
        className={`${theme.components.card} ${theme.gradients.card} ${theme.layout.content}`}
      >
        <div className="space-y-6">
          <p className={theme.typography.body}>
            I'm always excited to connect with fellow developers, potential
            collaborators, and anyone interested in creating amazing web
            experiences. Whether you have a project in mind, want to discuss
            technology, or just want to say hello, I'd love to hear from you.
          </p>
          <div className={`${theme.layout.grid} grid-cols-1 md:grid-cols-2`}>
            <a
              href="mailto:shaymrosner@gmail.com"
              className={`${theme.components.card} ${theme.effects.hover} ${theme.effects.glow} ${theme.layout.flexCenter} gap-3`}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>shaymrosner@gmail.com</span>
            </a>
            <a
              href="https://linkedin.com/in/shayrosner"
              target="_blank"
              rel="noopener noreferrer"
              className={`${theme.components.card} ${theme.effects.hover} ${theme.effects.glow} ${theme.layout.flexCenter} gap-3`}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
