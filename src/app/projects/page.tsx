import type { Metadata } from "next";
import { type JSX } from "react";

import { projects } from "../../../data/projectsData";

import ProjectsFilter from "@/components/ProjectsFilter";
import { theme } from "@/styles/theme";

export const metadata: Metadata = {
  title: "Projects | Shay Rosner",
  description:
    "Selected software engineering case studies from Shay Rosner across full-stack delivery, performance, AI, payments, and education tooling.",
};

export default function ProjectsPage(): JSX.Element {
  return (
    <main className={`min-h-screen ${theme.gradients.primary}`}>
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8 md:py-32">
        <div className="mb-12 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-300">
            Selected Work
          </p>
          <h1 className={theme.typography.h1}>Project Case Studies</h1>
          <p className={`${theme.typography.body} max-w-3xl`}>
            Resume-backed examples of how I turn ambiguous product and system
            problems into reliable shipped software.
          </p>
        </div>

        <ProjectsFilter projects={projects} />
      </div>
    </main>
  );
}
