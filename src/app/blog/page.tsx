import type { Metadata } from "next";
import { type JSX } from "react";

import { backendLearningNotes, featuredBlogPosts } from "@/app/blog/content";
import BlogPostsSection from "@/components/BlogPostsSection";
import { theme } from "@/styles/theme";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical writing from Shay Rosner on frontend performance, AI document systems, secure integrations, money-safe logic, and backend learning notes.",
};

export default function BlogPage(): JSX.Element {
  return (
    <main className={`min-h-screen ${theme.gradients.primary}`}>
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8 md:py-32">
        <div className="mb-12 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-300">
            Technical Writing
          </p>
          <h1 className={theme.typography.h1}>Blog</h1>
          <p className={`${theme.typography.body} max-w-3xl`}>
            Polished engineering articles first, plus a public backend-learning
            archive that shows how I think through unfamiliar systems.
          </p>
        </div>

        <section className="mb-16">
          <div className="mb-8">
            <h2 className={theme.typography.h2}>Featured Articles</h2>
            <p className={theme.typography.body}>
              Practical posts built from real project work and implementation
              tradeoffs.
            </p>
          </div>
          <BlogPostsSection posts={featuredBlogPosts} />
        </section>

        <section>
          <div className="mb-8">
            <h2 className={theme.typography.h2}>Backend Learning Notes</h2>
            <p className={theme.typography.body}>
              Draft-style notes from a focused backend growth track. They are
              intentionally labeled as learning artifacts rather than polished
              articles.
            </p>
          </div>
          <BlogPostsSection posts={backendLearningNotes.slice(0, 12)} />
        </section>
      </div>
    </main>
  );
}
