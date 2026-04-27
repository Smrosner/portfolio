import Link from "next/link";
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
            <Link
              href="/blog"
              className="hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
            >
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className={theme.colors.text.secondary}>{post.title}</span>
          </nav>
          <h1 className={theme.typography.h1}>{post.title}</h1>
          <p className={`${theme.colors.text.muted} text-sm mb-6`}>
            {post.publishDate} · {post.readTime} · {getBlogPostMetric(post)}
          </p>

          <p className={`${theme.typography.body} mb-6`}>{post.summary}</p>

          <div className="space-y-5">
            {post.content.map((paragraph) => (
              <p key={paragraph} className={theme.typography.body}>
                {paragraph}
              </p>
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
