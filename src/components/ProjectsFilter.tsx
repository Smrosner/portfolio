"use client";

import { useMemo, useState, type JSX } from "react";

import { projectCategories, type Project, type ProjectCategory } from "../../data/projectsData";

import ProjectCard from "@/components/ProjectCard";
import Button from "@/components/ui/Button";

type ActiveCategory = "all" | ProjectCategory;

interface ProjectsFilterProps {
  projects: Project[];
}

export default function ProjectsFilter({
  projects,
}: ProjectsFilterProps): JSX.Element {
  const [activeCategory, setActiveCategory] =
    useState<ActiveCategory>("all");

  const visibleProjects = useMemo(() => {
    if (activeCategory === "all") {
      return projects;
    }

    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory, projects]);

  return (
    <section aria-label="Project case studies" className="space-y-8">
      <div className="flex flex-wrap gap-3" role="list" aria-label="Filter projects by category">
        {projectCategories.map((category) => {
          const isActive = activeCategory === category.id;

          return (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              variant="ghost"
              isActive={isActive}
              activeClassName="rounded-none bg-cyan-600 text-white ring-1 ring-cyan-500 dark:bg-cyan-400 dark:text-zinc-950"
              className={
                isActive
                  ? "rounded-none px-4 py-2"
                  : "rounded-none px-4 py-2 hover:bg-zinc-200 hover:text-cyan-900 dark:hover:bg-zinc-800 dark:hover:text-cyan-100"
              }
            >
              {category.label}
            </Button>
          );
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
