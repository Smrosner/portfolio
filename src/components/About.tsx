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
            Full-stack engineer for performance-critical and
            security-sensitive products.
          </h3>
          <p className={theme.typography.body}>
            I work across React, Next.js, TypeScript, Node.js, APIs, data
            pipelines, auth, payments, and increasingly C#/.NET backend
            systems.
          </p>
        </div>

        <div className="space-y-6">
          <p className={theme.typography.body}>
            I&apos;m Shay Rosner, a senior full-stack software engineer known
            for improving reliability, reducing latency, and explaining
            tradeoffs clearly in ambiguous environments.
          </p>
          <p className={theme.typography.body}>
            My work has spanned education platforms, AI chat products, payment
            portals, link-preview tooling, and money-safe backend flows. I like
            systems where the details matter: schema consistency, client/server
            boundaries, accessibility, testing, security posture, and production
            diagnosis.
          </p>
          <p className={theme.typography.body}>
            I bring a product-minded engineering style: clarify the user
            outcome, identify the technical risk, make the smallest useful
            plan, and ship with enough verification that the next person can
            trust the change.
          </p>
        </div>
      </div>
    </section>
  );
}
