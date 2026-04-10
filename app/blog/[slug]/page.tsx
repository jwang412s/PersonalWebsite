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
  return { title: post.title };
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
      <div className="space-y-2">
        <Link
          href="/blog"
          className="text-sm text-slate-400 hover:text-slate-600 transition-colors"
        >
          &larr; Back to Blog
        </Link>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          {post.title}
        </h1>
        <p className="text-sm text-slate-400">{post.date}</p>
      </div>

      <div className="prose prose-slate max-w-none">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
