import { type JSX } from "react";

import { theme } from "@/styles/theme";

interface AboutProps {
  showHeading?: boolean;
}

export default function About({ showHeading = true }: AboutProps): JSX.Element {
  return (
    <section>
      {showHeading && <h2 className={theme.typography.h2}>About</h2>}
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className={`${theme.components.card} ${theme.gradients.card}`}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-300">
            Engineering Profile
          </p>
          <h3 className={`${theme.typography.h3} !mb-4`}>
            Full-stack engineer who turns ambiguous product problems into
            reliable, production-ready systems.
          </h3>
          <p className={theme.typography.body}>
            I work across React, Next.js, TypeScript, Node.js, APIs, auth,
            payments, AI workflows, and C#/.NET backend systems, with a focus
            on turning ambiguous product needs into reliable implementation.
          </p>
          <div className="mt-6 grid gap-4">
            {[
              "Reduced frontend latency by 55% by removing request waterfalls and tightening load paths.",
              "Hardened money-sensitive Node.js and MongoDB flows ahead of a 10k+ user launch.",
              "Shipped 50+ full-stack features across education, AI chat, dashboards, and payment workflows.",
              "Improved confidence through accessibility remediation, security-minded boundaries, and test coverage up to 98%.",
            ].map((item) => (
              <div key={item} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-cyan-500"
                />
                <p className={theme.colors.text.secondary}>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <p className={theme.typography.body}>
            I&apos;m Shay Rosner, a full-stack software engineer who likes
            working close to the real problems, like slow pages, confusing
            flows, brittle APIs, accessibility gaps, payment edge cases,
            unclear requirements, and bugs that refuse to reproduce until
            they&apos;re in production.
          </p>
          <p className={theme.typography.body}>
            I build mostly with React, Next.js, TypeScript, Node.js, APIs,
            auth, payments, AI tools, and backend systems, with growing
            experience in C#/.NET. My work has included education platforms, AI
            chat products, dashboards, payment portals, link-preview tooling,
            and money-sensitive backend flows.
          </p>
          <p className={theme.typography.body}>
            I&apos;m detail-oriented in a practical way. I care about schema
            consistency, client/server boundaries, accessibility, testing,
            performance, security, and production diagnosis because those are
            the things that decide whether a product is actually reliable.
          </p>
          <p className={theme.typography.body}>
            I&apos;m also someone who helps push projects across the finish line.
            I can step into ambiguity, figure out what is blocking progress,
            make the work more concrete, and keep things moving without losing
            sight of the user or the business goal. I&apos;m not interested in
            perfect plans that never ship. I&apos;d rather make smart trade-offs,
            verify the important pieces, and get useful software into
            people&apos;s hands.
          </p>
          <p className={theme.typography.body}>
            Long-term maintainability matters to me just as much as launch. I
            like building systems that future developers can understand, debug,
            and extend. That means readable code, clear data flow, thoughtful
            boundaries, practical documentation, and enough testing or
            verification that the next change does not feel risky.
          </p>
          <p className={theme.typography.body}>
            Some of my best work happens in the messy middle of a project, when
            the technical path is unclear, and people need someone to turn
            complexity into a clear explanation, a reasonable plan, and a
            shippable next step.
          </p>
          <p className={theme.typography.body}>
            At the end of the day, I like building useful software with people
            who care about doing the work well.
          </p>
        </div>
      </div>
    </section>
  );
}
