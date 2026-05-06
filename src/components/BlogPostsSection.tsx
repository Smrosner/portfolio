import Link from "next/link";
import { JSX } from "react";

import { BlogPost, getBlogPostMetric } from "@/app/blog/content";
import { metricPillClass } from "@/styles/pills";
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
            <div className="flex flex-col gap-3 mb-4 lg:flex-row lg:items-start lg:justify-between">
              <h2 className={`${theme.typography.h3} !mb-0`}>{post.title}</h2>
              <span className={`${metricPillClass} w-fit max-w-full`}>
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
