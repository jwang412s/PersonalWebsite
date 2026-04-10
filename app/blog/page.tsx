import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata = { title: "Blog" };

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">Blog</h1>

      {posts.length === 0 ? (
        <p className="text-slate-400">No posts yet. Check back soon!</p>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card block rounded-xl p-6 group"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-lg font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">
                  {post.title}
                </h2>
                <span className="text-sm text-slate-400">{post.date}</span>
              </div>
              <p className="mt-2 text-sm text-slate-500">{post.summary}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
