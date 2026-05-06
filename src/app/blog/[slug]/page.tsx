import { notFound } from "next/navigation";
import { JSX } from "react";

import {
  blogPosts,
  getBlogPostBySlug,
  getBlogPostMetric,
} from "@/app/blog/content";
import { theme } from "@/styles/theme";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams(): { slug: string }[] {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: BlogPostPageProps): JSX.Element {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className={`min-h-screen ${theme.gradients.primary}`}>
      <main className="max-w-7xl mx-auto px-6 lg:px-8">
        <article className="max-w-5xl py-28 md:py-32">
          <nav
            aria-label="Breadcrumb"
            className={`${theme.colors.text.muted} text-sm mb-6`}
          >
            <a
              href="/blog"
              className="rounded-md transition-colors hover:text-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-500/80 dark:hover:text-cyan-300"
            >
              Blog
            </a>
            <span className="mx-2">/</span>
            <span className={theme.colors.text.secondary}>{post.title}</span>
          </nav>
          <h1 className={theme.typography.h1}>{post.title}</h1>
          <p className="text-sm mb-6 text-cyan-900 dark:text-cyan-200">
            {post.publishDate} · {post.readTime} · {getBlogPostMetric(post)}
          </p>

          <p className={`${theme.typography.body} mb-6`}>{post.summary}</p>

          <div className="space-y-5">
            {post.content.map((paragraph) => (
              paragraph.startsWith("## ") ? (
                <h2
                  key={paragraph}
                  className={`${theme.typography.h2} !mb-4 pt-5`}
                >
                  {paragraph.replace("## ", "")}
                </h2>
              ) : (
                <p key={paragraph} className={theme.typography.body}>
                  {paragraph}
                </p>
              )
            ))}
          </div>

          <p className={`${theme.colors.text.secondary} mt-8`}>
            <span className={`font-semibold ${theme.colors.text.primary}`}>
              Topics:
            </span>{" "}
            {post.topics.join(", ")}
          </p>
        </article>
      </main>
    </div>
  );
}
