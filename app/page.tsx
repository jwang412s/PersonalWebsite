export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Jerry Wang
          </span>
        </h1>
        <p className="text-lg leading-relaxed text-slate-500">
          Recent Cybersecurity graduate with a passion for hardening people's digital security. Part time drone enthusiast. 
        </p>
      </section>

      {/* Quick links */}
      <section className="grid gap-4 sm:grid-cols-2">
        {[
          {
            title: "Work History",
            desc: "Where I've worked and what I've built.",
            href: "/work",
          },
          {
            title: "Projects",
            desc: "Side projects and open-source contributions.",
            href: "/projects",
          },
          {
            title: "Certifications",
            desc: "Verified industry certifications and credentials.",
            href: "/certifications",
          },
          {
            title: "Research",
            desc: "Papers, publications, and research projects.",
            href: "/research",
          },
          {
            title: "Blog",
            desc: "Thoughts, tutorials, and notes.",
            href: "/blog",
          },
        ].map(({ title, desc, href }) => (
          <a key={href} href={href} className="card group rounded-xl p-5">
            <h2 className="font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">
              {title} &rarr;
            </h2>
            <p className="mt-1 text-sm text-slate-400">{desc}</p>
          </a>
        ))}
      </section>

      {/* Contact */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-800">Get in Touch</h2>
        <p className="text-slate-500">
          Feel free to reach out at{" "}
          <a
            href="mailto:jyw33@sfu.ca"
            className="text-indigo-500 hover:text-indigo-700 transition-colors"
          >
            jyw33@sfu.ca
          </a>{" "}
          or find me on{" "}
          <a
            href="https://github.com/jwang412s"
            className="text-indigo-500 hover:text-indigo-700 transition-colors"
          >
            GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://www.linkedin.com/in/jerry--wang"
            className="text-indigo-500 hover:text-indigo-700 transition-colors"
          >
            LinkedIn
          </a>
          .
        </p>
      </section>
    </div>
  );
}
