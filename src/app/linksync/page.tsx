import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { type JSX } from "react";

import { getProjectBySlug } from "../../../data/projectsData";

import { theme } from "@/styles/theme";

export const metadata: Metadata = {
  title: "LinkSync Case Study",
  description:
    "Static case study for LinkSync, a link-preview MVP reframed for a Next.js static-export portfolio.",
};

export default function LinkSyncPage(): JSX.Element {
  const project = getProjectBySlug("linksync-static-case-study");

  return (
    <main className={`min-h-screen ${theme.gradients.primary}`}>
      <div className="mx-auto max-w-6xl px-6 py-28 lg:px-8 md:py-32">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-300">
              Static Export Case Study
            </p>
            <h1 className={theme.typography.h1}>LinkSync</h1>
            <p className={`${theme.typography.body} mb-8`}>
              LinkSync started as a lightweight “paste a URL, generate a
              preview, save the card” MVP. For this portfolio, it is presented
              as a static case study because live metadata fetching requires a
              server route, URL validation, and SSRF guardrails.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/projects/linksync-static-case-study"
                className={`${theme.components.button} ${theme.effects.hover}`}
              >
                Read Case Study
              </Link>
              <Link href="/projects" className={theme.components.button}>
                Back to Projects
              </Link>
            </div>
          </div>

          {project && (
            <Image
              src={project.image}
              alt=""
              width={1200}
              height={760}
              className="w-full rounded-lg border border-zinc-200 bg-white shadow-lg dark:border-zinc-800 dark:bg-zinc-950"
            />
          )}
        </div>

        <section className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Why not live here?",
              detail:
                "A pure static export cannot run a Next.js route handler to fetch third-party HTML at request time.",
            },
            {
              title: "What the MVP proved",
              detail:
                "The flow clarified URL normalization, local persistence, loading/error states, and preview card UX.",
            },
            {
              title: "What production needs",
              detail:
                "Server-side fetching with protocol allowlists, private-IP blocking, timeouts, response-size limits, and caching.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className={`${theme.components.card} ${theme.gradients.card}`}
            >
              <h2 className={`${theme.typography.h3} !mb-3`}>{item.title}</h2>
              <p className={theme.colors.text.secondary}>{item.detail}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
