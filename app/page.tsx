import BlueberryTyping from "@/components/BlueberryTyping";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="flex items-center justify-between gap-8 pt-8">
        <div className="space-y-6 flex-1">
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight">
            <span className="text-white text-glow">Jerry</span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-300 bg-clip-text text-transparent">
              Wang
            </span>
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-400">
            Recent Cybersecurity graduate with a passion for hardening
            people&apos;s digital security. Part time drone enthusiast.
          </p>
          <div className="flex gap-3 pt-2">
          <a
            href="/resume.pdf"
            download
            className="rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:shadow-xl hover:shadow-indigo-500/40 hover:-translate-y-0.5"
          >
            Download Resume
          </a>
          <a
            href="mailto:jyw33@sfu.ca"
            className="rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-slate-300 backdrop-blur transition-all hover:border-indigo-500/30 hover:bg-white/[0.07] hover:-translate-y-0.5"
          >
            Get in Touch
          </a>
        </div>
        </div>

        {/* Blueberry mascot */}
        <div className="hidden sm:block flex-shrink-0">
          <BlueberryTyping />
        </div>
      </section>

      {/* Quick links */}
      <section className="space-y-8">
        <h2 className="section-header text-xl font-bold text-white">
          Explore
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 pt-2">
          {[
            {
              title: "Education",
              desc: "Academic background and achievements.",
              href: "/education",
              icon: "M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
            },
            {
              title: "Work History",
              desc: "Where I've worked and what I've built.",
              href: "/work",
              icon: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0",
            },
            {
              title: "Projects",
              desc: "Side projects and open-source contributions.",
              href: "/projects",
              icon: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
            },
            {
              title: "Certifications",
              desc: "Verified industry certifications and credentials.",
              href: "/certifications",
              icon: "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z",
            },
            {
              title: "Research",
              desc: "Papers, publications, and research projects.",
              href: "/research",
              icon: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25",
            },
            {
              title: "Blog",
              desc: "Thoughts, tutorials, and notes.",
              href: "/blog",
              icon: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10",
            },
          ].map(({ title, desc, href, icon }, i) => (
            <a
              key={href}
              href={href}
              className={`glass-card group rounded-2xl p-6 flex flex-col gap-3 animate-fade-up delay-${i + 1}`}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white group-hover:text-indigo-300 transition-colors">
                  {title}
                </h3>
                <p className="mt-1 text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="glass-card rounded-2xl p-8 space-y-4">
        <h2 className="section-header text-xl font-bold text-white">
          Get in Touch
        </h2>
        <p className="text-slate-400 pt-2">
          Feel free to reach out at{" "}
          <a href="mailto:jyw33@sfu.ca" className="font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
            jyw33@sfu.ca
          </a>{" "}
          or find me on{" "}
          <a href="https://github.com/jwang412s" target="_blank" rel="noopener noreferrer" className="font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
            GitHub
          </a>{" "}
          and{" "}
          <a href="https://www.linkedin.com/in/jerry--wang" target="_blank" rel="noopener noreferrer" className="font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
            LinkedIn
          </a>.
        </p>
      </section>
    </div>
  );
}
