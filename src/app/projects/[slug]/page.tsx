import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { type JSX } from "react";

import { getProjectBySlug, projects } from "../../../../data/projectsData";

import { metricPillClass } from "@/styles/pills";
import { theme } from "@/styles/theme";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams(): { slug: string }[] {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project Not Found | Shay Rosner",
    };
  }

  return {
    title: `${project.title} | Shay Rosner`,
    description: project.summary,
  };
}

export default function ProjectPage({ params }: ProjectPageProps): JSX.Element {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className={`min-h-screen ${theme.gradients.primary}`}>
      <article className="mx-auto max-w-6xl px-6 py-28 lg:px-8 md:py-32">
        <nav
          aria-label="Breadcrumb"
          className={`${theme.colors.text.muted} mb-8 text-sm`}
        >
          <Link
            href="/projects"
            className="transition-colors hover:text-cyan-700 dark:hover:text-cyan-300"
          >
            Projects
          </Link>
          <span className="mx-2">/</span>
          <span className={theme.colors.text.secondary}>{project.title}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-300">
              {project.role} · {project.period}
            </p>
            <h1 className={theme.typography.h1}>{project.title}</h1>
            <p className={`${theme.typography.body} mb-8`}>
              {project.summary}
            </p>
            <Image
              src={project.image}
              alt=""
              width={1200}
              height={760}
              className="w-full rounded-lg border border-zinc-200 bg-white object-cover shadow-lg dark:border-zinc-800 dark:bg-zinc-950"
            />
          </div>

          <aside
            className={`${theme.components.card} ${theme.gradients.card} space-y-7`}
          >
            <div>
              <h2 className={`${theme.typography.h3} !mb-4`}>Impact</h2>
              <dl className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {project.metrics.map((metric) => (
                  <div key={metric.label}>
                    <dt className={`${theme.colors.text.muted} text-sm`}>
                      {metric.label}
                    </dt>
                    <dd className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
                      {metric.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h2 className={`${theme.typography.h3} !mb-4`}>Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className={metricPillClass}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <section
            className={`${theme.components.card} ${theme.gradients.card}`}
          >
            <h2 className={`${theme.typography.h2} !mb-5`}>Problem</h2>
            <p className={theme.typography.body}>{project.problem}</p>
          </section>

          <section
            className={`${theme.components.card} ${theme.gradients.card}`}
          >
            <h2 className={`${theme.typography.h2} !mb-5`}>Approach</h2>
            <ul className="space-y-3">
              {project.approach.map((item) => (
                <li
                  key={item}
                  className={`${theme.typography.body} flex gap-3`}
                >
                  <span
                    aria-hidden="true"
                    className="mt-3 h-2 w-2 shrink-0 rounded-full bg-cyan-500"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section
          className={`${theme.components.card} ${theme.gradients.card} mt-8`}
        >
          <h2 className={`${theme.typography.h2} !mb-5`}>Outcome</h2>
          <p className={theme.typography.body}>{project.outcome}</p>
        </section>
      </article>
    </main>
  );
}
