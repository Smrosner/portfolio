import { type JSX } from "react";

import { theme } from "@/styles/theme";

const contactLinks = [
  {
    label: "Email",
    value: "shaymrosner@gmail.com",
    href: "mailto:shaymrosner@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/shayrosner",
    href: "https://linkedin.com/in/shayrosner",
  },
  {
    label: "GitHub",
    value: "github.com/smrosner",
    href: "https://github.com/smrosner",
  },
];

export default function Contact(): JSX.Element {
  return (
    <section>
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-300">
          Contact
        </p>
        <h2 className={theme.typography.h2}>Let&apos;s Connect</h2>
        <p className={theme.typography.body}>
          I&apos;m open to full-time software engineering roles and selective
          consulting work where product velocity, reliability, performance, and
          clear communication all matter.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {contactLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={`${theme.components.card} ${theme.gradients.card} ${theme.effects.hover} ${theme.effects.glow}`}
          >
            <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.12em] text-cyan-700 dark:text-cyan-300">
              {link.label}
            </span>
            <span className={`${theme.colors.text.primary} break-words`}>
              {link.value}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
