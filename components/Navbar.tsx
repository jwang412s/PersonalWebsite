"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects" },
  { href: "/certifications", label: "Certifications" },
  { href: "/research", label: "Research" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-6">
          {links.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-indigo-600"
                    : "text-slate-400 hover:text-slate-700"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        <a
          href="/resume.pdf"
          download
          className="rounded-lg bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 ring-1 ring-indigo-200 transition-all hover:bg-indigo-100 hover:ring-indigo-300"
        >
          Resume ↓
        </a>
      </div>
    </nav>
  );
}
