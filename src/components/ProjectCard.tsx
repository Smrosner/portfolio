import Image from "next/image";
import Link from "next/link";
import { type JSX } from "react";

import type { Project } from "../../data/projectsData";

import { metricPillClass } from "@/styles/pills";
import { theme } from "@/styles/theme";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps): JSX.Element {
  return (
    <article
      className={`${theme.components.card} ${theme.gradients.card} ${theme.effects.hover} overflow-hidden !p-0 transition-all duration-100 ease-in-out hover:shadow-md hover:shadow-black/20 dark:hover:shadow-black/20`}
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <Image
          src={project.image}
          alt=""
          width={1200}
          height={760}
          className="aspect-[16/10] w-full object-cover border-b border-zinc-200 dark:border-zinc-800"
          loading="lazy"
        />
        <div className="p-6 md:p-7">
          <div className="mb-4 flex flex-wrap gap-2">
            {project.metrics.slice(0, 2).map((metric) => (
              <span
                key={`${project.slug}-${metric.label}`}
                className={metricPillClass}
              >
                {metric.value} {metric.label}
              </span>
            ))}
          </div>
          <h3 className={`${theme.typography.h3} !mb-2`}>{project.title}</h3>
          <p className={`${theme.colors.text.muted} mb-4 text-sm`}>
            {project.subtitle}
          </p>
          <p className={`${theme.colors.text.secondary} mb-5 leading-relaxed`}>
            {project.summary}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.stack.slice(0, 5).map((tech) => (
              <span
                key={`${project.slug}-${tech}`}
                className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs text-zinc-700 ring-1 ring-zinc-200 dark:bg-zinc-950/70 dark:text-zinc-300 dark:ring-zinc-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}
