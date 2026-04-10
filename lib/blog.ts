import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDir = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  content: string;
}

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(blogDir, filename), "utf-8");
    const { data, content } = matter(raw);

    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? "",
      summary: data.summary ?? "",
      content,
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const filepath = path.join(blogDir, `${slug}.mdx`);
  if (!fs.existsSync(filepath)) return undefined;

  const raw = fs.readFileSync(filepath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    summary: data.summary ?? "",
    content,
  };
}
