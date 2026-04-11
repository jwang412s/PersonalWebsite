import { projects } from "@/content/data";

export const metadata = { title: "Projects — Jerry Wang" };

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="section-header text-3xl font-extrabold tracking-tight text-white">
          Projects
        </h1>
        <p className="mt-4 text-slate-400">
          Things I&apos;ve built, shipped, and experimented with.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <div
            key={i}
            className={`glass-card flex flex-col rounded-2xl p-6 space-y-4 animate-fade-up delay-${i + 1}`}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10">
              <svg className="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
            </div>

            <h2 className="text-lg font-bold text-white">
              {project.title}
            </h2>
            <ul className="flex-1 list-disc list-outside ml-4 space-y-2 text-sm text-slate-400 leading-relaxed">
              {project.description.map((bullet, j) => (
                <li key={j}>{bullet}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span key={t} className="tag rounded-full px-3 py-1 text-xs font-medium">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4 text-sm pt-1">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  Live Demo
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  GitHub
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
