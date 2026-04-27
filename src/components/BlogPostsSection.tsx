import Link from "next/link";
import { JSX } from "react";

import { BlogPost, getBlogPostMetric } from "@/app/blog/content";
import { theme } from "@/styles/theme";

interface BlogPostsSectionProps {
  posts: BlogPost[];
}

export default function BlogPostsSection({
  posts,
}: BlogPostsSectionProps): JSX.Element {
  return (
    <section className="space-y-6">
      {posts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
          <article
            className={`${theme.components.card} ${theme.gradients.card} ${theme.effects.hover} !px-6 !py-6 md:!px-8 md:!py-8 transition-all duration-100 ease-in-out hover:shadow-md hover:shadow-black/20 dark:hover:shadow-black/20`}
          >
            <div className="flex flex-col gap-3 mb-4 md:flex-row md:items-center md:justify-between">
              <h2 className={`${theme.typography.h3} !mb-0`}>{post.title}</h2>
              <span className="text-sm font-medium px-3 py-1 rounded-full text-cyan-900 dark:text-cyan-100 bg-cyan-200/80 dark:bg-cyan-500/22 ring-1 ring-cyan-500/45 dark:ring-cyan-400/50">
                {getBlogPostMetric(post)}
              </span>
            </div>

            <p className={`${theme.colors.text.muted} text-sm mb-4`}>
              {post.publishDate} · {post.readTime}
              {post.status ? ` · ${post.status}` : ""}
            </p>

            <div className="space-y-3 mb-5">
              <p className={theme.colors.text.secondary}>
                <span className={`font-semibold ${theme.colors.text.primary}`}>
                  Summary:
                </span>{" "}
                {post.summary}
              </p>
              {post.status && (
                <p className={theme.colors.text.secondary}>
                  {post.templateFocus}
                </p>
              )}
            </div>

            <p className={theme.colors.text.secondary}>
              <span className={`font-semibold ${theme.colors.text.primary}`}>
                Topics:
              </span>{" "}
              {post.topics.join(", ")}
            </p>
          </article>
        </Link>
      ))}
    </section>
  );
}
