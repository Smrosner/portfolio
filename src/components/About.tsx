import { JSX } from "react";

import { theme } from "@/styles/theme";

export default function About(): JSX.Element {
  return (
    <section className={theme.layout.section.lg}>
      <h2 className={theme.typography.h2}>About Me</h2>
      <div
        className={`${theme.components.card} ${theme.gradients.card} ${theme.layout.content}`}
      >
        <div className="space-y-6">
          <p className={theme.typography.body}>
            I'm a passionate frontend developer with a keen eye for design and
            user experience. I specialize in crafting beautiful, functional web
            applications that make a real difference in people's lives. With
            expertise in React, TypeScript, and modern web technologies, I
            transform complex problems into elegant solutions.
          </p>
          <p className={theme.typography.body}>
            When I'm not immersed in code, you'll find me exploring emerging
            technologies, contributing to open-source projects, or seeking
            inspiration in the great outdoors. I believe in continuous learning
            and pushing the boundaries of what's possible on the web.
          </p>
        </div>
        <div className={`${theme.layout.flexCenter} gap-4 pt-8`}>
          <a
            href="https://github.com/smrosner"
            target="_blank"
            rel="noopener noreferrer"
            className={`${theme.components.button} ${theme.effects.hover}`}
          >
            View GitHub
          </a>
          <a
            href="#contact"
            className={`${theme.components.button} ${theme.effects.hover} ${theme.colors.accent.blue}`}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
