import { projects } from "@/content/data";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Projects
      </h1>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <div
            key={i}
            className="card flex flex-col rounded-xl p-6 space-y-3"
          >
            <h2 className="text-lg font-semibold text-slate-800">
              {project.title}
            </h2>
            <p className="flex-1 text-sm text-slate-500">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span key={t} className="tag rounded-full px-3 py-0.5 text-xs font-medium">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4 text-sm">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 hover:text-indigo-700 transition-colors"
                >
                  Live Demo ↗
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 hover:text-indigo-700 transition-colors"
                >
                  GitHub ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
