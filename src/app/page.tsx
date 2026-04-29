import { type JSX } from "react";

import { getFeaturedProjects } from "../../data/projectsData";

import { featuredBlogPosts } from "@/app/blog/content";
import BlogPostsSection from "@/components/BlogPostsSection";
import Contact from "@/components/Contact";
import ProjectCard from "@/components/ProjectCard";
import Resume from "@/components/Resume";
import Button from "@/components/ui/Button";
import { theme } from "@/styles/theme";

const strengths = [
  {
    title: "Ambiguity to execution",
    detail:
      "I turn open-ended product and system problems into scoped plans, clear tradeoffs, and shipped software.",
  },
  {
    title: "Performance and reliability",
    detail:
      "I improve load paths, test confidence, data flow correctness, and operational visibility where user trust matters.",
  },
  {
    title: "Secure full-stack delivery",
    detail:
      "I build across React, Next.js, TypeScript, Node.js, APIs, auth, payments, and sensitive data workflows.",
  },
];

export default function Home(): JSX.Element {
  const featuredProjects = getFeaturedProjects();

  return (
    <main className={`min-h-screen ${theme.gradients.primary}`}>
      <section
        className="mx-auto max-w-7xl px-6 pb-8 pt-28
       lg:px-8"
      >
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-300">
              Senior Full-Stack Software Engineer
            </p>
            <h1 className={theme.typography.h1}>
              Shay Rosner builds reliable web products across frontend, backend,
              and product ambiguity.
            </h1>
            <p className={`${theme.typography.body} max-w-3xl`}>
              I specialize in React, Next.js, TypeScript, API design,
              performance, and security-sensitive systems. My best work happens
              where teams need someone who can clarify the problem, own the
              implementation, and explain the tradeoffs clearly.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                href="/projects"
                variant="primary"
                className={theme.effects.hover}
              >
                View Projects
              </Button>
              <Button
                href="/resume"
                variant="primary"
                className={`${theme.effects.hover} ${theme.colors.accent.blue}`}
              >
                View Resume
              </Button>
            </div>
          </div>

          <div
            className={`${theme.components.card} ${theme.gradients.card} grid gap-5`}
          >
            {strengths.map((item) => (
              <div
                key={item.title}
                className="border-b border-zinc-200 pb-5 last:border-0 last:pb-0 dark:border-zinc-800"
              >
                <h2 className="mb-2 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  {item.title}
                </h2>
                <p className={theme.colors.text.secondary}>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8" id="contact">
        <Contact />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-300">
              Selected Work
            </p>
            <h2 className={theme.typography.h2}>Featured Projects</h2>
          </div>
          <Button href="/projects" variant="ghost">
            See all projects
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-300">
              Technical Writing
            </p>
            <h2 className={theme.typography.h2}>Recent Articles</h2>
          </div>
          <Button href="/blog" variant="ghost">
            Visit the blog
          </Button>
        </div>
        <BlogPostsSection posts={featuredBlogPosts.slice(0, 3)} />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8" id="resume">
        <Resume compact />
      </section>
    </main>
  );
}
