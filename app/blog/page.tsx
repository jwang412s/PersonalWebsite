import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata = { title: "Blog — Jerry Wang" };

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="space-y-10">
      <div>
        <h1 className="section-header text-3xl font-extrabold tracking-tight text-white">
          Blog
        </h1>
        <p className="mt-4 text-slate-400">
          Thoughts, tutorials, and things I&apos;ve learned along the way.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-slate-500">No posts yet. Check back soon!</p>
      ) : (
        <div className="space-y-4">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`glass-card block rounded-2xl p-6 group animate-fade-up delay-${i + 1}`}
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {post.title}
                </h2>
                <span className="rounded-full bg-white/[0.06] border border-white/[0.08] px-3 py-1 text-xs font-medium text-slate-400 shrink-0">
                  {post.date}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                {post.summary}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
