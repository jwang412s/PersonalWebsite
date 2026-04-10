import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not Found" };
  return { title: `${post.title} — Jerry Wang` };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="space-y-8">
      <div className="space-y-3">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-indigo-400 transition-colors"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Blog
        </Link>
        <h1 className="text-3xl font-extrabold tracking-tight text-white">
          {post.title}
        </h1>
        <span className="inline-block rounded-full bg-white/[0.06] border border-white/[0.08] px-3 py-1 text-xs font-medium text-slate-400">
          {post.date}
        </span>
      </div>

      <div className="glass-card rounded-2xl p-8 sm:p-10">
        <div className="prose prose-invert max-w-none prose-headings:font-bold prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:text-indigo-300 prose-code:text-indigo-300 prose-pre:bg-black/30 prose-pre:border prose-pre:border-white/[0.06]">
          <MDXRemote source={post.content} />
        </div>
      </div>
    </article>
  );
}
